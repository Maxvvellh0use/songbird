import { AudioPlayerBird } from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React from "react";
import { connect } from "react-redux";

interface Props {
    currentBirdInf?: object;
}

const CurrentBirdBlock: React.FunctionComponent<Props> = ({currentBirdInf}) => {
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <img className='image_bird' src={altBirdImage} alt='bird'/>
                <AudioPlayerBird />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        currentBirdInf: {
            birdAudioPath: state.currentBird.birdAudioPath,
        }
    }
}

export default connect(mapStateToProps, null)(CurrentBirdBlock)
