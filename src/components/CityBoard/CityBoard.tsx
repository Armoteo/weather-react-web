import React from 'react';
import style from './CityBoard.module.scss';
import IconWeather from '../IconWeather/IconWeather';
import { Link } from 'react-router-dom';




interface CityBoardProps {
    id?: string;
    city?: string;
    temp?: string;
    icon?: string;
    description?: string;
    clickBoardCity?: (city:any, id: any) => void;
}

export class CityBoard extends React.Component<CityBoardProps>{

    render() {
        const { id, city, temp, icon, description } = this.props;
        return (
            <div className={style.CityBoard} onClick={(data: any) => this.props.clickBoardCity!(city ,id)}>
                <Link to="/weather">
                    <h2>{city}</h2>
                    <span>Температура {temp}</span>
                    <div className={style.Content}>
                        <IconWeather icon={icon} />
                        <span>{description}</span>
                    </div>
                </Link>
            </div>
        )
    }
};
