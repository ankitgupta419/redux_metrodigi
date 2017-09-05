import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {loadComments} from '../../actions/commentActions';
import {showCommentEditBox} from '../../actions/sideBarActions';
import {default as If} from '../Functionals/If';
import OptionsPanel from './OptionsPanel';
import Reply from './Reply';
import ReplyTextAreaBox from './ReplyTextAreaBox';
import  triangleIcon from './../../images/triangle.png';
import  optionsIcon from './../../images/options.png';
class CommentsViews extends Component{
	constructor(props){
		super(props);
		this.state={
			showPanel:false,
			showId:null,
			showReplyCommentPanel:false,
			assigneeName:'DonnaParker',
			assigneeDefault:'DonnaParker',
			assignIndex:null
		}
		this.replyCommentPanel=this.replyCommentPanel.bind(this);
		this.cancelReplyCommentPanel=this.cancelReplyCommentPanel.bind(this);
		this.hideOptionPanel=this.hideOptionPanel.bind(this);
	
	}
	componentWillMount(){

		this.props.loadComments();
	}
	openOptionsPanel(id){
		// console.log(id)
		this.props.showCommentEditBox(false,null);
		this.setState({
			showPanel:true,
			showId:id
		})
	}
	replyCommentPanel(){
		// console.log("back")
		this.setState({
			showReplyCommentPanel:true,
			showPanel:false
		})
	}
	cancelReplyCommentPanel(){
		var self=this
		self.setState({
			showReplyCommentPanel:false
			
		})
	}
	hideOptionPanel(){
		var self=this
		self.setState({
			showPanel:false
		})
	}
	giveAssignee(event,key){
		this.setState({
			assigneeName:event.target.value,
			assignIndex:key
		})
	}
    findDate(createddate){	
		var date=new Date(createddate)
		var c=date.getMonth()
		var MonthsNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var getMonthName=MonthsNames[c];
		var getDate=date.getDate()
		getDate < 10 ? '0'+getDate : getDate;
		var hours = date.getHours();
		var minutes = date.getMinutes();
	  	var ampm = hours >= 12 ? 'pm' : 'am';
	  	var ampmBig=ampm.toUpperCase()
	  	hours = hours % 12;
	  	hours = hours ? hours : 12; // the hour '0' should be '12'
	  	minutes = minutes < 10 ? '0'+minutes : minutes;
	  	return getMonthName +'. '+getDate+', '+date.getFullYear()+' @'+hours+':'+minutes+' '+ampmBig
    }
    findName(shortName){
		var name = shortName;
		var initials = name.match(/\b\w/g) || [];
		initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
		return initials
    }
	render(){
		var self=this
		let sortedData=[]
		if(this.props.sort=='new' || this.props.isFilter==true){
			sortedData=this.props.comments.sort(function(a,b){
			  return new Date(b.createddate) - new Date(a.createddate);
			});
		}
		else{
			sortedData=this.props.comments.sort(function(a,b){
			  return new Date(a.createddate) - new Date(b.createddate);
			});
		}
		 
		const Comment=sortedData.map((commentData,index)=>{
			let searchValue=this.props.searchValue.toLowerCase();
			let createdUser=commentData.createdby.toLowerCase();
			let commentText=commentData.comment.text.toLowerCase();
			let concatText=createdUser + " " + commentText;
			
			if(this.props.isFilter==false){
				if(concatText.indexOf(searchValue)<0){
	              return null;
	            }
	            if(this.props.selectValue != 'all'){
	            	if(commentData.status.indexOf(this.props.selectValue)<0){
		              return null;
		            }
	            }
	            if(this.props.assigneeValue != 'all'){
	            	if(self.state.assigneeName.indexOf(this.props.assigneeValue)<0){
		              return null;
		            }
	            }
	            if(this.props.isShowGlobal){
	            	if(commentData.scope.indexOf('global')<0){
		              return null;
		            }
	            }
			}
			var newDate=this.findDate(commentData.createddate)
			var shortName=this.findName(commentData.createdby)
			if(commentData.paraId!=this.props.sideBarById.id){
				return null
			}
			return(
				<div className="userCommentContent" key={index}>
		    		<div className="userCommentStyleTriangle"><img src={triangleIcon} /></div>
		    		<div className="userCommentHeader">
		    			<div className="userCommentShortname"><div>{shortName}</div></div>
		    			<div className="userCommentNameDetails">
		    				<div className="userCommentNameLabel">{commentData.createdby}</div>
		    				<div className="userCommentDisplayDate">{newDate}</div>
		    			</div>
		    			<div className="userCommentOptions" onClick={this.openOptionsPanel.bind(this,commentData.id)}><img src={optionsIcon} /></div>
		    			<If test={this.state.showPanel && this.state.showId==commentData.id}>
							<OptionsPanel status={commentData.status} showPanel={this.state.showPanel} replyCommentPanel={this.replyCommentPanel} commentId={commentData.id} userCreate={commentData.createdby} hideOptionPanel={this.hideOptionPanel} data={commentData}/>
						</If>
		    			<div className="clr"></div>
		    		</div>
		    		<div className="userCommentSummary">{commentData.comment.text}</div>
		    		<div className="clr"></div>
		    		<div className="userCommentStatusContent">
		    			<p className="userCommentStatusState">Slate 1</p>
		    			<p className="userCommentStatusShow">
		    				<span className="userCommentStatusShowLabel">Assignee</span>
		    				<span className="userCommentStatusShowRes">
			    				<select value={index==this.state.assignIndex?this.state.assigneeName:this.state.assigneeDefault} onChange={this.giveAssignee.bind(this,event,index)} >
								  <option value="all">All</option>
								  <option value="DonnaParker">DonnaParker</option>
								  <option value="ankit">Ankit</option>
								</select>
		    				</span>
		    			</p>
		    			<div className="clr"></div>
		    			<p className="userCommentStatusShow">
		    				<span className="userCommentStatusShowLabel">Status</span><span className="userCommentStatusShowRes">{commentData.status}</span>
		    			</p>
		    			<div className="clr"></div>
		    			<p className="userCommentStatusShow">
		    				<span className="userCommentStatusShowLabel">Replies</span><span className="userCommentStatusShowRes">{commentData.replies.length}</span>
		    			</p>
		    			 <div className="clr"></div>
		    		</div>
		    		<div className="clr"></div>
		    		<Reply replyContent={commentData.replies}  />
		    		<If test={this.state.showReplyCommentPanel && this.state.showId==commentData.id}>
							<ReplyTextAreaBox cancelReplyCommentPanel={this.cancelReplyCommentPanel} commentId={commentData.id} />
					</If>
		    		<div className="clr"></div>
	    		</div>
				)
		})
		return(
			<div className="userCommentsContainer">
				{Comment}	
            </div>
		);
	}
}

CommentsViews.propTypes = {
  comments: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  // console.log("commentViews",state)
  return {
    comments: state.comments,
    sideBarById:state.sideBarById
  };
}

export default connect(mapStateToProps, {loadComments, showCommentEditBox})(CommentsViews);