import { useEffect, useState } from "react";
import "../scss/MusicBar.scss";
type PropsType = {
    audio: HTMLAudioElement
}

const MusicBar: React.FC<PropsType> = ({ audio }) => {
    const audioDuration = audio.duration;
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        setCurrentTime(audio.currentTime);
    }, [audio])

    return (
        <div
            className="music-bar-container"
        >
            <div className="music-bar">
                <div className="bar"
                    style={{
                        width: `${(currentTime / audioDuration) * 100}px`,
                    }}
                ></div>
            </div>

        </div>
    )
}

export default MusicBar;