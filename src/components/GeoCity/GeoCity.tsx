import React, { Component } from 'react';
import style from './GeoCity.module.scss';

interface GeoCityProps {

}

export class GeoCity extends Component<GeoCityProps> {
    render() {
        return (
            <div className={style.GeoCity}>
                <h2>Geolocation our city</h2>
            </div>
        )
    }
}