import React from "react";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import './result-window.scss';
import funBird from '../../assets/img/evgenialno.png'

const ResultWindow: React.FunctionComponent<SystemState> = ({categoryBird}) => {
    // eslint-disable-next-line no-restricted-globals
    const resetGame = () => location.reload();
    if (categoryBird.score === 30) {
        return (
            <section className='result_section'>
                <div className='result_container'>
                    <img className='fun_bird_img' src={funBird} alt='Fun bird'/>
                    <button onClick={resetGame} className='button_reset_game'>Еще раз?</button>
                </div>
            </section>
        );
    }
    return (
        <section className='result_section'>
            <div className='result_container'>
                Вы набрали {categoryBird.score} баллов!
            </div>
            <button onClick={resetGame} className='button_reset_game'>Еще раз?</button>
        </section>
    );
};

export default connect(mapStateToProps)(ResultWindow);
