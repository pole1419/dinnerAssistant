import React, { Component } from 'react'
import style from '../assets/style/History.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as allActions from '../store/actions'

class History extends Component {
    render() {
        const hasRecord = this.props.history.length,
            el = hasRecord ? this.renderHistory.bind(this) : this.renderAnimation.bind(this)
        return (
            <div className={style.history}>
                {
                    el()
                }
            </div>
        )
    }

    componenWillUpdate() {
        debugger
    }

    renderHistory() {
        return (
            <div className={style.history}>
                <div className={style.wrapper}>
                    {
                        this.props.history.map(item => (
                            <div className={style.item} >
                                <span>{item.date}</span>
                                <span>{item.record}</span>
                            </div>
                        ))
                    }
                </div>
                <button className="btn100">清除记录</button>
            </div>
        )
    }

    renderAnimation() {
        return (
            <div className={style.history}>
                <div className={style.noRecord}>
                    <img src={require('../assets/img/no_record.jpeg')} />
                    <span>哎呀，你来到了知识的荒野</span>
                </div >
            </div>
        )
    }

}

const mapStateToProps = state => (
    {
        history: state.history
    }
)

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History)