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
    clickBoardCity?: (city:string, id:any) => void;
    deleteBoard?:(city:any)=>void;
}

export class CityBoard extends React.Component<CityBoardProps>{

    private delete = ()=>{
        const { city,deleteBoard} = this.props; 
        deleteBoard!(city);
    }

   
    render() {
        const { id, city, temp, icon, description, clickBoardCity } = this.props;
        return (
            <div className={style.CityBoard} >
                <div className={style.Delete} onClick = {this.delete}>
                <i className="fas fa-trash-alt" ></i>
                </div>
                <Link to="/weather" onClick={(city: any) => clickBoardCity!(city ,id)}>
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
