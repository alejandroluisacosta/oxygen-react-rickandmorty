import './EpisodeComponent.css';
import { Link } from 'react-router-dom';

const EpisodeComponent = (props) => {
    return (
        <div className="Episode">
            <p className="Episode__Name">{props.id}. {props.name}</p>
            <p className="Episode__AirDate">{props.airDate}</p>
            <Link to={`${props.id}`} className="Episode__Button"><button>More info</button></Link>

        </div>
    )
}

export default EpisodeComponent;