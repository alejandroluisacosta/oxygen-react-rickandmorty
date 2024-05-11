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
        <>
            <h1>Character List</h1>
            <div className="CharacterList">
                {characters.map((character, index) => 
                    <CharacterComponent name={character.name} key={index} image={character.image} episode={character.episode} location={character.location.name} species={character.species}/>
                )}
            </div>
        </>
    )
}
export default CharacterListComponent;