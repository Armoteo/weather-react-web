import React from 'react';
import style from './Button.module.scss';

export const Button = ({ onClick, children }: any) => {

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

