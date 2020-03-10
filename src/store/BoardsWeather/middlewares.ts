import { subscribe, getFromLocalStorage } from '../../Utils';
import { ACTION_TYPES } from './types';
import { setWeatherCity, saveCityList } from './actions';
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

const createListWorker: any = ({
  action,
  next,
  dispatch
}: {
  action: any;
  next: any;
  dispatch: any;
}) => {
  const APP_STORAGE_CITY_LIST = 'APP_STORAGE_CITY_LIST';
  console.log('СОЗДАЕМ СПИСОК')
  const data = JSON.parse(getFromLocalStorage(APP_STORAGE_CITY_LIST)!);
  if(data !== null){
    dispatch(saveCityList(data));
  }
 
};



const fetchWeatherMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER, fetchWorker)(next, dispatch);

  const createListCityMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.CREATE_LIST_SITY, createListWorker)(next, dispatch);


export const boardsMiddleware = [fetchWeatherMiddleware, createListCityMiddleware];

