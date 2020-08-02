import React from "react";
import AnswerOptionsBlock from "../AnswerOptionsBlock/AnswerOptionsBlock";
import DescriptionBirdBlock from "../DescriptionBirdBlock/DescriptionBirdBlock";
import { Button } from "../Buttons/Button";



export class FunctionalBlock extends React.Component<any, any> {
    state = {

    }

    nextLevelHandler = () => {
        return console.log('sd')
    }

    render = () => {
        return (
            <section className='functional_section'>
                <div className='wrapper wrapper_functional_block'>
                    <AnswerOptionsBlock />
                    <DescriptionBirdBlock />
                </div>
                <div className='wrapper'>
                    <Button onClick={this.nextLevelHandler}
                            value={'Next Level'}
                            className={'button_next_level'}
                    />
                </div>
            </section>
        )
    }
}
