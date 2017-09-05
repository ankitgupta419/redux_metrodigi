import React, { Component } from 'react';
import  menuIcon from './../../images/menu.png';
import  searchIcon from './../../images/search_icon.png';

class Header extends Component{
	render(){

		return(
			<div className="headerContainer">
				<div className="headerContent">
					<div className="headerMenuIcon"><img src={menuIcon} /> </div>
					<div className="headerTitleLabel">Project title goes here</div>
					<div className="headerSearchBox"><span><img className="searchImageIcon" src={searchIcon} /></span><span><input type="text" className="headePanelSearchBox" /></span></div>
					<div className="userProfileSection"></div>
				</div>
				<div className="headerEmptyBorderDiv"></div>
				
			</div>
		);
	}
}
export default Header;