import { Blacklist } from '../_pages/company'
import { connect } from 'react-redux'
import { ListBlacklist, listBlacklistAsync} from '../_actions'
import { LIST_BLACKLIST } from '../_constants'
import { companyServices } from '../_services/company.services'

// 使用fetch拿到的数据
const getBlacklist = () => {
    // 此时获取到数据还是个Promise
    const json = companyServices.listBlacklist()
    return json
}

// store状态映射到组件
// blacklist是用于props的键
const mapStateToProps = state => ({
    blacklist: getBlacklist()
})

// 注入到展示组件的props中的回调方法
const mapDispatchToProps = dispatch => ({
    ListBlacklist: () => dispatch(ListBlacklist()),
    ListBlacklistAsync: () => dispatch(listBlacklistAsync())
})

// 连接到展示组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blacklist)
