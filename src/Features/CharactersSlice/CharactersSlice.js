import { createSlice } from "@reduxjs/toolkit";
import { GetCharactersThunk } from "./CharactersThunk";

export const CharactersSlice = createSlice({
    name: "Characters",
    initialState: {
        status: 'idle',
        data: [{name: "Don Jorge", species: "Humanoid", image:'/public/don-jorge.png'}],
        error: null
    },
    reducers: {
        addCharacter: (state, action) => {
            state.data.push(action.payload);
        },
        removeCharacter: (state, action) => {
            state.data.filter(character => character.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(GetCharactersThunk.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(GetCharactersThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(GetCharactersThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = "Error";
        })
    }
}) 


export const { addCharacter, removeCharacter } = CharactersSlice.actions;