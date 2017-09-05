import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App'
import AuthoringPage from './components/Authoring';


export default (
    <Route path="/" component={App}>
	    <IndexRoute component={AuthoringPage}/>
	    
	</Route>
);