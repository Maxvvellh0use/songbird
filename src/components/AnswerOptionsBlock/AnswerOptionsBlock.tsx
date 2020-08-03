import React, {ReactEventHandler, useState} from "react";
import './answer-options-block.scss'
import { getAllBirdsNames } from "../../data/allBirdsNames";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { selectNewBird } from "../../redux/actions";

interface PropsCurrentSelect {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: [],
    };
    selectBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
    }
    selectNewBird: any
}

const AnswerOptionsBlock: React.FunctionComponent<PropsCurrentSelect> = ({currentBird, selectBird, selectNewBird}) => {
    const errorSound: HTMLAudioElement = new Audio(require('../../assets/audio/error-sound.mp3'));
    const correctSound: HTMLAudioElement = new Audio(require('../../assets/audio/correct-sound.mp3'));
    const allBirdsNames: string[] = getAllBirdsNames();
    const firstSixNames: string[] = allBirdsNames.filter((name, index) => index < 6);
    const arrayListState: string[] = new Array(6).fill('');
    const [activeListClass, setActiveListClass] = useState(arrayListState);
    const isCorrectBird = () => {
        return currentBird.name !== selectBird.name
    }
    const checkBird = (event: any) => {
        const targetData = event.target.dataset;
        if (targetData.name === currentBird.name) {
            activeListClass.map(() => {
                activeListClass[targetData.targetIndex] = ' correct';
                return setActiveListClass(activeListClass);
            })
            correctSound.play().then();
            selectNewBird(currentBird);
        } else {
            activeListClass.map(() => {
                activeListClass[targetData.targetIndex] = ' error';
                return setActiveListClass(activeListClass);
            })
            errorSound.play().then();
            const selectBirdArr = currentBird.otherBirdsInCategory.filter((currentBird: any) =>
                currentBird.name === targetData.name);
           selectNewBird(...selectBirdArr);
        }
    }
    const firstSixListItems: JSX.Element[] = firstSixNames.map((name: string, index) =>
        <li onClick={isCorrectBird() ? checkBird : isCorrectBird}
            className='answers_item'
            key={name}
            data-target-index={index}
            data-name={name}>
            <span className={'answers_item__marker' + activeListClass[index]}
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

const mapDispatchToProps = {
    selectNewBird,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptionsBlock);
