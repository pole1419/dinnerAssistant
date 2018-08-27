import React, { Component } from 'react'
import style from '../assets/style/footer.scss'
class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div onClick={this.toPage.bind(this, 'home')}>
                    <img src={require('../assets/img/home.png')} />
                    <button>Index</button>
                </div>
                <div onClick={this.toPage.bind(this, 'menu')}>
                    <img src={require('../assets/img/menu.png')} />
                    <button>Menu</button>
                </div>
                <div onClick={this.toPage.bind(this, 'history')}>
                    <img src={require('../assets/img/history.png')} />
                    <button>History</button>
                </div>
            </div>
        )
    }

    toPage = path => {
        this.props.history.push(`/${path}`)
    }
}

export default Footer