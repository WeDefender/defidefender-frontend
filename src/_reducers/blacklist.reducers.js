import { LIST_BLACKLIST } from '../_constants'

export function BlacklistReducer(state={}, action) {
    switch (action.type) {
        case LIST_BLACKLIST:
            return {
                ...state, 
                blacklist: action.payload
            }
        default:
            return state
    }
}



