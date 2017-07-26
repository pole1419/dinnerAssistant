import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './pages/Home'
import Menu from './pages/Menu'
import History from './pages/History'

ReactDOM.render(
	<Provider>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="menu" component={Menu}/>
				<Route path="history" component={History}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
