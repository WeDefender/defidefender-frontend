import { ListToBeCheckedUsers } from '../../_pages/government'
import { connect } from 'react-redux'
import { governmentActions } from '../../_actions'

const mapStateToProps = state => ({
    listToBeCheckedUsers: state.government.listToBeCheckedUsers,
    fetchStatus: state.government.fetchStatus,
})

// 注入到展示组件的props中的回调方法
const mapDispatchToProps = dispatch => ({
    listToBeCheckedUsersAsync: () => dispatch(governmentActions.listToBeCheckedUsersAsync()),
    checkUserAsync: (weid, type) => dispatch(governmentActions.checkUserAsync(weid, type))
})

// 连接到展示组件
export const ListToBeCheckedUsersContainer =  connect(
    mapStateToProps,
    mapDispatchToProps
)(ListToBeCheckedUsers)
