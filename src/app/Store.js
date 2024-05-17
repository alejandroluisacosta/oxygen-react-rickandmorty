import { configureStore } from "@reduxjs/toolkit";
import { CharactersSlice } from "../Features/CharactersSlice/CharactersSlice";
import { EpisodesSlice } from "../Features/EpisodesSlice/EpisodesSlice";
import { EpisodeDetailsSlice } from "../Features/EpisodeDetails/EpisodeDetailsSlice";

export const store = configureStore({
    reducer: {
        Characters: CharactersSlice.reducer,
        Episodes: EpisodesSlice.reducer,
        EpisodeDetails: EpisodeDetailsSlice.reducer
    }
})