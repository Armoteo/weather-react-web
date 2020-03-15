import * as React from 'react';
import style from './BoardsWeather.module.scss';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getCityWeather, clearWeatherCity, getStatusHeader } from '../../store/BoardsWeather';
import { CityBoard } from '../CityBoard';
import { Header } from '../Header';
import { GeoCity } from '../GeoCity';
import { fetchWeather } from '../../store/BoardsWeather';
import { setToLocalStorage, getFromLocalStorage } from '../../Utils';
import { arrayCityUA } from '../../Utils/arrayCitiesUA';


interface BoardsWeatherProps extends RouteChildrenProps {
  listWeather?:any;
  cityName?: string;
  statusHeader?: any;
  fetchWeather?: (data: string) => void;
  clearWeatherCity?: () => void;
}

interface stateBoardsWeatherProps {
  textSearch?: string;
  listCity?: Array<string>;
  nameAddCity?: string;
  listCityArray?: Array<string>;
  arrayCity?: Array<string>;
}

const APP_STORAGE_CITY_LIST = 'APP_STORAGE_CITY_LIST';
const APP_STORAGE_CITY_ID = 'APP_STORAGE_CITY_ID';
const APP_STORAGE_CITY_NAME = 'APP_STORAGE_CITY_NAME';

class BoardsWeather extends React.PureComponent<BoardsWeatherProps, stateBoardsWeatherProps>{

  public state = {
    textSearch: '',
    listCity: [],
    arrayCity:[],
  };

  componentDidMount() {
    this.createListCity(this.fetchWeatherCity);
    this.createArrayCity();
  }

  public createListCity = (callback: any) => {
    const { listCity } = this.state;
    this.props.clearWeatherCity!();
    if (JSON.parse(this.getCityListStorage()!) !== null) {
      return callback(listCity.concat(JSON.parse(this.getCityListStorage()!)));
    } else {
      const listCityArray = ['Киев', 'Днепр', 'Одесса', 'Николаев', 'Оттава', 'Вашингтон',
        'Лондон', 'Берлин', 'Париж', 'Пекин'];
      this.saveStorage(APP_STORAGE_CITY_LIST, JSON.stringify(listCityArray));
      return callback(listCityArray);
    }
  }

  private fetchWeatherCity = (listCity: Array<string>) => {
    for (let i = 0; i < listCity!.length; i++) {
      this.props.fetchWeather!(listCity![i]);
    }
  };
  
  private createArrayCity =()=>{
    const newArrayCityList = arrayCityUA[0].regions.map(item => 
      item.cities.map(cities => 
        cities.name));
      let newArray = newArrayCityList.reduce((flat, current)=>flat.concat(current));
      this.setState({arrayCity:newArray});
  }

  private clickBoardCity = (city:string, id: string) => {
    this.saveStorage(APP_STORAGE_CITY_ID, id);
    this.saveStorage(APP_STORAGE_CITY_NAME, city);
  };

  private toggleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ textSearch: e.target.value });
  };

  private addCity = (text:string) => {
    let nameCityAdd = text.trim();
    if (nameCityAdd !== '') {
      this.saveCityListStorage(nameCityAdd);
    } else {
      alert('Неверное имя города');
    }
  };

  private saveCityListStorage(text: string) {
    let arrCity: Array<string>, newArrayCity:string;
    if (JSON.parse(this.getCityListStorage()!) !== null) {
      arrCity = JSON.parse(this.getCityListStorage()!);
      if (arrCity.find((el: any) => el === text)) {
        alert('В списке есть данный город');
      } else {
        newArrayCity = JSON.stringify([...arrCity, text]);
        this.saveStorage(APP_STORAGE_CITY_LIST, newArrayCity);
      }
    } else {
      arrCity = [];
      newArrayCity = JSON.stringify(arrCity.concat(text));
      this.saveStorage(APP_STORAGE_CITY_LIST, newArrayCity);
    }
    this.createListCity(this.fetchWeatherCity);
  };

  private saveStorage = (key: string, data: string) => setToLocalStorage(key, data);

 
  private deleteBoard = (city:string)=>{
   let oldArray = JSON.parse(this.getCityListStorage()!);
   let newArray = oldArray.filter((item:string )=> item !== city);
   this.saveStorage(APP_STORAGE_CITY_LIST, JSON.stringify(newArray));
   this.createListCity(this.fetchWeatherCity);
  }


  private getCityListStorage = () => getFromLocalStorage(APP_STORAGE_CITY_LIST);

  private filterSearchItem = (data: Array<string>) => {
    const { textSearch } = this.state;
    return data.filter((el: any) => {
      let name = el.name.toLowerCase();
      return name.indexOf(textSearch.toLowerCase()) !== -1;
    })
  };

  private renderCityBoards = () => {
    const { listWeather } = this.props.listWeather;
    let newArray = this.filterSearchItem(listWeather);
    return this.props.listWeather ? newArray.map((item: any, index: number) =>
      <CityBoard
        key={String(index)}
        city={item.name}
        id={item.id}
        temp={item.main.temp}
        icon={item.weather[0].icon}
        description={item.weather[0].description}
        clickBoardCity={this.clickBoardCity}
        deleteBoard={this.deleteBoard}
      />
    ) : 'error';
  };

  render() {
    return (
      <div className={style.BoardsWeather}>
        <Header
          toggleText={this.toggleText}
          addCity={this.addCity}
          statusHeader={this.props.statusHeader}
          arrayCity={this.state.arrayCity}
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
    listWeather: getCityWeather(state),
    statusHeader: getStatusHeader(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeather: (data: any) => dispatch(fetchWeather(data)),
    clearWeatherCity: () => dispatch(clearWeatherCity()),
  };
};

const ConnectedBoardsWeather = connect(mapStateToProps,
  mapDispatchToProps)(BoardsWeather);

export { ConnectedBoardsWeather as BoardsWeather };