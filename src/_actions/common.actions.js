import { COMMON_ACTION_TYPES as types } from '../_constants/actions.types'
import { commonServices } from '../_services/common.services'
import { FETCH_STATUS } from '../_constants'

// 创建CPT
const createCPT = (json) => {
    return {
        type: "",
        payload: ""
    }
}

const createCPTAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        commonServices.createCPT().then(
            json => {
                console.log("")
                dispatch(createCPT(json))
            }
        )
    }
}

// 根据id获取CPT
const getCPTById = (json) => {
    return {
        type: "",
        payload: ""
    }
}
const getCPTByIdAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        commonServices.getCPTById().then(
            json => {
                console.log("")
                dispatch(getCPTById(json))
            }
        )
    }
}

const registerIssuer = (json) => {
    return {
        type: "",
        payload: ""
    }
}
const registerIssuerAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        commonServices.registerIssuer().then(
            json => {
                console.log("")
                dispatch(registerIssuer(json))
            }
        )
    }
}

const getCredential = (json) => {
    return {
        type: types.GET_CREDENTIAL,
        payload: json.data
    }
}
const getCredentialAsync = (weid, type) => {
    return dispatch => {
        dispatch(fetchBeginForCredential())
        commonServices.getCredential(weid, type).then(
            json => {
                if (json.status === 200) {
                    console.log("分发获取成功...")
                    dispatch(fetchSuccessForCredential())
                }
                dispatch(getCredential(json))
            }
        )
    }
}

const getPresentation = (json) => {
    return {
        type: "",
        payload: ""
    }
}
const getPresentationAsync = () => {
    return dispatch => {
        commonServices.getPresentation().then(
            json => {
                dispatch(getPresentation(json))
            }
        )
    }
}

const initializeAndDeploy = (json) => {
    return {
        type: ""
    }
}
const initializeAndDeployAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        commonServices.initializeAndDeploy().then(
            json => {
                console.log("")
                dispatch(initializeAndDeploy(json))
            }
        )
    }
}

const fetchBeginForCredential = () => {
    return {
        type: FETCH_STATUS.FETCH_BEGIN_FOR_CREDENTIAL,
        payload: "FETCH_BEGIN_FOR_CREDENTIAL",
    }
}
const fetchSuccessForCredential = () => {
    return {
        type: FETCH_STATUS.FETCH_SUCCESS_FOR_CREDENTIAL,
        payload: "FETCH_SUCCESS_FOR_CREDENTIAL",
    }
}


export const commonActions = {
    createCPT,
    getCPTById,
    registerIssuer,
    getCredentialAsync,
    getPresentation,
    initializeAndDeploy,
}

