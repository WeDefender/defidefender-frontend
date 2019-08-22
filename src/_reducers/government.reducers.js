import { GOVERNMENT_ACTION_TYPES as types } from '../_constants/actions.types'

export const listToBeCheckedUsersReducer = (state=[], action) => {
    switch (action.type) {
        case types.LIST_TO_BE_CHECKED_USERS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

// 对应state.government的reducer
export const governmentReducer = (state={}, action) => {
    switch (action.type) {
        case types.LIST_TO_BE_CHECKED_USERS: 
            return {
                ...state,
                listToBeCheckedUsers: listToBeCheckedUsersReducer([], action)
            }
        case types.CHECK_USER: // POST请求核验用户
            return state
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