import React from 'react';
import style from './Header.module.scss';


interface HeaderProps {
    city?: string;
}

export class Header extends React.Component<HeaderProps>{
    render(){
        return(
            <div className={style.Header}>
                <h2>Header</h2>
            </div>
        )
    }
}