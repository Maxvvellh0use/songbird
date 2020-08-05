import React, { useState } from 'react';
import './header.scss';
import { birdsCategories } from "../../data/birdsCategories";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";

const BirdListItem: React.FunctionComponent<SystemState> = ({currentBird}) => {
    const arrayClassState: string[] = new Array(birdsCategories.length).fill('');
    const [activeListClass, setActiveListClass] = useState(currentBird.activeHeaderClass);
    console.log(currentBird)
    // const clickNavHandler = (event: any) => {
    //     activeListClass.map(() => {
    //         const newArrayClassState = [...arrayClassState];
    //         newArrayClassState[event.target.dataset.targetIndex] = ' bird_list_item__active';
    //         return setActiveListClass(newArrayClassState);
    //     })
    // }
    const categories = birdsCategories.map((birdsCategory, index) => {
        return <li key={birdsCategory}
                   data-target-index={index}
                   className={"bird_list_item" + currentBird.activeHeaderClass[index]}>{birdsCategory}</li>
    })
    return (
        <ul className="navigation_birds__list">
            {categories}
        </ul>
    )
}

export default connect(mapStateToProps)(BirdListItem)




