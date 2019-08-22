import { COMPANY_ACTION_TYPES as types } from '../_constants/actions.types'

// 更新黑名单数组列表，在companyReducer会给出键，显示出state的层次结构
export function blacklistReducer(state = [], action) {
    switch (action.type) {
        case types.BLACKLIST:
            // console.log("Reducer中列出黑名单：", action.payload) 
            // action.payload中传过来的是数组
            return [...state, ...action.payload]
        default:
            return state
    }
}

// 获取用户请求列表
export function loanRequestRecordsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAN_REQUEST_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export function loanRecordsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAN_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

function verifyUserAuthenticityReducer(state = [], action) {
    switch (action.type) {
        case types.VERIFY_USER_AUTHENTICITY:
            return state
        default:
            return state
    }
}

function verifyCredentialReducer(state = [], action) {
    switch (action.type) {
        case types.VERIFY_CREDENTIAL:
            return action
        default:
            return state
    }
}

function handleLoanRequestReducer(state = [], action) {
    switch (action.type) {
        case types.HANDLE_LOAN_REQUEST:
            return action
        default:
            return state
    }
}

export function multiPartyInfoReducer(state = [], action) {
    switch (action.type) {
        case types.MULTI_PARTY_INFO:
            return [...state, ...action.payload]
        default:
            return state
    }
}

// 对应state.company的reducer
export function companyReducer(state = {}, action) {
    switch (action.type) {
        case types.BLACKLIST:
            return {
                ...state,
                blacklist: blacklistReducer([], action)
            }
        case types.LOAN_REQUEST_RECORDS:
            return {
                ...state,
                loanRequestRecords: loanRequestRecordsReducer([], action)
            }
        case types.LOAN_RECORDS:
            return {
                ...state,
                loanRecords: loanRecordsReducer([], action)
            }
        case types.VERIFY_USER_AUTHENTICITY:
            return {
                ...state,
                verifyUserAuthenticity: verifyUserAuthenticityReducer([], action)
            }
        case types.VERIFY_CREDENTIAL:
            return {
                ...state,
                verifyCredential: verifyCredentialReducer([], action)
            }
        case types.HANDLE_LOAN_REQUEST:
            return {
                ...state,
                handleLoanRequest: handleLoanRequestReducer([], action)
            }
        case types.MULTI_PARTY_INFO:
            return {
                ...state,
                multiPartyInfo: multiPartyInfoReducer([], action)
            }
        default:
            return state
    }
}





