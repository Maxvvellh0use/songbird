import React from "react";
import './next-button.scss';

interface Props {
    onClick: any;
    disabled: boolean
    value: string;
    className: string;
}

export const Button: React.FunctionComponent<Props> = ({onClick, disabled, value, className}) => {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>{value}</button>
    )
}

