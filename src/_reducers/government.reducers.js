import { GOVERNMENT_ACTION_TYPES as types } from '../_constants/actions.types'

// 对应state.government的reducer
export const governmentReducer = (state={}, action) => {
    switch (action.type) {
        case types.ALL_CREDENTIALS_INFO: 
            return 
        case types.UNVERIFIED_USERS:
            return 
        case types.VERIFIED_USERS:
            return 
        case types.WEIDS:
            return 
        default:
            return state
    }
}