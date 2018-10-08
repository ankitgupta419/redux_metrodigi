import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {default as If} from '../Functionals/If';
class SignUp extends Component{
	
	render(){
	
		return(
			<div className="signUpContainer">
			    <div className="signUpContent">
			        <div className="form_bg">
		                <h2 className="text-center">Sign Up</h2>
		                <div className="loginInputDiv2">
		                	<div className="nameFieldWidth"> 
		                		<div className="nameField1"><input type="text" className="signup-control" placeholder="First Name"  /></div>
		                		<div className="nameField2"><input type="text" className="signup-control" placeholder="Last Name"  /></div>
		                		<div className="clr"></div>
		                	</div>
		                	<div className="nameField3"><input type="text" className="signup-control" placeholder="User Name"  /></div>
		                	<div className="nameField3"><input type="text" className="signup-control" placeholder="Email"  /></div>
			               	<div className="nameFieldWidth"> 
		                		<div className="nameField1"><input type="text" className="signup-control" placeholder="Password"  /></div>
		                		<div className="nameField2"><input type="text" className="signup-control" placeholder="Confirm Password"  /></div>
		                		<div className="clr"></div>
		                	</div>
							
		                </div>
		                <div className="">
								<button type="submit" className="loginButton" id="signup">Sign up</button>
						</div>
		   
		                <div className="clr"></div> 
			        </div>
			    </div>
			</div>
		);
	}
}

export default SignUp;