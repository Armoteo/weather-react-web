import React from 'react';
import style from './IconWeather.module.scss';

const IconWeather = (props: any) => {
    return (
        <div className={style.IconWeather}>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="ICON_Weather" />
        </div>
    )
};

export default IconWeather;