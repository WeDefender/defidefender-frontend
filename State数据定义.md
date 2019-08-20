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
- 所有用户信息 
- 待核验用户WeID绑定身份信息

#### 4.通用

### 需要修改state的行为

`state`数据结构定义：

```json
{
    "company": [
        "blacklist":[
            {
                "weid": "did:weid:1:0xbd88a3e27798a28970a358fa315673d11cc599a3",
                "record": "应该于2019年8月1日还款10万元，但逾期未换",
                "publisher": "did:weid:1:0xf3d3b86dfe9e551af2fc908a47663e921705f855",
                "createdTime": " 2019-08-19"
            },
    	],
    	"loanRequests": [ // 单个公司的借贷请求列表
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
        "credential": [
         {
            "context": "https://github.com/WeBankFinTech/WeIdentity/blob/master/context/v1",
            "id": "9ce9e33c-795d-4433-9db7-053f4a13ea91",
            "cptId": 2000000,
            "issuer": "did:weid:1:0x1a708bfa3b302163b60b2044e8c6befcb08fa017",
            "issuanceDate": 1566221600,
            "expirationDate": 1566271665,
            "claim": {
                "birthday": "1995-05-09",
                "address": "浙江省",
                "gender": "M",
                "identityNumber": "666",
                "name": "Sher",
                "weid": "did:weid:1:0xa1bd5ff47db4afb554004c25d846a9fe14f726cd"
            },
            "proof": {
                "creator": "did:weid:1:0x1a708bfa3b302163b60b2044e8c6befcb08fa017#key0",
                "salt": {
                    "birthday": "vxdru",
                    "address": "3PK9I",
                    "gender": "f5nkf",
                    "identityNumber": "Tp2YA",
                    "name": "irWo3",
                    "weid": "A4soA"
                },
                "created": 1566221600,
                "type": "EcdsaSignature",
                "signatureValue": "HPpudj27GjwHWlclcF/2SylgKPrTXYwxoI5ZTtUDSBjoUYXwNd+nDJj8pgDHfCr2soPMKbgZlBU0kMUXx2Jg9lw="
            },
            "type": [
                "VerifiableCredential"
            ],
            "signature": "HPpudj27GjwHWlclcF/2SylgKPrTXYwxoI5ZTtUDSBjoUYXwNd+nDJj8pgDHfCr2soPMKbgZlBU0kMUXx2Jg9lw=",
            "salt": {
                "birthday": "vxdru",
                "address": "3PK9I",
                "gender": "f5nkf",
                "identityNumber": "Tp2YA",
                "name": "irWo3",
                "weid": "A4soA"
            },
            "proofType": "EcdsaSignature"
        }
        ]
    ], 
    "government": [
        
	],
	"user": [  
        "userLoanRequests": [], // 用户当前待完成借贷记录
		"userLoanRecords": [], // 用户已放款的借贷记录
    ]
}
```



### 