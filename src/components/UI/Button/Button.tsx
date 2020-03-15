import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface ButtonProps{
    onClick?:()=>void
    children:ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {

    return (
        <div>
            <button
                className={style.Button}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
};

