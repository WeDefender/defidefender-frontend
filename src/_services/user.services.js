import { API_URLS } from '../_constants/api.url'
import { fetch_get_helper, fetch_post_helper } from './utils'

export const userServices = {
    createWeId,
    createSelectiveCredential,
    createPresentation,
    requestVerifyWeId,
    requestLoan,
    listLoanRequests,
    listLoanRecords,
    returnLoan
}

/**
 * @method POST
 * 新建DID
 */
createWeId = (name, type) => {
    url = API_URLS.USER_CREATEWEID_URL
    body = JSON.stringify(
        {
            name: name,
            type: type
        }
    )
    return fetch_post_helper(url, body)
}

/**
 * 创建小凭证
 * @method POST
 * @param {body} {
	"weid":"did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441",
	"claimPolicyJson":{
		"weid": 1,
		"name": 0,
		"gender": 1,
		"birthday": 1,
		"address": 0,
		"identityNumber": 0
	}
}
*/
createSelectiveCredential = (weid, claimPolicyJson) => {
    url = API_URLS.USER_CREATESELECTIVECREDENTIAL_URL
    body = JSON.stringify({
        weid: weid,
        claimPolicyJson: claimPolicyJson
    })
    return fetch_post_helper(url, body)
}

/**
 * 创建小凭证
 * @method POST
 * @param {body} {
	"ownerWeId":"did:weid:1:0xa1bd5ff47db4afb554004c25d846a9fe14f726cd",
	"policyJson":{
		"id":1,
		"orgId":"Company",
		"version":1,
		"weId":"did:weid:1:0x80623c6c8b9887d7b3f5c1d1eccab8a8619a0dfc",
		"policy":{
			"2000000":{
				"fieldsToBeDisclosed":{
					"weid": 1,
					"name": 0,
					"gender": 1,
					"birthday": 1,
					"address": 0,
					"identityNumber": 0
				}
			}
		}
	}
}
*/
createPresentation = (ownerWeId, policyJson) => {
    url = API_URLS.USER_CREATEPRESENTATION_URL
    body = JSON.stringify(
        {
            ownerWeId: ownerWeId,
            policyJson: policyJson
        }
    )
    return fetch_post_helper(url, body)
}

/**
 * 请求验证WeID
 * @method POST 
 * @param {body} {
	"weid":"did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441",
	"name":"Sher",
	"gender":"M",
	"birthday":"1995-05-09",
	"address":"浙江省",
	"identityNumber":"330xxxxxxxxxxxxxxx",
	"phoneNumber":"18862173084"
}
*/
requestVerifyWeId = (weid, 
                    name, 
                    gender, 
                    birthday,
                    address,
                    identityNumber,
                    phoneNumber
                     ) => {
    url  = API_URLS.USER_REQUESTVERIFIEDWEID_URL
    body = JSON.stringify({
        weid: weid,
        name: name, 
        gender: gender,
        birthday: birthday,
        address: address,
        identityNumber: identityNumber,
        phoneNumber: phoneNumber
    })
    return fetch_post_helper(url, body)
}

/**
 * 创建借贷请求
 * @method POST
 * @param {body} {
	"companyName":"WeBank",
	"amount": 10000.0,
	"expiredDate": "2019-08-24",
	"credentialOwner": "did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441"
}
 */
requestLoan = (companyName, 
               amount, 
               expiredDate, 
               credentialOwner) => {
    url = API_URLS.USER_REQUESTLOAN_URL
    body = JSON.stringify({
            companyName: companyName,
            amount: amount,
            expiredDate: expiredDate,
            credentialOwner: credentialOwner
        }
    )
    return fetch_post_helper(url, body)
}

/**
 * 查询用户借贷请求
 * @method POST
 * @param {body} {
	"weid":"did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441"
}
 */
listLoanRequests = (weid) => {
    url = API_URLS.USER_LISTLOANREQUESTS_URL
    body = JSON.stringify({
        weid: weid
    })
    return fetch_post_helper(url, body)
}

/**
 * 查询用户的借贷记录
 * @method POST
 * @param {body} {
	"weid":"did:weid:1:0x0f76f3c6dceb8bc5f1ca59c641572ff15af3d648"
}
*/
listLoanRecords = (weid) => {
    url = API_URLS.USER_LISTLOANRECORDS_URL
    body = JSON.stringify({
        weid: weid
    })
    return fetch_post_helper(url, body)
}

/**
 * 用户偿还贷款
 * @method POST
 * @param {body} {
	"id": 1
}
 */
returnLoan = (id) => {
    url = API_URLS.USER_REQUESTLOAN_URL
    body = JSON.stringify({
        id: id
    })
    return fetch_post_helper(url, body)
}

