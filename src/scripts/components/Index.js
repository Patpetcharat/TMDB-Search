import React from 'react'
import NavLink from './NavLink'
import Header from './Header'

// if (module.hot) {
//   module.hot.accept();
// }

export default React.createClass({
	render() {
		return (
			<div>
				<Header />
				<h1>React Router Tutorial</h1>
				<ul role="nav">
					<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})

