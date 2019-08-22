import { ListLoanRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions } from '../../_actions'

const mapStateToProps = state => ({
    loanRecords: state.company.loanRecords
})

const mapDispatchToProps = dispatch => ({
    listLoanRecordsAsync: () => dispatch(companyActions.listLoanRecordsAsync())
})

// 连接到展示组件
export const ListLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLoanRecords)
