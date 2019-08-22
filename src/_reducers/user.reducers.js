import { USER_ACTION_TYPES as types } from '../_constants/actions.types'

const userLoanRequestsReducer = (state = [], action) => {
    switch (action.type) {
        case types.USER_LOAN_REQUEST:
            return [...state]
        default:
            return state
    }
}

const userLoanRecordsReducer = (state = [], action) => {
    switch (action.type) {
        case types.USER_LOAN_RECORDS:
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
        case types.USER_LOAN_RECORDS:
            return {
                ...state,
                userLoanRecords: userLoanRecordsReducer([], action)
            }
        case types.USER_LOAN_REQUEST:
            return
        default:
            return state
    }
}

