import './EpisodeComponent.css';

const EpisodeComponent = (props) => {
    return (
        <div className="Episode">
            <p className="Episode__Name">{props.id}. {props.name}</p>
            <p className="Episode__AirDate">{props.airDate}</p>
            <button className="Episode__Button">More info</button>
        </div>
    )
}

export default EpisodeComponent;