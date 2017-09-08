import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './Header/HeaderPage';
import * as loginActions from '../actions/loginActions';
import * as jwt from 'jsonwebtoken'; 
class App extends Component{
	componentWillMount(){
		let loggedUser = jwt.decode(sessionStorage.getItem('loggedUser'));
		this.props.getUserSuccess(loggedUser)
	}
	render(){
		return(
		    <div>
		        <Header/>
		        {this.props.children}
		    </div>
		);
	}
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default connect(null, loginActions )(App);