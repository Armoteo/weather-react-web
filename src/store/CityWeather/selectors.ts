import { AppState } from '..';

export const getList = (appState: AppState): Array<any> =>
  appState.list;
