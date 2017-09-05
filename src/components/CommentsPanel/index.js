import React, { Component } from 'react';
import CommentsViews from './CommentsViews';
import  searchIcon from './../../images/search_icon.png';

class CommentsPanel extends Component{
	constructor(){
		super();
		this.state={
			showPanel:false,
			searchValue:'',
			selectValue:'all',
			assigneeValue:'all',
			isShowGlobal:false,
			isFilter:false,
			sort:'new'
		}
	}
	openOptionsPanel(){
		this.setState({
			showPanel:true
		})
	}
	searchText(event){
		this.setState({
			searchValue:event.target.value
		})
	}
	handleSelectChange(event){
		// console.log(event.target.value)
		this.setState({
			selectValue:event.target.value
		})
	}
	assigneeChange(event){
		this.setState({
			assigneeValue:event.target.value
		})
	}
	checkGlobal(event){
		if(event.target.checked==true){
			this.setState({
				isShowGlobal:true
			})
		}
		else{

			this.setState({
				isShowGlobal:false
			})
			
		}
	}
	checkFilter(event){
		if(event.target.checked==true){
			this.setState({
				isFilter:true
			})
		}
		else{

			this.setState({
				isFilter:false
			})
			
		}
	}
	sortByDate(event){
		this.setState({
			sort:event.target.value
		})
	}
	render(){
		return(			
				<div>
					<div className="CommentsPanelContentManage">
	                    <div className="CommentsPanelContentLabel">Comments</div>
	                    <div className="CommentsPanelSearchDiv"><span><img src={searchIcon} /></span><input type="text" className="CommentsPanelSearchBox" onChange={this.searchText.bind(this)} /></div>
	                    <div className="showGlobalAndClear">
	                    	<div className="showGlobal"><input type="checkbox" onChange={this.checkGlobal.bind(this)} /><label>Show Global</label></div>
	                    	<div className="showGlobal"><input type="checkbox" onChange={this.checkFilter.bind(this)} /><label>Clear Filter</label></div>
	                    	<div className="clr"></div>
	                    </div>
	                    <div className="commentSortContainer">
		                    <div className="commentSortByTime">
		                    	<label>Sort By</label>
		                    	<select value={this.state.sort} onChange={this.sortByDate.bind(this)}>
								  <option value="old">Oldest to Newest</option>
								  <option value="new">Newest to oldest</option>
								</select>
								<div className="clr"></div>
		                    </div>
		                    <div className="commentSortByAssigne">
		                    	<label>Assignee</label>
		                    	<select value={this.state.assigneeValue} onChange={this.assigneeChange.bind(this)} >
								  <option value="all">All</option>
								  <option value="DonnaParker">DonnaParker</option>
								</select>
								<div className="clr"></div>
		                    </div>
		                    <div className="commentSortByStatus">
		                    	<label>Status</label>
		                    	<select value={this.state.selectValue} onChange={this.handleSelectChange.bind(this)} >
								  <option value="all">All</option>
								  <option value="open">Open</option>
								  <option value="resolved">Resolved</option>
								</select>
		                    </div>
		                    <div className="clr"></div>
	                    </div>
	                    
	                 </div>
	                 <CommentsViews searchValue={this.state.searchValue} selectValue={this.state.selectValue} assigneeValue ={this.state.assigneeValue} isShowGlobal={this.state.isShowGlobal} isFilter={this.state.isFilter} sort={this.state.sort} />
                </div>
		);
	}
}
export default CommentsPanel;