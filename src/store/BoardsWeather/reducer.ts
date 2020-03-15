import { Action } from '../types';
import { ACTION_TYPES } from './types';
import { weatherProps } from '../../components/model';

interface listWeatherProps extends weatherProps{
  
}
interface BoardsState {
  listWeather: Array<listWeatherProps>;
  checkStatusHeader?: boolean;
}

const INITIAL_STATE = {
  listWeather: [],
  checkStatusHeader: true
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY_WEATHER:
      return {
        ...state,
        listWeather: [...state.listWeather, payload]
      };
    case ACTION_TYPES.CLEAR_CITY_WEATHER:
      return {
        ...state,
        listWeather: []
      };
    default:
      return state;
  }
};