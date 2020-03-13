import { ACTION_TYPES } from './types';

export const fetchWeatherInfo = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_WEATHER_INFO,
  payload: data
});

export const setWeatherCityInfo = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY_WEATHER_INFO,
  payload: data
});


