import React from 'react';
import { Router, Route, IndexRoute ,Redirect, hashHistory } from 'react-router';

import App from './app.jsx'
import Dashboad from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (

    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboad}/>
            <Route path="billingcycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>

)