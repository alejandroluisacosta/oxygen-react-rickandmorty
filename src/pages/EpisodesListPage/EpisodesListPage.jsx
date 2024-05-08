import { useEffect, useState } from "react";
import EpisodesListComponent from "../../components/EpisodesListComponent/EpisodesListComponent";
import EpisodeComponent from "../../components/EpisodeComponent/EpisodeComponent";
import './EpisodeListPage.css';

const episodesUrl = 'https://rickandmortyapi.com/api/episode';

const EpisodesListPage = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(episodesUrl).then(response => {
            if (response.ok) {
                response.json().then(jsonData => {
                    setEpisodes(jsonData.results)
                }).catch(error => console.log(error));
            }
        }).catch(error => console.log('Error con la API ', error));
    }, [])

    return (
        <div className="EpisodeListPage">
            <h1>List of episodes</h1>
            <div className="EpisodeListPage__EpisodeGrid">
                {episodes.map((episode, index) =>
                    <EpisodeComponent name={episode.name} airDate={episode.air_date} id={episode.id} key={index}/>
                )}
            </div>
        </div>
    )
}
export default EpisodesListPage;