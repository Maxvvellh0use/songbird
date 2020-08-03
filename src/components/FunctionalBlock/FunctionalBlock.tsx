import React from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
import { Props, SystemState } from "../../redux/types";
import { connect } from "react-redux";


const FunctionalBlock: React.FunctionComponent<Props> = ({currentBird, selectBird}) => {
    const isCorrectBird = () => {
            return {
                disabled: currentBird.name !== selectBird.name,
                buttonActiveClass: currentBird.name !== selectBird.name ? '' : ' button_active',
            }
    }
    const nextLevelHandler = () => {
        return true
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

const mapStateToProps = (state: SystemState) => ({
    currentBird: {
        audio: state.currentBird.audio,
        description: state.currentBird.description,
        id: state.currentBird.id,
        image: state.currentBird.image,
        name: state.currentBird.name,
        species: state.currentBird.species,
        otherBirdsInCategory: state.currentBird.otherBirdsInCategory,
    },
    selectBird: {
        audio: state.selectBird.audio,
        description: state.selectBird.description,
        id: state.selectBird.id,
        image: state.selectBird.image,
        name: state.selectBird.name,
        species: state.selectBird.species,
    }
})

export default connect(mapStateToProps)(FunctionalBlock)


