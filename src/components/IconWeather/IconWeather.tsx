import React from 'react';
import style from './IconWeather.module.scss';

interface IconProps{
    icon?:string;
}

const IconWeather = (props: IconProps) => {
    return (
        <div className={style.IconWeather}>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="ICON_Weather" />
        </div>
    )
};

export default IconWeather;