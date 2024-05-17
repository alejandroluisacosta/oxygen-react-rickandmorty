import { createAsyncThunk } from "@reduxjs/toolkit";

export const EpisodeDetailsThunk = createAsyncThunk(("Episodes/getEpisode"), async (episodeId) => {
    try {
        const request = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        if (request.ok) {
            const Episode = await request.json();
            return Episode.results;
        }
        return false;
    }
    catch (error) { 
        console.log(error);
    }
})