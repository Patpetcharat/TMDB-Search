import React from 'react'
import { browserHistory } from 'react-router'

import NavLink from './NavLink'

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let pathname = window.location.pathname;

		let pageNodes = [];

		let style = {};

		if(this.props.totalPages > 1){

		}else{
			style.display = "none";
		}
		
		for (let i = 0 ; i<this.props.totalPages ; i++) {
			let url;

			if(this.props.isIndex){
				url = pathname + '/' + (i+1);
			}else{
				pathname = pathname.substring(0, pathname.lastIndexOf('/')+1); // remove last portion of url
				url = pathname + (i+1);
			}

			pageNodes.push(
				<div className="page" key={i}><NavLink to={url}>{i+1}</NavLink></div>
			);
		}

		return (
			<div id="Pagination" className="pagination" style={style}>
				<h2>Page {this.props.currentPage}/{this.props.totalPages}</h2>
				{pageNodes}
			</div>
		)
	}
}