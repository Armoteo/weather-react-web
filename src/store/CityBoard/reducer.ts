import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  listWeather: Array<any>;
}

const INITIAL_STATE = {
  listWeather: []
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY_WEATHER:
      return { 
        ...state, listWeather: [...state.listWeather, payload]
        // ...state, listWeather: state.listWeather.concat(payload)
       };
    default:
      return state;
  }
};