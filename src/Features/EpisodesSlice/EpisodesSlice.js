import { createSlice } from "@reduxjs/toolkit";
import { getEpisodesThunk } from "./EpisodesThunk";

export const EpisodesSlice = createSlice({
    name: "Episodes",
    initialState: {
        status: "idle",
        data: [{name: ""}],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getEpisodesThunk.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(getEpisodesThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(getEpisodesThunk.rejected, (state, action) => {
            state.status = 'error';
            state.error = 'Error';
        })
    }
})


