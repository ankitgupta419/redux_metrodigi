import React, { Component, PropTypes } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login-component';
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
	responseFacebook (response) {
	    // console.log(response);
	    if(response.accessToken){
	    	let userDetails={
	    	id:response.id,
	    	name:response.name,
	    	email:response.email,
	    	profile_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNx4GSwVZfRnSAO02_oPp7sSJIZyln78XL7fAr4fw1BiL9gzyOA"
		    }
		    let token = jwt.sign(userDetails,'metrodigi');
		    sessionStorage.setItem('loggedUser',token);
					browserHistory.push('/dashboard')
	    }
	    
	    //anything else you want to do(save to localStorage)...
	  }
	 responseGoogle (googleUser) {
	    var id_token = googleUser.getAuthResponse().id_token;
	    
	    console.log({accessToken: id_token});
	    console.log(googleUser);
	    //anything else you want to do(save to localStorage)...
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
		                <div className="loginSocial">
		                	<div className="loginSocialLabel">Login with social network</div>
		                	<div className="loginSocialButtons">
		                		 <div className="fbLoginButton">
							        <FacebookLogin socialId="147209742438639"
				                       language="en_US"
				                       scope="public_profile,email"
				                       responseHandler={this.responseFacebook.bind()}
				                       xfbml={true}
				                       fields="id,email,name"
				                       version="v2.5"
				                       className="facebook-login"
				                       buttonText="Login With Facebook"/>	
							    </div>
							    <div className="googleLoginButton">
						        	<GoogleLogin socialId="426442441964-ndv2iku1ofjk8u4rmmk6a0a97kgala23.apps.googleusercontent.com"
					                    className="google-login"
					                    scope="profile"
					                    responseHandler={this.responseGoogle.bind(this)}
					                    buttonText="Login With Google"/>
							    </div>
							    <div className="clr"></div>
		                	</div>
		                </div>
		                <div className="loginInputDiv2">
		                	<div className="loginSocialLabel">Login with registered details</div>
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
  // console.log("login",state)
  return {
    userLogin:state.userLogin
  };
}
export default connect(mapStateToProps, {loadUsers})(Login);