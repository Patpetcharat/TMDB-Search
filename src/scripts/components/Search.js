import React from 'react'

export default React.createClass({
	render() {
		const { searchTerm } = this.props.params
		return (
			<div>
				<h2>searchTerm: {searchTerm}</h2>
			</div>
		)
	}
})

