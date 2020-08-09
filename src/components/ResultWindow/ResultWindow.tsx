import React, { useState } from "react";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import './result-window.scss';
import funBirdPath from '../../assets/img/evgenialno.png'
import svgLoader from '../../assets/imgIoaders/tail-spin.svg'
import { getDeclension } from "./helpers/getDeclension";

const ResultWindow: React.FunctionComponent<SystemState> = ({audioBird, categoryBird}) => {
    const resetGame = () => window.location.reload();
    audioBird.currentAudio.pause();
    audioBird.selectAudio.pause();
    const totalScore = categoryBird.score + categoryBird.scoreCategory;
    const scoreDeclension = getDeclension(totalScore);
    const funBirdImage = new Image();
    funBirdImage.src = funBirdPath;
    const [loadImgState, setLoadImageState] = useState(false);
    funBirdImage.addEventListener('load', () => {
        setLoadImageState(true);
    })
    return (
        <section className='result_section'>
            <div className='result_container'>
                { categoryBird.score === 30 ? (
                    <div className='fun_result_container'>
                        {loadImgState ?
                            <img className='fun_bird_img'
                                             src={funBirdPath}
                                             alt='Fun bird'/> :
                            <div className='fun_loader_container'>
                                <img className='bird_image_loader'
                                     src={svgLoader}
                                     alt='Fun bird'/>
                            </div>
                        }

                        <button onClick={resetGame} className='button_reset_game'>Еще раз?</button>
                    </div>
                    ) : (
                        <div className='not_fun_result_container'>
                            <span>Вы набрали {totalScore} {scoreDeclension}!</span>
                            <button onClick={resetGame} className='button_reset_game'>Еще раз?</button>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default connect(mapStateToProps)(ResultWindow);
