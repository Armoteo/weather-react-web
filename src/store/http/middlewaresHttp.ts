import { ACTION_TYPES } from './types';
import { Worker, subscribe } from '../../Utils';

const { REACT_APP_API_DOMAIN, REACT_APP_API_KEY } = process.env;

const makeUrl = (path: string) => {
    let url = REACT_APP_API_DOMAIN + path + `&appid=${REACT_APP_API_KEY}&units=metric`;
    return url;
};

//GET
export const requestWorker: Worker<any> = async ({ action, next, getState }) => {
    const { path, onSuccess, method = "GET" } = action;
    const options: any = {
        method
    };
    const response = await fetch(makeUrl(path), options);
    if (response.status >= 400) {
        console.log("ERRR")
    }
    const data = await response.json();
    onSuccess(data);
};

const requestMiddlewaresHttp = ({ dispatch, getState }: any) =>
    (next: any) =>
        subscribe(ACTION_TYPES.REQUEST, requestWorker)(next,
            dispatch, getState);

export const httpMiddlewares = [requestMiddlewaresHttp];



