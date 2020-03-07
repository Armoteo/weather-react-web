import { ACTION_TYPES } from './types';

export const fetchWeather = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_WEATHER_CITY,
  payload: data
});

export const setWeatherCityGEO = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY_WEATHER_GEO,
  payload: data
});