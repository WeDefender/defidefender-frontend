const listVerifiedUsers = (json) => {
    return {
        type: ""
    }
}
const listVerifiedUsersAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.listVerifiedUsers().then(
            json => {
                console.log("")
                dispatch(listVerifiedUsers(json))
            }
        )
    }
}

const istToBeCheckedUsers = (json) => {
    return {
        type: ""
    }
}
const istToBeCheckedUsersAsync = (json) => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.istToBeCheckedUsers().then(
            json => {
                console.log("")
                dispatch(istToBeCheckedUsers(json))
            }
        )
    }
}

const listIssuedCredentials = (json) => {
    return {
        type: ""
    }
}
const listIssuedCredentialsAsync = (json) => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.listIssuedCredentials().then(
            json => {
                console.log("")
                dispatch(listIssuedCredentials(json))
            }
        )
    }
}

const createCredential = (json) => {
    return {
        type: ""
    }
}
const createCredentialAsync = (json) => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.createCredential().then(
            json => {
                console.log("")
                dispatch(createCredential(json))
            }
        )
    }
}

const checkUser = (json) => {
    return {
        type: ""
    }
}
const checkUserAsync = (json) => {
    return dispatch => {
        console.log("请求开始...")
        companyServices.checkUser().then(
            json => {
                console.log("")
                dispatch(checkUser(json))
            }
        )
    }
}

export const governmentActions = {
    listVerifiedUsersAsync,
    listToBeCheckedUsersAsync,
    listIssuedCredentialsAsync,
    createCredentialAsync,
    checkUserAsync,
}