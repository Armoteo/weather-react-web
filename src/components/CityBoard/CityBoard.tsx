import React from 'react';
import style from './CityBoard.module.scss';


interface CityBoardProps {
    city?: string;
}

export class CityBoard extends React.Component<CityBoardProps>{
    render(){
        const {city} = this.props;
        return(
            <div className={style.CityBoard}>
                <h2>{city}</h2>
            </div>
        )
    }
}