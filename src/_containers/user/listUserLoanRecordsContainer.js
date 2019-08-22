import { ListUserLoanRecords } from '../../_pages/user'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

const mapStateToProps = state => ({
    userLoanRecords: state.user.userLoanRecords
})

const mapDispatchToProps = dispatch => ({
    listLoanRecordsAsync: (weid) => dispatch(userActions.listLoanRecordsAsync(weid))
})

// 连接到展示组件
export const ListUserLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUserLoanRecords)
