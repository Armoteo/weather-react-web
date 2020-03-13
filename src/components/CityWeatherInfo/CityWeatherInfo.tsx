import React from 'react';
import style from './CityWeatherInfo.module.scss';
import { RouteChildrenProps } from 'react-router';
import { Header } from '../Header';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getStatusHeader, fetchWeatherInfo, getCityWeather } from '../../store/WeatherCityInfo';
import { getFromLocalStorage } from '../../Utils';
import IconWeather from '../IconWeather/IconWeather';

interface CityWeatherInfoProps extends RouteChildrenProps {
    statusHeader?: any;
    listWeatherInfo?: any;
    fetchWeatherInfo?: (data: any) => void;
}
// https://unsplash.com/documentation
const APP_STORAGE_CITY_ID = 'APP_STORAGE_CITY_ID';
class CityWeatherInfo extends React.Component<CityWeatherInfoProps> {



    componentDidMount() {
        this.getWeatherCity(this.fetchWeather);
    }


    private getWeatherCity = (callback: any) => {
        let citiID = getFromLocalStorage(APP_STORAGE_CITY_ID);
        return citiID ? callback(citiID) : console.log('ERROR');
    }

    private fetchWeather = (cityId: string) => {
        this.props.fetchWeatherInfo!(cityId)
    }


    private renderWeatherContent = () => {
        let list = this.props.listWeatherInfo;
        return typeof (this.props.listWeatherInfo.main) !== "undefined" ?
            <div className={style.WeatherContent}>
                <h1>{list.name}</h1>
                <span>В городе {list.name} будет {list.weather[0].description}, приятного дня!</span>
                <div className={style.Info}>
                    <div className={style.Icon}>
                        <IconWeather icon={list.weather[0].icon} />
                        <span>{list.main.temp} C</span>
                    </div>
                    <div className={style.ContentInfo}>
                        <span>Мин. температура {list.main.temp_min} C</span>
                        <span>Макс. температура {list.main.temp_max} C</span>
                    </div>
                    <div className={style.ContentInfo}>
                        <span>Скорость ветра {list.wind.speed} м/с</span>
                    </div>
                </div>
            </div> : <h3>Oooops!</h3>
    };


    render() {
        const { statusHeader } = this.props;
        return (
            <div className={style.CityWeather}>
                <div>
                    <Header
                        statusHeader={statusHeader}
                    />
                </div>
                <div className={style.PhotoCityContainer}>

                </div>
                {this.renderWeatherContent()}
            </div>
        )
    };
};

const mapStateToProps = (state: AppState) => {
    return {
        statusHeader: getStatusHeader(state),
        listWeatherInfo: getCityWeather(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchWeatherInfo: (data: any) => dispatch(fetchWeatherInfo(data))
    };
};

const ConnectedWeatherInfo = connect(mapStateToProps,
    mapDispatchToProps)(CityWeatherInfo);

export { ConnectedWeatherInfo as CityWeatherInfo };
