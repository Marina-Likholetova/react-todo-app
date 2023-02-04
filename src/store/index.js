import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);