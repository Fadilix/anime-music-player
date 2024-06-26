import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import { useEffect, useState } from "react";
import "../scss/Play.scss";

// Defining types for props
type PlayProps = {
    soundtrack: object[],
    audio: HTMLAudioElement,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const Play: React.FC<PlayProps> = ({ audio, soundtrack, index, setIndex }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset audio when track ends
    useEffect(() => {
        const handleTrackEnd = () => {
            setIsPlaying(false);
            audio.pause();
            audio.currentTime = 0;
        };

        audio.addEventListener('ended', handleTrackEnd);

        return () => {
            audio.removeEventListener('ended', handleTrackEnd);
        };
    }, [audio]);

    // handling the pause button
    const handlePause = () => {
        setIsPlaying(!isPlaying);
        audio.pause();
    }

    // handling the resume button
    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        audio.play();
    }

    // handling the next button
    const handleNextMusic = () => {
        audio.currentTime = 0;
        audio.pause();
        setIsPlaying(false);
        setIndex((index + 1) % soundtrack.length);
    }

    // handling clicking on (previous) button
    const handlePreviousMusic = () => {
        audio.currentTime = 0;
        audio.pause();
        setIsPlaying(false);
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

            {/* Change the icon in according 
            to wether it is playing or not */}
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