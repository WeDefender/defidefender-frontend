import { COMMON_ACTION_TYPES as types } from '../_constants/actions.types'
import { commonServices } from '../_services/common.services'


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
        type: "",
        payload: ""
    }
}
const getCredentialAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        commonServices.getCredential().then(
            json => {
                console.log("")
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
        console.log("请求开始...")
        commonServices.getPresentation().then(
            json => {
                console.log("")
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

export const commonActions = {
    createCPT,
    getCPTById,
    registerIssuer,
    getCredential,
    getPresentation,
    initializeAndDeploy,
}

