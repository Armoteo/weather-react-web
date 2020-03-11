import React from "react";
import style from './Input.module.scss'


export const Input = ({ toggleText, placeholder, value }: any) => {
    return <input className={style.Input}
        placeholder={placeholder}
        onChange={toggleText}
        value={value}
    />;
};
