import './CharacterComponent.css'

const CharacterComponent = (props) => {
    return (
        <div className="Character">
            <img className="Character__Image" src={props.image} />
            <div className="Character__Info">
                <p className="Character__Info__Name">{props.name}</p>
                <div className="Character__Info__DescriptionContainer">
                <span className="material-symbols-outlined Character__Info__DescriptionContainer__Status Character__Info__DescriptionContainer__Status--alive">radio_button_checked</span>
                <p className="Character__Info__DescriptionContainer__Description">{props.species}</p>
                </div>
                <div className="Character__Info__Location">
                    <p className="Character__Info__Location__Title">Last known location:</p>
                    <p className="Character__Info__Location__Value">{props.location}</p>
                </div>
                <div className="Character__Info__Episode">
                    <p className="Character__Info__Episode__Title">First seen in:</p>
                    <p className="Character__Info__Episode__Value">Episode Name (Fetch)</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterComponent;