import React from "react";
import style from './Input.module.scss'


export const Input = ({ toggleText }: any) => {
    return <input className={style.Input}
        placeholder="search"
        onChange={toggleText}
    />;
};
