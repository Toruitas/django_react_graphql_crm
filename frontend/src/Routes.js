import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import { PrivateRoute } from "./_components";

// Code splitting with lazy loading https://reactjs.org/docs/code-splitting.html
const Home = lazy(() => import('./features/home/Home'));
const Login = lazy(() => import('./features/auth/Login'));
const Signup = lazy( () => import('./features/auth/Signup'));
const Dashboard = lazy(() => import('./features/dashboard/Dashboard'));
const SingleCustomer = lazy(() => import('./features/dashboard/singleCustomer/SingleCustomer'));
const CreateCustomer = lazy(() => import('./features/dashboard/createCustomer/CreateCustomer'));

// const Profile = lazy(() => import('./Accounts/Profile'));

export function Switcher () {
    return (
        <Switch>
            <Route exact path="/login/" component={props => <Login {...props}/>}/>
            <Route exact path="/signup/" component={props => <Signup {...props} />}/>
            <PrivateRoute exact path="/dashboard/" component={props => <Dashboard {...props} />}/>
            <PrivateRoute exact path="/customer/create/" component={props => <CreateCustomer {...props} />}/>
            <PrivateRoute exact path="/customer/:lookupId/" component={props => <SingleCustomer {...props} />}/>
            <Route exact path="/" component={props => <Home {...props}/>}/>
        </Switch>
    );
}
