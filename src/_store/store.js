import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BlacklistReducer } from '../_reducers'

const initialState = {
    "company": [
        {
            "blacklist": [
                {
                    "weid": "did:weid:1:0xbd88a3e27798a28970a358fa315673d11cc599a3",
                    "description": "应该于2019年8月1日还款6万元，但逾期未还"
                },
                {
                    "weid": "did:weid:1:0xbd88a3e27798a28970a358fa315673d11cc599a3",
                    "description": "应该于2019年7月4日还款1万元，但逾期未还"
                },
                {
                    "weid": "did:weid:1:0x8dc34e4cad4d86f5f20f5b63d96230f759f3bbe7",
                    "description": "应该于2019年7月3日还款3万元，但逾期未还"
                }
            ],
            "allLoanRequests": [

            ]
        }
    ],
    "government": [
    ],
    "user": [
    ]
}

// 在store中我们完成多个reducers的组合
// 键：state的属性
// 值：reducer函数
// state属性决定了分reducer传入的state参数值
const rootReducer = combineReducers({
    blacklist: BlacklistReducer
})
const middlewares = [ thunkMiddleware ]

// 注意applyMiddleware放置的位置
export const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(...middlewares)
)