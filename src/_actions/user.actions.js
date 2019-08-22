// 1.创建weid
const createWeId = () => {
    return {
        type: ""
    }
}
const createWeIdAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.createWeId().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.createSelectiveCredential().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.createPresentationAsync().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.requestVerifyWeId().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.getCompaniesAsync().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.requestLoan().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        companyServices.listCredentials().then(
            json => {
                console.log("")
                dispatch(listCredentials(json))
            }
        )
    }
}

// 8.查询所有借贷请求
const listLoanRequests = () => {
    return {
        type: ""
    }
}
const listLoanRequestsAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.listLoanRequestsAsync().then(
            json => {
                console.log("")
                dispatch(listLoanRequestsAsync(json))
            }
        )
    }
}

// 9.查询所有借贷记录
const listLoanRecords = () => {
    return {
        type: "",
    }
}
const listLoanRecordsAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.listLoanRecords().then(
            json => {
                console.log("")
                dispatch(listLoanRecords(json))
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
        console.log("请求开始...")
        companyServices.returnLoan().then(
            json => {
                console.log("")
                dispatch(returnLoan(json))
            }
        )
    }
}

export const userActions = {
    createWeIdAsync,
    createSelectiveCredentialAsync,
    createPresentationAsync,
    requestVerifyWeIdAsync,
    getCompaniesAsync,
    requestLoanAsync,
    listLoanRequestsAsync,
    listCredentialsAsync,
    listLoanRecordsAsync,
    returnLoanAsync,
}