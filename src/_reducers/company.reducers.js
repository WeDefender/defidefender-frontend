import { COMPANY_ACTION_TYPES as types } from '../_constants/actions.types'
import { FETCH_STATUS } from "../_constants";

// 更新黑名单数组列表，在companyReducer会给出键，显示出state的层次结构
export function blacklistReducer(state = [], action) {
    switch (action.type) {
        case types.BLACKLIST:
            // console.log("Reducer中列出黑名单：", action.payload) 
            // action.payload中传过来的是数组
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

// 获取用户请求列表
export function loanRequestRecordsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAN_REQUEST_RECORDS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

export function loanRecordsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAN_RECORDS:
            return [...state,
            ...action.payload
            ]
        default:
            return state
    }
}

function verifyUserAuthenticityReducer(state = {}, action) {
    switch (action.type) {
        case types.VERIFY_USER_AUTHENTICITY:
            return 1
        default:
            return state
    }
}

function verifyCredentialReducer(state = [], action) {
    switch (action.type) {
        case types.VERIFY_CREDENTIAL:
            return 1
        default:
            return state
    }
}

function handleLoanRequestReducer(state = [], action) {
    switch (action.type) {
        case types.HANDLE_LOAN_REQUEST:
            if (state.length > 0) {
                console.log("处理请求时状态：", state)
                return state.filter(item => (item.id !== action.payload.id))
            }
        default:
            return state
    }
}

function listBlacklistByWeidReducer(state = [], action) {
    switch (action.type) {
        case types.LIST_BLACKLIST_BY_WEID:
            return [...state, ...action.payload]
        default:
            return state
    }
}

function multiPartyInfoReducer(state = [], action) {
    switch (action.type) {
        case types.MULTI_PARTY_INFO:
            return [...state, ...action.payload]
        default:
            return state
    }
}

function listRequestVerifyMultiParityLoanRecordsReducer(state = [], action) {
    switch (action.type) {
        case types.LIST_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS:
            return [...state, ...action.payload]
        default:
            return state
    }
}

// 处理更新数据方式
function handleRequestVerifyMultiParityLoanRecordReducer(state = [], action) {
    switch (action.type) {
        case types.HANDLE_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.status = action.payload.status
                }
                return item
            })
        default:
            return state
    }
}

function listMultiParityLoanInfoReducer(state = [], action) {
    switch (action.type) {
        case types.LIST_MULTI_PARITY_LOAN_INFO:
            return [...state, ...action.payload]
        default:
            return state
    }
}


function addToBlacklistReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_TO_BLACKLIST:
            return action.payload
        default:
            return state
    }
}

// 对应state.company的reducer
export function companyReducer(state = {}, action) {
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
        case FETCH_STATUS.FETCH_BEGIN_FOR_BLACKLIST:
            return {
                ...state,
                fetchStatusForBlacklist: action.payload
            }
        case FETCH_STATUS.FETCH_SUCCESS_FOR_BLACKLIST:
            return {
                ...state,
                fetchStatusForBlacklist: action.payload
            }
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
        // 执行删除该条请求操作
        case types.HANDLE_LOAN_REQUEST:
            return {
                ...state,
                loanRequestRecords: handleLoanRequestReducer(state.loanRequestRecords, action)
            }
        case types.LOAN_RECORDS:
            return {
                ...state,
                loanRecords: loanRecordsReducer([], action)
            }
        case types.VERIFY_USER_AUTHENTICITY:
            return {
                ...state,
                verifyUserAuthenticity: verifyUserAuthenticityReducer({}, action)
            }
        case types.VERIFY_CREDENTIAL:
            return {
                ...state,
                verifyCredential: verifyCredentialReducer([], action)
            }
        case types.LIST_BLACKLIST_BY_WEID:
            return {
                ...state,
                blacklistByWeid: listBlacklistByWeidReducer([], action)
            }
        case types.REQUEST_VERIFY_MULTI_PARITY_LOAN:
            return {
                ...state,
            }
        case types.LIST_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS:
            return {
                ...state,
                listRequestMultiParityLoanRecords: listRequestVerifyMultiParityLoanRecordsReducer([], action)
            }
        case types.HANDLE_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS:
            return {
                ...state,
                // 返回数据格式中根据status判断状态
                listRequestMultiParityLoanRecords: handleRequestVerifyMultiParityLoanRecordReducer(state.listRequestMultiParityLoanRecords, action)
            }
        case types.LIST_MULTI_PARITY_LOAN_INFO:
            return {
                ...state,
                multiParityLoanInfo: listMultiParityLoanInfoReducer([], action)
            }
        case types.MULTI_PARTY_INFO:
            return {
                ...state,
                multiPartyInfo: multiPartyInfoReducer([], action)
            }
        case types.ADD_TO_BLACKLIST:
            return {
                ...state,
                addToBlacklist: addToBlacklistReducer([], action)
            }
        default:
            return state
    }
}





