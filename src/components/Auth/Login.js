import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {loadUsers} from '../../actions/loginActions';
import {default as If} from '../Functionals/If';
import * as jwt from 'jsonwebtoken';
import { browserHistory } from 'react-router';
class Login extends Component{
	
	constructor(props){
		super(props);
		
		this.state={
			wrongField:false
		}
	}
	componentDidMount(){
		// console.log(this)
		if(!this.props.children){
			this.context.router.push('/login')
		}
		
		this.props.loadUsers()
	}
	loginUser(){
		var allUserData=this.props.userLogin.slice();
		var input={
			email:this.refs.inputEmail.value,
			password:this.refs.inputPassword.value
		}
		// console.log(allUserData)
		for(var i=0;i<allUserData.length;i++){
			if(allUserData[i].emailid==input.email && allUserData[i].password==input.password ){
				let token = jwt.sign(allUserData[i],'metrodigi');

				sessionStorage.setItem('loggedUser',token);
				browserHistory.push('/dashboard')
			}
			else
			{
				this.setState({
					wrongField:true
				})
			}
		}
	}
	render(){
		const redReq={
			color:'red'
		}
		return(
		   <div className="loginContainer">
			    <div className="loginContent">
			        <div className="form_bg">
		                <h2 className="text-center">Login</h2>
		                <div className="loginInputDiv2">
		                	<div className="loginInputDiv">
		                    <input type="text" ref="inputEmail" className="form-control" id="userid" placeholder="User Email"  />
			                </div>
			                <div className="loginInputDiv">
			                    <input type="password" ref="inputPassword" className="form-control" id="pwd" placeholder="Password"  />
			                </div>
			                <If test={this.state.wrongField}>
			                	<div style={redReq}> * Username or password doesn't match</div>
			                </If>
		                </div>
		                
		                <div className="">
		                    <button type="submit" className="loginButton" id="login" onClick={this.loginUser.bind(this)}>Login</button>
		                </div>
		                <div className="signUpLabel"><Link to="/signup">Don't have an account? Sign Up!</Link></div> 
		                <div className="clr"></div> 
			        </div>
			    </div>
			</div>
		);
	}
}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};
Login.propTypes = {
  userLogin: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log("login",state)
  return {
    userLogin:state.userLogin
  };
}
export default connect(mapStateToProps, {loadUsers})(Login);