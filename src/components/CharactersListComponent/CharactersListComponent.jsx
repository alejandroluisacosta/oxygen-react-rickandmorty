import { useEffect, useState } from "react";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { useDispatch, useSelector } from "react-redux";
import { GetCharactersThunk } from "../../Features/CharactersSlice/CharactersThunk";

const characterUrl = 'https://rickandmortyapi.com/api/character';

const CharacterListComponent = () => {

    const [characters, setCharacters] = useState([]);

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);
    const Characters = useSelector(state => state.Characters.data);

    const CharactersStatus = useSelector(state => state.Characters.status);
    const CharactersError = useSelector(state => state.Characters.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (CharactersStatus === 'idle')
            dispatch(GetCharactersThunk());
        else if (CharactersStatus === 'pending')
            setLoading(true);
        else if (CharactersStatus === 'fulfilled') {
            setLoading(false);
            setData(Characters);
            console.log(data)
        }
        else
            alert("Error");
    }, [CharactersStatus, dispatch, Characters]);
    
    return <>
            {loading ? 
            <p>Loading...</p> 
            : 
            <div>
                <h1>Character List</h1>
                <div className="CharacterList">
                    {data.map((character, index) => 
                        <CharacterComponent name={character.name} key={index} image={character.image} episode={character.episode} location={character.location.name} species={character.species}/>
                    )}
                </div>
            </div>
            }
        </>
}
export default CharacterListComponent;