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

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                marginTop: "5px"
            }}>
                <p>{formatTime(currentTime)} / {formatTime(audioDuration)}</p>
            </div>
        </div>
    );
}

export default MusicBar;
