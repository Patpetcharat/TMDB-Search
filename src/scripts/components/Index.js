import React from 'react'
import SearchBar from './SearchBar'

if (module.hot) {
  module.hot.accept();
}

export default React.createClass({
	render() {
		return (
			<div>
				<SearchBar/>
				{this.props.children}
			</div>
		)
	}
})

