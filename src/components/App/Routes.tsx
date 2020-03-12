import React from "react";
import { BoardsWeather } from "../BoardsWeather";
import { RouteChildrenProps } from "react-router-dom";
import { CityWeatherInfo } from "../CityWeatherInfo";

export enum ROUTES_URLS {
    HOME = '/',
    CITY_WEATHER = '/weather'
}

export interface AppRoute {
    path: ROUTES_URLS,
    render: (props: any) => any,
    title?: string,
    exact?: boolean,
    isHidden?: boolean,
}

export const routes: Array<AppRoute> = [
    {
        path: ROUTES_URLS.HOME,
        exact: true,
        render: (props: RouteChildrenProps) => <BoardsWeather {...props} />,
        title: 'home'
    },
    {
        path: ROUTES_URLS.CITY_WEATHER,
        exact: false,
        render: (props: RouteChildrenProps) => <CityWeatherInfo {...props} />,
        title: 'weather'
    }
]