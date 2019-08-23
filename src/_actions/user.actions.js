import { USER_ACTION_TYPES as types } from '../_constants'
import { userServices } from '../_services/user.services'
import { FETCH_STATUS } from '../_constants'
// 1.创建weid
const createWeId = () => {
    return {
        type: ""
    }
}
const createWeIdAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.createWeId().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(createWeId(json))
            }
        )
    }
}

// 2.创建小凭证
const createSelectiveCredential = () => {
    return {
        type: ""
    }
}
const createSelectiveCredentialAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.createSelectiveCredential().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(createSelectiveCredential(json))
            }
        )
    }
}

// 3.创建演示凭证
const createPresentation = () => {
    return {
        type: ""
    }
}
const createPresentationAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.createPresentationAsync().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(createPresentationAsync(json))
            }
        )
    }
}

// 4.请求核验用户信息真实性，让weid跟真实身份锚定
const requestVerifyWeId = () => {
    return {
        type: ""
    }
}
const requestVerifyWeIdAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.requestVerifyWeId().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(requestVerifyWeId(json))
            }
        )
    }
}

// 5.查询所有借贷机构
const getCompanies = () => {
    return {
        type: "",
        payload: ""
    }
}
const getCompaniesAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.getCompaniesAsync().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(getCompaniesAsync(json))
            }
        )
    }
}

// 6.请求借贷
const requestLoan = () => {
    return {
        type: ""
    }
}
const requestLoanAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.requestLoan().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(requestLoan(json))
            }
        )
    }
}

// 7.查询凭证
const listCredentials = () => {
    return {
        type: ""
    }
}
const listCredentialsAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.listCredentials().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(listCredentials(json))
            }
        )
    }
}

// 8.查询所有借贷请求
const listLoanRequestRecords = (json) => {
    return {
        type: types.LIST_USER_LOAN_REQUEST_RECORDS,
        payload: json.data
    }
}
const listUserLoanRequestRecordsAsync = (weid) => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.listLoanRequests(weid).then(
            json => {
                if (json.status == "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(listLoanRequestRecords(json))
            }
        )
        // dispatch(fetchSuccess())
    }
}

// 9.查询所有借贷记录
const listUserLoanRecords = (json) => {
    return {
        type: types.LIST_USER_LOAN_RECORDS,
        payload: json.data
    }
}
const listUserLoanRecordsAsync = (weid) => {
    return dispatch => {
        userServices.listLoanRecords(weid).then(
            json => {
                dispatch(listUserLoanRecords(json))
            }
        )
    }
}

// 10.还款
const returnLoan = () => {
    return {
        type: ""
    }
}
const returnLoanAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        userServices.returnLoan().then(
            json => {
                if (json.status == "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(returnLoan(json))
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

export const userActions = {
    createWeIdAsync,
    createSelectiveCredentialAsync,
    createPresentationAsync,
    requestVerifyWeIdAsync,
    getCompaniesAsync,
    requestLoanAsync,
    listUserLoanRequestRecordsAsync,
    listCredentialsAsync,
    listUserLoanRecordsAsync,
    returnLoanAsync,
    fetchBegin,
    fetchSuccess,
    fetchFail,
}