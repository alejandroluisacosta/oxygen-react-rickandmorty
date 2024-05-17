import { useEffect, useState } from "react";
import CharacterComponent from "../../components/CharacterComponent/CharacterComponent";
import { useParams } from "react-router-dom";
import './EpisodeDetailsPage.css';
import { getEpisodeThunk } from "../../Features/EpisodesSlice/EpisodesThunk";
import { useSelector } from "react-redux";

const EpisodeDetailsPage = () => {

    const [ episodeDetails, setEpisodeDetails] = useState();
    const [ loading, setLoading ] = useState(false);
    const [characters, setCharacters ] = useState([]);
    // const EpisodeStatus = useSelector(state => state.)
    const { episodeId } = useParams();

    useEffect(() => {
        if (episodeDetails) {
        Promise.all(episodeDetails?.characters.map(character => 
            fetch(character).then(response => {
                if (response.ok) {
                    return response.json()
                }}) 
        )).then(characterData => {
            setCharacters(characterData);
        })}
    }, [episodeDetails])

    return (
        <div className="EpisodeDetailsPage">
            <h1>Episode #{episodeDetails?.id}</h1>
            <p>Title: {episodeDetails?.name}</p>
            <p>Air Date: {episodeDetails?.air_date}</p>
            <h2>Characters involved:</h2>
            <div className="EpisodeDetailsPage__CharactersGrid">
                {characters.map((character, index) =>
                    <CharacterComponent name={character.name} key={index} image={character.image} episode={character.episode} location={character.location.name} species={character.species}/>
                )}
            </div>
        </div>
    )
}

export default EpisodeDetailsPage;
