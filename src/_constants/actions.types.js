export const LIST_BLACKLIST = "LIST_BLACKLIST"

export const FETCH_STATUS = {
    FETCH_BEGIN: "FETCH_BEGIN",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAIL: "FECH_FAIL",
    FETCH_BEGIN_FOR_BLACKLIST: "FETCH_BEGIN_FOR_BLACKLIST",
    FETCH_SUCCESS_FOR_BLACKLIST: "FETCH_SUCCESS_FOR_BLACKLIST",
    FETCH_BEGIN_FOR_CREDENTIAL: "FETCH_BEGIN_FOR_CREDENTIAL",
    FETCH_SUCCESS_FOR_CREDENTIAL: "FETCH_SUCCESS_FOR_CREDENTIAL",
}

export const LoanRequestActionTypes = {
    SHOW_ALL_LOAN_REQUESTS: 'SHOW_ALL_LOAN_REQUESTS',
    VERIFY_CREDENTIAL_HASH: 'VERIFY_CREDENTIAL_HASH',
    QUERY_MULTI_PARTY_LOAN: 'QUERY_MULTI_PARTY_LOAN',
    QUERY_MAL_RECORDS: 'QUERY_MAL_RECORDS',
}

// 公司
export const COMPANY_ACTION_TYPES = {
    BLACKLIST: "BLACKLIST",
    LOAN_REQUEST_RECORDS: "LOAN_REQUEST_RECORDS",
    LOAN_RECORDS: "LOAN_RECORDS",
    MULTI_PARTY_INFO: "MULTI_PARTY_INFO",
    VERIFY_USER_AUTHENTICITY: "VERIFY_USER_AUTHENTICITY",
    VERIFY_CREDENTIAL: "VERIFY_CREDENTIAL",
    HANDLE_LOAN_REQUEST: "HANDLE_LOAN_REQUEST",
    LIST_BLACKLIST_BY_WEID: "LIST_BLACKLIST_BY_WEID",
    REQUEST_VERIFY_MULTI_PARITY_LOAN: "REQUEST_VERIFY_MULTI_PARITY_LOAN",
    LIST_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS: "LIST_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS",
    HANDLE_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS: "HANDLE_REQUEST_VERIFY_MULTIPARITY_LOAN_RECORDS",
    LIST_MULTI_PARITY_LOAN_INFO: "LIST_MULTI_PARITY_LOAN_INFO",
    ADD_TO_BLACKLIST: "ADD_TO_BLACKLIST",
}

// 用户
export const USER_ACTION_TYPES = {
    LIST_USER_LOAN_REQUEST_RECORDS: "LIST_USER_LOAN_REQUEST_RECORDS",
    LIST_USER_LOAN_RECORDS: "LIST_USER_LOAN_RECORDS",
    USER_CREDENTIALS: "USER_CREDENTIALS",
    CREATE_WEID: "CREATE_WEID",
    CREATE_SELECTIVE_CREDENTIAL: "CREATE_SELECTIVE_CREDENTIAL",
    CREATE_PRESENTATION: "CREATE_PRESENTATION",
    REQUEST_VERIFY_WEID: "REQUEST_VERIFY_WEID",
    GET_COMPANIES: "GET_COMPANIES",
    REQUEST_LOAN: "REQUEST_LOAN",
    LIST_CREDENTIALS: "LIST_CREDENTIALS",
    RETURN_LOAN: "RETURN_LOAN",
}

// 政府
export const GOVERNMENT_ACTION_TYPES = {
    LIST_TO_BE_CHECKED_USERS: "LIST_TO_BE_CHECKED_USERS",
    CREATE_CREDENTIAL: "CREATE_CREDENTIAL",
    LIST_ISSUED_CREDENTIALS: "LIST_ISSUED_CREDENTIALS",
    CHECK_USER: "CHECK_USER",
    LIST_VERIFIED_USERS: "LIST_VERIFIED_USERS",
}

// 通用
export const COMMON_ACTION_TYPES = {
    CREATE_CPT: "CREATE_CPT",
    GET_CPT_BY_ID: "GET_CPT_BY_ID",
    REGISTER_ISSUER: "REGISTER_ISSUER",
    GET_CREDENTIAL: "GET_CREDENTIAL",
    GET_PRESENTATION: "GET_PRESENTATION",
}






