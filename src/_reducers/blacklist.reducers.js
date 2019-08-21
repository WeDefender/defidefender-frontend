import { LIST_BLACKLIST } from '../_constants'

// reducer: 发起action后如何更新state
export function BlacklistReducer(state={}, action) {
    switch (action.type) {
        case LIST_BLACKLIST:
            console.log("列出黑名单：", action.payload)
            return [...state, action.payload]
        default:
            return state
    }
}
