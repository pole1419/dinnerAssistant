import React, { Component } from 'react'
import style from '../assets/style/header.scss'
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <header className={style.header}>
                <i className={style.back} onClick={this.back}></i>
                <span>title</span>
            </header>
        )
    }
}

export default Header