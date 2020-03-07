import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  list: Array<any>;
}

const INITIAL_STATE = {
  list: []
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY_WEATHER_GEO:
      return { ...state, list: payload };
    default:
      return state;
  }
};