import React from "react";
import './description_bird.scss'
import { connect, ConnectedProps } from "react-redux";
import { Props, SystemState } from "../../redux/types";
import { defaultTextDescriptionBlock } from "./const";

const DescriptionBirdBlock: React.FunctionComponent<Props> = ({currentBirdInf, selectBird}) => {
    const imageBird: string = currentBirdInf.birdImagePath;
    const nameBird: string = currentBirdInf.birdName;
    const descriptionBird: string = currentBirdInf.birdDescription;
    return (
        <div className='description_bird_block'>
            <div className='description_default hidden'>
                { defaultTextDescriptionBlock }
            </div>
            <div className='description_bird_block__description'>
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
        currentBirdInf: {
            birdName: state.currentBird.birdName,
            birdSpecies: state.currentBird.birdSpecies,
            birdDescription: state.currentBird.birdDescription,
            birdImagePath: state.currentBird.birdImagePath,
            birdAudioPath: state.currentBird.birdAudioPath,
            categoryBirdIndex: state.currentBird.categoryBirdIndex,
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
