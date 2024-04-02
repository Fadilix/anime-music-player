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
            <div
                className="image"
                style={{
                    background: `url(${track.bg})`,
                    backgroundSize: "cover"
                }}
            >
            </div>
            <p className="track-name">
                {
                    track.name.length > 40 ?
                        track.name.substring(0, 40) + "..."
                        : track.name
                }
            </p>
        </div>
    )
}

export default MusiCard;