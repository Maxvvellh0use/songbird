import React from "react";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import './result-window.scss';
import funBird from '../../assets/img/evgenialno.png'
import {getDeclension} from "./helpers/getDeclension";

const ResultWindow: React.FunctionComponent<SystemState> = ({categoryBird}) => {
    // eslint-disable-next-line no-restricted-globals
    const resetGame = () => location.reload();
    const totalScore = categoryBird.score + categoryBird.scoreCategory;
    const scoreDeclension = getDeclension(totalScore);
    return (
        <section className='result_section'>
            <div className='result_container'>
                { categoryBird.score === 30 ? (
                    <div className='fun_result_container'>
                        <img className='fun_bird_img' src={funBird} alt='Fun bird'/>
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
