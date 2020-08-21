import React, { useReducer, useEffect } from "react";
import axios from "axios";
import altBirdImagePath from "../../../assets/img/alt_bird_image.png";

function reducer(currentSrc: string, action: any) {
    if (action.type === 'main image loaded') {
        return action.src;
    }
    if (!currentSrc) {
        return action.src;
    }
    return currentSrc;
}

export const useLoadImage = (src: string, fallbackSrc: string) => {
    const [currentSrc, dispatch] = useReducer(reducer, null);
    useEffect(() => {
        axios.get(src).then(res => {
            dispatch( { type: 'main image loaded', src });
        }).catch(err => {
            dispatch({ type: 'fallback image loaded', src: fallbackSrc });
        });
    }, [src, fallbackSrc]);

    return currentSrc;
}
