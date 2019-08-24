import { GOVERNMENT_ACTION_TYPES as types } from '../_constants/actions.types'
import { FETCH_STATUS } from "../_constants";

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

// 根据返回的数据过滤当前的state
export const checkUserReducer = (state=[], action) => {
    switch (action.type) {
        case types.CHECK_USER:
            console.log("删除时待过滤的数组是：", state)
            if (state.length > 0) {
                return state.filter(item => (item.weid !== action.payload.weid))
            }
        default:
            return state;
    }
}

export const listVerifiedUsersReducer = (state=[], action) => {
    switch (action.type) {
        case types.LIST_VERIFIED_USERS:
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
        case FETCH_STATUS.FETCH_BEGIN:
            return {
                ...state,
                fetchStatus: action.payload
            }
        case FETCH_STATUS.FETCH_SUCCESS:
            return {
                ...state,
                fetchStatus: action.payload
            }
        case FETCH_STATUS.FETCH_FAIL:
            return {
                ...state,
                fetchStatus: action.payload
            }
        case types.LIST_TO_BE_CHECKED_USERS: 
            return {
                ...state,
                listToBeCheckedUsers: listToBeCheckedUsersReducer([], action),
            }
        case types.CHECK_USER:
            return {
                ...state,
                listToBeCheckedUsers: checkUserReducer(state.listToBeCheckedUsers, action),
            }
        case types.LIST_VERIFIED_USERS: 
            return {
                ...state,
                listVerifiedUsers: listVerifiedUsersReducer([], action)
            }
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