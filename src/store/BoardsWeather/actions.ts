import { ACTION_TYPES } from './types';

// export const fetchBoards = () => ({
//   type: ACTION_TYPES.SET_CITY
// });

export const fetchWeather = (data: Array<any>) => ({
  type: ACTION_TYPES.FETCH_WEATHER,
  payload: data
});

export const setWeatherCity = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY_WEATHER,
  payload: data
});

export const createCityList = () => ({
  type: ACTION_TYPES.CREATE_LIST_SITY,
});

export const saveCityList = (data: Array<any>) => ({
  type: ACTION_TYPES.SET_CITY,
  payload: data
});