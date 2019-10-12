import { setStore, getStore, removeStore } from '../../utils/store.js'
const state = {
  baseUrl: '',
  transferUrl: '',
  paymentUrl: '',
  mallDomain: '',
  // #ifdef MP
  mallDomain: 'liangpinpuzi',
  // #endif
  mallType: '',
  mallId: null,
  mallName: '',
  mallLogo: '',
  hasLogin: false,
  token: '',
  uniCode: '',
  userInfo: {},
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
	SET_BASEURL: (state, baseUrl) => {
		state.baseUrl = baseUrl;
	},
	SET_TRANSFERURL: (state, transferUrl) => {
		state.transferUrl = transferUrl;
	},
	SET_PAYMENTURL: (state, paymentUrl) => {
		state.paymentUrl = paymentUrl;
	},
	SET_ISTRANSFERPAGE: (state, isTransferPage) => {
		state.isTransferPage = isTransferPage;
		uni.setStorageSync('isTransferPage', isTransferPage);
	},
	SET_HASLOGIN: (state, hasLogin) => {
		state.hasLogin = hasLogin;
		uni.setStorageSync('hasLogin', hasLogin);
	},
	SET_TOKEN: (state, token) => {
		state.token = token;
		uni.setStorageSync('token', token);
	},
	SET_MALLDOMAIN: (state, mallDomain) => {
		state.mallDomain = mallDomain;
		uni.setStorageSync('mallDomain', mallDomain)
	},
	SET_MALLTYPE: (state, mallType) => {
		state.mallType = mallType;
	},
	SET_MALLID: (state, mallId) => {
		state.mallId = mallId;
	},
	SET_MALLNAME: (state, mallName) => {
		state.mallName = mallName
	},
	SET_MALLLOGO: (state, mallLogo) => {
		state.mallLogo = mallLogo
	},
	SET_UNICODE: (state, uniCode) => {
		state.uniCode = uniCode;
		uni.setStorageSync('uniCode', uniCode);
	},
	SET_BASEINFO: (state, baseInfo) => {
		state.baseInfo = baseInfo;
		setStore({ name: 'baseInfo', content: state.baseInfo, type: 'sync' });
	},
	SET_USERIFNO: (state, userInfo) => {
	  state.userInfo = userInfo;
	  setStore({ name: 'userInfo', content: state.userInfo, type: 'sync' });
	},
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
