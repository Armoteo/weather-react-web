import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import http, { httpMiddlewares, HTTPState } from './http';
import connectRouter from './router';
import { History } from 'history';
import city, { boardsMiddleware } from './BoardsWeather';
import listWeather from './BoardsWeather';
import list, { CityWeatherMiddleware } from './CityWeather';


export interface AppState {
    http: HTTPState;
    router?: any;
    city?: any;
    listWeather?: any;
    geolocation?: any;
    list?: any;
}
//@ts-ignore
const t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
    process.env.NODE_ENV !== 'production' && t ? t : compose;

// root
export default function configureStore(history: History) {
    const rootReducer = combineReducers<AppState>({
        router: connectRouter(history),
        http,
        city,
        listWeather,
        list
    });
    return createStore(
        rootReducer,
        undefined,
        composeEnhancers(
            applyMiddleware(
                ...httpMiddlewares,
                ...boardsMiddleware,
                ...CityWeatherMiddleware
            ))
    );
};
