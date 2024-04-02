import React from 'react'
import "../scss/GitHub.scss"
import github from "../assets/github.png";

const GitHub: React.FC = () => {
    return (
        <div className='github-button'>
            <button>
                <a href="https://github.com/Fadilix/anime-music-player" target='_blank'>
                    <img src={github} alt="GitHub Icon" />
                </a>
            </button>
        </div>
    )
}

export default GitHub;