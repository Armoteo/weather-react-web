import * as React from 'react';
import style from './BoardsWeather.module.scss';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getCityWeather, clearWeatherCity } from '../../store/BoardsWeather';
import { CityBoard } from '../CityBoard';
import { Header } from '../Header';
import { GeoCity } from '../GeoCity';
import { fetchWeather } from '../../store/BoardsWeather';
import { setToLocalStorage, getFromLocalStorage } from '../../Utils';

interface MainPageProps extends RouteChildrenProps {
  listWeather?: any;
  fetchWeather?: (data: any) => void;
  clearWeatherCity?: () => void;
}

interface stateBoardsWeatherProps {
  text?: string;
  listCity?: Array<string>;
  nameAddCity?: string;
}

const APP_STORAGE_CITY_LIST = 'APP_STORAGE_CITY_LIST';

class BoardsWeather extends React.PureComponent<MainPageProps, stateBoardsWeatherProps>{

  public state = {
    text: '',
    listCity: ['Киев', 'Днепр', 'Одесса', 'Николаев', 'Оттава', 'Вашингтон',
      'Лондон', 'Берлин', 'Париж', 'Пекин'],
    nameAddCity: ''
  };

  componentDidMount() {
    this.createListCity(this.fetchWeatherCity);
    // this.clearStorage();
  }

  public createListCity = (callback: any) => {
    const { listCity } = this.state;
    this.props.clearWeatherCity!();
    if (JSON.parse(this.getCityListStorage()!) !== null) {
      return callback(listCity.concat(JSON.parse(this.getCityListStorage()!)));
    } else {
      return callback(listCity);
    }
  }

  private fetchWeatherCity = (listCity: any) => {
    for (let i = 0; i < listCity!.length; i++) {
      this.props.fetchWeather!(listCity![i]);
    }
  };

  private clickBoardCity = (data: string, id: string) => {
    console.log(data, id);
  };

  private toggleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.target.value });
  };

  private toggleCityName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ nameAddCity: e.target.value });
  };

  private addCity = () => {
    let nameCityAdd = this.state.nameAddCity.trim();
    if (nameCityAdd !== '') {
      this.saveCityListStorage(nameCityAdd);
    } else {
      alert('Неверное имя города');
    }
    this.setState({ nameAddCity: '' });
  };

  private saveCityListStorage(text: string) {
    let arrCity: any, newArrayCity;
    if (JSON.parse(this.getCityListStorage()!) !== null) {
      arrCity = JSON.parse(this.getCityListStorage()!);
      if (arrCity.find((el: any) => el === text)) {
        alert('В списке есть данный город');
      } else {
        newArrayCity = JSON.stringify([...arrCity, text]);
        this.saveStorage(newArrayCity);
      }
    } else {
      arrCity = [];
      newArrayCity = JSON.stringify(arrCity.concat(text));
      this.saveStorage(newArrayCity);
    }
    this.createListCity(this.fetchWeatherCity);
  };

  private saveStorage = (data: string) => setToLocalStorage(APP_STORAGE_CITY_LIST, data);

  private clearStorage = () => {
    setToLocalStorage(APP_STORAGE_CITY_LIST, null);
    this.createListCity(this.fetchWeatherCity);
  };

  private getCityListStorage = () => getFromLocalStorage(APP_STORAGE_CITY_LIST);



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

  render() {
    return (
      <div className={style.BoardsWeather}>
        <Header
          toggleText={this.toggleText}
          toggleCityName={this.toggleCityName}
          addCity={this.addCity}
          clearStorage={this.clearStorage}
          value = {this.state.nameAddCity}
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
    listWeather: getCityWeather(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeather: (data: any) => dispatch(fetchWeather(data)),
    clearWeatherCity: () => dispatch(clearWeatherCity())
  };
};

const ConnectedBoardsWeather = connect(mapStateToProps,
  mapDispatchToProps)(BoardsWeather);

export { ConnectedBoardsWeather as BoardsWeather };