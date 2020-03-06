import * as React from 'react';
import style from './BoardsWeather.module.scss';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getCityList, getCityWeather } from '../../store/BoardsWeather';
import { CityBoard } from '../CityBoard';
import { Header } from '../Header';
import { GeoCity } from '../GeoCity';
import { fetchWeather } from '../../store/BoardsWeather';

interface MainPageProps extends RouteChildrenProps {
  city?: Array<string>;
  listWeather?: any;
  fetchWeather?: (data: any) => void;
}

class BoardsWeather extends React.Component<MainPageProps>{

  componentDidMount() {
    this.fetchWeatherCity();
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

  render() {
    return (
      <div className={style.BoardsWeather}>
        <Header />
        <GeoCity />
        <div className={style.Container}>
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
    fetchWeather: (data: any) => dispatch(fetchWeather(data))
  };
};

const ConnectedBoardsWeather = connect(mapStateToProps,
  mapDispatchToProps)(BoardsWeather);

export { ConnectedBoardsWeather as BoardsWeather };