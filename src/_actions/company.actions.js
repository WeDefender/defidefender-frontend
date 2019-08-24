import { COMPANY_ACTION_TYPES as types } from '../_constants/actions.types'
import { companyServices } from '../_services/company.services'
import { FETCH_STATUS } from '../_constants'

/*
 * 同步action创建函数, action中包含payload，描述要修改的state数据部分
 * 异步获取的数据通过action传到reducer用于更新store
*/
export const listBlacklist = (json) => {
    return {
        type: types.BLACKLIST,
        payload: json.data
    }
}
// 异步action creator
export const listBlacklistAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        // 开始请求
        companyServices.listBlacklist().then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(listBlacklist(json)) // 分发action对象
            }
        )
    }
}

const listBlacklistByWeid = (json) => {
    return {
        type: types.LIST_BLACKLIST_BY_WEID,
        payload: json.data
    }
}
const listBlacklistByWeidAsync = (weid) => {
    return dispatch => {
        dispatch(fetchBeginForBlacklist())
        companyServices.listBlacklistByWeid(weid).then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccessForBlacklist())
                }
                dispatch(listBlacklistByWeid(json))
            }
        )
    }
}

const listLoanRequestRecords = (json) => {
    return {
        type: types.LOAN_REQUEST_RECORDS,
        payload: json.data
    }
}
const listLoanRequestRecordsAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.listLoanRequestRecords("WeBank").then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(listLoanRequestRecords(json))
            }
        )
    }
}

const listLoanRecords = (json) => {
    return {
        type: types.LOAN_RECORDS,
        payload: json.data
    }
}
const listLoanRecordsAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.listLoanRecords("WeBank").then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(listLoanRecords(json))
            }
        )
    }
}

const verifyCredential = (json) => {
    return {
        type: types.VERIFY_CREDENTIAL,
        payload: json.data
    }
}

const verifyCredentialAsync = (id, weid, issuer, type, verifyType) => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.verifyCredential(id, weid, issuer, type, verifyType).then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(verifyCredential(json))
            }
        )
    }
}

const verifyUserAuthenticity = (json) => {
    return {
        type: types.VERIFY_USER_AUTHENTICITY,
        payload: json.data
    }
}
const verifyUserAuthenticityAsync = (id) => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.verifyUserAuthenticity(id).then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(verifyUserAuthenticity(json))
            }
        )
    }
}

const verifyMultiParityLoan = () => {
    return {
        type: ""
    }
}
const verifyMultiParityLoanAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.verifyMultiParityLoan().then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(verifyMultiParityLoan(json))
            }
        )
    }
}

const handleLoanRequest = (json) => {
    return {
        type: types.HANDLE_LOAN_REQUEST,
        payload: json.data
    }
}
const handleLoanRequestAsync = (id, type) => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.handleLoanRequest(id, type).then(
            json => {
                console.log("处理借贷请求返回数据: ", json)
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
                dispatch(handleLoanRequest(json))
            }
        )
    }
}


// const addToBlacklistAsync = () => {
//     return dispatch => {
//         dispatch(fetchBegin())
//         companyServices.addToBlacklist().then(
//             json => {
//                 if (json.status === 200) {
//                     dispatch(fetchSuccess())
//                 }
//                 dispatch(addToBlacklist(json))
//             }
//         )
//     }
// }

const requestVerifyMultiParityLoan = (json) => {
    return {
        type: types.REQUEST_VERIFY_MULTI_PARITY_LOAN,
        payload: json.data
    }
}


const requestVerifyMultiParityLoanAsync = (requester, loanRecordId, weid) => {
    return dispatch => {
        companyServices.requestVerifyMultiParityLoan(requester, loanRecordId, weid).then(
            json => {
                console.log('requestVerifyMultiParityLoanAsync:', json)
                dispatch(requestVerifyMultiParityLoan(json))
            }
        )
    }
}


const listRequestVerifyMultiParityLoanRecords = (json) => {
    return {
        type: types.LIST_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS,
        payload: json.data
    }
}

const listRequestVerifyMultiParityLoanRecordsAsync = (companyName) => {
    return dispatch => {
        companyServices.listRequestVerifyMultiParityLoanRecords(companyName).then(
            json => {
                dispatch(listRequestVerifyMultiParityLoanRecords(json))
            }
        )
    }
}


const hanleRequestVerifyMultiParityLoanRecord = (json) => {
    return {
        type: types.HANDLE_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS,
        payload: json.data
    }
}



const hanleRequestVerifyMultiParityLoanRecordAsync = (id, type) => {
    return dispatch => {
        companyServices.hanleRequestVerifyMultiParityLoanRecord(id, type).then(
            json => {
                console.log('handleRequestLoan', json)
                dispatch(hanleRequestVerifyMultiParityLoanRecord(json))
            }
        )
    }
}


const listMultiParityLoanInfo = (json) => {
    return {
        type: types.LIST_MULTI_PARITY_LOAN_INFO,
        payload: json.data
    }
}


const listMultiParityLoanInfoAsync = (recordId) => {
    return dispatch => {
        companyServices.listMultiParityLoanInfo(recordId).then(
            json => {
                dispatch(listMultiParityLoanInfo(json))
            }
        )
    }
}

const addToBlacklist = (json) => {
    return {
        type: types.ADD_TO_BLACKLIST,
        payload: json.data
    }
}

const addToBlacklistAsync = (id) => {
    return dispatch => {
        companyServices.addToBlacklist(id).then(
            json => {
                dispatch(addToBlacklist(json))
            }
        )
    }
}

const fetchBegin = () => {
    return {
        type: FETCH_STATUS.FETCH_BEGIN,
        payload: "FETCH_BEGIN",
    }
}
const fetchSuccess = () => {
    return {
        type: FETCH_STATUS.FETCH_SUCCESS,
        payload: "FETCH_SUCCESS",
    }
}
const fetchFail = () => {
    return {
        type: FETCH_STATUS.FETCH_FAIL,
        payload: "FETCH_FAIL"
    }
}

const fetchBeginForBlacklist = () => {
    return {
        type: FETCH_STATUS.FETCH_BEGIN_FOR_BLACKLIST,
        payload: "FETCH_BEGIN_FOR_BLACKLIST",
    }
}
const fetchSuccessForBlacklist = () => {
    return {
        type: FETCH_STATUS.FETCH_SUCCESS_FOR_BLACKLIST,
        payload: "FETCH_SUCCESS_FOR_BLACKLIST"
    }
}


export const companyActions = {
    listBlacklistAsync,
    listBlacklistByWeidAsync,
    listLoanRequestRecordsAsync,
    listLoanRecordsAsync,
    verifyCredentialAsync,
    verifyUserAuthenticityAsync,
    verifyMultiParityLoanAsync,
    handleLoanRequestAsync,
    addToBlacklistAsync,
    requestVerifyMultiParityLoanAsync,
    listRequestVerifyMultiParityLoanRecordsAsync,
    hanleRequestVerifyMultiParityLoanRecordAsync,
    listMultiParityLoanInfoAsync,
    addToBlacklistAsync,
}



