import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Index from './pages/Index';
import Menu from './pages/Menu'
import History from './pages/History'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="/index" component={Index} />
                <Route path="/menu" component={Menu} />
                <Route path="/history" component={History} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
