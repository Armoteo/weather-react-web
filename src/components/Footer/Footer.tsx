import React from 'react';
import style from './Footer.module.scss';


interface HeaderProps {
   
}

export class Footer extends React.Component<HeaderProps>{
    render(){
        return(
            <div className={style.Footer}>
                <h2>Footer</h2>
            </div>
        )
    }
}