import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLandingPage from "./pages/LandingPage"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainLandingPage} />

            <Route path="*" component={MainLandingPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;