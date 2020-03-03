import { ACTION_TYPES } from './types';
import { initEnd, initStart } from './actions';
import { subscribe } from '../../Utils/redux';


const initWorker = ({ action, dispatch, next }: any) => {
  dispatch(initStart());
  dispatch(initEnd());
  next(action);
};

const init = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.INIT, initWorker)(next, dispatch);
export const initMiddleware = [init];
