import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../page/MainPage";
import ErrorPage from "../page/ErrorPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/505" component={ErrorPage} />
    </Switch>
  );
};
export default Routes;
