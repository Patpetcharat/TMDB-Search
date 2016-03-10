import React from 'react'
import SearchBar from './SearchBar'
import ReactTransitionGroup from 'react-addons-transition-group'

if (module.hot) {
	module.hot.accept();
}

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<SearchBar/>
				<ReactTransitionGroup component="div">
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname
					})}
				</ReactTransitionGroup>

			</div>
		)
	}
}