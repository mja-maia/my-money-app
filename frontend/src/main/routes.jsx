import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Dashboad from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (

    <Router history={hashHistory}>
        <Route path="/" component={Dashboad} />
        <Route path="/billingcycles" component={BillingCycle} />
        <Redirect from="*" to="/" />
    </Router>

)