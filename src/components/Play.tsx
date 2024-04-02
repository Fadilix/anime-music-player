import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import { useState } from "react";


type audioType = {
    audio: HTMLAudioElement
}


const Play: React.FC<audioType> = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePause = () => {
        setIsPlaying(!isPlaying);
        audio.pause()
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        audio.play()
    }

    return (
        <div>
            <button>
                <img src={previous} alt="" />
            </button>

            {!isPlaying ? (
                <button onClick={handlePlay}>
                    <img src={play} alt="" />
                </button>

            ) : (
                <button onClick={handlePause}>
                    <img src={pause} alt="" />
                </button>
            )}
            <button>
                <img src={next} alt="" />
            </button>
        </div>
    )
}

export default Play