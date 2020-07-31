import React from "react";
import './next-button.scss';

interface Props {
    onClick: any;
    value: string;
    className: string;
}

export const Button: React.FunctionComponent<Props> = ({onClick, value, className}) => {
    return (
        <button className={className} onClick={onClick}>{value}</button>
    )
}

