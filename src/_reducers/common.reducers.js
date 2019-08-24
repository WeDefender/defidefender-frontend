import { COMMON_ACTION_TYPES as types } from '../_constants/actions.types'

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
        default:
            return state
    }
}