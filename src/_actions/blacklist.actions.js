/*
 * action 类型
 */
import { LIST_BLACKLIST } from '../_constants'
// export const LIST_BLACKLIST = 'LIST_BLACKLIST'

/*
 * action 创建函数, action中包含payload，描述要修改的state数据部分
 */
// 
function ListBlacklist() {
    return { 
        type: LIST_BLACKLIST,
        filter: weid
    }
}




