import { AppState } from '..';

export const getCityWeather = (appState: AppState): Array<any> =>
    appState.listWeather;