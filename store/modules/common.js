import { setStore, getStore, removeStore } from '../../utils/store.js'
const state = {
  /**
   * 是否需要强制登录
   */
  baseUrl: 'http://192.168.1.104:8087',
  // baseUrl: 'http://192.168.1.135:8086',
  paymentUrl: 'testpay',
  transferUrl: 'http://192.168.1.10:8888',
  // transferUrl: 'http://192.168.1.126:8080',
  mallDomain: '',
  mallType: '',
  mallId: null,
  mallName: '',
  mallLogo: '',
  // mallId: '',
  // p: '',
  // scm: '',
  // accountId:'',
  forcedLogin: false,
  firstLoad: true,
  // hasLogin: getStore({ name: 'hasLogin' }) && getStore({ name: 'hasLogin' }).hasLogin || false,
  // token: getStore({ name: 'token' }) && getStore({ name: 'token' }).token || '',
  // uniCode: getStore({ name: 'uniCode' }) && getStore({ name: 'uniCode' }).uniCode || '',
  // userInfo: getStore({ name: 'userInfo' }) || {},
  hasLogin: false,
  token: '',
  uniCode: '',
  // userInfo: {
	 //  accountId: '',
	 //  customerName: '',
	 //  wechatName: '',
	 //  customerSex: '',
	 //  customerBirthday: '',
	 //  customerImage: '',
	 //  customerId: '',
	 //  mobilephone: ''
  // },
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
	SET_FIRSTLOAD: (state, firstLoad) => {
		state.firstLoad = firstLoad;
	},
	SET_ISTRANSFERPAGE: (state, isTransferPage) => {
		state.isTransferPage = isTransferPage;
		uni.setStorageSync('isTransferPage', isTransferPage);
	},
	SET_HASLOGIN: (state, hasLogin) => {
		state.hasLogin = hasLogin;
		// setStore({ name: 'hasLogin', content: state.hasLogin, type: 'sync' });
		uni.setStorageSync('hasLogin', hasLogin);
	},
	SET_TOKEN: (state, token) => {
		state.token = token;
		// setStore({ name: 'token', content: state.token, type: 'sync' });
		uni.setStorageSync('token', token);
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
	SET_MALLNAME: (state, mallName) => {
		state.mallName = mallName
	},
	SET_MALLLOGO: (state, mallLogo) => {
		state.mallLogo = mallLogo
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
		uni.setStorageSync('uniCode', uniCode);
	},
	SET_BASEINFO: (state, baseInfo) => {
		state.baseInfo = baseInfo;
		setStore({ name: 'baseInfo', content: state.baseInfo, type: 'sync' });
	},
	SET_USERIFNO: (state, userInfo) => {
	  state.userInfo = userInfo;
	  setStore({ name: 'userInfo', content: state.userInfo, type: 'sync' });
	  // uni.setStorageSync('userInfo', JSON.stringify(userInfo));
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
