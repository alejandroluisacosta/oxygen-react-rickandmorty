import { useEffect, useState } from "react";
import CharacterComponent from "../components/CharacterComponent/CharacterComponent";
import { useParams } from "react-router-dom";

const EpisodeDetailsPage = () => {

    const [ episodeDetails, setEpisodeDetails] = useState();
    const { episodeId } = useParams();
    const episodeUrl = `https://rickandmortyapi.com/api/episode/${episodeId}`;

    useEffect(() => {
        fetch(episodeUrl).then(response => {
            if (response.ok) {
                response.json().then(jsonData => {
                    setEpisodeDetails(jsonData);
                }).catch(error => console.log(error));
            }
        }).catch(error => console.log(error));
    }, [])

    return (
        <div className="EpisodeDetailsPage">
            <h1>Episode #{episodeDetails?.id}</h1>
            <p>Title: {episodeDetails?.name}</p>
            <p>Air Date: {episodeDetails?.air_date}</p>
            <h2>Characters involved:</h2>
            <div>
                {episodeDetails.characters.map((character, index) => {
                    <CharacterComponent name={character.name} key={index} image={character.image} episode={character.episode} location={character.location.name} species={character.species}/>
                })}
            </div>
        </div>
    )
}

export default EpisodeDetailsPage;