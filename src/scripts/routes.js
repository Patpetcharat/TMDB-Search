import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Index from './components/Index'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'

if(module.hot) {
    // accept update of dependency
    module.hot.accept();
}

module.exports = (
	<Route path="/" component={Index}>
		<IndexRoute component={Home}/>
		<Route path="/repos" component={Repos}>
			<Route path="/repos/:userName/:repoName" component={Repo}/>
		</Route>
		<Route path="/about" component={About}/>
	</Route>
)
