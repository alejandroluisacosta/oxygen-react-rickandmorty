import { createAsyncThunk } from "@reduxjs/toolkit";

export const EpisodeDetailsThunk = createAsyncThunk(("Episodes/getEpisode"), async (episodeId) => {
    try {
        const request = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        if (request.ok) {
            const Episode = await request.json();
            const CharactersIds = Episode.characters.map(url => url.split('/').pop());
            const AllCharactersIds = CharactersIds.join(',');
            const Characters = await fetch(`https://rickandmortyapi.com/api/character/${AllCharactersIds}`);
            const CharactersJson = await Characters.json();
            const EpisodeWithCharacters = {Episode: Episode, Characters: CharactersJson};
            console.log(EpisodeWithCharacters);
            return EpisodeWithCharacters;
        }
        return false;
    }
    catch (error) { 
        console.log(error);
    }
})

