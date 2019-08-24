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
        dispatch(fetchBegin())
        companyServices.listBlacklistByWeid(weid).then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
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
                console.log("list loan request records: ", json)
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
                // console.log("json.status: ", json.status)
                console.log("查询结果: ", json)
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
                dispatch(handleLoanRequest(json))
            }
        )
    }
}

const addToBlacklist = () => {
    return {
        type: ""
    }
}
const addToBlacklistAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        companyServices.addToBlacklist().then(
            json => {
                if (json.status === 200) {
                    dispatch(fetchSuccess())
                }
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
}



