import React from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";
import { Props, SystemState } from "../../redux/types";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/mapStateToProps";


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

export default connect(mapStateToProps)(FunctionalBlock)


