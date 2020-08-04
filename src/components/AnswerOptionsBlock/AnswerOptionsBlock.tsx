import React, {useEffect, useState} from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { selectNewBird } from "../../redux/actions";
import {defaultSelectList} from "../../redux/consts";

interface PropsCurrentSelect {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: object[],
    },
    selectBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        activeListClass: string[],
    },
    categoryBird: {
        categoryIndex: number
        score: number
    }
    selectNewBird: any
}

const AnswerOptionsBlock: React.FunctionComponent<PropsCurrentSelect> = ({selectNewBird, currentBird, selectBird, categoryBird}) => {
    const errorSound: HTMLAudioElement = new Audio(require('../../assets/audio/error-sound.mp3'));
    const correctSound: HTMLAudioElement = new Audio(require('../../assets/audio/correct-sound.mp3'));
    const allBirdsNames: [][] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames[categoryBird.categoryIndex];
    const isCorrectBird = () => {
        return currentBird.name !== selectBird.name
    }
    const checkBird = (event: any) => {
        const defaultClassValue = ['', '', '', '', '', ''];
        const activeListClass = selectBird.activeListClass.every(elem => elem === '') ? defaultClassValue : selectBird.activeListClass;
        const newSelect = {
            activeListClass: activeListClass
        }
        const targetData = event.target.dataset;
        if (targetData.name === currentBird.name) {
            activeListClass.map(() => activeListClass[targetData.targetIndex] = ' correct');
            correctSound.play().then();
            Object.assign(newSelect, currentBird)
            selectNewBird(newSelect);
        } else {
            activeListClass.map(() => activeListClass[targetData.targetIndex] = ' error');
            errorSound.play().then();
            const selectBirdArr = currentBird.otherBirdsInCategory.filter((currentBird: any) =>
                currentBird.name === targetData.name);
            Object.assign(newSelect, ...selectBirdArr)
            selectNewBird(newSelect);
        }
    }
    const firstSixListItems: JSX.Element[] = firstSixNames.map((name: string, index) =>
        <li onClick={isCorrectBird() ? checkBird : isCorrectBird}
            className='answers_item'
            key={name}
            data-target-index={index}
            data-name={name}>
            <span className={'answers_item__marker' + selectBird.activeListClass[index]}
                  data-name={name}
                  data-target-index={index}/>
            <span className='answers_item__name'
                  data-name={name}
                  data-target-index={index}>{name}</span></li>)
    return (
        <div className='answer_options_block'>
            <ul className='answers_list'>
                {firstSixListItems}
            </ul>
        </div>
    )
}

const mapDispatchToProps = {
    selectNewBird,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptionsBlock);
