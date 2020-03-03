import { ACTION_TYPES } from './types';


export interface InitState {
}

export default function (state: InitState = {}, action: any) {
  switch (action.type) {
    case ACTION_TYPES.START:
      return {};
    case ACTION_TYPES.END:
      return {};
    default:
      return state;
  }
}
