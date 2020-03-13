import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
import { setWeatherCityInfo } from './actions';
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
  const cityID = action.payload;
  dispatch(
    request({
      path: `/weather?id=${cityID}`,
      onSuccess: data => {
        dispatch(setWeatherCityInfo(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};


const fetchWeatherInfoMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER_INFO, fetchWorker)(next, dispatch);


export const WeatherCityInfoMiddleware = [fetchWeatherInfoMiddleware];

