import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  listCity: Array<String>;
}

const INITIAL_STATE = {
  // listCity: ['Київ', 'Дніпро', 'Одеса', 'Кропивницький',
  //   'Миколаїв', 'Вашингтон', 'Оттава', 'Лондон', 'Берлін',
  //   'Париж']
  listCity: ['Kiev', 'Dnipro', 'Odesa']
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