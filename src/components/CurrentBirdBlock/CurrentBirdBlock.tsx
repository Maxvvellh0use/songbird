import { AudioPlayerBird } from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React from "react";

export const CurrentBirdBlock: React.FunctionComponent = () => {
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <img className='image_bird' src={altBirdImage}/>
                <AudioPlayerBird />
            </div>
        </div>
    )
}
