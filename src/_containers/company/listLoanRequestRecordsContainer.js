import { ListLoanRequestRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions, commonActions } from '../../_actions'

const mapStateToProps = state => ({
    loanRequestRecords: state.company.loanRequestRecords,
    blacklistByWeid: state.company.blacklistByWeid,
    verifyUserAuthenticity: state.company.verifyUserAuthenticity,
    verifyCredential: state.company.verifyCredential,
    fetchStatus: state.company.fetchStatus,
    userInfo: state.common.claimData,
    fetchStatusForBlacklist: state.company.fetchStatusForBlacklist,
})

const mapDispatchToProps = dispatch => ({
    listLoanRequestRecordsAsync: () => dispatch(companyActions.listLoanRequestRecordsAsync()),
    verifyUserAuthenticityAsync: (id) => dispatch(companyActions.verifyUserAuthenticityAsync(id)),
    verifyCredentialAsync: (id, weid, issuer, type, verifyType) => dispatch(companyActions.verifyCredentialAsync(id, weid, issuer, type, verifyType)),
    handleLoanRequestAsync: (id, type) => dispatch(companyActions.handleLoanRequestAsync(id, type)),
    listBlacklistByWeidAsync: (weid) => dispatch(companyActions.listBlacklistByWeidAsync(weid)),
    getCredentialAsync: (weid, type) => dispatch(commonActions.getCredentialAsync(weid, type)),
})

// 连接到展示组件
export const ListLoanRequestRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLoanRequestRecords)
