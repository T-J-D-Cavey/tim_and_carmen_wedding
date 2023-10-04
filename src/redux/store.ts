import { configureStore } from "@reduxjs/toolkit";
import { main_reducer } from "./main_slice";

export const store = configureStore({
    reducer: {
        main: main_reducer,
    }
})