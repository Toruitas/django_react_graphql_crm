import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import { PrivateRoute } from "./_components";

// Code splitting with lazy loading https://reactjs.org/docs/code-splitting.html
// const Home = lazy(() => import('./Home/Home'));
// const Login = lazy(() => import('./Authentication/Login'));
const Signup = lazy( () => import('./features/auth/Signup'));
// const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
// const Profile = lazy(() => import('./Accounts/Profile'));

export function Switcher () {
    return (
        <Switch>
            {/* <Route exact path="/login/" component={props => <Login {...props}/>}/> */}
            <Route exact path="/signup/" component={props => <Signup {...props} />}/>
            {/* <PrivateRoute exact path="/dashboard/" component={props => <Dashboard {...props} />}/> */}
            {/* <PrivateRoute exact path={"/profile/"} component={props => <Profile {...props}/>}/> */} 
            {/* <Route exact path="/" component={props => <Home {...props}/>}/> */}
        </Switch>
    );
}