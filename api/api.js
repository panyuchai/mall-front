import Request from '../utils/lunch-request/request';
import { setStore, getStore, removeStore } from '../utils/store.js'
import store from '../store/index.js';
const test = new Request();
test.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'http://192.168.1.104:8087';
	// config.baseUrl = 'http://192.168.1.110:8086';
	config.header = {
		a: 4,
		b: 4,
	}
	return config;
})
test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	// config.data['mallDomain']=getStore({ name: 'mallDomain' }) || this.$store.state.mallDomain;
	if (store.getters.token) {
		config.header = {
			...config.header,
			Authorization: 'Bearer ' + getStore({ name: 'token' })
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

// var host = window.location.host,
// 	baseUrl;
// switch (host) {
//   case "webapp.liduitong.com":
//     baseUrl = "//console.liduitong.com";
//     break;
//   case "localhost:8081":
//     baseUrl = "//192.168.1.10:8039";
//     break;
//   case "192.168.1.10:81":
//     baseUrl = "//192.168.1.10:8039";
//     break;
//   case "192.168.1.109:8081":
//     baseUrl="//192.168.1.10:8039";
// }
const http = new Request();
http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = "http://192.168.1.104:8087"; /* 根域名不同 */
	// config.baseUrl = 'http://192.168.1.110:8086';
	config.header = {
		// 'cookie': uni.getStorageSync('sessionid') || '123',
		a: 5,
	};
	return config;
})
http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	if (store.getters.token) {
		config.header = {
			...config.header,
			Authorization: 'Bearer ' + getStore({ name: 'token' })
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


