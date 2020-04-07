import React from 'react';
import style from './App.module.scss';
import { Switch, Route } from 'react-router';
import { routes, AppRoute } from './Routes';


export const App = () => {

  const renderPage = () => {
    return (
      <main>
        <Switch>
          {routes.map(renderRoute)}
        </Switch>
      </main>
    )
  };

  const renderRoute = (route: AppRoute, index: number) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}
      render={(props) => route.render({ ...props })} />
  };

  return (
    <div className={style.App}>
      {renderPage()}
    </div>
  );
};
