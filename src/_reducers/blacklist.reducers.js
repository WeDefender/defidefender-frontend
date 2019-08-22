import { LIST_BLACKLIST } from '../_constants'

// reducer: 发起action后更新state，按照state属性设定键对
export function BlacklistReducer(state={}, action) {
    switch (action.type) {
        case LIST_BLACKLIST:
            console.log("列出黑名单：", action.payload) 
            return {
                ...state, 
                blacklist: action.payload
            }
        default:
            return state
    }
}



