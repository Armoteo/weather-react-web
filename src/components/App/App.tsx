import React from 'react';
// import style from './App.module.scss';
import { Switch, Route } from 'react-router';
import { routes, AppRoute} from './Routes';

export class App extends React.Component {

  private renderPage() {
    return (
        <main>
            <Switch>
                {routes.map(this.renderRoute)}
            </Switch>
        </main>
    )
};

private renderRoute = (route: AppRoute, index: number) => {
      return <Route
          exact={route.exact}
          key={index}
          path={route.path}
          render={(props) => route.render({ ...props })} />
  
};

  render() {
    return (
      <div>
         {this.renderPage()}
      </div>
    );
  }
}
