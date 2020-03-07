import { subscribe } from '../../Utils';
import { ACTION_TYPES } from './types';
// import { request } from '../http';

const fetchGeoWeatherWorker: any = ({
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
  //       dispatch(setWeatherGeo(data));
  //     },
  //     onError: error => {
  //       console.log(error);
  //     }
  //   })
  // );
  next(action);
};


const fetchWeatherGeoMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.GET_GEOLOCATION, fetchGeoWeatherWorker)(next, dispatch);


export const GeoWeatherMiddleware = [fetchWeatherGeoMiddleware];