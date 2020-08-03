import React, {useState} from "react";
import './description_bird.scss'
import { connect, ConnectedProps } from "react-redux";
import { Props, SystemState } from "../../redux/types";
import { defaultTextDescriptionBlock } from "./const";

const DescriptionBirdBlock: React.FunctionComponent<Props> = ({currentBird, selectBird}) => {
    const imageBird: string = currentBird.image;
    const nameBird: string = currentBird.name;
    const descriptionBird: string = currentBird.description;
    const defaultDescriptionState = selectBird.name ? ' hidden' : ''
    const descriptionBirdState = selectBird.name ? '' : ' hidden';
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
                    </div>
                </div>
                <p className='description__bird_description'>{selectBird.description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: SystemState) => ({
        currentBird: {
            audio: state.currentBird.audio,
            description: state.currentBird.description,
            id: state.currentBird.id,
            image: state.currentBird.image,
            name: state.currentBird.name,
            species: state.currentBird.species,
            otherBirdsInCategory: state.currentBird.otherBirdsInCategory,
        },
        selectBird: {
            audio: state.selectBird.audio,
            description: state.selectBird.description,
            id: state.selectBird.id,
            image: state.selectBird.image,
            name: state.selectBird.name,
            species: state.selectBird.species,
        }
})

export default connect(mapStateToProps)(DescriptionBirdBlock)
