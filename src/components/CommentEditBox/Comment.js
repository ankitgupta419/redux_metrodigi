import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commentActions from '../../actions/commentActions';
import * as sideBarActions from '../../actions/sideBarActions';
import closeImg from '../../images/close.png'
class Comment extends Component{
	constructor(props){
		super(props);
		this.state={
			
			textVal:''
		}
	}
	componentDidMount(){
		if(this.props.commentEditBox.commentSummary==null){
			this.setState({
				textVal:''
			})
		}
		else{
			this.setState({
				textVal:this.props.commentEditBox.commentSummary.comment.text
			})
		}
		 let pos=this.props.sideBarById.position
		document.getElementById("editCommentContainer").style.top=pos+70+'px';
	}
	
	createComment(event){
		event.preventDefault();
		this.props.storeParagraphIds(this.props.eventId);
	   
		let comment=this.refs.commentText.value
		if(comment.length<3){
			alert("Comment should be more than 3 characters")
		}
		else{
			let date=new Date()
			let getDate=date.toISOString()
			let dateNum=date.getTime()
			
			let commentData={
	            "id": "COMMENT"+dateNum,
	            "schema": "http://schemas.pearson.com/wip-authoring/comments/1#/definitions/comments",
	            "scope": "global",
	            "comment": {
	               "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
	               "text": comment,
	            },
	            "category": "qa-content",
	            "createdby": "Anurag Pandey ",
	            "createddate": getDate,
	            "status": "open",
	            "replies": [],
	            "paraId":this.props.eventId
			}
			this.props.actions.sideBarActions.showCommentEditBox(false,null);
			this.props.actions.commentActions.createComment(commentData);	
		}
		
	}
	saveComment(event){
		event.preventDefault();
		let comment=this.refs.commentText.value
		let date=new Date()
		let getDate=date.toISOString()
		let summary =Object.assign({}, this.props.commentEditBox.commentSummary)
		summary['comment']['text']=comment;
		summary['createddate']=getDate
		let latestData=Object.assign({}, summary)
		this.props.actions.commentActions.editComment(latestData);
		//this.props.actions.sideBarActions.showCommentEditBox(false,latestData);
	}
	commentContainerClose(){
		this.props.actions.sideBarActions.showCommentEditBox(false,null);
	}
	input(event){
		this.setState({
			textVal:event.target.value
		})
	}
	render(){
		let self=this
		return(
			<div className="commentContainer" id="editCommentContainer">
				<div className="commentContainerHeader">
					<div className="commentContainerLabel">Comment</div>
					<div className="commentContainerClose" onClick={this.commentContainerClose.bind(this)}><img src={closeImg} /></div>
				</div>
				<div className="commentContainerText">
					<textarea className="commentContainerTextarea" ref="commentText" placeholder="Enter Comment" value={this.state.textVal} onChange ={this.input.bind(this)} />
				</div>
				<div className="commentContainerButton">
					{
						this.props.commentEditBox.commentSummary==null?(<input className="commentContainerSaveButton" type="submit" value="Save" onClick={this.createComment.bind(this)} />):(<input className="commentContainerSaveButton" type="submit" value="Save" onClick={this.saveComment.bind(this)} />)
					
					}
				</div>
				<div className="clr"></div>
			</div>
		);
	}
}

Comment.propTypes = {
  commentEditBox: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("comment",state)
  return {
    commentEditBox:state.commentEditBox,
    sideBarById:state.sideBarById
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      commentActions: bindActionCreators(commentActions, dispatch),
      sideBarActions: bindActionCreators(sideBarActions, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);