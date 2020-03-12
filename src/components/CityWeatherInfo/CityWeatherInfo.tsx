import React from 'react';
import style from './CityWeatherInfo.module.scss';
import { RouteChildrenProps } from 'react-router';

interface CityWeatherInfoProps extends RouteChildrenProps {

}


export class CityWeatherInfo extends React.Component<CityWeatherInfoProps> {
    render() {
        return (
            <div className={style.CityWeather}>
                <h1>PAGE 2</h1>
                <h1>PAGE 2</h1>
                <h1>PAGE 2</h1>
                <h1>PAGE 2</h1>
            </div>
        )
    };
};

