import React from 'react';
import {allRoutes} from "../routes/routes";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
  return (
    <Switch>
      {allRoutes.map(route =>
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
      )}
      <Redirect to='/all'/>
    </Switch>
  );
};

export default AppRouter;