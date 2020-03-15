import React from "react";
import style from './Input.module.scss'

interface inputProps{
    toggleText?:(event: any)=>void;
    placeholder?:string;
    value?:string;
}

export const Input = ({ toggleText, placeholder, value }: inputProps) => {
    return <input className={style.Input}
        placeholder={placeholder}
        onChange={toggleText}
        value={value}
    />;
};
