import { GOVERNMENT_ACTION_TYPES as types } from '../_constants/actions.types'
import { governmentServices } from '../_services/government.services'
import { FETCH_STATUS } from '../_constants'

const listVerifiedUsers = (json) => {
    return {
        type: types.LIST_VERIFIED_USERS,
        payload: json.data
    }
}
const listVerifiedUsersAsync = () => {
    return dispatch => {
        dispatch(fetchBegin())
        governmentServices.listVerifiedUsers().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(listVerifiedUsers(json))
            }
        )
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
        dispatch(fetchBegin())
        governmentServices.listToBeCheckedUsers().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
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
        dispatch(fetchBegin())
        governmentServices.listIssuedCredentials().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
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
        dispatch(fetchBegin())
        governmentServices.createCredential().then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
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
        dispatch(fetchBegin())
        governmentServices.checkUser(weid, type).then(
            json => {
                if (json.status === "200") {
                    dispatch(fetchSuccess())
                }
                dispatch(checkUser(json))
            }
        )
        console.log("请求结束...")
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

export const governmentActions = {
    listVerifiedUsersAsync,
    listToBeCheckedUsersAsync,
    listIssuedCredentialsAsync,
    createCredentialAsync,
    checkUserAsync,
    
}