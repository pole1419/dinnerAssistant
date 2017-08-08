import React, { Component } from 'react'
import style from '../assets/style/Header.css'
import { hashHistory } from 'react-router'

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <i className={style.back} onClick={this.back.bind(this)}></i>
                <span>title</span>
            </header>
        )
    }

    back() {
        hashHistory.goBack()
    }
}

export default Header