import React, { useState } from 'react';
import './header.scss';
import BirdListItem from "./BirdListItem";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";

const Header: React.FunctionComponent<SystemState> = ({categoryBird}) => {
    return (
        <header className="header">
            <div className="wrapper wrapper_header">
                <div className="title_and_score">
                    <div className="title">
                        <h1>SongBird</h1>
                    </div>
                    <div className="score">
                        <span className="score__score_counter">SCORE {categoryBird.score}</span>
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


