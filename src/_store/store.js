import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { userReducer, companyReducer, governmentReducer } from '../_reducers'

let initialState = {
    "company": {
        "blacklist": [
            {
                "weid": "did:weid:1:0xbd88a3e27798a28970a358fa315673d11cc599a3",
                "record": "应该于2019年8月1日还款10万元，但逾期未换",
                "publisher": "did:weid:1:0xf3d3b86dfe9e551af2fc908a47663e921705f855",
                "createdTime": " 2019-08-19"
            },
        ],
        "loanRequestRecords":[],
        "loanRecords": [],
        "multiPartyInfo": {
            "usedCompanyCount": 0,
            "loanAmount": 10000
        },
    },

    "government": {},
    "user": {
        "userLoanRequests": [], // 用户当前待完成借贷记录
        "userLoanRecords": [], // 用户已放款的借贷记录,
        "userCredentials": [] // 用户自己的存放根凭证和子凭证
    }
}

const rootReducer = combineReducers({
    company: companyReducer,
    government: governmentReducer,
    user: userReducer
})

const middlewares = [ thunkMiddleware ]

// 配置Redux-devtools
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

export const store = createStore(
    rootReducer, 
    initialState,
    enhancer
)
