import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';


const fetchCityWeatherWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {
  // const city = action.payload;
  // dispatch(
  //   request({
  //     path: `/weather?q=${city}`,
  //     onSuccess: data => {
  //       dispatch(setWeatherCity(data));
  //     },
  //     onError: error => {
  //       console.log(error);
  //     }
  //   })
  // );
};


const fetchWeatherCityMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER_CITY, fetchCityWeatherWorker)(next, dispatch);


export const CityWeatherMiddleware = [fetchWeatherCityMiddleware];