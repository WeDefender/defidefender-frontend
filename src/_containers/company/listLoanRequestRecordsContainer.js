import { ListLoanRequestRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions } from '../../_actions'

const mapStateToProps = state => ({
    loanRequestRecords: state.company.loanRequestRecords
})

const mapDispatchToProps = dispatch => ({
    listLoanRequestRecordsAsync: () => dispatch(companyActions.listLoanRequestRecordsAsync())
})

// 连接到展示组件
export const ListLoanRequestRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLoanRequestRecords)
