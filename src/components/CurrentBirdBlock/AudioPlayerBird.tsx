import React, { useState } from 'react';
import { Props, SystemState } from "../../redux/types";
import { connect } from "react-redux";
import playButton from '../../assets/svg/play-button.svg'
import pauseButton from '../../assets/svg/pause-button.svg';
import { getCorrectClock } from "./helpers/getCorrectClock";
import { getPercent } from "./helpers/getPercent";

const AudioPlayerBird: React.FunctionComponent<Props> = ({currentBirdInf}) => {
    const audioPath: string = currentBirdInf.birdAudioPath;
    const birdAudio: HTMLAudioElement = new Audio(audioPath);
    const [audioButtonImage, setAudioButton] = useState(playButton);
    const [birdAudioState] = useState(birdAudio);
    const startTime: number = Math.round(birdAudioState.currentTime);
    const [startTimeState, setStartTime] = useState(startTime);
    const [fullTimeState, setFullTimeState] = useState('00:00');
    const playAudio = async () => {
        if (birdAudioState.paused) {
            await birdAudioState.play();
            setTimeout(function timerAudio() {
                setStartTime(birdAudioState.currentTime);
                if (!birdAudioState.paused) {
                    setTimeout(timerAudio, 1000);
                }
            }, 1000);
            setAudioButton(pauseButton);
            const correctFullTime: string = getCorrectClock(birdAudioState.duration)
            setFullTimeState(correctFullTime);
        } else {
            birdAudioState.pause();
            setAudioButton(playButton);
        }
    }
    return (
        <div className='audio_player_container'>
            <img onClick={playAudio} className='play_pause_button' src={audioButtonImage} alt='play button'/>
            <div className='audio_player__timebar'>
                <div className='timebar'>
                    <div style={{background: '#6286BD', width: getPercent(startTimeState/birdAudioState.duration)}} className='timebar_background'/>
                </div>
                <div className='time'>
                    <p className='start_time'>00:{startTime < 10 ? '0' + startTime : startTime}</p>
                    <p className='full_time'>{fullTimeState}</p>
                </div>
            </div>
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


