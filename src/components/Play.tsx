import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import { useState } from "react";
import "../scss/Play.scss";


type PlayProps = {
    soundtrack: object[],
    audio: HTMLAudioElement,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}


const Play: React.FC<PlayProps> = ({ audio, soundtrack, index, setIndex }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePause = () => {
        setIsPlaying(!isPlaying);
        audio.pause()
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        audio.play()
    }


    const handleNextMusic = () => {
        setIndex((index + 1) % soundtrack.length);
    }

    // handling clicking on (previous) button
    const handlePreviousMusic = () => {
        if (!soundtrack[index - 1]) {
            setIndex(soundtrack.length - 1);
        } else {
            setIndex((prevIndex: number) => prevIndex - 1);
        }
    }
    return (
        <div className="play">
            <button onClick={handlePreviousMusic}>
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
            <button onClick={handleNextMusic}>
                <img src={next} alt="" />
            </button>
        </div>
    )
}

export default Play