import { ListUserLoanRecords } from '../../_pages/user'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

const mapStateToProps = state => ({
    listUserLoanRecords: state.user.listUserLoanRecords
})

const mapDispatchToProps = dispatch => ({
    listUserLoanRecordsAsync: (weid) => dispatch(userActions.listUserLoanRecordsAsync(weid))
})

// 连接到展示组件
export const ListUserLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUserLoanRecords)
