import Request from '../utils/lunch-request/request';
import { setStore, getStore, removeStore } from '../utils/store.js'
import store from '../store/index.js';
const test = new Request();
test.setConfig((config) => { /* 设置全局配置 */
	// #ifdef H5
	let host = window.location.host;
	switch(host){
		case 'localhost:8080':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case '192.168.1.10:8888':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case '192.168.1.130:8080':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case 'testpay.yujianli.cn':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		default:
			config.baseUrl = '//mall-api.yujianli.cn';
	}
	// #endif
	// #ifdef MP
	// config.baseUrl = 'https://test.yujianliwu.com';
	config.baseUrl = 'https://mall-api.yujianli.cn';
	// #endif
	config.header = {
		a: 4,
		// Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlMDFjMGI4ODdiYWU0ZTE0OTZlZGM0YTg4ZjcwZDczYiIsImNvbXBhbnlJZCI6IjBkYzUxMmRhNGJmMzRjYzM4ZTcyOGM0MTE5ZDFiMmRiIiwidXNlcl9uYW1lIjoib1pMYmhzbHFyNFBDaWpLZWhSdHAtczJlN1BMdyIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJvWkxiaHNscXI0UENpaktlaFJ0cC1zMmU3UEx3IiwidXNlclR5cGUiOjIsImV4cCI6MTU2Njk2NDI5MSwidXNlcklkIjoxMTY1ODMxNTI2OTc0NzAxNTY5LCJhdXRob3JpdGllcyI6WyJST0xFX0FDVElWSVRJX1VTRVIiXSwianRpIjoiMzg1OGY4MTEtMjYzMC00ZjBlLTljNWMtZDI2ZjA0ZmQyYjc5IiwiY2xpZW50X2lkIjoiMGRjNTEyZGE0YmYzNGNjMzhlNzI4YzQxMTlkMWIyZGIifQ.FjhhgZvOa-D2evUh9CAyQvKTjl2HMu6NGXUtCh4rXmEKXY1_LdXOCBOm7yU_CfPwpkELIT32Z7w5-J_L4GNHK_fXCf9akNYw1Vg8FfXbxO9jHYxsRvshFl5n9GmRDPLGoFbhCc1dtswQt7FDOkVs99D6stO4UL1WIf4vtLEFy847Fc1S4OirNtPECdXUS42KtLn2E6K3Wvvio3gUO-biWhlbsInHbVP8Cc-mXiTSgE0MPJMO9yVD6M6lp6B4HYqtbVKI3TSrDmcfNDLmILZpzcmoEZFrXo1GRGIDDKpuIRlPPxFG6ugUqR3jS35kIQP6KVlfgRgUxjnr7Rt2DASzFQ'
	}
	return config;
})
test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	// config.data['mallDomain']=getStore({ name: 'mallDomain' }) || this.$store.state.mallDomain;
	if (store.getters.token) {
		config.header = {
			...config.header,
			// Authorization: 'Bearer ' + getStore({ name: 'token' }),
			Authorization: 'Bearer ' + uni.getStorageSync('token')
		}
    }
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config;
})
test.interceptor.response((response) => { /* 请求之后拦截器 */
	return response;
})


const http = new Request();
http.setConfig((config) => { /* 设置全局配置 */
	// #ifdef H5
	let host = window.location.host;
	switch(host){
		case 'localhost:8080':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case '192.168.1.130:8080':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case '192.168.1.10:8888':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		case 'testpay.yujianli.cn':
			config.baseUrl = '//192.168.1.104:8087';
			break;
		default:
			config.baseUrl = '//mall-api.yujianli.cn';
	}
	// #endif
	// #ifdef MP
	// config.baseUrl = 'https://test.yujianliwu.com';
	config.baseUrl = 'https://mall-api.yujianli.cn';
	// #endif
	config.header = {
		// 'cookie': uni.getStorageSync('sessionid') || '123',
		a: 5,
		// Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlMDFjMGI4ODdiYWU0ZTE0OTZlZGM0YTg4ZjcwZDczYiIsImNvbXBhbnlJZCI6IjBkYzUxMmRhNGJmMzRjYzM4ZTcyOGM0MTE5ZDFiMmRiIiwidXNlcl9uYW1lIjoib1pMYmhzbHFyNFBDaWpLZWhSdHAtczJlN1BMdyIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJvWkxiaHNscXI0UENpaktlaFJ0cC1zMmU3UEx3IiwidXNlclR5cGUiOjIsImV4cCI6MTU2Njk2NDI5MSwidXNlcklkIjoxMTY1ODMxNTI2OTc0NzAxNTY5LCJhdXRob3JpdGllcyI6WyJST0xFX0FDVElWSVRJX1VTRVIiXSwianRpIjoiMzg1OGY4MTEtMjYzMC00ZjBlLTljNWMtZDI2ZjA0ZmQyYjc5IiwiY2xpZW50X2lkIjoiMGRjNTEyZGE0YmYzNGNjMzhlNzI4YzQxMTlkMWIyZGIifQ.FjhhgZvOa-D2evUh9CAyQvKTjl2HMu6NGXUtCh4rXmEKXY1_LdXOCBOm7yU_CfPwpkELIT32Z7w5-J_L4GNHK_fXCf9akNYw1Vg8FfXbxO9jHYxsRvshFl5n9GmRDPLGoFbhCc1dtswQt7FDOkVs99D6stO4UL1WIf4vtLEFy847Fc1S4OirNtPECdXUS42KtLn2E6K3Wvvio3gUO-biWhlbsInHbVP8Cc-mXiTSgE0MPJMO9yVD6M6lp6B4HYqtbVKI3TSrDmcfNDLmILZpzcmoEZFrXo1GRGIDDKpuIRlPPxFG6ugUqR3jS35kIQP6KVlfgRgUxjnr7Rt2DASzFQ'
	};
	return config;
})
http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	if (store.getters.token) {
		config.header = {
			...config.header,
			// Authorization: 'Bearer ' + getStore({ name: 'token' }),
			Authorization: 'Bearer ' + uni.getStorageSync('token')
			// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
		}
    }
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
		cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config;
})
http.interceptor.response((response) => { /* 请求之后拦截器 */

	return response.data;
})
export {
	http,
	test
};


