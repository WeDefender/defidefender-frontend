import { API_URLS } from '../_constants/api.url'
import { fetch_get_helper, fetch_post_helper } from './utils'

/**
 * 新建CPT模板
 * @method POST
 * @param {body} {
	"publisher":"did:weid:1:0x5ef98d1c967f869f8f2c19eadfabd847b346e21c",
	"cptSchema":{
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "this is CPT issued by government",
		"title": "Government CPT",
		"type": "object",
		"properties": {
			"weid": {
				"type": "string",
				"description": "user weId"
			},
			"name": {
				"type": "string",
				"description": "user actual name"
			},
			"gender": {
				"description": "the gender of certificate owner",
				"enum": [
					"F",
					"M"
				],
				"type": "string"
			},
			"birthday": {
				"description": "the birthday of certificate owner",
				"type": "string"
			},
			"address": {
				"description": "the address of certificate owner",
				"type": "string"
			},
			"identityNumber": {
				"type": "string",
				"description": "the identityNumber of certificate owner"
			}
		},
		"required": [
			"name",
			"gender",
			"birthday",
			"address",
			"identityNumber"
		]
	}
}
 */
const createCPT = (publisher, cptSchema) => {
	const url = API_URLS.COMMON_CREATECPT_URL
	const body = JSON.stringify({
		publisher: publisher,
		cptSchema: cptSchema
	})
	return fetch_post_helper(url, body)
}

/**
 * 根据id查询CPT
 * @method POST
 * @param {body} {
	"cptId":2000000
}
*/
const getCPTById = (cptId) => {
	const url = API_URLS.COMMON_GETCPTBYID_URL
	const body = JSON.stringify({
		cptId: cptId
	})
	return fetch_post_helper(url, body)
}

/**
 * 申请成为权威颁发机构
 * @method POST
 * @param {body} {
	"issuer":"did:weid:1:0x5ef98d1c967f869f8f2c19eadfabd847b346e21c",
	"authorityName":"Government"
}
*/
const registerIssuer = (issuer, authorityName) => {
	const url = API_URLS.COMMON_REGISTERISSUER_URL
	const body = JSON.stringify({
		issuer: issuer,
		authorityName: authorityName
	})
	return fetch_post_helper(url, body)
}

/**
 * 获取凭证
 * @method POST
 * @param {body} {
	"id":1
}
*/
const getCredential = (weid, type) => {
	const url = API_URLS.COMMON_GETCREDENTIAL_URL
	const body = JSON.stringify({
		weid: weid,
		type: type
	})
	return fetch_post_helper(url, body)
}

/**
 * 获取Presentation，给机构看，暂时未用到
 * @method POST
 * @param {body} {
	"weid":"did:weid:1:0xa1bd5ff47db4afb554004c25d846a9fe14f726cd"
}
*/
const getPresentation = (weid) => {
	const url = API_URLS.COMMON_GETPRESENTATION_URL
	const body = JSON.stringify({
		weid: weid
	})
	return fetch_post_helper(url, body)
}
/**
 * 初始化网络并部署合约
 * @method POST
 * @param {body} {}
 */
const initializeAndDeploy = () => {
	const url = API_URLS.COMMON_INITIALIZEANDDEPLOY_URL
	const body = JSON.stringify({
	})
	return fetch_post_helper(url, body)
}

/**
 * 根据weid获取所有凭证
 * @method POST
 * @param {body} {
	"weid":"did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441"
}
*/
const getCredentialsByWeid = (weid) => {
	const url = API_URLS.COMMON_GETCREDENTIALSBYWEID_URL
	const body = JSON.stringify({
		weid: weid
	})
	return fetch_post_helper(url, body)
}

export const commonServices = {
	createCPT,
	getCPTById,
	registerIssuer,
	getCredential,
	getPresentation,
	initializeAndDeploy,
	getCredentialsByWeid
}