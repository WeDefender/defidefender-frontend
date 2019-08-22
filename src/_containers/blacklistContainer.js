import { Blacklist } from '../_pages/company'
import { connect } from 'react-redux'
import { listBlacklistAsync } from '../_actions/company.actions'


// store状态映射到组件
// blacklist是用于props的键
const mapStateToProps = state => ({
    blacklist: state.company.blacklist
    // loanRequests: state.company[0].loanRequests,
    // allLoanRecords: state.company[0].allLoanRecords,
    // multiPartyInfo: state.company[0].multiPartyInfo
})

// 注入到展示组件的props中的回调方法
const mapDispatchToProps = dispatch => ({
    listBlacklistAsync: () => dispatch(listBlacklistAsync())
})

// 连接到展示组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blacklist)
