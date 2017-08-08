import React, { Component } from 'react'
import style from '../assets/style/Menu.css'

class Menu extends Component {
    render() {
        return (
            <div className={style.menu}>
                <div className={style.head}>
                    <input placeholder="输入并添加" />
                </div>
                <div className={style.list}>
                    <div className={style.listItem}>
                        <text className={style.finished}>sdfsdfsdf</text>
                    </div>
                    <div className={style.listItem}>
                        <text>sdfsdfsdf</text>
                    </div>
                    <div className={style.listItem}>
                        <text>sdfsdfsdf</text>
                    </div>
                    <div className={style.listItem}>
                        <text>sdfsdfsdf</text>
                    </div>
                </div>
                <div className={style.btns}>
                    <button className="btn100">删除已选</button>
                    <button className="btn100">删除所有</button>
                </div>
            </div>
        )
    }
}

export default Menu