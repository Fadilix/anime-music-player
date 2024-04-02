import { useEffect, useState } from "react";
import "../scss/MusicBar.scss";

type PropsType = {
    audio: HTMLAudioElement
}

const MusicBar: React.FC<PropsType> = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setAudioDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [audio]);

    const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const bar = event.currentTarget;
        const boundingRect = bar.getBoundingClientRect();
        const clickX = event.clientX - boundingRect.left;
        const barWidth = boundingRect.width;
        const seekTime = (clickX / barWidth) * audioDuration;
        audio.currentTime = seekTime;
    };

    return (
        <div className="music-bar-container">
            <div className="music-bar" onClick={handleProgressBarClick}>
                <div className="bar"
                    style={{
                        width: `${(currentTime / audioDuration) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default MusicBar;
