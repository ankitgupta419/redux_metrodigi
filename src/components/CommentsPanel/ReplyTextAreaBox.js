import React, { Component } from 'react';
import {connect} from 'react-redux';
import {saveUserReply} from '../../actions/commentActions';
import * as commentActions from '../../actions/commentActions';
class ReplyTextAreaBox extends Component{
	saveReplyComment(event){
		event.preventDefault();
		let replyComment=this.refs.replyText.value
		// let d=new Date()
		// console.log(comment)
		var replyCommentData={

          	 "id": "COMMENT123124121",
               "comment": {
                  "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                  "text": replyComment
               },
               "createdby": "vishu",
               "createddate": "2017-05-19T08:00:00Z"
		}
		// this.props.actions.saveComment(commentData);
		this.props.cancelReplyCommentPanel()
		this.props.saveUserReply(replyCommentData,this.props.commentId);
	}
	cancel(){
		this.props.cancelReplyCommentPanel()
	}
	render(){
		var self=this
	
		return(			
				<div className="userCommentRepliesContainer">
				
					<div className="userCommentReplyView">
	    				<div className="userCommentReplyNumber">Reply</div>
	    				<div className="userCommentReplySummary1">
	    					<textarea className="userCommentReplyTextarea" ref="replyText" placeholder="Enter Comment"/>
	    				</div>
	    					
						<div className="userCommentReplyButton">
					
	    					<p onClick={this.saveReplyComment.bind(this)}>Reply</p>
	    					<p className="userCommentReplyCancel" onClick={this.cancel.bind(this)}>Cancel</p>
	    					<div className="clr"></div>
	    				</div>
						
	    				
	    				
	    				<div className="clr"></div>
	    			</div>
            
            	
            	</div>
		);
	}
}

export default connect(null, commentActions )(ReplyTextAreaBox);