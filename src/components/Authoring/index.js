import React, { Component, PropTypes } from 'react';
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
	render(){
		const isShowPanel=this.props.isShowPanel
		return(
			<div className="authoringContainer">
				<div className="leftToolbar">
					<div className="leftToolbarIcons"><img src={LocationImg} /></div>
					<div className="leftToolbarIcons"><img src={isShowPanel?DraftCircleImg:DraftInitialImg} onClick={this.showComment.bind(this)}/></div>	
				</div>
				<div className="pageContainer">
					<Page />	
				</div>	
				<If test={isShowPanel}>
					<div className="CommentsPanelContainer">
						<CommentsPanel />		
					</div>
				</If>
			</div>
		);
	}
}
AuthoringPage.propTypes = {
  isShowPanel: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    isShowPanel:state.sideBar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sideBarActions, dispatch)
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(AuthoringPage);