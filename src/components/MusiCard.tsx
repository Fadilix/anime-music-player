import "../scss/MusiCard.scss"
type sound = {
    name: string,
    src: string,
    bg: string
}
type trackType = {
    track: sound
}

const MusiCard: React.FC<trackType> = ({ track }) => {

    return (
        <div className="card">
            <div className="image">
                <img src={track.bg} alt="" />
            </div>
            <p>{track.name}</p>
            <p>Unknown</p>
        </div>
    )
}

export default MusiCard;