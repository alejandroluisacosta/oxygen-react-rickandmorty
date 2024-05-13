import { configureStore } from "@reduxjs/toolkit";
import { CharactersSlice } from "../Features/CharactersSlice/CharactersSlice";

export const store = configureStore({
    reducer: {
        Character: CharactersSlice.reducer
    }
})