import { API_URLS } from '../_constants/api.url'
import {fetch_get_helper, fetch_post_helper} from './utils'

// 返回JSON类型的结果，用于在异步action creator中调用
/*
 * @param {Function} 
 * @method GET
 * @returns {promise.json()} 
*/
const listBlacklist = () => {
    const url = API_URLS.COMPANY_LISTBLACKLIST_URL
    return fetch_get_helper(url)
}
/*
* @method POST
*/
const listBlacklistByWeid = (weid) => {
    const url = API_URLS.COMPANY_LISTBLACKLISTBYWEID_URL
    const body = JSON.stringify(
            {
                weid: weid
            })
    return fetch_post_helper(url, body)
}
/**
 * @method POST
 * 根据公司名查询待核验借贷请求
 */
const listLoanRequestRecords = (companyName) => {
    const url = API_URLS.COMPANY_LISTLOANREQUESTRECORDS_URL
    const body = JSON.stringify(
            {
                companyName: companyName
            })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
const verifyCredential = (weid, issuer, type) => {
    const url = API_URLS.COMPANY_VERIFYCREDENTIAL_URL
    const body = JSON.stringify({
                    weid: weid,
                    issuer: issuer,
                    type: type
                })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
const verifyUserAuthenticity = (weid) => {
    const url = API_URLS.COMPANY_VERIFYUSERAUTHENTICITY_URL
    const body = JSON.stringify({
                    weid: weid
                })
    return fetch_post_helper(url, body)
}

/**
 * @method GET
 */
const verifyMultiParityLoan = () => {

}

/**
 * @method POST
 */
const listLoanRecords = (companyName) => {
    const url = API_URLS.COMPANY_LISTLOANREARDS_URL
    const body = JSON.stringify({
                    companyName: companyName
                })
    return fetch_post_helper(url, body)
}

/**
 * @method POST
 */
const handleLoanRequest = (id, handleType) => {
    const url = API_URLS.COMPANY_HANDLELOANREQUEST_URL
    const body = JSON.stringify({
                    id: id,
                    handleType: handleType
                })
    return fetch_post_helper(url, body)
}
/**
 * @method POST
 */
const addToBlacklist = (id) => {
    const url = API_URLS.COMPANY_ADDTOBLACKLIST_URL
    const body = JSON.stringify({
                    id: id
                })
    return fetch_post_helper(url, body)
}

// 统一对外暴露fetch接口
export const companyServices = {
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