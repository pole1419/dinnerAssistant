import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import style from './assets/style/app.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Menu from './pages/Menu'
import History from './pages/History'
// import NotFound from './pages/NotFound'

const Test = () => (
  <div>teste page</div>
)

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Route component={Header} />
        <div className={style.content}>
          <Switch>
            <Route path="/home" component={Home}/>
             <Redirect from="/" to="/home" />
            {/* <Route path="/menu" component={Menu}/> */}
            <Route path="/history" component={History}/>
            <Route path="/test" component={Test}/>
          </Switch>
        </div>
        <Route component={Footer} />
      </div>
    );
  }
}

export default App;
