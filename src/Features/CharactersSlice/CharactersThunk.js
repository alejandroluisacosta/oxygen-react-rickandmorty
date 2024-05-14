import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCharactersThunk = createAsyncThunk("Characters/getCharacters", async () => {
    try {
            const request = await fetch('https://rickandmortyapi.com/api/character')
        if (request.ok) {
            const Characters = await request.json();
            console.log(Characters);
            return Characters.results;
        }
        return false;
    }
    catch (error) {
        console.log(error);
    }    
})


