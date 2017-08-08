import * as all from './consts'
import { defaultMenu } from '../common/config'

const defaultState = {
    recommend: '',
    menu: defaultMenu,
    history: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case all.SET_RECOMMEND:
            return Object.assign({}, state, {
                recommend: action.val
            })
        case all.ADD_MENU:
            return Object.assign({}, state, state.menu.concat(action.val))
        case all.REMOVE_MENU:
            const menu = state.menu.filter((item, idx) => {!action.val.includes(idx)})
            return Object.assign({}, state, menu)
        case all.CLEAR_MENU:
            return Object.assign({}, state, {
                menu: []
            })
        case all.ADD_HISTORY:
            return Object.assign({}, state, action.val)
        case all.CLEAR_HISTORY:
            return Object.assign({}, state, {
                history: []
            })
        default:
            return defaultState
    }
}