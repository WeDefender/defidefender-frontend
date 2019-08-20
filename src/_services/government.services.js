import { API_URLS } from '../_constants/api.url'
import { fetch_get_helper, fetch_post_helper } from './utils'

/**
 * @method POST
 * @param {body} : {
	"cptId":2000000,
	"issuer":"did:weid:1:0x5ef98d1c967f869f8f2c19eadfabd847b346e21c",
	"claimData":{
		"weid":"did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441",
		"name":"Sher",
		"gender":"M",
		"birthday":"1995-05-09",
		"address":"浙江省",
		"identityNumber":"666"
	}
}
 */
const createCredential = (cptId, 
                    issuer, 
                    weid, 
                    name, 
                    gender, 
                    birthday, 
                    address, 
                    identityNumber 
                    ) => {
    const url = API_URLS.GOVERNMENT_CREATECREDENTIAL_URL
    const claimData = {
        weid: weid,
        name: name,
        gender: gender,
        birthday: birthday,
        address: address,
        identityNumber: identityNumber
    }
    const body = JSON.stringify({
            cptId: cptId,
            issuer: issuer,
            claimData: claimData
        })
    return fetch_post_helper(url, body)
}

/**
 * @method GET
 */
const listIssuedCredentials = () => {
    url = API_URLS.GOVERNMENT_LISTISSUEDCREDENTIALS_URL
    return fetch_get_helper(url)
}

/**
 * @method GET
 */
const listToBeCheckedUsers = () => {
    const url = API_URLS.GOVERNMENT_LISTTOBECHECKEDUSERS_URL
    return fetch_get_helper(url)
}

/**
 * @method GET
 */
const listVerifiedUsers = () => {
    const url = API_URLS.GOVERNMENT_LISTVERIFIEDUSERS_URL
    return fetch_get_helper(url)
}

const checkUser = (weid, type) => {
    const url = API_URLS.GOVERNMENT_CHECKUSER_URL
    const body = JSON.stringify({
        weid: weid,
        type: type
    })
    return fetch_post_helper(url, body)
}

// 统一对外暴露fetch接口
export const governmentServices = {
    createCredential,
    listIssuedCredentials,
    listToBeCheckedUsers,
    checkUser,
    listVerifiedUsers
}
