import { ACTION_TYPES } from './types';

export const getLocation = () => ({
  type: ACTION_TYPES.GET_GEOLOCATION
});
export const setLocation = () => ({
  type: ACTION_TYPES.SET_GEOLOCATION
});
