import React, { Component } from 'react'
import style from '../assets/style/history.scss'
import util from '../common/util'

export default class History extends Component {
    render() {
        const hasRecord = this.props.rootStore.recordList.length,
            el = hasRecord ? this.renderHistory.bind(this) : this.renderAnimation.bind(this)
        return (
            <div className={style.history}>
                {
                    el()
                }
            </div>
        )
    }

    clearRecord = () => {
        // this.props.rootStore.clearRecord()
    }

    renderHistory() {
        const history = this.props.rootStore.recordList
        return (
            // <div className={style.history}>
            //     <div className={style.wrapper}>
            //         {
            //             history.map((item, idx) => (
            //                 <div className={style.item} key={idx}>
            //                     <span>{util.getDateStr(item.date)}</span>
            //                     <span>{util.getWeekStr(item.date)}</span>
            //                     <span>{item.name}</span>
            //                 </div>
            //             ))
            //         }
            //     </div>
            //     <button className="btn100" onClick={this.clearRecord}>清除记录</button>
            // </div>
            <div>root</div>
        )
    }

    renderAnimation() {
        return (
            <div className={style.history}>
                <div className={style.noRecord}>
                    <img src={require('../assets/img/no_record.jpeg')} alt="" />
                    <span>哎呀，你来到了知识的荒野</span>
                </div >
            </div>
        )
    }

}