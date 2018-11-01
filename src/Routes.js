import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoutes";
import Main from "./containers/Main"

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Login} props={childProps} />
        <AppliedRoute path="/main/:username" exact component={Main} props={childProps} />
        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>;