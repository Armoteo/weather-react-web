import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  listCity: Array<String>;
  listWeather: Array<String>;
}

const INITIAL_STATE = {
  listCity: ['Киев', 'Днепр', 'Одесса', 'Николаев', 'Оттава', 'Вашингтон',
    'Лондон', 'Берлин', 'Париж', 'Пекин'],
  listWeather: []
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY:
      return { ...state, listCity: payload };
    case ACTION_TYPES.SET_CITY_WEATHER:
      return {
        ...state, listWeather: [...state.listWeather, payload]
        // ...state, listWeather: state.listWeather.concat(payload)
      };
    default:
      return state;
  }
};