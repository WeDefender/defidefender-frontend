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
        companyServices.createCPT().then(
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
        companyServices.getCPTById().then(
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
        companyServices.registerIssuer().then(
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
        companyServices.getCredential().then(
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
        companyServices.getPresentation().then(
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
        companyServices.createWeId().then(
            json => {
                console.log("")
                dispatch(createWeId(json))
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

