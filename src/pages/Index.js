import React, { Component } from 'react'
import style from '../assets/style/Index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as allActions from '../store/actions'
import util from '../common/util'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommend: '',
            isChanging: false,
            randomConfig: {
                duration: 1, // 秒
                interval: 50, //毫秒
            }
        }
    }
    render() {
        const date = util.getDateStr(),
            week = util.getWeekStr()
        return (
            <div className={style.index}>
                <div className={style.banner}>
                    <img src={require('../assets/img/banner.jpg')} />
                </div>
                <div className={style.content}>
                    <div className={style.date}>
                        <span>{date} {week}</span>
                    </div>
                    <div className={style.recommend}>
                        <span>今日推荐:</span>
                        <span className={style.rocommendItem}>{this.state.recommend}</span>
                    </div>
                    <div className={style.random}>
                        <button className={style.change} onClick={this.changeRecommend.bind(this)}>更换</button>
                        <button className={style.save} onClick={this.saveRecommend.bind(this)}>保存</button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.initRecommend()
    }

    initRecommend() {
        const menu = this.props.menu
        const idx = Math.floor(Math.random() * menu.length)
        this.setState({
            recommend: menu[idx]
        })
    }

    changeRecommend() {
        if(this.state.isChanging) { return }
        this.setState({
            isChanging: true
        })
        const menu = this.props.menu
        const end = setInterval(() => {
            const idx = Math.floor(Math.random() * menu.length)
            this.setState({
                recommend: menu[idx]
            })
        }, this.state.randomConfig.interval)

        setTimeout(() => {
            clearInterval(end)
            this.setState({
                isChanging: false
            })
        }, this.state.randomConfig.duration * 1000)
    }

    saveRecommend() {
        if(this.state.isChanging) { return }
        this.props.actions.setRecommend(this.state.recommend)
    }
}


const mapStateToProps = state => (
    {   
        recommend: state.recommend,
        menu: state.menu
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(allActions, dispatch)
    }
)

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Index)