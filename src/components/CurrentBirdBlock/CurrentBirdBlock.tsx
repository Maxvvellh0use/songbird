import AudioPlayerBird from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React from "react";
import { connect } from "react-redux";
import { createNewBird } from "../../redux/actions";
import { mapStateToProps } from "../../redux/mapStateToProps";

interface PropsWithCreateNewBird {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: object[],
    },
    selectBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        activeListClass: string[],
    },
    categoryBird: {
        categoryIndex: number
        score: number
    }
    createNewBird: any
}

const CurrentBirdBlock: React.FC<PropsWithCreateNewBird> = ({selectBird, currentBird}) => {
    const alternativeBird = {
        name: '******',
        image: altBirdImage
    }
    const isCorrectBird = () => {
        return currentBird.name === selectBird.name
    }
    const thumbClasses = {
        button: '',
        timeBar: '',
        container: '',
        timeBarContainer: '',
        timeBarBackground: '',
        volumeIcon: '',
        volumeInput: '',
    }
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <div className='image_bird_container'>
                    <img className='image_bird'
                         src={isCorrectBird() ? currentBird.image : alternativeBird.image}
                         alt={currentBird.name}/>
                </div>
                <div className='name_and_audio'>
                    <p className='current_bird_name'>{isCorrectBird() ?
                        currentBird.name : alternativeBird.name}</p>
                    <AudioPlayerBird targetId={'currentBlock'} thumb={thumbClasses}/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    createNewBird,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBirdBlock)
