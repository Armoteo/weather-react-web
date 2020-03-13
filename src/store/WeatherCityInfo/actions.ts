import { ACTION_TYPES } from './types';

export const fetchWeatherInfo = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_WEATHER_INFO,
  payload: data
});

export const setWeatherCityInfo = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY_WEATHER_INFO,
  payload: data
});

export const fetchCityPhoto = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_PHOTO_CITY,
  payload: data
});

export const setCityPhoto = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_PHOTO_CITY,
  payload: data
});

