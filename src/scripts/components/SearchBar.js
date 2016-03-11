import React from 'react'
import { browserHistory } from 'react-router'

let searchTerm = "";

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	onChange(e){
		searchTerm = e.target.value;
	}

	submit(e){
		e.preventDefault();
		const path = `/search/${searchTerm}`
    	browserHistory.push(path)
	}

	render() {
		return (
			<div id="SearchBar">
				<form className="form-search" onSubmit={this.submit}>
					<input
						type="text"
						onChange={this.onChange}
						className="input-search"
					/>
				</form>
				
				<button className="btn-search" onClick={this.submit}>Search</button>
			</div>
		)
	}
}