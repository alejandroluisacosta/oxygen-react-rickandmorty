import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEpisodesThunk = createAsyncThunk(("Episodes/getEpisodes"), async () => {
    try {
        const request = await fetch('https://rickandmortyapi.com/api/episode');
        if (request.ok) {
            const Episodes = await request.json();
            return Episodes.results;
        }
        return false;
    }
    catch (error) { 
        console.log(error);
    }
})

export const getEpisodeThunk = createAsyncThunk(("Episodes/getEpisode"), async (episodeId) => {
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