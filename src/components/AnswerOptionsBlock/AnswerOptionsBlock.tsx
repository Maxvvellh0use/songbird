import React from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";

export const AnswerOptionsBlock: React.FunctionComponent = () => {
    const allBirdsNames: string[] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames.filter((name, index) => index < 6);
    const firstSixListItems: JSX.Element[] = firstSixNames.map((names: string) =>
        <li className='answers_item' key={names}><span>{names}</span></li>)
    return (
        <div className='answer_options_block'>
            <ul className='answers_list'>
                {firstSixListItems}
            </ul>
        </div>
    )
}
