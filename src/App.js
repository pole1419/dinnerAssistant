import React, { Component } from 'react';
import './assets/style/Public.css'
import style from './assets/style/App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
