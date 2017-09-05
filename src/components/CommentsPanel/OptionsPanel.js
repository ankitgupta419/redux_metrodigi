import React, { Component } from 'react';
import {connect} from 'react-redux';
import {default as If} from '../Functionals/If';
import {deleteUserComment, changeCommentStatus} from '../../actions/commentActions';
import {showCommentEditBox} from '../../actions/sideBarActions';
class OptionsPanel extends Component{
	replyOnComment(){
		this.props.replyCommentPanel()
	}
	statusOnComment(key){
		this.props.hideOptionPanel()
		this.props.changeCommentStatus(key,this.props.commentId);
	}
	deleteOnComment(){
		this.props.hideOptionPanel()
		this.props.deleteUserComment(this.props.commentId,this.props.userCreate);
	}
	editOnComment(){
		this.props.hideOptionPanel()
		this.props.showCommentEditBox(true,this.props.data);
	
	}
	render(){
		return(
			<div>
				<div>
					<div className="optionsPanelContainer">
						<p onClick={this.replyOnComment.bind(this)}>Reply</p>
						
						{
							this.props.status=='open' ?(<p onClick={this.statusOnComment.bind(this,'resolve')}>Resolve</p>) : (<p onClick={this.statusOnComment.bind(this,'open')}>Open</p>)
						}
						<p onClick={this.editOnComment.bind(this)}>Edit</p>
						<p>Assign</p>
						<p onClick={this.deleteOnComment.bind(this)}>Delete</p>
					</div>
				</div>
			
				<div className="clr"></div>
			</div>
		);
	}
}
export default connect(null, {showCommentEditBox, deleteUserComment, changeCommentStatus})(OptionsPanel);
