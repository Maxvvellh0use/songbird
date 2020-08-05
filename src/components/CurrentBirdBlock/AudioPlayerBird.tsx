import React, {useEffect, useRef, useState} from 'react';
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

interface AudioProps {
    targetId: string,
    currentBird: {
        name: string,
    },
    selectBird: {
        name: string,
    },
    thumb: {
        button: string,
        timeBar: string,
        container: string,
        timeBarContainer: string,
        timeBarBackground: string,
        volumeIcon: string,
        volumeInput: string,
    },
    categoryBird: {
        categoryIndex: number
    },
    audioBird: {
        selectAudio: HTMLAudioElement,
        currentAudio: HTMLAudioElement,
    }
}

const AudioPlayerBird: React.FunctionComponent<AudioProps> = ({targetId, thumb, audioBird, selectBird, currentBird}) => {
    const audioBirdCurrent = audioBird.currentAudio;
    const audioBirdSelect = audioBird.selectAudio;
    const [audioButtonImage, setAudioButton] = useState(playButton);
    const isCorrectBird = () => {
        return currentBird.name === selectBird.name
    }
    useEffect(() => {
        if (isCorrectBird()) {
            audioBirdCurrent.pause()
        }
    }, [isCorrectBird, audioBirdCurrent])
    audioBirdCurrent.addEventListener('pause', () => {
        setAudioButton(playButton);
    });
    audioBirdSelect.addEventListener('pause', () => {
        setAudioButton(playButton);
    });
    const playEvents = async (audio: HTMLAudioElement) => {
        await audio.play();
        setTimeout(function timerAudio() {
            setStartTime(audio.currentTime);
            if (!audio.paused) {
                setTimeout(timerAudio, defaultTimeout);
            }
        }, defaultTimeout);
        setAudioButton(pauseButton);
        const correctFullTime: string = getCorrectClock(audio.duration)
        setFullTimeState(correctFullTime);
    }
    const startTime: number = Math.round(audioBirdCurrent.currentTime);
    const [startTimeState, setStartTime] = useState(startTime);
    const [fullTimeState, setFullTimeState] = useState('00:00');
    const playAudio = async (event: any) => {
        const targetId = event.target.dataset.target
        if (audioBirdCurrent.paused && targetId === 'currentBlock') {
            await playEvents(audioBirdCurrent);
        } else if (audioBirdSelect.paused && targetId === 'descriptionBlock') {
            await playEvents(audioBirdSelect);
        } else {
            audioBirdSelect.pause();
            audioBirdCurrent.pause();
            setAudioButton(playButton);
        }
    }
    const [volumeValueState, setVolumeValueState] = useState(startVolume);
    audioBirdCurrent.volume = volumeValueState / volumeCoefficient;
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
    audioBirdCurrent.addEventListener('ended', () => {
        setAudioButton(playButton);
    })
    return (
        <div className={'audio_player_container' + thumb.container}>
            <img onClick={playAudio}
                 data-target={targetId}
                 className={'play_pause_button' + thumb.button}
                 src={audioButtonImage}
                 alt='play button'/>
            <div className={'audio_player__timebar' + thumb.timeBarContainer}>
                <div className={'timebar' + thumb.timeBar}>
                    <div style={{background: '#6286BD', width: getPercent(startTimeState/audioBirdCurrent.duration)}}
                         className={'timebar_background' + thumb.timeBarBackground}/>
                </div>
                <div className='time'>
                    <p className='start_time'>00:{startTime < 10 ? '0' + startTime : startTime}</p>
                    <p className='full_time'>{fullTimeState}</p>
                </div>
            </div>
            <div className='audio_player__volume'>
                <img className={'volume_icon' + thumb.volumeIcon}
                     src={volumeImageState}
                     alt='sound'/>
                <input className={'volume' + thumb.volumeInput}
                       onChange={volumeControl}
                       value={volumeValueState}
                       type="range"/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(AudioPlayerBird);


