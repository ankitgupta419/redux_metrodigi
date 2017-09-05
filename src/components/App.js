import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Header from './Header/HeaderPage';
class App extends Component{
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

export default App;