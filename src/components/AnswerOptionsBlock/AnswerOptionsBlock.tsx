import React, {useEffect, useState} from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/mapStateToProps";
import {nextCategoryBird, selectNewBird, setAudioBird} from "../../redux/actions";
import {defaultSelectList} from "../../redux/consts";
import axios from "axios";
import {useLoadImage} from "../Hooks/useLoadImage/useLoadImage";
import altBirdImagePath from "../../assets/img/alt_bird_image.png";

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
    },
    audioBird: {
        selectAudio: HTMLAudioElement,
        currentAudio: HTMLAudioElement,
    }
    selectNewBird: any,
    setAudioBird: any,
    nextCategoryBird: any
}

const AnswerOptionsBlock: React.FunctionComponent<PropsCurrentSelect> = ({nextCategoryBird, audioBird, selectNewBird, currentBird, selectBird, categoryBird}) => {
    const errorSound: HTMLAudioElement = new Audio(require('../../assets/audio/error-sound.mp3'));
    const correctSound: HTMLAudioElement = new Audio(require('../../assets/audio/correct-sound.mp3'));
    const allBirdsNames: [][] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames[categoryBird.categoryIndex];
    const isCorrectBird = () => currentBird.name !== selectBird.name;
    const checkBird = (event: any) => {
        const defaultClassValue = ['', '', '', '', '', ''];
        const activeListClass = selectBird.activeListClass.every(elem => elem === '') ? defaultClassValue
            : selectBird.activeListClass;
        const newSelect = {
            activeListClass: activeListClass
        }
        const targetData = event.target.dataset;
        if (targetData.name === currentBird.name) {
            audioBird.selectAudio.pause();
            const newAudioBird = {
                currentAudio: audioBird.currentAudio,
                selectAudio: audioBird.currentAudio,
            }
            activeListClass.map(() => activeListClass[targetData.targetIndex] = ' correct');
            correctSound.play().then();
            Object.assign(newSelect, currentBird, newAudioBird);
            selectNewBird(newSelect);
        } else {
            if (!targetData.active) {
                const newScore = {
                    score: categoryBird.score - 1,
                    categoryIndex: categoryBird.categoryIndex
                }
                nextCategoryBird(newScore);
                audioBird.selectAudio.pause();
                activeListClass.map(() => activeListClass[targetData.targetIndex] = ' error');
                errorSound.play().then();
                const selectBirdArr: any = currentBird.otherBirdsInCategory.filter((currentBird: any) =>
                    currentBird.name === targetData.name);
                const selectBirdObj = selectBirdArr[0];
                const newAudioBird = {
                    currentAudio: audioBird.currentAudio,
                    selectAudio: new Audio(selectBirdObj.audio),
                }
                Object.assign(newSelect, selectBirdObj, newAudioBird)
                selectNewBird(newSelect);
            }
        }
    }
    const firstSixListItems: JSX.Element[] = firstSixNames.map((name: string, index) =>
        <li onClick={isCorrectBird() ? checkBird : isCorrectBird}
            className='answers_item'
            data-active={selectBird.activeListClass[index]}
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
    selectNewBird, setAudioBird,
    nextCategoryBird
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptionsBlock);
