import { useEffect, useState } from "react";
import CharacterComponent from "../CharacterComponent/CharacterComponent";

const characterUrl = 'https://rickandmortyapi.com/api/character';

const CharacterListComponent = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
            if (response.ok)
                response.json().then((jsonData) => {
                    setCharacters(jsonData.results);
            })
        })
    }, []);
    console.log(characters);
    
    return (
        <div>
            {characters.map((character, index) => 
                <CharacterComponent name={character.name} key={index} image={character.image} episode={character.episode}/>
            )}
        </div>
    )
}
export default CharacterListComponent;