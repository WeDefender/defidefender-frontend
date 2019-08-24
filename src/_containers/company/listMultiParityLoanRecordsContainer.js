import { ListMultiParityLoanRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions } from '../../_actions'

const mapStateToProps = state => ({
    listRequestVerifyMultiParityLoanRecords: state.company.requestMultiParityLoanRecords,
})

const mapDispatchToProps = dispatch => ({
    listRequestVerifyMultiParityLoanRecordsAsync: (companyName) => dispatch(companyActions.listRequestVerifyMultiParityLoanRecordsAsync(companyName)),
    hanleRequestVerifyMultiParityLoanRecordAsync: (id, type) => dispatch(companyActions.hanleRequestVerifyMultiParityLoanRecordAsync(id, type)),
})

// 连接到展示组件
export const ListMultiParityLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMultiParityLoanRecords)
