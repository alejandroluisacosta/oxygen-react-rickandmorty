import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCharacter, removeCharacter } from "../../Features/CharactersSlice/CharactersSlice";

const CharacterCreate = () => {
    
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addCharacter({name: event.target.elements.CharacterName.value, species: event.target.elements.CharacterSpecies.value}));
        console.log(event.target.elements.CharacterName.value);
        console.log(event.target.elements.CharacterSpecies.value);
    }


    useEffect(() => {
    }, [])

    return (
        <>
            <h1>Create your own character:</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="CharacterName">Character Name:</label>
                <input type="text" id="CharacterName" placeholder="Don Jorge"/>
                <label htmlFor="CharacterSpecies">Species:</label>
                <input type="text" id="CharacterSpecies" placeholder="Human"/>
                <button type="submit">Create</button>
            </form>
        </>
    )
}

export default CharacterCreate;