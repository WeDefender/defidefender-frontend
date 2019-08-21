import { LIST_BLACKLIST } from '../_constants'
import { companyServices }  from '../_services/company.services'

/*
 * action创建函数, action中包含payload，描述要修改的state数据部分
*/
export const ListBlacklist = (json) => {
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
        dispatch(fetch_blacklist_begin()) // 请求开始
        const json = companyServices.listBlacklist()
        console.log("获取的黑名单：", json )
        return dispatch(ListBlacklist(json)) // 最终分发行为
    }
}











