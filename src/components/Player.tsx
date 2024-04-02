import { useState } from "react";
import { soundtrack } from "../data/data"
import MusiCard from "./MusiCard";
import Play from "./Play";
import MusicBar from "./MusicBar";

const Player = () => {

    // index and the reference according to the index
    const [index, setIndex] = useState(0);
    const currentAudio = soundtrack[index]
    document.body.style.background = `url(${currentAudio.bg})`
    document.body.style.backgroundSize = `cover`
    document.body.style.backgroundRepeat = `no-repeat`

    // handling clicking on (next) button
    // We're doing % here because we don't wanna go overlap the list


    const audio = new Audio(currentAudio.src);
    return (
        <div>
            <MusiCard
                track={currentAudio}
            />
            <Play
                audio={audio}
                soundtrack={soundtrack}
                index={index}
                setIndex={setIndex}
            />

            <MusicBar
                audio={audio}
            />
        </div>
    )
}

export default Player;