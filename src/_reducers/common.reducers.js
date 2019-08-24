import { COMMON_ACTION_TYPES as types } from '../_constants/actions.types'
import { FETCH_STATUS } from "../_constants";

function getCredentialReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_CREDENTIAL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export function commonReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_CREDENTIAL:
            return {
                ...state,
                claimData: getCredentialReducer({}, action)
            }
        case FETCH_STATUS.FETCH_BEGIN_FOR_CREDENTIAL:
            return {
                ...state,
                fetchStatusForCredential: action.payload
            }
        case FETCH_STATUS.FETCH_SUCCESS_FOR_CREDENTIAL:
            return {
                ...state,
                fetchStatusForCredential: action.payload
            }
        default:
            return state
    }
}