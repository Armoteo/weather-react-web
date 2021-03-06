import React from 'react';
import style from './CityWeatherInfo.module.scss';
import { RouteChildrenProps } from 'react-router';
import { Header } from '../Header';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getStatusHeader, fetchWeatherInfo, getCityWeather, fetchCityPhoto, getCityArray } from '../../store/WeatherCityInfo';
import { getFromLocalStorage } from '../../Utils';
import IconWeather from '../IconWeather/IconWeather';
import image from '../resource/city_error.png';

interface CityWeatherInfoProps extends RouteChildrenProps {
    statusHeader?: any;
    listWeatherInfo?: any;
    arrayCityPhoto?:any;
    fetchWeatherInfo?: (data: string) => void;
    fetchCityPhoto?: (data: string) => void;
}

const APP_STORAGE_CITY_ID = 'APP_STORAGE_CITY_ID';
const APP_STORAGE_CITY_NAME = 'APP_STORAGE_CITY_NAME';

class CityWeatherInfo extends React.Component<CityWeatherInfoProps> {



    componentDidMount() {
        this.getWeatherCity(this.fetchWeather);
    }


    private getWeatherCity = (callback: any) => {
        let citiID = this.getStorage(APP_STORAGE_CITY_ID);
        return citiID ? callback(citiID) : console.log('ERROR');
    };

    private fetchWeather =  (cityId: string) => {
        this.props.fetchWeatherInfo!(cityId);
        let city = this.getStorage(APP_STORAGE_CITY_NAME);
        city? this.props.fetchCityPhoto!(city):console.log('ERROR');
    };

    private getStorage = (data:string)=>{
        return getFromLocalStorage(data);
    };
   
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


    // results
    private renderPhotoCity =() =>{
        const {arrayCityPhoto } = this.props; 
        const alt = 'photo city';

        if(arrayCityPhoto.total !== 0 && arrayCityPhoto.total !== undefined){
        let random = Math.floor(Math.random()*(arrayCityPhoto.results.length));

        let urlMy = arrayCityPhoto.results[random].urls.raw;
        return <div className={style.PhotoCityContainer}>
               <img src={urlMy} alt={alt}/>
               </div>  
            }else{
                let urlMy = image;
                return <div className={style.PhotoCityContainer}>
                <img src={urlMy} alt={alt}/>
            </div>
            }
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
                <div className={style.Container}>
                {this.renderPhotoCity()}
                {this.renderWeatherContent()}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state: AppState) => {
    return {
        statusHeader: getStatusHeader(state),
        listWeatherInfo: getCityWeather(state),
        arrayCityPhoto:getCityArray(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchWeatherInfo: (data: any) => dispatch(fetchWeatherInfo(data)),
        fetchCityPhoto: (data: any) => dispatch(fetchCityPhoto(data)),
    };
};

const ConnectedWeatherInfo = connect(mapStateToProps,
    mapDispatchToProps)(CityWeatherInfo);

export { ConnectedWeatherInfo as CityWeatherInfo };
