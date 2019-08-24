import { ListLoanRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions, commonActions } from '../../_actions'

const mapStateToProps = state => ({
    loanRecords: state.company.loanRecords,
    fetchStatus: state.company.fetchStatus,
})

const mapDispatchToProps = dispatch => ({
    listLoanRecordsAsync: () => dispatch(companyActions.listLoanRecordsAsync()),
    addToBlacklistAsync: (id) => dispatch(companyActions.addToBlacklistAsync(id)),
    getCredentialAsync: (weid, type) => dispatch(commonActions.getCredentialAsync(weid, type)),
})

// 连接到展示组件
export const ListLoanRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLoanRecords)
