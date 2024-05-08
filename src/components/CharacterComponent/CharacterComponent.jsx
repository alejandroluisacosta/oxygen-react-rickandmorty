const CharacterComponent = (props) => {
    return (
        <div className="Character">
            <img src={props.image} />
            <div className="Character__info">
                <p className="Character__info__name">{props.name}</p>
                <div className="Character__info__DescriptionContainer">
                </div>
                <div className="Character__Info__Episode">
                    <p className="Character__Info__Episode__Episode">{props.episode}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterComponent;