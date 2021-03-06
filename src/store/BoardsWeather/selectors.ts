import { AppState } from '..';

export const getCityWeather = (appState: AppState): Array<any> =>
  appState.listWeather;

export const getStatusHeader = (appState: AppState): Array<any> =>
  appState.listWeather.checkStatusHeader;