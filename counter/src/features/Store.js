import counterSlice from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store=configureStore(
    {
        reducer:counterSlice
    }
)
export default Store