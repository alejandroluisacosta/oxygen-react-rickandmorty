import { configureStore } from "@reduxjs/toolkit";
import { CharactersSlice } from "../Features/CharactersSlice/CharactersSlice";
import { EpisodesSlice } from "../Features/EpisodesSlice/EpisodesSlice";

export const store = configureStore({
    reducer: {
        Characters: CharactersSlice.reducer,
        Episodes: EpisodesSlice.reducer
    }
})