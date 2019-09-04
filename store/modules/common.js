import { setStore, getStore, removeStore } from '../../utils/store.js'
const state = {
  /**
   * 是否需要强制登录
   */
  mallDomain: 'yyy',
  mallType: '',
  mallId: '',
  // mallId: '',
  // p: '',
  // scm: '',
  // accountId:'',
  forcedLogin: false,
  hasLogin: uni.getStorageSync('hasLogin') || false,
  token: uni.getStorageSync('token') || '',
  uniCode: uni.getStorageSync('uniCode') || '',
  userInfo: getStore({ name: 'userInfo' }) || {},
  baseInfo: {
	  mallDomain: '',
	  mallId: '',
	  p: '',
	  scm: '',
	  // accountId:''
  },
}
const mutations = {
	// login(state, data) {
	// 	state.hasLogin = true;
	// 	state.userInfo = data;
	// 	setStore({ name: 'userInfo', content: state.userInfo, type: 'sync' });
	// 	setStore({ name: 'hasLogin', content: state.hasLogin, type: 'sync' });
	// },
	// logout(state) {
	// 	state.hasLogin = false;
	// 	state.userInfo = {};
	// 	removeStore({ name: 'userInfo' });
	// 	removeStore({ name: 'hasLogin' });
	// },
	SET_HASLOGIN: (state, hasLogin) => {
		state.hasLogin = hasLogin;
		// setStore({ name: 'hasLogin', content: state.hasLogin, type: 'sync' });
		uni.setStorageSync('hasLogin', JSON.stringify(hasLogin));
	},
	SET_TOKEN: (state, token) => {
		state.token = token;
		// setStore({ name: 'token', content: state.token, type: 'sync' });
		uni.setStorageSync('token', JSON.stringify(token));
	},
	SET_MALLDOMAIN: (state, mallDomain) => {
		state.mallDomain = mallDomain;
	},
	SET_MALLTYPE: (state, mallType) => {
		state.mallType = mallType;
	},
	SET_MALLID: (state, mallId) => {
		state.mallId = mallId;
	},
	// SET_MALLID: (state, mallId) => {
	// 	state.mallId = mallId;
	// },
	// SET_P: (state, p) => {
	// 	state.p = p;
	// },
	// SET_SCM: (state, scm) => {
	// 	state.scm = scm;
	// },
	// SET_ACCOUNTID: (state, accountId) => {
	// 	state.accountId = accountId;
	// },
	SET_UNICODE: (state, uniCode) => {
		state.uniCode = uniCode;
		// setStore({ name: 'uniCode', content: state.uniCode, type: 'sync' });
		uni.setStorageSync('uniCode', JSON.stringify(uniCode));
	},
	SET_BASEINFO: (state, baseInfo) => {
		state.baseInfo = baseInfo;
		setStore({ name: 'baseInfo', content: state.baseInfo, type: 'sync' });
	},
	SET_USERIFNO: (state, userInfo) => {
	  state.userInfo = userInfo;
	  setStore({ name: 'userInfo', content: state.userInfo, type: 'sync' });
	},
	// SET_MALLTYPE: (state, mallType) => {
	// 	state.mallType = mallType;
	// },
}
const actions = {

}
const getters = {

}

export default{
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}
