import React, {ReactEventHandler, useState} from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";
import {connect, DispatchProp} from "react-redux";
import { SystemState } from "../../redux/types";
import { selectNewBird } from "../../redux/actions";

interface PropsCurrentSelect {
    currentBirdInf: {
        birdName: string,
        birdSpecies: string,
        birdDescription: string,
        birdImagePath: string,
        birdAudioPath: string,
        categoryBirdIndex: number,
        otherBirdsInCategory: object[];
    };
    selectNewBird: any
}

const AnswerOptionsBlock: React.FunctionComponent<PropsCurrentSelect> = ({currentBirdInf, selectNewBird}) => {
    const allBirdsNames: string[] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames.filter((name, index) => index < 6);
    const checkBird = (event: any) => {
        if (event.target.dataset.name === currentBirdInf.birdName) {
            console.log('CORRECT')
        } else {
            const selectBirdArr = currentBirdInf.otherBirdsInCategory.filter((currentBird: any) =>
                currentBird.name === event.target.dataset.name);
           selectNewBird(...selectBirdArr);
        }

        // if (event.target.dataset.name)
    }
    const firstSixListItems: JSX.Element[] = firstSixNames.map((name: string) =>
        <li onClick={checkBird} className='answers_item' key={name} data-name={name}><span>{name}</span></li>)
    return (
        <div className='answer_options_block'>
            <ul className='answers_list'>
                {firstSixListItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: SystemState) => ({
    currentBirdInf: {
        birdName: state.currentBird.birdName,
        birdSpecies: state.currentBird.birdSpecies,
        birdDescription: state.currentBird.birdDescription,
        birdImagePath: state.currentBird.birdImagePath,
        birdAudioPath: state.currentBird.birdAudioPath,
        categoryBirdIndex: state.currentBird.categoryBirdIndex,
        otherBirdsInCategory: state.currentBird.otherBirdsInCategory,
    }
})

const mapDispatchToProps = {
    selectNewBird,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptionsBlock);
