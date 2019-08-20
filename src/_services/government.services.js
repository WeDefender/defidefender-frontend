import { API_URLS } from '../_constants/api.url'
import { fetch_get_helper, fetch_post_helper } from './utils'

// 统一对外暴露fetch接口
export const companyService = {
    createCredential,
    listIssuedCredentials,
    listToBeCheckedUsers,
    checkUser,
    listVerifiedUsers
}

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
createCredential = (cptId, 
                    issuer, 
                    weid, 
                    name, 
                    gender, 
                    birthday, 
                    address, 
                    identityNumber 
                    ) => {
    url = API_URLS.GOVERNMENT_CREATECREDENTIAL_URL
    claimData = {
        weid: weid,
        name: name,
        gender: gender,
        birthday: birthday,
        address: address,
        identityNumber: identityNumber
    }
    body = JSON.stringify({
            cptId: cptId,
            issuer: issuer,
            claimData: claimData
        })
    return fetch_post_helper(url, body)
}

/**
 * @method GET
 */
listIssuedCredentials = () => {
    url = API_URLS.GOVERNMENT_LISTISSUEDCREDENTIALS_URL
    return fetch_get_helper(url)
}

/**
 * @method GET
 */
listToBeCheckedUsers = () => {
    url = API_URLS.GOVERNMENT_LISTTOBECHECKEDUSERS_URL
    return fetch_get_helper(url)
}

/**
 * @method GET
 */
listVerifiedUsers = () => {
    url = API_URLS.GOVERNMENT_LISTVERIFIEDUSERS_URL
    return fetch_get_helper(url)
}

checkUser = (weid, type) => {
    url = API_URLS.GOVERNMENT_CHECKUSER_URL
    body = JSON.stringify({
        weid: weid,
        type: type
    })
    return fetch_post_helper(url, body)
}

