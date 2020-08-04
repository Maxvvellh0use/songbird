import React, {useEffect, useState} from 'react';
import {SystemState} from "../../redux/types";
import { connect } from "react-redux";
import playButton from '../../assets/svg/play-button.svg'
import pauseButton from '../../assets/svg/pause-button.svg';
import volumeFull from '../../assets/svg/volume-full.svg';
import volumeMedium from '../../assets/svg/volume-meduim.svg';
import volumeLow from '../../assets/svg/volume-low.svg';
import volumeOff from '../../assets/svg/sound-off.svg';
import { getCorrectClock } from "./helpers/getCorrectClock";
import { getPercent } from "./helpers/getPercent";
import { defaultTimeout, startVolume, volumeCoefficient } from "./consts";
import { mapStateToProps } from "../../redux/mapStateToProps";

const AudioPlayerBird: React.FunctionComponent<SystemState> = ({currentBird}) => {
    const [audioPathState] = useState(currentBird.audio)
    const birdAudio: HTMLAudioElement = new Audio(audioPathState);
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
                    setTimeout(timerAudio, defaultTimeout);
                }
            }, defaultTimeout);
            setAudioButton(pauseButton);
            const correctFullTime: string = getCorrectClock(birdAudioState.duration)
            setFullTimeState(correctFullTime);
        } else {
            birdAudioState.pause();
            setAudioButton(playButton);
        }
    }
    const [volumeValueState, setVolumeValueState] = useState(startVolume);
    birdAudioState.volume = volumeValueState / volumeCoefficient;
    const [volumeImageState, setVolumeImageState] = useState(volumeMedium);
    const volumeControl = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue: number = +(event.target.value);
        if (currentValue > 90) {
            setVolumeImageState(volumeFull)
        } else if (currentValue > 50 && currentValue < 90) {
            setVolumeImageState(volumeMedium)
        } else if (currentValue > 20 && currentValue < 50) {
            setVolumeImageState(volumeLow)
        } else if (currentValue === 0) {
            setVolumeImageState(volumeOff)
        }
        setVolumeValueState(currentValue);
    }
    birdAudioState.addEventListener('ended', () => {
        setAudioButton(playButton);
    })
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
            <div className='audio_player__volume'>
                <img className='volume_icon' src={volumeImageState} alt='sound'/>
                <input onChange={volumeControl} value={volumeValueState} className='volume' type="range"/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(AudioPlayerBird);


