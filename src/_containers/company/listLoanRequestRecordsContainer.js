import { ListLoanRequestRecords } from '../../_pages/company'
import { connect } from 'react-redux'
import { companyActions } from '../../_actions'

const mapStateToProps = state => ({
    loanRequestRecords: state.company.loanRequestRecords,
})

const mapDispatchToProps = dispatch => ({
    listLoanRequestRecordsAsync: () => dispatch(companyActions.listLoanRequestRecordsAsync()),
    verifyUserAuthenticityAsync: (id) => dispatch(companyActions.verifyUserAuthenticityAsync(id)),
    verifyCredentialAsync: (id, weid, issuer, type, verifyType) => dispatch(companyActions.verifyCredentialAsync(id, weid, issuer, type, verifyType)),
    handleLoanRequestAsync: (id, type) => dispatch(companyActions.handleLoanRequestAsync(id, type))
})

// 连接到展示组件
export const ListLoanRequestRecordsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLoanRequestRecords)
