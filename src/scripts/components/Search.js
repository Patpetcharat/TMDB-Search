import React from 'react'

export default React.createClass({
	render() {
		const { searchTerm, pageNumber } = this.props.params
		return (
			<div>
				<h2>searchTerm: {searchTerm}</h2>
				<h2>pageNumber: {pageNumber}</h2>
			</div>
		)
	}
})

