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

export function loanRequestRecords(state=[], action) {
    switch (action.type) {
        case types.LOAN_REQUEST_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export function loanRecords(state = [], action) {
    switch (action.type) {
        case types.LOAN_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export function multiPartyInfo(state = [], action) {
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
                loanRequestRecords: loanRequestRecords([], action)
            }
        case types.LOAN_RECORDS:
            return {
                ...state,
                loanRecords: loanRecords([], action)
            }
        case types.MULTI_PARTY_INFO:
            return {
                ...state,
                multiPartyInfo: multiPartyInfo([], action)
            }
        default:
            return state
    }
}





