import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  listWeatherInfo: Array<String>;
  checkStatusHeader?: boolean;
}

const INITIAL_STATE = {
  listWeatherInfo: [],
  checkStatusHeader: false
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY_WEATHER_INFO:
      return {
        ...state,
        // listWeatherInfo: [...state.listWeatherInfo, payload]
        listWeatherInfo: payload
      };
    default:
      return state;
  }
};