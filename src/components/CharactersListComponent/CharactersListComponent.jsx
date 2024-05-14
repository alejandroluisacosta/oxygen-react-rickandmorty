import { useEffect, useState } from "react";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { useSelector } from "react-redux";

const characterUrl = 'https://rickandmortyapi.com/api/character';

const CharacterListComponent = () => {

    const [characters, setCharacters] = useState([]);

    const localCharacters = useSelector(state => state.Characters)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
            if (response.ok)
                response.json().then((jsonData) => {
                    setCharacters(jsonData.results);
            })
        })
        console.log(localCharacters);

    }, []);
    return (
        <>
            <div>
                {localCharacters? localCharacters.map((character, index) => (
                    <CharacterComponent name={character.name} species={character.species} image={character.image}key={index} />
                )) : null}
            </div>
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