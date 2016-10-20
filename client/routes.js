/**
 * Created by User on 10/19/2016.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute } from 'react-router';

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'

export default(
    <Router path="/" component={App}>
        <IndexRoute component={Greetings}/>
        <Router path="signup" component={SignupPage}/>
        <Router path="login" component={LoginPage}/>
    </Router>
)
