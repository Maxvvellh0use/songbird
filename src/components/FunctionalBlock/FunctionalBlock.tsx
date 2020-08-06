import React, {useState} from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
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
        activeHeaderClass: string[],
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
        categoryIndex: number,
        scoreCategory: number,
        score: number,
    },
    audioBird: {
        currentAudio: HTMLAudioElement,
    }
    nextCategoryBird: any,
    createNewBird: any,
    selectNewBird: any,
    setAudioBird: any
}

const FunctionalBlock: React.FunctionComponent<PropsCategoryBird> =
    ({audioBird, setAudioBird, selectNewBird, nextCategoryBird, currentBird, selectBird, createNewBird, categoryBird}) => {
    const randomBirdIndex: number = getRandomBirdIndex();
    const [categoryBirdState, setCategoryBirdState] = useState(startIndex);
    const isCorrectBird = () => {
            return {
                disabled: currentBird.name !== selectBird.name,
                buttonActiveClass: currentBird.name !== selectBird.name ? '' : ' button_active',
            }
    }

    const nextLevelHandler = () => {
        if (categoryBird.categoryIndex < 5) {
            audioBird.currentAudio.pause();
            const copyArrayHeaderClasses = currentBird.activeHeaderClass.slice();
            copyArrayHeaderClasses[categoryBird.categoryIndex] = '';
            copyArrayHeaderClasses[categoryBird.categoryIndex + increaseCoefficient] = ' bird_list_item__active';
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
                activeHeaderClass: copyArrayHeaderClasses,
            };
            const category = {
                categoryIndex: categoryBirdState,
                scoreCategory: 6,
                score: categoryBird.score + categoryBird.scoreCategory,
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
        } else {
            const category = {
                categoryIndex: categoryBird.categoryIndex + increaseCoefficient,
                score: 0,
            };
            nextCategoryBird(category);
        }
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


