import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  listCity: Array<String>;
}

const INITIAL_STATE = {
  listCity: ['Киев', 'Днепр', 'Одесса', 'Николаев', 'Оттава', 'Вашингтон',
    'Лондон', 'Берлин', 'Париж', 'Пекин']
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_CITY:
      return { ...state, listCity: payload };
    default:
      return state;
  }
};