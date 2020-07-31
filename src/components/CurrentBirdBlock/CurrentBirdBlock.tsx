import { AudioPlayerBird } from "./AudioPlayerBird";
import './current-bird.scss'
import React from "react";

export const CurrentBirdBlock: React.FunctionComponent = () => {
    return (
        <div className='wrapper'>
            <div className="current_bird_block">
                <AudioPlayerBird />
            </div>
        </div>
    )
}
