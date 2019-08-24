import { RequestLoan } from '../../_pages/user'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    requestLoanAsync: (companyName, amount, durationMonth, weid) => dispatch(userActions.requestLoanAsync(companyName, amount, durationMonth, weid)),
})

// 连接到展示组件
export const RequestLoanContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestLoan)
