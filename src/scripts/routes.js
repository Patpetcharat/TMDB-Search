import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Index from './components/Index'
import Home from './components/Home'
import Search from './components/Search'

if(module.hot) {
    // accept update of dependency
    module.hot.accept();
}

module.exports = (
	<Route path="/" component={Index}>
		<IndexRoute component={Home} />
		<Route path="search/:searchTerm" component={Search} />
		<Route path="search/:searchTerm/:pageNumber" component={Search} />
	</Route>
)
