import React from 'react';
import './header.scss';
import BirdListItem from "./BirdListItem";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";

const Header: React.FunctionComponent<SystemState> = ({categoryBird, selectBird, currentBird}) => {
    const isEndGame = () => categoryBird.categoryIndex === 5
        && selectBird.name === currentBird.name;
    const totalScore = isEndGame() ? categoryBird.score  + categoryBird.scoreCategory
        : categoryBird.score;
    return (
        <header className="header">
            <div className="wrapper wrapper_header">
                <div className="title_and_score">
                    <div className="logo">
                        <span className='main_logo'/>
                        <h1 className='main_logo_title'>SongBird</h1>
                    </div>
                    <div className="score">
                        <span className="score__score_counter">SCORE {totalScore}</span>
                    </div>
                </div>
                <div className="navigation_birds">
                    <BirdListItem />
                </div>
            </div>
        </header>
    )
}

export default connect(mapStateToProps)(Header);


