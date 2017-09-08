import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App'
import AuthoringPage from './components/Authoring';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import * as jwt from 'jsonwebtoken'; 
const checkAuth=function check_auth(nextState, replace) {
	let loggedUser = jwt.decode(sessionStorage.getItem('loggedUser'));
  	if (!loggedUser || loggedUser === null) {
	    replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    })
	}
}

const routes = (
    <Route>
	    <Route path="/" component={Login}>
		    <Route path="login" component={Login} />
		</Route>
		<Route path="/signup" component={SignUp} />
	    <Route path="/dashboard" component={App} onEnter={checkAuth}>
		    <IndexRoute component={AuthoringPage} />
		</Route>
	</Route>
);
export default routes;