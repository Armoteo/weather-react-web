import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import http, { httpMiddlewares, HTTPState } from './http';
import { initMiddleware } from './initialization';
import connectRouter from './router';
import { History } from 'history';
import city, { boardsMiddleware } from './BoardsWeather';


export interface AppState {
    http: HTTPState;
    router?: any;
    city?: any;
    listBoard?: any;
    profile?:any;
    listCard?:any;
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
        city
    });
    return createStore(
        rootReducer,
        undefined,
        composeEnhancers(
            applyMiddleware(
                ...httpMiddlewares,
                ...initMiddleware,
                ...boardsMiddleware
            ))
    );
}
