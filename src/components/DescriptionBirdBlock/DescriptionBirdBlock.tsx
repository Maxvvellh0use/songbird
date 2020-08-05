import React from "react";
import './description_bird.scss'
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { defaultTextDescriptionBlock } from "./const";
import { mapStateToProps } from "../../redux/mapStateToProps";
import AudioPlayerBird from "../CurrentBirdBlock/AudioPlayerBird";

const DescriptionBirdBlock: React.FunctionComponent<SystemState> = ({ selectBird, currentBird}) => {
    const defaultDescriptionState = selectBird.name ? ' hidden' : '';
    const descriptionBirdState = selectBird.name ? '' : ' hidden';
    const audioSelect = new Audio(selectBird.audio);
    const audioBird = new Audio(currentBird.audio);
    const thumbClasses = {
        button: ' button_thumb',
        timeBar: ' timeBar_thumb',
        container: ' container_thumb',
        timeBarContainer: ' timeBar_container',
        timeBarBackground: ' timeBar_thumb_background',
        volumeIcon: ' volume_icon_thumb',
        volumeInput: ' volume_input'
    }
    return (
        <div className='description_bird_block'>
            <div className={'description_default' + defaultDescriptionState}>
                { defaultTextDescriptionBlock }
            </div>
            <div className={'description_bird_block__description' + descriptionBirdState}>
                <div className='image_and_audio'>
                    <div className='image_container'>
                        <img className='bird_image' src={selectBird.image} alt={selectBird.name}/>
                    </div>
                    <div className='audio_block'>
                        <p className='bird_name'>{selectBird.name}</p>
                        <span className='bird_species'>{selectBird.species}</span>
                        <AudioPlayerBird audioBird={audioBird} thumb={thumbClasses} selectAudioBird={audioSelect}/>
                    </div>
                </div>
                <p className='description__bird_description'>{selectBird.description}</p>
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(DescriptionBirdBlock)
