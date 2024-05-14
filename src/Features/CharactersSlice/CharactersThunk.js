import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCharactersThunk = createAsyncThunk(Characters/getCharacters, async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character')
    if (request.ok) {
        const Characters = await request.json();
        return Characters.results;
    }
})
