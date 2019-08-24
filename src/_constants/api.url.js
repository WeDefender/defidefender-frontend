// const SERVER = 'http://defi.sher.vip'
const SERVER = 'http://192.168.1.111:8080'

const BASE_URLS = {
    COMPANY: SERVER + '/company',
    GOVERNMENT: SERVER + '/government',
    COMMON: SERVER + '/server',
    USER: SERVER + '/user',
}

export const API_URLS = {
    // 机构/公司, 9个API
    COMPANY_LISTBLACKLIST_URL: BASE_URLS.COMPANY + '/listBlacklist',
    COMPANY_LISTBLACKLISTBYWEID_URL: BASE_URLS.COMPANY + '/listBlacklistByWeid',
    COMPANY_LISTLOANREQUESTRECORDS_URL: BASE_URLS.COMPANY + '/listLoanRequestRecords',
    COMPANY_VERIFYCREDENTIAL_URL: BASE_URLS.COMPANY + '/verifyCredential',
    COMPANY_VERIFYUSERAUTHENTICITY_URL: BASE_URLS.COMPANY + '/verifyUserAuthenticity',
    COMPANY_VERYMULTIPARITYLOAN_URL: BASE_URLS.COMPANY + '/verifyMultiParityLoan',
    COMPANY_LISTLOANREARDS_URL: BASE_URLS.COMPANY + '/listLoanRecords',
    COMPANY_HANDLELOANREQUEST_URL: BASE_URLS.COMPANY + '/handleLoanRequest',
    COMPANY_ADDTOBLACKLIST_URL: BASE_URLS.COMPANY + '/addToBlacklist',
    
    // 政府，5个API
    GOVERNMENT_LISTVERIFIEDUSERS_URL: BASE_URLS.GOVERNMENT + '/listVerifiedUsers',
    GOVERNMENT_LISTTOBECHECKEDUSERS_URL: BASE_URLS.GOVERNMENT + '/listToBeCheckedUsers',
    GOVERNMENT_LISTISSUEDCREDENTIALS_URL: BASE_URLS.GOVERNMENT + '/listIssuedCredentials',
    GOVERNMENT_CREATECREDENTIAL_URL: BASE_URLS.GOVERNMENT + '/createCredential',
    GOVERNMENT_CHECKUSER_URL: BASE_URLS.GOVERNMENT + '/checkUser',

    // 用户， 10个API
    USER_CREATEWEID_URL: BASE_URLS.USER + '/createWeId',
    USER_CREATESELECTIVECREDENTIAL_URL: BASE_URLS.USER + '/createSelectiveCredential',
    USER_CREATEPRESENTATION_URL: BASE_URLS.USER + '/createPresentation',
    USER_REQUESTVERIFIEDWEID_URL: BASE_URLS.USER + '/requestVerifyWeId',
    USER_GETCOMPANIES_URL: BASE_URLS.USER + '/getCompanies',
    USER_REQUESTLOAN_URL: BASE_URLS.USER + '/requestLoan',
    USER_LISTCREDENTIALS_URL: BASE_URLS.USER + '/listCredentials',
    USER_LISTLOANREQUESTS_URL: BASE_URLS.USER + '/listLoanRequests',
    USER_LISTLOANRECORDS_URL: BASE_URLS.USER + '/listLoanRecords',
    USER_RETURNLOAN_URL: BASE_URLS.USER + '/returnLoan',

    // 通用接口，6个API
    COMMON_CREATECPT_URL: BASE_URLS.COMMON + '/createCPT',
    COMMON_GETCPTBYID_URL: BASE_URLS.COMMON + '/getCPTById',
    COMMON_REGISTERISSUER_URL: BASE_URLS.COMMON + '/registerIssuer',
    COMMON_GETCREDENTIAL_URL: BASE_URLS.COMMON + '/getCredential',
    COMMON_GETPRESENTATION_URL: BASE_URLS.COMMON + '/getPresentation',
    COMMON_INITIALIZEANDDEPLOY_URL: BASE_URLS.COMMON + '/initializeAndDeploy',
    COMMON_GETCREDENTIALSBYWEID_URL: BASE_URLS.COMMON + '/getCredentialsByWeid'
}