import AudioPlayerBird from "./AudioPlayerBird";
import './current-bird.scss';
import altBirdImage from '../../assets/img/alt_bird_image.png';
import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { createNewBird } from "../../redux/actions";
import { mapStateToProps } from "../../redux/mapStateToProps";
import axios from "axios";
import altBirdImagePath from "../../assets/img/alt_bird_image.png";
import { SystemState } from "../../redux/types";

const CurrentBirdBlock: React.FC<SystemState> = ({selectBird, currentBird}) => {
    const alternativeBird = {
        name: '******',
        image: altBirdImage
    }
    const isCorrectBird = useCallback(() =>
        currentBird.name === selectBird.name, [currentBird, selectBird]);
    const thumbClasses = {
        button: '',
        timeBar: '',
        container: '',
        timeBarContainer: '',
        timeBarBackground: '',
        volumeIcon: '',
        volumeInput: '',
    };
    console.log(currentBird.name);
    const [imageBirdLazyLoadState, setSelectBirdImageState] = useState(altBirdImagePath);
    useEffect(() => {
        // const headers: AxiosRequestConfig = {
        //     headers: {
        //        Origin : 'http://localhost:3000',
        //        mode: 'cors'
        //     }
        // }
        // const res = axios.get('https://cors-anywhere.herokuapp.com/www.xeno-canto.org/api/2/recordings?query=Scolopax rusticola', headers).then((resp) => {
        //     console.log(resp)
        // });
        // console.log(res)
        // if (isCorrectBird()) {
        //     axios.get(currentBird.image).then(() => {
        //         setSelectBirdImageState(currentBird.image);
        //     }).catch(() => {
        //         setSelectBirdImageState(altBirdImagePath);
        //     });
        // }
    }, [isCorrectBird, imageBirdLazyLoadState, currentBird])
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
