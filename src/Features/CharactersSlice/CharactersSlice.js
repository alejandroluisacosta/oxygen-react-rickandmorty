import { createSlice } from "@reduxjs/toolkit";

export const CharactersSlice = createSlice({
    name: "Characters",
    initialState: [],
    reducers: {
        addCharacter: (state, action) => {
            state.push(action.payload);
        }
    }
}) 

export const { addCharacter } = CharactersSlice.actions ;