import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
import { request } from '../http';
import { setWeatherCityGEO } from '.';


const fetchCityWeatherWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {
  const location = action.payload;
  dispatch(
    request({
      path: `/weather?lat=${location.latitude}&lon=${location.longitude}`,
      onSuccess: data => {
        dispatch(setWeatherCityGEO(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};


const fetchWeatherCityMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER_CITY, fetchCityWeatherWorker)(next, dispatch);


export const CityWeatherMiddleware = [fetchWeatherCityMiddleware];