import React, { useState } from 'react';
import './header.scss';
import { birdsCategories } from "../../data/birdsCategories";

export const BirdListItem: () => JSX.Element[] = () => {
    const arrayClassState: string[] = new Array(birdsCategories.length).fill('');
    const [activeListClass, setActiveListClass] = useState(arrayClassState);
    const clickNavHandler = (event: any) => {
        activeListClass.map(() => {
            const newArrayClassState = [...arrayClassState];
            newArrayClassState[event.target.dataset.targetIndex] = ' bird_list_item__active';
            return setActiveListClass(newArrayClassState);
        })
    }
    return (
        birdsCategories.map((birdsCategory, index) => {
            return <li onClick={clickNavHandler}
                       key={birdsCategory}
                       data-target-index={index}
                       className={"bird_list_item" + activeListClass[index]}>{birdsCategory}</li>
        })
    )
}
