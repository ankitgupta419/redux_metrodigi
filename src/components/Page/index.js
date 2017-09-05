import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sideBarActions from '../../actions/sideBarActions';
import {default as If} from '../Functionals/If';
import Comment from '../CommentEditBox/Comment';
import DeleteImg from '../../images/delete.png';
import TextImg from '../../images/text.png';
import DraftImg from '../../images/draft.png';
import PinImg from '../../images/pin.png';

class Page extends Component{
	constructor(props){
		super(props);
		this.state={
			showCommentIcons:false,
			eventId:null,
			storeCreateId:[]
		}
		this.removeActive = this.removeActive.bind(this);
		this.attachButtons = this.attachButtons.bind(this);
		this.recursiveIteration = this.recursiveIteration.bind(this);
		this.storeParagraphIds = this.storeParagraphIds.bind(this);
		
	}
	componentDidMount(){
		this.clickDetect()
	}

	removeActive(){
		let element = document.getElementsByTagName("p"), index;
		for (index = element.length - 1; index >= 0; index--) {
			if(element[index].parentNode.contains(document.getElementById("leftSide"))){
		    	element[index].parentNode.removeChild(document.getElementById("leftSide"));
		    }
		    if(element[index].parentNode.contains(document.getElementById("rightSide"))){
		    	element[index].parentNode.removeChild(document.getElementById("rightSide"));
		    }
		    if(element[index].style.position=="relative"&& element[index].style.border=="2px solid rgb(28, 169, 219)" ){
		    	element[index].style.position="static";
		    	element[index].style.border="none";
		    	element[index].style.float=="none"
		    }
		    this.props.actions.showCommentEditBox(false,null); 
		}
	}
	recursiveIteration(elem){
		if(elem.parentNode.tagName == "P"){
			this.attachButtons(elem.parentNode);
		}else{
			if(elem.className != "todoContainer"){
				this.recursiveIteration(elem.parentNode);
			}
		}
	}
	attachButtons(elem){
	
		let self = this;
		let x = document.getElementsByTagName("p");
	    let myarray = Array.prototype.slice.call(x)
	    let eventId=myarray.indexOf(elem)

		let storeCreateId=this.state.storeCreateId
		this.removeActive();
		elem.style.border="2px solid #1ca9db";
		elem.style.width="100%";
		elem.style.float="left";
		elem.style.position="relative";
		elem.insertAdjacentHTML('beforebegin', "<span id=\"leftSide\" class=\"writeTodoLeftSide\"><img src="+TextImg+" /></span>");
		if(storeCreateId.indexOf(eventId)<0){
           elem.insertAdjacentHTML('afterend', "<span id=\"rightSide\" class=\"writeTodoRightSide\"><img src="+DeleteImg+" /><img src="+DraftImg+" id=\"comment\" /></span><div class=\"clr\"></div>");
	    }
	    else{
	    	elem.insertAdjacentHTML('afterend', "<span id=\"rightSide\" class=\"writeTodoRightSide\"><img class=\"pin\" src="+PinImg+" /><img src="+DeleteImg+" /><img src="+DraftImg+" id=\"comment\" /></span><div class=\"clr\"></div>");
	    }
		this.props.actions.showSideBar(true);
		this.props.actions.showSideBarById(eventId,elem.offsetTop);
		this.setState({
			eventId:eventId
		})
		document.getElementById("comment").addEventListener("click", displayBox);
		function displayBox() {
			self.props.actions.showCommentEditBox(true,null);
			// document.getElementById("editCommentContainer").style.top=elem.offsetTop+90+'px'
		}
	}

	clickDetect(){
		let x = document.getElementsByTagName("p");
		for(let i=0;i<x.length;i++){
			x[i].onclick=(event)=>{
				if(event.target.tagName === "P"){
					this.attachButtons(event.target);
				}
				else{
					this.recursiveIteration(event.target);
				}
			}
		}
	}
	showCommentIcons(key){
		this.setState({
			showCommentIcons:true,
			commentSequence:key
		})
	}
	storeParagraphIds(id){
		let storeCreateId=this.state.storeCreateId
		if(storeCreateId.indexOf(id)<0){
           storeCreateId.push(id)
	    }
	    
	    this.setState({
	    	storeCreateId
	    })
	}
	// createMarkup() {
	//   return {__html: '<p>ankitadssdsddssdsd ggffggf</p>'};
	// }
	
	render(){
		return(
		   		<div className="pageViewContent">
		   			<div className="pageSlateLabel">SLATE 1: The Ascent of Xyleme Sap</div>
			   		<div className="todoContainer" id="contentId">
			   			<div className="todoMain">
							{/*<div>
				   				<div style={{marginLeft:'5%'}}><div dangerouslySetInnerHTML={this.createMarkup()} /></div>
							</div>*/}
							
						
							<h2 className="writeTodoLHeaderLabel">The Ascent of Xyleme Sap</h2>		
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ipsum feugiat, ultrices tortor in, malesuada felis. Quisque molestie, elit quis fer mentum mollis, dui dolor tincidunt eros, ut porttitor lacus ante non nibh. Fuce dictum odio eu metus mollis fermentum. Sed non nulla erat. Praesent dictum nec metus sit amet imperdiet. Morbi laoreet tristique mi eget congue. Duis commodo fringilla pulvinar. Curabitur quis turpis aliquam, vulputate nisi ac, blandit nulla. Donec sed magna ut urna condimentum rutrum ut sit amet eros. Fusce orci erat, molestie ac nunc ac, tristique porta dolor. Nam rutrum tellus felis, non convallis sapien ultricies a. Nulla dictum odio sem, non tempus elit dictum vel.
							</p>	
							<div><br/><br/></div>
							<p>
								JS Foundation projects, including code contributions and all related materials, are each released under the terms of the individual licenses as noted in the project’s repository, or, if no separate license is specified, under the terms of the Apache v2.0 license (the “Applicable License”), with the exception of project documentation and sample code, in accordance with the JS Foundation IP Policy.
							</p>
							<div><br/><br/></div>
							<p>
								You understand and agree that the JS Foundation projects and your Contributions are public and that a record of the Contributions (including all metadata and personal information you submit with them) is maintained indefinitely and may be redistributed consisten.
							</p>	
							<div><br/><br/></div>
							<p>
								 Sed non nulla erat. Praesent dictum nec metus sit amet imperdiet. Morbi laoreet t<span>ristique mi eget congue. Duis commodo fringilla pulvinar. Curabitur quis turpis aliquam, vulputate nisi ac, blan</span>dit nulla. Donec sed magna ut urna condimentum rutrum ut sit amet eros. Fusce orci erat, molestie ac nunc ac, tristique porta dolor. Nam rutrum tellus felis, non convallis sapien ultricies a. Nulla dictum odio sem, non tempus elit dictum vel.
							</p>	
							
							<If test={this.props.commentEditBox.showCommentBox}>
								<Comment eventId={this.state.eventId} storeParagraphIds={this.storeParagraphIds}/>	
							</If>
							<div className="clr"></div>
						</div>
					</div>
				</div>
		);
	}
}
Page.propTypes = {
  commentEditBox: PropTypes.object.isRequired,
  sideBarById: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  // console.log("page",state)
  return {
    commentEditBox:state.commentEditBox,
    sideBarById:state.sideBarById
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sideBarActions, dispatch)
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
