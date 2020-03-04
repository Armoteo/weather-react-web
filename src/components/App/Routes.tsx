import React from "react";
import { BoardsWeather } from "../BoardsWeather";
import { RouteChildrenProps} from "react-router-dom";
import { NotFound } from "../NotFound";
import { Header } from "../Header";


export enum ROUTES_URLS {
    HOME = '/',
    NOT_FOUND = '/404'
}

export interface AppRoute {
    path: ROUTES_URLS,
    render: (props: any) => any,
    title?: string,
    exact?: boolean,
    isHidden?: boolean,
    id?: string
}

export const routes: Array<AppRoute> = [

    {
        path: ROUTES_URLS.HOME,
        render: (props: RouteChildrenProps) =>
            <div>
                <Header/>
                <BoardsWeather {...props} />
            </div>,
        title: 'home'
    },
    {
        path: ROUTES_URLS.NOT_FOUND,
        isHidden: true,
        render: (props: RouteChildrenProps) => <NotFound {...props} />,
    }
]