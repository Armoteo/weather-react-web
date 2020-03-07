import React from 'react';
import style from './CityWeather.module.scss';
import IconWeather from '../IconWeather/IconWeather';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getList } from '../../store/CityWeather/selectors';
import { fetchWeather } from '../../store/CityWeather';


interface CityWeatherProps {
    city?:string;
    icon?:string;
    temp?:string;
    description?:string;
    temp_min?:string;
    temp_max?:string;
    list?:any;
    location?:{
      longitude?:string;
      latitude?:string;
    }
    fetchWeather:(data:any)=>void;
}

class CityWeather extends React.Component<CityWeatherProps>{

componentDidMount(){
this.props.fetchWeather(this.props.location);
}

private renderComponent = () =>{

  let listWeather = this.props.list;
  
 return this.props.list?<div className={style.Content}>
  <h2>Погода в {listWeather!.name}</h2>
 <div className={style.Icon}>
 {/* <IconWeather icon={listWeather!.weather[0].icon} /> */}
 {/* <span>{listWeather!.main.temp}</span> */}
 </div>
 {/* <span>Сегодня {listWeather!.weather[0].description}</span>
 <span>Мин. температура {listWeather!.main.temp_min}</span>
 <span>Макс. температура {listWeather!.main.temp_max}</span> */}
  </div>:null
};

    render(){
        const url = '';
        return(
          <div className={style.GeoCity}>
           <img src={url} alt='city'/>
          {this.renderComponent()}
          </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
      list:getList(state)
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      fetchWeather: (data:any)=>dispatch(fetchWeather(data))
    };
  };
  
  const ConnectedCityWeather = connect(mapStateToProps,
    mapDispatchToProps)(CityWeather);
  
  export { ConnectedCityWeather as CityWeather };