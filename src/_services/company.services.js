import { API_URLS } from '../_constants/api.url'
import {fetch_get_helper, fetch_post_helper} from './utils'

// 统一对外暴露fetch接口
export const companyService = {
    listBlacklist,
    listBlacklistByWeid,
    listLoanRequestRecords,
    verifyCredential,
    verifyUserAuthenticity,
    verifyMultiParityLoan,
    listLoanRecords,
    handleLoanRequest,
    addToBlacklist
}
// 返回JSON类型的结果，用于在异步action creator中调用
/*
 * @param {Function} 
 * @method GET
 * @returns {promise.json()} 
*/
listBlacklist = () => {
    url = API_URLS.COMPANY_LISTBLACKLIST_URL
    return fetch_get_helper(url)
}
/*
* @method POST
*/
listBlacklistByWeid = (weid) => {
    url = API_URLS.COMPANY_LISTBLACKLISTBYWEID_URL
    body = JSON.stringify(
            {
                weid: weid
            })
    return fetch_post_helper(url, body)
}
/**
 * @method POST
 * 根据公司名查询待核验借贷请求
 */
listLoanRequestRecords = (companyName) => {
    url = API_URLS.COMPANY_LISTLOANREQUESTRECORDS_URL
    body = JSON.stringify(
            {
                companyName: companyName
            })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
verifyCredential = (weid, issuer, type) => {
    url = API_URLS.COMPANY_VERIFYCREDENTIAL_URL
    body = JSON.stringify({
                    weid: weid,
                    issuer: issuer,
                    type: type
                })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
verifyUserAuthenticity = (weid) => {
    url = API_URLS.COMPANY_VERIFYUSERAUTHENTICITY_URL
    body = JSON.stringify({
                    weid: weid
                })
    return fetch_post_helper(url, body)
}

/**
 * @method GET
 */
verifyMultiParityLoan = () => {

}

/**
 * @method POST
 */
listLoanRecords = (companyName) => {
    url = API_URLS.COMPANY_LISTLOANREARDS_URL
    body = JSON.stringify({
                    companyName: companyName
                })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
handleLoanRequest = (id, handleType) => {
    url = API_URLS.COMPANY_HANDLELOANREQUEST_URL
    body = JSON.stringify({
                    id: id,
                    handleType: handleType
                })
    return fetch_post_helper(url, body)
}
/**
 * @method POST
 */
addToBlacklist = (id) => {
    url = API_URLS.COMPANY_ADDTOBLACKLIST_URL
    body = JSON.stringify({
                    id: id
                })
    return fetch_post_helper(url, body)
}