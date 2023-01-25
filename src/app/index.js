import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore } from "redux-persist";
import rootReducer from "./reducers/index.js"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);