import * as all from './consts'
export const setRecommend = (val) => {
    return {
        type: all.SET_RECOMMEND,
        val
    }
}

export const addMenu = (val) => {
    return {
        type: all.ADD_MENU,
        val
    }
}

export const removeMenu = (idxs) => {
    return {
        type: all.REMOVE_MENU,
        val: idxs
    }
}

export const clearMenu = () => {
    return {
        type: all.CLEAR_MENU
    }
}

export const addHistory = (val) => {
    return {
        type: all.ADD_HISTORY,
        val
    }
}

export const clearHistory = () => {
    return {
        type: all.CLEAR_HISTORY
    }
}