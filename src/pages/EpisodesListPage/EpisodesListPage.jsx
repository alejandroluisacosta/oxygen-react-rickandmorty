import { useEffect, useState } from "react";
import EpisodeComponent from "../../components/EpisodeComponent/EpisodeComponent";
import './EpisodeListPage.css';
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesThunk } from "../../Features/EpisodesSlice/EpisodesThunk";

const episodesUrl = 'https://rickandmortyapi.com/api/episode';

const EpisodesListPage = () => {

    const [episodes, setEpisodes] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const Episodes = useSelector(state => state.Episodes.data);
    const EpisodesStatus = useSelector(state => state.Episodes.status);
    const EpisodesError = useSelector(state => state.Episodes.error);

    useEffect(() => {
        if (EpisodesStatus === 'idle')
            dispatch(getEpisodesThunk());
        else if (EpisodesStatus === 'pending') {
            setLoading(true);
        }
        else if (EpisodesStatus === 'fulfilled') {
            setEpisodes(Episodes);
            setLoading(false);
        }

    }, [EpisodesStatus, dispatch, Episodes])

    return <>
        {loading ? <p>Loading...</p>
        :
        <div className="EpisodeListPage">
            <h1>List of episodes</h1>
            <div className="EpisodeListPage__EpisodeGrid">
                {episodes.map((episode, index) =>
                    <EpisodeComponent name={episode.name} airDate={episode.air_date} id={episode.id} key={index}/>
                )}
            </div>
        </div>}
    </>
}
export default EpisodesListPage;