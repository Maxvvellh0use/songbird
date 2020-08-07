import AudioPlayerBird from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { createNewBird } from "../../redux/actions";
import { mapStateToProps } from "../../redux/mapStateToProps";
import axios from "axios";
import altBirdImagePath from "../../assets/img/alt_bird_image.png";

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
    const isCorrectBird = () => currentBird.name === selectBird.name;
    const thumbClasses = {
        button: '',
        timeBar: '',
        container: '',
        timeBarContainer: '',
        timeBarBackground: '',
        volumeIcon: '',
        volumeInput: '',
    }
    console.log(currentBird.name)
    const [selectBirdImageState, setSelectBirdImageState] = useState(altBirdImagePath);
    useEffect(() => {
        axios.get(selectBird.image).then(res => {
            return setSelectBirdImageState(selectBird.image);
        }).catch(err => {
            return setSelectBirdImageState(altBirdImagePath);
        });
    }, [selectBirdImageState, selectBird])
    return (
        <div className='wrapper'>
            <div className='current_bird_block'>
                <div className='image_bird_container'>
                    <img className='image_bird'
                         src={isCorrectBird() ? selectBirdImageState : alternativeBird.image}
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
