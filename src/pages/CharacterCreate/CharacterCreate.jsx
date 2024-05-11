const CharacterCreate = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements.CharacterName.value);
        console.log(event.target.elements.CharacterSpecies.value);
    }

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