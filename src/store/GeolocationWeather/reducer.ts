import { Action } from '../types';
import { ACTION_TYPES } from './types';

interface BoardsState {
  geolocation:{
    longitude ?: string;
    latitude?: string;
  }
}

const INITIAL_STATE = {
  geolocation:{
    longitude :'',
    latitude:''
  }
};

export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTION_TYPES.SET_GEOLOCATION:
      return { ...state, geolocation: payload };
    default:
      return state;
  }
};