import * as React from 'react';
import style from './BoardsWeather.module.scss';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getCityList, getCityWeather, createCityList } from '../../store/BoardsWeather';
import { CityBoard } from '../CityBoard';
import { Header } from '../Header';
import { GeoCity } from '../GeoCity';
import { fetchWeather } from '../../store/BoardsWeather';
import { setToLocalStorage, getFromLocalStorage } from '../../Utils';

interface MainPageProps extends RouteChildrenProps {
  city?: Array<string>;
  listWeather?: any;
  fetchWeather?: (data: any) => void;
  createCityListNew?:()=>void;
}

interface stateBoardsWeatherProps {
  text?: string;
}

const APP_STORAGE_CITY_LIST = 'APP_STORAGE_CITY_LIST';

class BoardsWeather extends React.Component<MainPageProps, stateBoardsWeatherProps>{

  public state = {
    text: ''
  }

  componentDidMount() {
    this.createCityArr();
    this.fetchWeatherCity();
  }

  private createCityArr = ()=>{
    this.props.createCityListNew!();
  }

  private fetchWeatherCity() {
    const { city } = this.props;
    for (let i = 0; i < city!.length; i++) {
      this.props.fetchWeather!(city![i]);
    }
  }

  private clickBoardCity = (data: string, id: string) => {
    console.log(data, id);
  }

  private renderCityBoards = () => {
    const { listWeather } = this.props.listWeather;
    return this.props.listWeather ? listWeather.map((item: any, index: number) =>
      <CityBoard
        key={String(index)}
        city={item.name}
        id={item.id}
        temp={item.main.temp}
        icon={item.weather[0].icon}
        description={item.weather[0].description}
        clickBoardCity={this.clickBoardCity}

      />
    ) : 'error';
  };

  private toggleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.target.value });
  }

  private addCity =  () =>{
    this.saveCityListStorage('Токио');
  };

  private saveCityListStorage = (text:string)=>{
let arrCity:any, newArrayCity;
if(JSON.parse(this.getCityListStorage()!) !== null){
arrCity= JSON.parse(this.getCityListStorage()!);
if(arrCity.find((el:any)=>el === text)){
alert('Есть такой город');
}else{
  newArrayCity = JSON.stringify([...arrCity, text]);
  this.saveStorage(newArrayCity);
}
}else{
  arrCity = [];
  newArrayCity = JSON.stringify(arrCity.concat(text));
  this.saveStorage(newArrayCity);
}
this.createCityArr();
  };

private saveStorage = (data:string)=>setToLocalStorage(APP_STORAGE_CITY_LIST, data);

private clearStorage = ()=>{
  setToLocalStorage(APP_STORAGE_CITY_LIST, null);
  this.createCityArr();
};

private getCityListStorage = ()=> getFromLocalStorage(APP_STORAGE_CITY_LIST);

  render() {
    console.log(this.props.city);
    return (
      <div className={style.BoardsWeather}>
        <Header
          toggleText={this.toggleText}
          addCity={this.addCity}
          clearStorage={this.clearStorage}
        />
        <GeoCity />
        <div className={style.ContainerCityBoard}>
          {this.renderCityBoards()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    city: getCityList(state),
    listWeather: getCityWeather(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeather: (data: any) => dispatch(fetchWeather(data)),
    createCityListNew:() => dispatch(createCityList())
  };
};

const ConnectedBoardsWeather = connect(mapStateToProps,
  mapDispatchToProps)(BoardsWeather);

export { ConnectedBoardsWeather as BoardsWeather };