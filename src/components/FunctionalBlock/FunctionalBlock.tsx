import React from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";



export const FunctionalBlock: React.FunctionComponent = () => {
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
                            value={'Next Level'}
                            className={'button_next_level'}
                    />
                </div>
            </section>
        )
}
