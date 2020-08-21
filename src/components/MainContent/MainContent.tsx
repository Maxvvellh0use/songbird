import React from "react";
import CurrentBirdBlock from "../CurrentBirdBlock/CurrentBirdBlock";
import FunctionalBlock from "../FunctionalBlock/FunctionalBlock";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";
import ResultWindow from "../ResultWindow/ResultWindow";

const maxCategoryNumber = 5;

const MainContent: React.FunctionComponent<SystemState> = ({categoryBird, selectBird, currentBird}) => {
    const isEndGame = () => categoryBird.categoryIndex === maxCategoryNumber
        && selectBird.name === currentBird.name;
    if (isEndGame()) {
        return (
            <ResultWindow />
        )
    }
    return (
        <main>
            <CurrentBirdBlock />
            <FunctionalBlock />
        </main>
    )
}

export default connect(mapStateToProps)(MainContent);
