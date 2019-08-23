import { USER_ACTION_TYPES as types } from '../_constants'
import { FETCH_STATUS } from "../_constants";

const listUserLoanRequestRecordsReducer = (state = [], action) => {
    switch (action.type) {
        case types.LIST_USER_LOAN_REQUEST_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

const listUserLoanRecordsReducer = (state = [], action) => {
    switch (action.type) {
        case types.LIST_USER_LOAN_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

// 对应state.user的reducer
export const userReducer = (state = {}, action) => {
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
        case types.USER_CREDENTIALS:
            return {
                ...state,
            }
        case types.LIST_USER_LOAN_REQUEST_RECORDS:
            return {
                ...state,
                listUserLoanRequestRecords: listUserLoanRequestRecordsReducer([], action)
            }
        case types.LIST_USER_LOAN_RECORDS:
            return {
                ...state,
                listUserLoanRecords: listUserLoanRecordsReducer([], action)
            }
        default:
            return state
    }
}

