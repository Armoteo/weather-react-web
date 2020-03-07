import React from 'react';
import style from './CityWeather.module.scss';
import IconWeather from '../IconWeather/IconWeather';
import { AppState } from '../../store';
import { connect } from 'react-redux';

interface CityWeatherProps {
    city?:string;
    icon?:string;
    temp?:string;
    description?:string;
    temp_min?:string;
    temp_max?:string;
}

class CityWeather extends React.Component<CityWeatherProps>{
    render(){
        const {city, icon, temp, temp_min, temp_max, description} = this.props;
        const url = '';

        return(
<div className={style.GeoCity}>
  <img src={url} alt='city'/>
  <div className={style.Content}>
  <h2>Погода в {city}</h2>
  <div className={style.Icon}>
  <IconWeather icon={icon} />
  <span>{temp}</span>
  </div>
  <span>Сегодня {description}</span>
  <span>Мин. температура {temp_min}</span>
  <span>Макс. температура {temp_max}</span>
  </div>
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
  
  const ConnectedCityWeather = connect(mapStateToProps,
    mapDispatchToProps)(CityWeather);
  
  export { ConnectedCityWeather as CityWeather };