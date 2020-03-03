import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
    listCity: Array<any>;
  selected: string;
}

const INITIAL_STATE = {
  listCity: [],
  selected: ''
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_BOARDS:
      return { ...state, listCity: payload };
    default:
      return state;
  }
};