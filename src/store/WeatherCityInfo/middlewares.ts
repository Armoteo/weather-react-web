import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
import { setWeatherCityInfo, setCityPhoto } from './actions';
import { request, requestPhoto } from '../http';


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

const fetchWorkerCityPhoto: any = ({
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
    requestPhoto({
      path: `/search/photos?query=${city}`,
      onSuccess: data => {
        dispatch(setCityPhoto(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};


const fetchWeatherInfoMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_WEATHER_INFO, fetchWorker)(next, dispatch);

  const fetchCityPhotoMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_PHOTO_CITY, fetchWorkerCityPhoto)(next, dispatch);


export const WeatherCityInfoMiddleware = [fetchWeatherInfoMiddleware, fetchCityPhotoMiddleware];

