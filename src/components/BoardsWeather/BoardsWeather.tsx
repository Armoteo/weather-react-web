import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../store';

interface MainPageProps extends RouteChildrenProps {
    boards?: Array<any>;
    onFetchBoards?: () => void;
  }

  class BoardsWeather extends React.Component<MainPageProps>{
  
    componentDidMount() {
      }

render(){
    return(
        <div>
           <h2> Hellow World!!!!</h2>
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

  const ConnectedBoardsWeather = connect(mapStateToProps,
    mapDispatchToProps)(BoardsWeather);
  
  export { ConnectedBoardsWeather as BoardsWeather };