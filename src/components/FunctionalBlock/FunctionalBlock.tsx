import React, {useState} from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
import { SystemState } from "../../redux/types";
import { connect } from "react-redux";
import {mapStateToProps} from "../../redux/mapStateToProps";
import {createNewBird, nextCategoryBird, selectNewBird, setAudioBird} from "../../redux/actions";
import birdsData from "../../data/birdsData";
import {getRandomBirdIndex} from "../CurrentBirdBlock/helpers/getRandomBirdIndex";
import {defaultSelectList} from "../../redux/consts";
import {increaseCoefficient, startIndex} from "./consts";

interface PropsCategoryBird {
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
    },
    categoryBird: {
        categoryIndex: number
        score: number
    },
    audioBird: {
        currentAudio: HTMLAudioElement,
    }
    nextCategoryBird: any,
    createNewBird: any,
    selectNewBird: any,
    setAudioBird: any
}

const FunctionalBlock: React.FunctionComponent<PropsCategoryBird> = ({audioBird, setAudioBird, selectNewBird, categoryBird, nextCategoryBird, currentBird, selectBird, createNewBird}) => {
    const randomBirdIndex: number = getRandomBirdIndex();
    const [categoryBirdState, setCategoryBirdState] = useState(startIndex);
    const isCorrectBird = () => {
            return {
                disabled: currentBird.name !== selectBird.name,
                buttonActiveClass: currentBird.name !== selectBird.name ? '' : ' button_active',
            }
    }
    const nextLevelHandler = () => {
        audioBird.currentAudio.pause();
        setCategoryBirdState(categoryBirdState + increaseCoefficient)
        const newBirdData = birdsData[categoryBirdState][randomBirdIndex];
        const otherBirdsInCategory = birdsData[categoryBirdState].filter((bird, index) =>
            index !== randomBirdIndex);
        const newCurrentAudio = {
            currentAudio: new Audio(newBirdData.audio),
            selectAudio: new Audio(),
        };
        const newBird = {
            audio: newBirdData.audio,
            description: newBirdData.description,
            id: 0,
            image: newBirdData.image,
            name: newBirdData.name,
            species: newBirdData.species,
            otherBirdsInCategory: otherBirdsInCategory,
        };
        const category = {
            categoryIndex: categoryBirdState,
            score: 0,
        };
        const defaultSelect = {
            activeListClass: defaultSelectList,
            audio: '',
            description: '',
            id: 0,
            image: '',
            name: '',
            species: '',
        };
        Object.assign(defaultSelect, newCurrentAudio);
        nextCategoryBird(category)
        createNewBird(newBird)
        selectNewBird(defaultSelect)
        setAudioBird(newCurrentAudio)
    }

        return (
            <section className='functional_section'>
                <div className='wrapper wrapper_functional_block'>
                    <AnswerOptionsBlock />
                    <DescriptionBirdBlock />
                </div>
                <div className='wrapper'>
                    <Button onClick={nextLevelHandler}
                            disabled={isCorrectBird().disabled}
                            value={'Next Level'}
                            className={'button_next_level' + isCorrectBird().buttonActiveClass}
                    />
                </div>
            </section>
        )
}

const mapDispatchToProps = {
    createNewBird, nextCategoryBird,
    selectNewBird, setAudioBird
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalBlock)


