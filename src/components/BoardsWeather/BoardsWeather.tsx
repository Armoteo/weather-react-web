import * as React from 'react';
import style from './BoardsWeather.module.scss';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { getCityList } from '../../store/BoardsWeather/selectors';
import { CityBoard } from '../CityBoard';

interface MainPageProps extends RouteChildrenProps {
    city?: Array<string>;
  }

  class BoardsWeather extends React.Component<MainPageProps>{
  
private renderCityBoards = ()=>
this.props.city?.map((item, index)=>
  <CityBoard 
  key={index} 
  city={item}
  />
);

render(){
    return(
        <div className={style.BoardsWeather}>
          <div className={style.Container}>
          {this.renderCityBoards()}
          </div>
        </div>
    )
}

  }

  const mapStateToProps = (state: AppState) => {
    return {
      city:getCityList(state)
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
     
    };
  };

  const ConnectedBoardsWeather = connect(mapStateToProps,
    mapDispatchToProps)(BoardsWeather);
  
  export { ConnectedBoardsWeather as BoardsWeather };