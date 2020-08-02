import React from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";
import { connect } from "react-redux";

const AnswerOptionsBlock: React.FunctionComponent = (currentBirdInf) => {
    console.log(currentBirdInf)
    const allBirdsNames: string[] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames.filter((name, index) => index < 6);
    const firstSixListItems: JSX.Element[] = firstSixNames.map((names: string) =>
        <li className='answers_item' key={names}><span>{names}</span></li>)
    return (
        <div className='answer_options_block'>
            <ul className='answers_list'>
                {firstSixListItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        currentBirdInf: {
            birdSpecies: state.currentBird.birdSpecies,
            birdDescription: state.currentBird.birdDescription,
            birdImagePath: state.currentBird.birdImagePath,
            birdAudioPath: state.currentBird.birdAudioPath,
            categoryBirdIndex: state.currentBird.categoryBirdIndex,
        }
    }
}

export default connect(mapStateToProps, null)(AnswerOptionsBlock)
