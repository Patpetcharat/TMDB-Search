import React from 'react'

export default class SearchBar extends React.Component {
	componentWillLeave(callback){
		console.log('will leave');
		setTimeout(callback, 3000);
	}
	render() {
		const { searchTerm, pageNumber } = this.props.params
		return (
			<div>
				<h2>searchTerm: {searchTerm}</h2>
				<h2>pageNumber: {pageNumber}</h2>
			</div>
		)
	}
}