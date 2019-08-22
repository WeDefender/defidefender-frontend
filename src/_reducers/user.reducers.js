import { USER_ACTION_TYPES as types } from '../_constants/actions.types'

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

