import React, {useState} from 'react';
import {Props, SystemState} from "../../redux/types";
import { connect } from "react-redux";
import playButton from '../../assets/svg/play-button.svg'
import pauseButton from '../../assets/svg/pause-button.svg';

const AudioPlayerBird: React.FunctionComponent<Props> = ({currentBirdInf}) => {
    const audioPath = currentBirdInf.birdAudioPath;
    const birdAudio = new Audio(audioPath);
    const [audioButtonImage, setAudioButton] = useState(playButton);
    const [birdAudioState] = useState(birdAudio);
    const playAudio = async () => {
        if (audioButtonImage === playButton) {
            await birdAudioState.play()
            setAudioButton(pauseButton)
        } else {
            birdAudioState.pause();
            setAudioButton(playButton)
        }
    }
    return (
        <div className='audio_player_container'>
            <img onClick={playAudio} className='play_pause_button' src={audioButtonImage}/>
        </div>
    )
}

const mapStateToProps = (state: SystemState) => ({
    currentBirdInf: {
        birdName: state.currentBird.birdName,
        birdSpecies: state.currentBird.birdSpecies,
        birdDescription: state.currentBird.birdDescription,
        birdImagePath: state.currentBird.birdImagePath,
        birdAudioPath: state.currentBird.birdAudioPath,
        categoryBirdIndex: state.currentBird.categoryBirdIndex,
    }
})

export default connect(mapStateToProps)(AudioPlayerBird);


