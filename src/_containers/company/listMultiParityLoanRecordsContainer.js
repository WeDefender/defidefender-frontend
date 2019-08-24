import { ListMultiParityLoanRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions } from '../../_actions'

const mapStateToProps = state => ({
    listRequestVerifyMultiParityLoanRecords: state.company.listRequestMultiParityLoanRecords,
    fetchStatus: state.company.fetchStatus
})

const mapDispatchToProps = dispatch => ({
    // 列出
    listRequestVerifyMultiParityLoanRecordsAsync: (companyName) => dispatch(companyActions.listRequestVerifyMultiParityLoanRecordsAsync(companyName)),
    // 更新
    handleRequestVerifyMultiParityLoanRecordAsync: (id, type) => dispatch(companyActions.handleRequestVerifyMultiParityLoanRecordAsync(id, type)),
})

// 连接到展示组件
export const ListMultiParityLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMultiParityLoanRecords)
