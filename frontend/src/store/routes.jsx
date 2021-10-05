import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/index";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Exercise1 from '../pages/Exercise1';
import Exercise2 from '../pages/Exercise2';
import Exercise3 from '../pages/Exercise3';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/app" component={Home} />
            <PrivateRoute path="/app/exercise1" component={Exercise1} />
            <PrivateRoute path="/app/exercise2" component={Exercise2} />
            <PrivateRoute path="/app/exercise3" component={Exercise3} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
