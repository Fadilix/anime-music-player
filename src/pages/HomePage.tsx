import Player from "../components/Player";
import "../scss/HomePage.scss"


const HomePage = () => {
    return (
        <div className="home">
            <div className="mp3">
                <Player />
            </div>
        </div>
    )
}

export default HomePage