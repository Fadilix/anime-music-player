import { useState } from "react";
import { soundtrack } from "../data/data"
import MusiCard from "./MusiCard";

const Player = () => {

    // index and the reference according to the index
    const [index, setIndex] = useState(0);
    const currentAudio = soundtrack[index]
    document.body.style.background = `url(${currentAudio.bg})`
    document.body.style.backgroundSize = `cover`
    document.body.style.backgroundRepeat = `no-repeat`

    // handling clicking on (next) button
    // We're doing % here because we don't wanna go overlap the list
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
        <div>
            <MusiCard track={currentAudio}/>
            <button onClick={handlePreviousMusic}>Previous</button>
            <button onClick={handleNextMusic}>Next</button>
        </div>
    )
}

export default Player