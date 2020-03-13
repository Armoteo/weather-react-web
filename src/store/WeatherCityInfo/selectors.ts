import { AppState } from '..';

export const getCityWeather = (appState: AppState): Array<any> =>
  appState.listWeatherInfo.listWeatherInfo;

export const getStatusHeader = (appState: AppState): Array<any> =>
  appState.listWeatherInfo.checkStatusHeader;