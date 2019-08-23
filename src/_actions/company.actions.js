import { COMPANY_ACTION_TYPES as types } from '../_constants/actions.types'
import { companyServices } from '../_services/company.services'

const fetch_blacklist_begin = () => {
    return {
        type: "BEGIN_FETCHING"
    }
}

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
        console.log("请求开始...")
        dispatch(fetch_blacklist_begin()) // 请求开始
        // 开始请求
        companyServices.listBlacklist().then(
            json => {
                console.log("异步action creator查看数据：", json)
                dispatch(listBlacklist(json)) // 分发action对象
            }
        )
        console.log("请求结束！")
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
        // 异步请求
        companyServices.listBlacklistByWeid(weid).then(
            json => {
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
        companyServices.listLoanRequestRecords("WeBank").then(
            json => {
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
        companyServices.listLoanRecords("WeBank").then(
            json => {
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
        companyServices.verifyCredential(id, weid, issuer, type, verifyType).then(
            json => {
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
        companyServices.verifyUserAuthenticity(id).then(
            json => {
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
        console.log("请求开始...")
        companyServices.verifyMultiParityLoan().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.addToBlacklist().then(
            json => {
                console.log("")
                dispatch(addToBlacklist(json))
            }
        )
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



