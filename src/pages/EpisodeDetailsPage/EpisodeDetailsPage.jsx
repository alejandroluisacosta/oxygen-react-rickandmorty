import { useEffect, useState } from "react";
import CharacterComponent from "../../components/CharacterComponent/CharacterComponent";
import { useParams } from "react-router-dom";
import './EpisodeDetailsPage.css';
import { useDispatch, useSelector } from "react-redux";
import { EpisodeDetailsThunk } from "../../Features/EpisodeDetails/EpisodeDetailsThunk";

const EpisodeDetailsPage = () => {

    const [ episodeDetails, setEpisodeDetails] = useState();
    const [ loading, setLoading ] = useState(false);
    const [characters, setCharacters ] = useState([]);
    const EpisodeDetails = useSelector(state => state.EpisodeDetails.data);
    const EpisodeDetailsStatus = useSelector(state => state.EpisodeDetails.status);
    const EpisodeDetailsError = useSelector(state => state.EpisodeDetails.error);
    const { episodeId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (EpisodeDetailsStatus === 'idle')
            dispatch(EpisodeDetailsThunk(episodeId));
        else if (EpisodeDetailsStatus === 'pending')
            setLoading(true);
        else if (EpisodeDetailsStatus === 'fulfilled') {
            setLoading(false);
            setEpisodeDetails(EpisodeDetails);
        }
    }, [EpisodeDetailsStatus, dispatch, EpisodeDetails]);
    
    // useEffect(() => {
    //     if (episodeDetails) {
    //     Promise.all(episodeDetails?.characters.map(character => 
    //         fetch(character).then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             }}) 
    //     )).then(characterData => {
    //         setCharacters(characterData);
    //     })}
    // }, [episodeDetails])

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
