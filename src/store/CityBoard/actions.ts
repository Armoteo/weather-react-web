import { ACTION_TYPES } from './types';

export const fetchWeather = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_WEATHER,
  payload: data
});

export const setWeatherCity = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY_WEATHER,
  payload: data
});
