import React from 'react';
import './header.scss';
import { birdsCategories } from "../../data/birdsCategories";

export const BirdListItem: () => JSX.Element[] = () => {
    return (
        birdsCategories.map(birdsCategory => {
           return <li key={birdsCategory} className="bird_list_item">{birdsCategory}</li>
        })
    )
}
