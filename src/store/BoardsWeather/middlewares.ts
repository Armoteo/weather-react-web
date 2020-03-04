import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';

const fetchBoardsWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {
  next(action);  
};

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.SET_CITY, fetchBoardsWorker)(next, dispatch);

export const boardsMiddleware = [fetchMiddleware];