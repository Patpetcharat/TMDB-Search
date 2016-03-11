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

	submit(){
		const path = `/search/${searchTerm}`
    	browserHistory.push(path)
	}

	render() {
		return (
			<div id="SearchBar">
				<input
					type="text"
					onChange={this.onChange}
				/>
				<button onClick={this.submit}>Search</button>
			</div>
		)
	}
}