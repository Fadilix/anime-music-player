import GitHub from "../components/GitHub";
import Player from "../components/Player";
import "../scss/HomePage.scss"


const HomePage = () => {
    return (
        <div className="home">
            <div className="mp3">
                <Player />
            </div>
            <GitHub />
        </div>
    )
}

export default HomePage