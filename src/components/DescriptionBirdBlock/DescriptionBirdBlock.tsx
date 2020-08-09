import React, {useEffect, useState} from "react";
import './description_bird.scss'
import { connect } from "react-redux";
import { defaultTextDescriptionBlock } from "./const";
import { mapStateToProps } from "../../redux/mapStateToProps";
import AudioPlayerBird from "../CurrentBirdBlock/AudioPlayerBird";
import svgLoader from '../../assets/imgIoaders/tail-spin.svg'
import altBirdImagePath from "../../assets/img/alt_bird_image.png";
import axios from "axios";

interface DescriptionProps {
    selectBird: {
        name: string,
        image: string,
        description: string,
        species: string,
    },
    audioBird: {
        selectAudio: HTMLAudioElement,
        currentAudio: HTMLAudioElement,
    }
}

const DescriptionBirdBlock: React.FunctionComponent<DescriptionProps> = ({selectBird}) => {
    const defaultDescriptionState = selectBird.name ? ' hidden' : '';
    const descriptionBirdState = selectBird.name ? '' : ' hidden';
    const thumbClasses = {
        button: ' button_thumb',
        timeBar: ' timeBar_thumb',
        container: ' container_thumb',
        timeBarContainer: ' timeBar_container',
        timeBarBackground: ' timeBar_thumb_background',
        volumeIcon: ' volume_icon_thumb',
        volumeInput: ' volume_input'
    }
    const [loadImgState, setLoadImageState] = useState(false);
    const [imageBirdLazyLoadState, setSelectBirdImageState] = useState(altBirdImagePath);
    useEffect(() => {
        setLoadImageState(false);
        axios.get(selectBird.image).then(() => {
            setSelectBirdImageState(selectBird.image);
            setLoadImageState(true);
        }).catch(() => {
            setSelectBirdImageState(altBirdImagePath);
            setLoadImageState(true);
        });
    }, [imageBirdLazyLoadState, selectBird])
    return (
        <div className='description_bird_block'>
            <div className={'description_default' + defaultDescriptionState}>
                { defaultTextDescriptionBlock }
            </div>
            <div className={'description_bird_block__description' + descriptionBirdState}>
                <div className='image_and_audio'>
                    <div className='image_container'>
                        {loadImgState ?
                                <img className='bird_image'
                                src={imageBirdLazyLoadState}
                                alt={selectBird.name}/>
                            :
                            <div className='loader_image_container'>
                                <img className='bird_image_loader'
                                     src={svgLoader}
                                     alt={selectBird.name}/>
                            </div>
                        }
                    </div>
                    <div className='audio_block'>
                        <p className='bird_name'>{selectBird.name}</p>
                        <span className='bird_species'>{selectBird.species}</span>
                        <div className='audio_description'>
                            <AudioPlayerBird targetId={'descriptionBlock'} thumb={thumbClasses}/>
                        </div>
                    </div>
                </div>
                <p className='description__bird_description'>{selectBird.description}</p>
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(DescriptionBirdBlock)



