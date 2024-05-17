import { createSlice } from "@reduxjs/toolkit";
import { EpisodeDetailsThunk } from "./EpisodeDetailsThunk";

export const EpisodeDetailsSlice = createSlice({
    name: 'EpisodeDetails',
    initialState: {
        status: 'idle',
        data: [{name: ""}],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(EpisodeDetailsThunk.pending, (state, action) => {
            state.status = 'pending';      
        })
        .addCase(EpisodeDetailsThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(EpisodeDetailsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = 'Error';
        })
    }
})