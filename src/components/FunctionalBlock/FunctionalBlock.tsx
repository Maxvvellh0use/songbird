import React, {useState} from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
import { SystemState } from "../../redux/types";
import { connect } from "react-redux";
import {mapStateToProps} from "../../redux/mapStateToProps";
import {createNewBird, nextCategoryBird, selectNewBird} from "../../redux/actions";
import birdsData from "../../data/birdsData";
import {getRandomBirdIndex} from "../CurrentBirdBlock/helpers/getRandomBirdIndex";

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
    }
    nextCategoryBird: any,
    createNewBird: any,
    selectNewBird: any
}

const FunctionalBlock: React.FunctionComponent<PropsCategoryBird> = ({selectNewBird, categoryBird, nextCategoryBird, currentBird, selectBird, createNewBird}) => {
    const randomBirdIndex: number = getRandomBirdIndex();
    const [categoryBirdState, setCategoryBirdState] = useState(1);
    const isCorrectBird = () => {
            return {
                disabled: currentBird.name !== selectBird.name,
                buttonActiveClass: currentBird.name !== selectBird.name ? '' : ' button_active',
            }
    }
    console.log(categoryBird)
    const nextLevelHandler = () => {
        setCategoryBirdState(categoryBirdState + 1)
        const firstBirdData = birdsData[categoryBirdState][randomBirdIndex];
        const otherBirdsInCategory = birdsData[categoryBirdState].filter((bird, index) =>
            index !== randomBirdIndex);
        const firstBird = {
            audio: firstBirdData.audio,
            description: firstBirdData.description,
            id: 0,
            image: firstBirdData.image,
            name: firstBirdData.name,
            species: firstBirdData.species,
            otherBirdsInCategory: otherBirdsInCategory,
        };
        const category = {
            categoryIndex: categoryBirdState,
            score: 0
        }
        const defaultSelect = {
            audio: '',
            description: '',
            id: 0,
            image: '',
            name: '',
            species: '',
        }
        nextCategoryBird(category)
        createNewBird(firstBird)
        selectNewBird(defaultSelect)

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
    selectNewBird
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalBlock)


