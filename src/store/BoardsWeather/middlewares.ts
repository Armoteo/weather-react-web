import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
import { setWeatherCity } from './actions';
import { request } from '../http';


const fetchWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {
  const city = action.payload;
  dispatch(
    request({
      path: `/weather?q=${city}`,
      onSuccess: data => {
        dispatch(setWeatherCity(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};


const fetchWeatherMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER, fetchWorker)(next, dispatch);


export const boardsMiddleware = [fetchWeatherMiddleware];

