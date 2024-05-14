import { createSlice } from "@reduxjs/toolkit";

export const CharactersSlice = createSlice({
    name: "Characters",
    initialState: [{name: "Don Jorge", species: "Humanoid", image:'/public/don-jorge.png'}],
    reducers: {
        addCharacter: (state, action) => {
            state.push(action.payload);
            console.log(state);
            console.log(action);
        },
        removeCharacter: (state, action) => {
            state.filter(character => character.id !== action.payload.id);
        }
    }
}) 

export const { addCharacter, removeCharacter } = CharactersSlice.actions;