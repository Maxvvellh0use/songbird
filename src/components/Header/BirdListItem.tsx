import React from 'react';
import './header.scss';
import { birdsCategories } from "../../data/birdsCategories";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import { mapStateToProps } from "../../redux/mapStateToProps";

const BirdListItem: React.FunctionComponent<SystemState> = ({currentBird}) => {
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




