import { AudioPlayerBird } from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React, { useState } from "react";
import { connect } from "react-redux";
import { getRandomBirdIndex } from "./helpers/getRandomBirdIndex";
import { createNewBird } from "../../redux/actions";
import birdsData from "../../data/birdsData";
import { startCategoryIndex } from "./consts";

interface Props {
    currentBirdInf?: object;
    createNewBird: any
}

const CurrentBirdBlock: React.FunctionComponent<Props> = ({createNewBird}) => {
    const randomBirdIndex: number = getRandomBirdIndex();
    const firstBirdData = birdsData[startCategoryIndex][randomBirdIndex];
    const firstBird = {
        birdName: firstBirdData.name,
        birdSpecies: firstBirdData.species,
        birdDescription: firstBirdData.description,
        birdImagePath: firstBirdData.image,
        birdAudioPath: firstBirdData.audio,
        categoryBirdIndex: startCategoryIndex,
    };
    const [newBirdData, setNewBirdData] = useState(firstBird);
        // birdsData[startCategoryIndex]
    console.log(createNewBird(newBirdData))
    // const newBird = createNewBird(firstBird)
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <img className='image_bird' src={altBirdImage} alt='bird'/>
                <div className='name_and_audio'>
                    <p className='current_bird_name'>******</p>
                    <AudioPlayerBird />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    createNewBird,
}

export default connect(null, mapDispatchToProps)(CurrentBirdBlock)
