import React from 'react';
import style from './App.module.scss';
import { Switch, Route, withRouter } from 'react-router';
import { routes, AppRoute } from './Routes';
import { connect } from 'react-redux';

class App extends React.Component {

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
      <div className={style.App}>
        {this.renderPage()}
      </div>
    );
  }
};

const mapDispatchProps = (dispatch: any) => {
  return {
  };
};

const AppWithRouter = withRouter(connect(undefined, mapDispatchProps)(App));
export { AppWithRouter as App };