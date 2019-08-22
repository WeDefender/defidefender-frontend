import { GOVERNMENT_ACTION_TYPES as types } from '../_constants/actions.types'
import { governmentServices } from '../_services/government.services'

const listVerifiedUsers = (json) => {
    return {
        type: types.LIST_TO_BE_CHECKED_USERS,
        payload: json
    }
}
const listVerifiedUsersAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        governmentServices.listVerifiedUsers().then(
            json => {
                console.log("")
                dispatch(listVerifiedUsers(json.data))
            }
        )
        console.log("请求结束...")
    }
}

const listToBeCheckedUsers = (json) => {
    return {
        type: types.LIST_TO_BE_CHECKED_USERS,
        payload: json.data
    }
}
const listToBeCheckedUsersAsync = () => {
    return dispatch => {
        console.log("列出待核验用户请求开始...")
        governmentServices.listToBeCheckedUsers().then(
            json => {
                console.log("actions,待核验用户列表：", json)
                dispatch(listToBeCheckedUsers(json))
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
        governmentServices.listIssuedCredentials().then(
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
        governmentServices.createCredential().then(
            json => {
                console.log("")
                dispatch(createCredential(json))
            }
        )
        console.log("请求结束...")
    }
}

const checkUser = (json) => {
    return {
        type: types.CHECK_USER,
        payload: json.data
    }
}
const checkUserAsync = (weid, type) => {
    return dispatch => {
        console.log("请求开始...")
        governmentServices.checkUser(weid, type).then(
            json => {
                console.log("")
                dispatch(checkUser(json))
            }
        )
        console.log("请求结束...")
    }
}

export const governmentActions = {
    listVerifiedUsersAsync,
    listToBeCheckedUsersAsync,
    listIssuedCredentialsAsync,
    createCredentialAsync,
    checkUserAsync,
}