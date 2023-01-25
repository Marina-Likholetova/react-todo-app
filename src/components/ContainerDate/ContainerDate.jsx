import React from "react";
import { useSelector } from "react-redux";


export default function DateContainer({ children }) {
    const date = useSelector((state) => state.date);

    return <>{children(date)}</>;
}
