import React, { Component } from 'react';
import style from './GeoCity.module.scss';
import { AppState } from '../../store';
import { getList, fetchWeatherGEO } from '../../store/CityWeather';
import { connect } from 'react-redux';
import IconWeather from '../IconWeather/IconWeather';
import MyMap from '../Map/Map';
import { RouteChildrenProps } from 'react-router';

interface GeoCityProps extends RouteChildrenProps {
  list?: Array<any>;

  fetchWeather: (data: string) => void;
}

class GeoCity extends Component<any> {

  componentDidMount() {
    this.findMyLocation();
  }

  private findMyLocation() {
    if (!navigator.geolocation) {
      this.error();
    } else {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  }
  private success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = { latitude, longitude }
    this.props.fetchWeather(location);
  }
  private error() {
    console.log('error');
  }

  private renderComponent = () => {
    let list = this.props.list;
    return typeof (this.props.list.main) !== "undefined" ?

      <div className={style.Content}>
        <div className={style.Info}>
          <div className={style.Icon}>
            <IconWeather icon={list.weather[0].icon} />
            <span>{this.props.list.main.temp} C</span>
          </div>
          <span>Мин. температура {list.main.temp_min} C</span>
          <span>Макс. температура {list.main.temp_max} C</span>
          <span>Скорость ветра {list.wind.speed} м/с</span>
        </div>
        
        <h1>{list.name}</h1>

        <MyMap
          name={list.name}
          latitude={list.coord.lat}
          longitude={list.coord.lon}
        />

      </div> : 'null';
  }

  render() {
    return (
      <div className={style.GeoCity}>
        {this.renderComponent()}
      </div>

    )
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    list: getList(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeather: (data: any) => dispatch(fetchWeatherGEO(data))
  };
};

const ConnectedCityWeather = connect(mapStateToProps,
  mapDispatchToProps)(GeoCity);

export { ConnectedCityWeather as GeoCity };



