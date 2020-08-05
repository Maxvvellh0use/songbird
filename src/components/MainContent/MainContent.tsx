import React from "react";
import CurrentBirdBlock from "../CurrentBirdBlock/CurrentBirdBlock";
import FunctionalBlock from "../FunctionalBlock/FunctionalBlock";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";
import ResultWindow from "../ResultWindow/ResultWindow";

const MainContent: React.FunctionComponent<SystemState> = ({categoryBird}) => {
    console.log(categoryBird.categoryIndex)
    if (categoryBird.categoryIndex > 5) {
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
