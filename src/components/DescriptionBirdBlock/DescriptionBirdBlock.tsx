import React from "react";
import './description_bird.scss'
import { connect, ConnectedProps } from "react-redux";
import { SystemState } from "../../redux/types";
import { defaultTextDescriptionBlock } from "./const";
import altBirdImage from '../../assets/img/alt_bird_image.png';

interface Props {
    currentBirdInf: {
        birdName: string,
        birdSpecies: string,
        birdDescription: string,
        birdImagePath: string,
        birdAudioPath: string,
        categoryBirdIndex: number,
    }
}

const DescriptionBirdBlock: React.FunctionComponent<Props> = ({currentBirdInf}) => {
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
                        <img className='bird_image' src={imageBird} alt={nameBird}/>
                    </div>
                    <div className='audio_block'>
                        <p className='bird_name'>{nameBird}</p>
                    </div>
                </div>
                <p className='description__bird_description'>{descriptionBird}</p>
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

export default connect(mapStateToProps)(DescriptionBirdBlock)
