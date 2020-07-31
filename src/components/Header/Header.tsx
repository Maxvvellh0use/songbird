import React from 'react';
import './header.scss';
import { BirdListItem } from "./BirdListItem";

export const Header: React.FunctionComponent = () => {
    const birdListItem = BirdListItem();
    return (
        <header className="header">
            <div className="wrapper wrapper_header">
                <div className="title_and_score">
                    <div className="title">
                        <h1>SongBird</h1>
                    </div>
                    <div className="score">
                        <span className="score__score_counter">SCORE</span>
                    </div>
                </div>
                <div className="navigation_birds">
                    <ul className="navigation_birds__list">
                        { birdListItem }
                    </ul>
                </div>
            </div>
        </header>
    )
}
