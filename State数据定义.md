### Time: 20190820

#### 数据列表

#### 1.公司

- 黑名单
- 用户借款请求记录列表
- 所有已放款记录列表
- 多方借贷信息

#### 2.用户

- 可选借贷机构列表
- 个人的所有借贷请求

#### 3.政府

- 核验WeID过程
- 所有用户信息 (已经核验用户信息)
- 待核验用户WeID绑定身份信息
- 所有已经颁发的**根凭证**

#### 4.通用

重点：风控体现不出来。

添加一个评分体系。

贷前风控：

- 确定用户是真实的
- 确定用户是否黑名单
- 借贷记录
- 扩展性：接入用户的各种数据

### 需要修改state的行为

`state`数据结构定义：

```json
{
    "company": [
        "is_fetching": false
        "blacklist": [
        	{
                    "weid": "did:weid:1:0xbd88a3e27798a28970a358fa315673d11cc599a3",
                    "record": "应该于2019年8月1日还款10万元，但逾期未换",
                    "publisher": "did:weid:1:0xf3d3b86dfe9e551af2fc908a47663e921705f855",
                    "createdTime": " 2019-08-19"
             },
    	],
    	"loanRequests": 
			"result": [ // 单个公司的借贷请求列表
                {
                    "id": 2,
                    "weid": "did:weid:1:0xa1bd5ff47db4afb554004c25d846a9fe14f726cd",
                    "companyName": "WeBank",
                    "amount": 10000,
                    "expiredDate": "2019-08-20",
                    "credentialOwner": "did:weid:1:0xa1bd5ff47db4afb554004c25d846a9fe14f726cd",
                    "status": 0 // 
                },
        ],
		"allLoanRecords": [],
		"multiPartyInfo": [
            "usedCompanyCount": 0,
            "loanAmount": 10000
        ]
		
    ]，
	"common": [
        "loanCompanies": [], // 借贷结构名称列表
        ]
    ], 
    "government": [
        "verifiedUsers": [
        	{},
    	],
		"unverifiedUsers": [],
		"weids": [],
		"allCredentialsInfo": []
	],
	"user": [  
        "userLoanRequests": [], // 用户当前待完成借贷记录
		"userLoanRecords": [], // 用户已放款的借贷记录,
		"userCredentials": [] // 用户自己的存放根凭证和子凭证
    ]
}
```



### 