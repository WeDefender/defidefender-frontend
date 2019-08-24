import { ListVerifiedUsers } from '../../_pages/government'
import { connect } from 'react-redux'
import { governmentActions } from '../../_actions'

const mapStateToProps = state => ({
    listVerifiedUsers: state.government.listVerifiedUsers,
    fetchStatus: state.government.fetchStatus
})

// 注入到展示组件的props中的回调方法
const mapDispatchToProps = dispatch => ({
    listVerifiedUsersAsync: () => dispatch(governmentActions.listVerifiedUsersAsync()),
})

// 连接到展示组件
export const ListVerifiedUsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListVerifiedUsers)
