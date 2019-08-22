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
        type: ""
    }
}
const listBlacklistByWeidAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        // 异步请求
        companyServices.listBlacklistByWeid().then(
            json => {
                console.log("根据WEID获取黑名单")
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

const verifyCredential = () => {
    return {
        type: ""
    }
}

const verifyCredentialAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.verifyCredential().then(
            json => {
                console.log("")
                dispatch(verifyCredential(json))
            }
        )
    }
}

const verifyUserAuthenticity = () => {
    return {
        type: ""
    }
}
const verifyUserAuthenticityAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.verifyUserAuthenticity().then(
            json => {
                console.log("")
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

const handleLoanRequest = () => {
    return {
        type: ""
    }
}
const handleLoanRequestAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.handleLoanRequest().then(
            json => {
                console.log("")
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



