import React, {useState} from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
import { SystemState } from "../../redux/types";
import { connect } from "react-redux";
import {mapStateToProps} from "../../redux/mapStateToProps";
import  { nextCategoryBird } from "../../redux/actions";

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
    nextCategoryBird: any;
}

const FunctionalBlock: React.FunctionComponent<PropsCategoryBird> = ({nextCategoryBird, currentBird, selectBird}) => {


    const [categoryBirdState, setCategoryBirdState] = useState(1);
    const isCorrectBird = () => {
            return {
                disabled: currentBird.name !== selectBird.name,
                buttonActiveClass: currentBird.name !== selectBird.name ? '' : ' button_active',
            }
    }
    const nextLevelHandler = () => {
        console.log('NEXT')
        setCategoryBirdState(categoryBirdState + 1)
        const category = {
            categoryBird: {
                categoryIndex: categoryBirdState,
                    score: 0
        }
        }
        nextCategoryBird(category)
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
    nextCategoryBird
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalBlock)


