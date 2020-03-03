import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
import { request } from '../http';
import { setBoards } from './actions';

const fetchBoardsWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {


  dispatch(
    request({
      path: '/1/members/me/boards/',
      onSuccess: data => {
        dispatch(setBoards(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH, fetchBoardsWorker)(next, dispatch);

export const boardsMiddleware = [fetchMiddleware];