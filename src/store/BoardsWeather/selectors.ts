import { AppState } from '..';

export const getCityList = (appState: AppState): Array<any> =>
  appState.city.listCity;