import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sideBarActions from '../../actions/sideBarActions';
import {default as If} from '../Functionals/If';
import CommentsPanel from '../CommentsPanel';
import Page from '../Page';
import DraftCircleImg from '../../images/draft_circle.png';
import DraftInitialImg from '../../images/draft_initial.png';
import LocationImg from '../../images/location.png';
class AuthoringPage extends Component{
	showComment(){
		this.props.actions.showSideBar(!this.props.isShowPanel);
	 }
	 logOutUser(){
	 	sessionStorage.removeItem('loggedUser');
		browserHistory.push('/login');
		this.props.actions.showProfileBar(false);
	 }
	render(){
		const isShowPanel=this.props.isShowPanel;
		const isShowProfile=this.props.isShowProfile
		const getUser=this.props.getUser
		return(
			<div className="authoringContainer">
				<div className="leftToolbar">
					{/*<div className="leftToolbarIcons"><img src={LocationImg} /></div>*/}
					<div className="leftToolbarIcons"><img src={isShowPanel?DraftCircleImg:DraftInitialImg} onClick={this.showComment.bind(this)}/></div>	
				</div>
				<div className={isShowPanel?"pageContainer open":"pageContainer"}>
					<Page />	
				</div>	
				<If test={isShowPanel}>
					<div className={isShowPanel?"CommentsPanelContainer open":"CommentsPanelContainer"}>
						<CommentsPanel />		
					</div>
				</If>
				<If test={isShowProfile}>
					<div className="profileContainer">
							<div className="profileDetails">
								<div className="profilelabel">signed in as</div>
								<div className="profileName">{getUser.name}</div>
							</div>
							<div className="profileLogout" onClick={this.logOutUser.bind(this)}>Logout</div>
						</div>
				</If>
				
			</div>
		);
	}
}
AuthoringPage.propTypes = {
  isShowPanel: PropTypes.bool.isRequired,
  isShowProfile: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  // console.log("Auth",state)
  return {
    isShowPanel:state.sideBar,
    isShowProfile:state.profileBar,
    getUser:state.getUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sideBarActions, dispatch)
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(AuthoringPage);