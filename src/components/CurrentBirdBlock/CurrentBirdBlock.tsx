import AudioPlayerBird from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React, { useState } from "react";
import { connect } from "react-redux";
import { getRandomBirdIndex } from "./helpers/getRandomBirdIndex";
import { createNewBird } from "../../redux/actions";
import birdsData from "../../data/birdsData";
import { startCategoryIndex } from "./consts";
import { SystemState } from "../../redux/types";

interface PropsWithCreateNewBird {
    currentBird: {
        name: string
        image: string
    }
    selectBird: {
        name: string
        image: string
    }
    createNewBird: any
}

const CurrentBirdBlock: React.FC<PropsWithCreateNewBird> = ({createNewBird, currentBird, selectBird}) => {
    console.log(selectBird.name === currentBird.name)
    const randomBirdIndex: number = getRandomBirdIndex();
    const firstBirdData = birdsData[startCategoryIndex][randomBirdIndex];
    const otherBirdsInCategory = birdsData[startCategoryIndex].filter((bird, index) =>
        index !== randomBirdIndex);
    const firstBird = {
        audio: firstBirdData.audio,
        description: firstBirdData.description,
        id: 0,
        image: firstBirdData.image,
        name: firstBirdData.name,
        species: firstBirdData.species,
        otherBirdsInCategory: otherBirdsInCategory,
    };
    const alternativeBird = {
        name: '******',
        image: altBirdImage
    }
    const [newBirdData] = useState(firstBird);
    createNewBird(newBirdData);
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <img className='image_bird' src={currentBird.name === selectBird.name ? currentBird.image : alternativeBird.image} alt='bird'/>
                <div className='name_and_audio'>
                    <p className='current_bird_name'>{currentBird.name === selectBird.name ? currentBird.name : alternativeBird.name}</p>
                    <AudioPlayerBird />
                </div>
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

const mapDispatchToProps = {
    createNewBird,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBirdBlock)
