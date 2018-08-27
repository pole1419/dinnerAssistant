import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './assets/style/Public.css'
import style from './assets/style/App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
// import Menu from './pages/Menu'
// import History from './pages/History'
// import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return (
      <div className={style.app2}>
        <Header />
        <div className={style.content}>
          <Switch>
            {/* <Route exec path="/" component={Index}/> */}
            {/* <Route path="/menu" component={Menu}/>
            <Route path="/history" component={History}/>
            <Route component={NotFound} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
