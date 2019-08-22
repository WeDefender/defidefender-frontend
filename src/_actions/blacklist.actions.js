import { LIST_BLACKLIST } from '../_constants'
import { companyServices }  from '../_services/company.services'

/*
 * 同步action创建函数, action中包含payload，描述要修改的state数据部分
*/
export const listBlacklist = (json) => {
    return { 
        type: LIST_BLACKLIST,
        payload: json
    }
}

const fetch_blacklist_begin = () => {
    return {
        type: "BEGIN_FETCHING"
    }
}

// 异步action creator
export const listBlacklistAsync = () => {
    return dispatch => {
        console.log("请求开始...")
        dispatch(fetch_blacklist_begin()) // 请求开始
        // 开始请求
        companyServices.listBlacklist().then( 
            json => {
                console.log("获取的黑名单：", json)
                dispatch(listBlacklist(json)) // 最终分发行为
            }
        )
    }
}











