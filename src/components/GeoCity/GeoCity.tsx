import React, { Component } from 'react';
import style from './GeoCity.module.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { CityWeather } from '../CityWeather';

interface GeoCityProps {

}

class GeoCity extends Component<GeoCityProps> {

componentDidMount(){

}

    render() {
        return (
            <div className={style.GeoCity}>
               <CityWeather/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      
    };
  };
  
  const ConnectedGeoWeather = connect(mapStateToProps,
    mapDispatchToProps)(GeoCity);
  
  export { ConnectedGeoWeather as GeoCity };




  