import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './_pages/layout'
import { UserInfo, ListAllCredential } from './_pages/government'
import { LoanRequestInfoList, LoanRecordsList } from './_pages/company'
import { UserRegister, RequestLoan, ListCredential, RequestCredential, LoanRequestsList, UserLoanRecordsList } from './_pages/user'
import { HomeContent } from './_pages/homeContent'

import Blacklist from './_containers/company/blacklistContainer'
import Card1 from './_components/Card'
import { ListToBeCheckedUsersContainer } from './_containers'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* 政府 */}
            <Route path="/home" component={HomeContent}></Route>
            <Route path="/userInfo" component={UserInfo}></Route>
            <Route path="/listToBeCheckedUsers" component={ListToBeCheckedUsersContainer}></Route>
            <Route path="/listAllCredential" component={ListAllCredential}></Route>
            {/* 机构 */}
            <Route path="/blacklist" component={Blacklist}></Route>
            <Route path="/loanRequestInfoList" component={LoanRequestInfoList}></Route>
            <Route path="/loanRecordsList" component={LoanRecordsList}></Route>
            {/* 用户 */}
            <Route path="/userRegister" component={UserRegister}></Route>
            <Route path="/requestLoan" component={RequestLoan}></Route>
            <Route path="/listCredential" component={ListCredential}></Route>
            <Route path="/requestCredential" component={RequestCredential}></Route>
            <Route path="/loanRequestsList" component={LoanRequestsList}></Route>
            <Route path="/userLoanRecordsList" component={UserLoanRecordsList}></Route>
            <Card1 />
          </Switch >
        </Layout>
      </BrowserRouter >
    )
  }
}

export default App
