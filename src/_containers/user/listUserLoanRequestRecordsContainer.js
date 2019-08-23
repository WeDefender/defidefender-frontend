import { ListUserLoanRequestRecords } from '../../_pages/user'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

const mapStateToProps = state => ({
    listUserLoanRequestRecords: state.user.listUserLoanRequestRecords
})

const mapDispatchToProps = dispatch => ({
    listUserLoanRequestRecordsAsync: (weid) => dispatch(userActions.listUserLoanRequestRecordsAsync(weid))
})

// 连接到展示组件
export const ListUserLoanRequestRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUserLoanRequestRecords)
