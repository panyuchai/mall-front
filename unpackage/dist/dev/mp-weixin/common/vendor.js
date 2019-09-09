(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */
/*!**********************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 13));
var _api = __webpack_require__(/*! @/api/api.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

var tui = {
  toast: function toast(text, duration, success) {
    uni.showToast({
      title: text,
      icon: success ? 'success' : 'none',
      duration: duration || 2000 });

  }
  // constNum: function() {
  // 	const res = uni.getSystemInfoSync();
  // 	return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
  // },
  // px:function(num){
  // 	return uni.upx2px(num)+'px';
  // },
  // interfaceUrl: function() {
  // 	//接口地址
  // 	return "http://39.108.124.252:12000/";
  // },
  // request: function(url, postData, method, type, hideLoading) {
  // 	//接口请求
  // 	if (!hideLoading) {
  // 		uni.showLoading({
  // 			mask: true,
  // 			title: '请稍候...'
  // 		})
  // 	}
  // 	return new Promise((resolve, reject) => {
  // 		uni.request({
  // 			url: this.interfaceUrl() + url,
  // 			data: postData,
  // 			header: {
  // 				'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
  // 				'authorization': this.getToken(),
  // 				'security': 1
  // 			},
  // 			method: method, //'GET','POST'
  // 			dataType: 'json',
  // 			success: (res) => {
  // 				!hideLoading && uni.hideLoading()
  // 				if (res.data && res.data.code === 403 && !postData.modalAbate) {
  // 					uni.showModal({
  // 						title: '登录',
  // 						content: '您尚未登录，请先登录',
  // 						showCancel: false,
  // 						confirmColor: "#5677FC",
  // 						confirmText: '确定',
  // 						success(e) {
  // 							uni.redirectTo({
  // 								url: '/pages/login/login'
  // 							})
  // 						}
  // 					})
  // 				} else {
  // 					resolve(res.data)
  // 				}
  // 			},
  // 			fail: (res) => {
  // 				if (!hideLoading) {
  // 					this.toast("网络不给力，请稍后再试~")
  // 					//uni.hideLoading()
  // 				}
  // 				reject(res)
  // 			}
  // 		})
  // 	})
  // },
  // uploadFile: function(src) {
  // 	const that = this
  // 	uni.showLoading({
  // 		title: '请稍候...'
  // 	})
  // 	return new Promise((resolve, reject) => {
  // 		const uploadTask = uni.uploadFile({
  // 			url: 'https://abc.cc',
  // 			filePath: src,
  // 			name: 'file',
  // 			header: {
  // 				'content-type': 'multipart/form-data'
  // 			},
  // 			formData: {},
  // 			success: function(res) {
  // 				uni.hideLoading()
  // 				let d = JSON.parse(res.data)
  // 				if (d.code === 1) {
  // 					let fileObj = JSON.parse(d.data)[0];
  // 					//文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
  // 					resolve(fileObj)
  // 				} else {
  // 					that.toast(res.message);
  // 				}
  // 			},
  // 			fail: function(res) {
  // 				reject(res)
  // 				uni.hideLoading();
  // 				that.toast(res.message);
  // 			}
  // 		})
  // 	})
  // },
  // setToken: function(token) {
  // 	uni.setStorageSync("token", token)
  // },
  // getToken() {
  // 	return uni.getStorageSync("token")
  // },
  // isLogin: function() {
  // 	return uni.getStorageSync("token") ? true : false
  // }
};

_vue.default.prototype.$store = _store.default;
_vue.default.prototype.$http = _api.http;
_vue.default.prototype.tui = tui;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({
  store: _store.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*****************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/utils/store.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.removeStore = exports.getStore = exports.setStore = void 0;var _validate = __webpack_require__(/*! ./validate.js */ 9);


/**
                                                                                                                                                                                         * 存储localStorage
                                                                                                                                                                                         */
var setStore = function setStore(params) {var

  name =



  params.name,content = params.content,type = params.type,datetime = params.datetime;
  var obj = {
    dataType: typeof content,
    content: content,
    type: type,
    datetime: new Date().getTime() };

  if (type) uni.setStorageSync(name, JSON.stringify(obj));else
  uni.setStorage(name, JSON.stringify(obj));
};
/**
    * 获取localStorage
    */exports.setStore = setStore;
var getStore = function getStore(params) {
  alert('getStore方法');var

  name =

  params.name,type = params.type;
  var obj = {},
  content;
  obj = uni.getStorageSync(name);
  if ((0, _validate.validatenull)(obj)) obj = uni.getStorage(name);
  alert('---------' + obj);
  alert('++++++++++' + (0, _validate.validatenull)(obj));
  if ((0, _validate.validatenull)(obj)) return;
  alert('9999999999' + obj);
  obj = JSON.parse(obj);
  alert('8888888888' + obj.dataType);
  if (obj.dataType == 'string') {
    content = obj.content;
  } else if (obj.dataType == 'number') {
    content = Number(obj.content);
  } else if (obj.dataType == 'boolean') {
    content = Boolean(obj.content);
  } else if (obj.dataType == 'object') {
    content = obj.content;
  }
  alert('getStore方法结束');
  return content;
};
/**
    * 删除localStorage
    */exports.getStore = getStore;
var removeStore = function removeStore(params) {var

  name =
  params.name;
  uni.removeStorageSync(name);
  uni.removeStorage(name);
};

/**
    * 获取全部localStorage
    */
// export const getAllStore = (params) => {
//   let list = [];
//   let {
//     type
//   } = params;
//   for (let i = 1; i <= window.sessionStorage.length; i++) {
//     if (type) {
//       list.push({
//         name: window.sessionStorage.key(i),
//         content: getStore({
//           name: window.sessionStorage.key(i),
//           type: 'session'
//         })
//       })
//     } else {
//       list.push(getStore({
//         name: window.localStorage.key(i),
//         content: getStore({
//           name: window.localStorage.key(i),
//         })
//       }))
//     }
//   }
// 
//   return list;
// 
// }

/**
 * 清空全部localStorage
 */
// export const clearStore = (params) => {
//   let {
//     type
//   } = params;
//   if (type) {
//     window.sessionStorage.clear();
//     return
//   }
//   window.localStorage.clear()
// }
exports.removeStore = removeStore;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */
/*!********************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/utils/validate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isvalidUsername = isvalidUsername;exports.validateURL = validateURL;exports.validateLowerCase = validateLowerCase;exports.validateUpperCase = validateUpperCase;exports.validatAlphabets = validatAlphabets;exports.validateEmail = validateEmail;exports.cardid = cardid;exports.isvalidatemobile = isvalidatemobile;exports.validatename = validatename;exports.validatenum = validatenum;exports.validatenumord = validatenumord;exports.validatenull = validatenull;exports.vaildatePc = void 0; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Created by jiachenpan on 16/11/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */

function isvalidUsername(str) {
  var valid_map = ['admin', 'editor'];
  return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
function validateURL(textval) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
function validateLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
function validateUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
function validatAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/*验证pad还是pc*/
var vaildatePc = function vaildatePc() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
  "SymbianOS", "Windows Phone",
  "iPad", "iPod"];

  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
/**
    * validate email
    * @param email
    * @returns {boolean}
    */exports.vaildatePc = vaildatePc;
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
   * 判断身份证号码
   */
function cardid(code) {
  var list = [];
  var result = true;
  var msg = '';
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 " };

  if (!validatenull(code)) {
    if (code.length == 18) {
      if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
        msg = "证件号码格式错误";
      } else if (!city[code.substr(0, 2)]) {
        msg = "地址编码错误";
      } else {
        //18位身份证需要验证最后一位校验位
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
          msg = "证件号码校验位错误";
        } else {
          result = false;
        }

      }
    } else {
      msg = "证件号码长度不为18位";
    }

  } else {
    msg = "证件号码不能为空";
  }
  list.push(result);
  list.push(msg);
  return list;
}
/**
   * 判断手机号码是否正确
   */
function isvalidatemobile(phone) {
  var list = [];
  var result = true;
  var msg = '';
  var isPhone = /^0\d{2,3}-?\d{7,8}$/;
  //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]  
  var isMob = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[012356789][0-9]{8}|18[012356789][0-9]{8}|14[57][0-9]{8}|17[3678][0-9]{8})$/;
  if (!validatenull(phone)) {
    if (phone.length == 11) {
      if (isPhone.test(phone)) {
        msg = '手机号码格式不正确';
      } else {
        result = false;
      }
    } else {
      msg = '手机号码长度不为11位';
    }
  } else {
    msg = '手机号码不能为空';
  }
  list.push(result);
  list.push(msg);
  return list;
}
/**
   * 判断姓名是否正确
   */
function validatename(name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/;
  if (!regName.test(name)) return false;
  return true;
};
/**
    * 判断是否为整数
    */
function validatenum(num, type) {
  var regName = /[^\d.]/g;
  if (type == 1) {
    if (!regName.test(num)) return false;
  } else if (type == 2) {
    regName = /[^\d]/g;
    if (!regName.test(num)) return false;
  }
  return true;
};
/**
    * 判断是否为小数
    */
function validatenumord(num, type) {
  var regName = /[^\d.]/g;
  if (type == 1) {
    if (!regName.test(num)) return false;
  } else if (type == 2) {
    regName = /[^\d.]/g;
    if (!regName.test(num)) return false;
  }
  return true;
};
/**
    * 判断是否为空
    */
function validatenull(val) {
  if (typeof val == 'boolean') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }
  return false;
};

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 11 */
/*!*************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/api/api.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.test = exports.http = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/lunch-request/request */ 12));
var _store = __webpack_require__(/*! ../utils/store.js */ 8);
var _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var test = new _request.default();exports.test = test;
test.setConfig(function (config) {/* 设置全局配置 */
  // config.baseUrl = 'http://192.168.1.104:8087';
  // config.baseUrl = 'http://192.168.1.110:8086';
  config.baseUrl = 'http://192.168.1.135:8086';
  config.header = {
    a: 4,
    b: 4
    // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlMDFjMGI4ODdiYWU0ZTE0OTZlZGM0YTg4ZjcwZDczYiIsImNvbXBhbnlJZCI6IjBkYzUxMmRhNGJmMzRjYzM4ZTcyOGM0MTE5ZDFiMmRiIiwidXNlcl9uYW1lIjoib1pMYmhzbHFyNFBDaWpLZWhSdHAtczJlN1BMdyIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJvWkxiaHNscXI0UENpaktlaFJ0cC1zMmU3UEx3IiwidXNlclR5cGUiOjIsImV4cCI6MTU2Njk2NDI5MSwidXNlcklkIjoxMTY1ODMxNTI2OTc0NzAxNTY5LCJhdXRob3JpdGllcyI6WyJST0xFX0FDVElWSVRJX1VTRVIiXSwianRpIjoiMzg1OGY4MTEtMjYzMC00ZjBlLTljNWMtZDI2ZjA0ZmQyYjc5IiwiY2xpZW50X2lkIjoiMGRjNTEyZGE0YmYzNGNjMzhlNzI4YzQxMTlkMWIyZGIifQ.FjhhgZvOa-D2evUh9CAyQvKTjl2HMu6NGXUtCh4rXmEKXY1_LdXOCBOm7yU_CfPwpkELIT32Z7w5-J_L4GNHK_fXCf9akNYw1Vg8FfXbxO9jHYxsRvshFl5n9GmRDPLGoFbhCc1dtswQt7FDOkVs99D6stO4UL1WIf4vtLEFy847Fc1S4OirNtPECdXUS42KtLn2E6K3Wvvio3gUO-biWhlbsInHbVP8Cc-mXiTSgE0MPJMO9yVD6M6lp6B4HYqtbVKI3TSrDmcfNDLmILZpzcmoEZFrXo1GRGIDDKpuIRlPPxFG6ugUqR3jS35kIQP6KVlfgRgUxjnr7Rt2DASzFQ'
  };
  return config;
});
test.interceptor.request(function (config, cancel) {/* 请求之前拦截器 */
  // config.data['mallDomain']=getStore({ name: 'mallDomain' }) || this.$store.state.mallDomain;
  if (_index.default.getters.token) {
    config.header = _objectSpread({},
    config.header, {
      // Authorization: 'Bearer ' + getStore({ name: 'token' }),
      Authorization: 'Bearer ' + uni.getStorageSync('token') });

  }
  /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    	cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    */
  return config;
});
test.interceptor.response(function (response) {/* 请求之后拦截器 */
  return response;
});

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
var http = new _request.default();exports.http = http;
http.setConfig(function (config) {/* 设置全局配置 */
  // config.baseUrl = "http://192.168.1.104:8087"; /* 根域名不同 */
  // config.baseUrl = 'http://192.168.1.110:8086';
  config.baseUrl = 'http://192.168.1.135:8086';
  config.header = {
    // 'cookie': uni.getStorageSync('sessionid') || '123',
    a: 5
    // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlMDFjMGI4ODdiYWU0ZTE0OTZlZGM0YTg4ZjcwZDczYiIsImNvbXBhbnlJZCI6IjBkYzUxMmRhNGJmMzRjYzM4ZTcyOGM0MTE5ZDFiMmRiIiwidXNlcl9uYW1lIjoib1pMYmhzbHFyNFBDaWpLZWhSdHAtczJlN1BMdyIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJvWkxiaHNscXI0UENpaktlaFJ0cC1zMmU3UEx3IiwidXNlclR5cGUiOjIsImV4cCI6MTU2Njk2NDI5MSwidXNlcklkIjoxMTY1ODMxNTI2OTc0NzAxNTY5LCJhdXRob3JpdGllcyI6WyJST0xFX0FDVElWSVRJX1VTRVIiXSwianRpIjoiMzg1OGY4MTEtMjYzMC00ZjBlLTljNWMtZDI2ZjA0ZmQyYjc5IiwiY2xpZW50X2lkIjoiMGRjNTEyZGE0YmYzNGNjMzhlNzI4YzQxMTlkMWIyZGIifQ.FjhhgZvOa-D2evUh9CAyQvKTjl2HMu6NGXUtCh4rXmEKXY1_LdXOCBOm7yU_CfPwpkELIT32Z7w5-J_L4GNHK_fXCf9akNYw1Vg8FfXbxO9jHYxsRvshFl5n9GmRDPLGoFbhCc1dtswQt7FDOkVs99D6stO4UL1WIf4vtLEFy847Fc1S4OirNtPECdXUS42KtLn2E6K3Wvvio3gUO-biWhlbsInHbVP8Cc-mXiTSgE0MPJMO9yVD6M6lp6B4HYqtbVKI3TSrDmcfNDLmILZpzcmoEZFrXo1GRGIDDKpuIRlPPxFG6ugUqR3jS35kIQP6KVlfgRgUxjnr7Rt2DASzFQ'
  };
  return config;
});
http.interceptor.request(function (config, cancel) {/* 请求之前拦截器 */
  if (_index.default.getters.token) {
    config.header = _objectSpread({},
    config.header, {
      // Authorization: 'Bearer ' + getStore({ name: 'token' }),
      Authorization: 'Bearer ' + uni.getStorageSync('token')
      // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
    });
  }
  /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    	cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    */
  return config;
});
http.interceptor.response(function (response) {/* 请求之后拦截器 */

  return response.data;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 12 */
/*!*********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/utils/lunch-request/request.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Request 0.0.8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Class uni-app request网络请求库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author lu-ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date 2019-07-25
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Email webwork.s@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://ext.dcloud.net.cn/plugin?id=392
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * **/var
Request = /*#__PURE__*/function () {function Request() {var _this = this;_classCallCheck(this, Request);_defineProperty(this, "config",
    {
      baseUrl: '',
      header: {
        'Content-Type': 'application/json;charset=UTF-8' },

      method: 'GET',
      dataType: 'json',
      responseType: 'text' });_defineProperty(this, "interceptor",






    {
      request: function request(f) {
        if (f) {
          _this.requestBeforeFun = f;
        }
      },
      response: function response(f) {
        if (f) {
          _this.requestComFun = f;
        }
      } });}_createClass(Request, [{ key: "setConfig", value: function setConfig(










    f) {
      this.config = f(this.config);
    } }, { key: "request", value: function request()

    {var _this2 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      options.baseUrl = this.config.baseUrl;
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = Request.posUrl(options.url) ? options.url : options.baseUrl + options.url;
      options.data = options.data || {};
      options.header = options.header || this.config.header;
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        var next = true;
        var _config = null;
        options.complete = function (response) {
          var statusCode = response.statusCode;
          response.config = _config;
          response = _this2.requestComFun(response);
          if (statusCode === 200) {// 成功
            resolve(response);
          } else {
            reject(response);
          }
        };
        var cancel = function cancel() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options;
          var err = {
            errMsg: t,
            config: config };

          reject(err);
          next = false;
        };

        _config = _objectSpread({}, _this2.requestBeforeFun(options, cancel));
        if (!next) return;
        uni.request(_config);
      });
    } }, { key: "get", value: function get(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }], [{ key: "posUrl", value: function posUrl(url) {/* 判断url是否为绝对路径 */return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);} }, { key: "requestBeforeFun", value: function requestBeforeFun(config) {return config;} }, { key: "requestComFun", value: function requestComFun(response) {return response;} }]);return Request;}();exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!*****************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/store/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 10));



var _common = _interopRequireDefault(__webpack_require__(/*! ./modules/common */ 14));
var _order = _interopRequireDefault(__webpack_require__(/*! ./modules/order */ 15));
var _getters = _interopRequireDefault(__webpack_require__(/*! ./getters */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import home from './modules/home';
// import address from './modules/address';
// import virtualCard from "./modules/virtualCard";
_vue.default.use(_vuex.default);var store = new _vuex.default.Store({
  modules: {
    common: _common.default,
    order: _order.default },

  getters: _getters.default });var _default =


store;exports.default = _default;

/***/ }),
/* 14 */
/*!**************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/store/modules/common.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _store = __webpack_require__(/*! ../../utils/store.js */ 8);
var state = {
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
  firstLoad: true,
  // hasLogin: getStore({ name: 'hasLogin' }) && getStore({ name: 'hasLogin' }).hasLogin || false,
  // token: getStore({ name: 'token' }) && getStore({ name: 'token' }).token || '',
  // uniCode: getStore({ name: 'uniCode' }) && getStore({ name: 'uniCode' }).uniCode || '',
  // userInfo: getStore({ name: 'userInfo' }) || {},
  hasLogin: false,
  token: '',
  uniCode: '',
  userInfo: {
    accountId: '',
    customerName: '',
    wechatName: '',
    customerSex: '',
    customerBirthday: '',
    customerImage: '',
    customerId: '',
    mobilephone: '' },

  baseInfo: {
    mallDomain: '',
    mallId: '',
    p: '',
    scm: ''
    // accountId:''
  } };

var mutations = {
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
  SET_FIRSTLOAD: function SET_FIRSTLOAD(state, firstLoad) {
    state.firstLoad = firstLoad;
  },
  SET_HASLOGIN: function SET_HASLOGIN(state, hasLogin) {
    state.hasLogin = hasLogin;
    // setStore({ name: 'hasLogin', content: state.hasLogin, type: 'sync' });
    uni.setStorageSync('hasLogin', hasLogin);
  },
  SET_TOKEN: function SET_TOKEN(state, token) {
    state.token = token;
    // setStore({ name: 'token', content: state.token, type: 'sync' });
    uni.setStorageSync('token', token);
  },
  SET_MALLDOMAIN: function SET_MALLDOMAIN(state, mallDomain) {
    state.mallDomain = mallDomain;
  },
  SET_MALLTYPE: function SET_MALLTYPE(state, mallType) {
    state.mallType = mallType;
  },
  SET_MALLID: function SET_MALLID(state, mallId) {
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
  SET_UNICODE: function SET_UNICODE(state, uniCode) {
    state.uniCode = uniCode;
    // setStore({ name: 'uniCode', content: state.uniCode, type: 'sync' });
    uni.setStorageSync('uniCode', uniCode);
  },
  SET_BASEINFO: function SET_BASEINFO(state, baseInfo) {
    state.baseInfo = baseInfo;
    (0, _store.setStore)({ name: 'baseInfo', content: state.baseInfo, type: 'sync' });
  },
  SET_USERIFNO: function SET_USERIFNO(state, userInfo) {
    state.userInfo = userInfo;
    (0, _store.setStore)({ name: 'userInfo', content: state.userInfo, type: 'sync' });
    // uni.setStorageSync('userInfo', JSON.stringify(userInfo));
  }
  // SET_MALLTYPE: (state, mallType) => {
  // 	state.mallType = mallType;
  // },
};
var actions = {};


var getters = {};var _default =



{
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations,
  namespaced: true };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 15 */
/*!*************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/store/modules/order.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _store = __webpack_require__(/*! ../../utils/store.js */ 8);
var state = {
  order_goodsList: [] };

var mutations = {
  SET_ORDER_GOODSLIST: function SET_ORDER_GOODSLIST(state, data) {
    state.order_goodsList = data;
    (0, _store.setStore)({ name: 'order_goodsList', content: state.data, type: 'sync' });
  } };

var actions = {};


var getters = {};var _default =



{
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations,
  namespaced: true };exports.default = _default;

/***/ }),
/* 16 */
/*!*******************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/store/getters.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var getters = {
  userInfo: function userInfo(state) {return state.common.userInfo;},
  token: function token(state) {return state.common.token;},
  domain: function domain(state) {return state.common.domain;} };var _default =

getters;exports.default = _default;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!*****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fmain%2Fmain"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _main = _interopRequireDefault(__webpack_require__(/*! ./pages/main/main.vue */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_main.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/*!***************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Freg%2Freg"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _reg = _interopRequireDefault(__webpack_require__(/*! ./pages/reg/reg.vue */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_reg.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/*!*************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 管理账号信息
var USERS_KEY = 'USERS_KEY';
var STATE_KEY = 'STATE_KEY';

var getUsers = function getUsers() {
  var ret = '';
  ret = uni.getStorageSync(USERS_KEY);
  if (!ret) {
    ret = '[]';
  }
  return JSON.parse(ret);
};

var addUser = function addUser(userInfo) {
  var users = getUsers();
  users.push({
    account: userInfo.account,
    password: userInfo.password });

  uni.setStorageSync(USERS_KEY, JSON.stringify(users));
};var _default =

{
  getUsers: getUsers,
  addUser: addUser };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 49 */
/*!***************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fpwd%2Fpwd"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _pwd = _interopRequireDefault(__webpack_require__(/*! ./pages/pwd/pwd.vue */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pwd.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/*!***********************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fproduct%2Fproduct"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _product = _interopRequireDefault(__webpack_require__(/*! ./pages/product/product.vue */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_product.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!***************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fcar%2Fcar"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _car = _interopRequireDefault(__webpack_require__(/*! ./pages/car/car.vue */ 64));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_car.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/*!*****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fuser%2Fuser"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/user/user.vue */ 72));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_user.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/*!*****************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FsearchPage%2FsearchPage"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _searchPage = _interopRequireDefault(__webpack_require__(/*! ./pages/searchPage/searchPage.vue */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_searchPage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/*!***********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FproductDetail%2FproductDetail"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _productDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/productDetail/productDetail.vue */ 88));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_productDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/*!***********************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fpayment%2Fpayment"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _payment = _interopRequireDefault(__webpack_require__(/*! ./pages/payment/payment.vue */ 96));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_payment.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/*!*********************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fcoupon%2Fcoupon"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _coupon = _interopRequireDefault(__webpack_require__(/*! ./pages/coupon/coupon.vue */ 104));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_coupon.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/*!***********************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Faddress%2Faddress"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _address = _interopRequireDefault(__webpack_require__(/*! ./pages/address/address.vue */ 110));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/*!***********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FaddressManage%2FaddressManage"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _addressManage = _interopRequireDefault(__webpack_require__(/*! ./pages/addressManage/addressManage.vue */ 118));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_addressManage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/*!***********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FaccountManage%2FaccountManage"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _accountManage = _interopRequireDefault(__webpack_require__(/*! ./pages/accountManage/accountManage.vue */ 126));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_accountManage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/*!********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/moment.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var require; //! moment.js

;(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(void 0, function () {'use strict';

  var hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          return false;
        }
      }
      return true;
    }
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
    var res = [],i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false };

  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }

  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function (i) {
        return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) &&
      flags.overflow < 0 &&
      !flags.empty &&
      !flags.invalidMonth &&
      !flags.invalidWeekday &&
      !flags.weekdayMismatch &&
      !flags.nullInput &&
      !flags.invalidFormat &&
      !flags.userInvalidated && (
      !flags.meridiem || flags.meridiem && parsedParts);

      if (m._strict) {
        isNowValid = isNowValid &&
        flags.charsLeftOver === 0 &&
        flags.unusedTokens.length === 0 &&
        flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else
      {
        return isNowValid;
      }
    }
    return m._isValid;
  }

  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else
    {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  var updateInProgress = false;

  // Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
    value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
    lengthDiff = Math.abs(array1.length - array2.length),
    diffs = 0,
    i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] ||
      !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
    typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [];
        var arg;
        for (var i = 0; i < arguments.length; i++) {
          arg = '';
          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';
            for (var key in arguments[0]) {
              arg += key + ': ' + arguments[0][key] + ', ';
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set(config) {
    var prop, i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
    '|' + /\d{1,2}/.source);
  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) &&
      !hasOwnProp(childConfig, prop) &&
      isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }

  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L' };


  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A' };


  function longDateFormat(key) {
    var format = this._longDateFormat[key],
    formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });

    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years' };


  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ?
    output(number, withoutSuffix, string, isFuture) :
    output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
    normalizedProp,
    prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
      units.push({ unit: u, priority: priorities[u] });
    }
    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
    zerosToFill = targetLength - absNumber.length,
    sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') +
    Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

  var formatFunctions = {};

  var formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),i,length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '',i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var match1 = /\d/; //       0 - 9
  var match2 = /\d\d/; //      00 - 99
  var match3 = /\d{3}/; //     000 - 999
  var match4 = /\d{4}/; //    0000 - 9999
  var match6 = /[+-]?\d{6}/; // -999999 - 999999
  var match1to2 = /\d\d?/; //       0 - 99
  var match3to4 = /\d\d\d\d?/; //     999 - 9999
  var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
  var match1to3 = /\d{1,3}/; //       0 - 999
  var match1to4 = /\d{1,4}/; //       0 - 9999
  var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

  var matchUnsigned = /\d+/; //       0 - inf
  var matchSigned = /[+-]?\d+/; //    -inf - inf

  var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months
  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

  var regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken(token, callback) {
    var i,func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });

  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get(mom, unit) {
    return mom.isValid() ?
    mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else
      {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  }

  // MOMENTS

  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }


  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);
      for (var i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }

  function mod(n, x) {
    return (n % x + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });

  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

  // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months :
      this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
    this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort :
      this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
    this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i,ii,mom,llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ?
      this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }

  var defaultMonthsRegex = matchWord;
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ?
      this._monthsStrictRegex : this._monthsRegex;
    }
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [],longPieces = [],mixedPieces = [],
    i,mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
  }

  function createUTCDate(y) {
    var date;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      var args = Array.prototype.slice.call(arguments);
      // preserve leap years using a full 400 year cycle, then reset
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    fwd = 7 + dow - doy,
    // first-week day local weekday -- which local weekday is fwd
    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
    weekOffset = firstWeekOffset(year, dow, doy),
    dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
    resYear,resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear };

  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
    week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
    resWeek,resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear };

  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
    weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.
  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  }

  // MOMENTS

  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });

  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });

  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

  // LOCALES
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }

  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays(m, format) {
    var weekdays = isArray(this._weekdays) ? this._weekdays :
    this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) :
    m ? weekdays[m.day()] : weekdays;
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) :
    m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) :
    m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i,ii,mom,llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ?
      this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }

  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ?
      this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }

  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ?
      this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }


  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [],shortPieces = [],longPieces = [],mixedPieces = [],
    i,mom,minp,shortp,longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });

  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
    zeroFill(this.seconds(), 2);
  });

  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });

  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
    zeroFill(this.seconds(), 2);
  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }

  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }


  // MOMENTS

  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  var getSetHour = makeGetSet('Hours', true);

  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse };


  // internal storage for locale config files
  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0,j,next,locale,split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }

  function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && typeof module !== 'undefined' &&
    module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        var aliasedRequire = require;
        __webpack_require__(133)("./" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else
      {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else
      {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      var locale,parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride',
        'use moment.updateLocale(localeName, config) to change ' +
        'an existing locale. moment.defineLocale(localeName, ' +
        'config) should only be used for creating a new locale ' +
        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);
          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name: name,
              config: config });

            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);


      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale,tmpLocale,parentConfig = baseConfig;
      // MERGE
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale;

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

  // returns locale data
  function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow =
      a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
      a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
      a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR :
      a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
      a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
      a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
      -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  }

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray(config) {
    var i,date,input = [],currentDate,expectedWeekday,yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
    config._a[MINUTE] === 0 &&
    config._a[SECOND] === 0 &&
    config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;

      var curWeek = weekOfYear(createLocal(), dow, doy);

      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

  var isoDates = [
  ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
  ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
  ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
  ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
  ['YYYY-DDD', /\d{4}-\d{3}/],
  ['YYYY-MM', /\d{4}-\d\d/, false],
  ['YYYYYYMMDD', /[+-]\d{10}/],
  ['YYYYMMDD', /\d{8}/],
  // YYYYMM is NOT allowed by the standard
  ['GGGG[W]WWE', /\d{4}W\d{3}/],
  ['GGGG[W]WW', /\d{4}W\d{2}/, false],
  ['YYYYDDD', /\d{7}/]];


  // iso time formats and regexes
  var isoTimes = [
  ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
  ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
  ['HH:mm:ss', /\d\d:\d\d:\d\d/],
  ['HH:mm', /\d\d:\d\d/],
  ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
  ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
  ['HHmmss', /\d\d\d\d\d\d/],
  ['HHmm', /\d\d\d\d/],
  ['HH', /\d\d/]];


  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

  // date from iso format
  function configFromISO(config) {
    var i,l,
    string = config._i,
    match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
    allowTime,dateFormat,timeFormat,tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }

  // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)];


    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
      weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }

  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60 };


  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10);
      var m = hm % 100,h = (hm - m) / 100;
      return h * 60 + m;
    }
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
      var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);

      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

  // date from iso format or fallback
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate(
  'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
  'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
  'discouraged and will be removed in an upcoming major release. Please refer to ' +
  'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });


  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
    i,parsedInput,tokens,token,skipped,
    stringLength = string.length,
    totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else
        {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else
      if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
    getParsingFlags(config).bigHour === true &&
    config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
  }


  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
    var tempConfig,
    bestMoment,

    scoreToBeat,
    i,
    currentScore;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
        continue;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });

    configFromArray(config);
  }

  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    var input = config._i,
    format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || format === undefined && input === '') {
      return createInvalid({ nullInput: true });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (isObject(input) && isObjectEmpty(input) ||
    isArray(input) && input.length === 0) {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate(
  'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  });


  var prototypeMax = deprecate(
  'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  });


  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

  // TODO: Use [].sort instead?
  function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
  }

  function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
  }

  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
    for (var key in m) {
      if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
    years = normalizedInput.year || 0,
    quarters = normalizedInput.quarter || 0,
    months = normalizedInput.month || 0,
    weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
    days = normalizedInput.day || 0,
    hours = normalizedInput.hour || 0,
    minutes = normalizedInput.minute || 0,
    seconds = normalizedInput.second || 0,
    milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
    seconds * 1e3 + // 1000
    minutes * 6e4 + // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
    weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
    quarters * 3 +
    years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

  // FORMATTING

  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }

  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
      return null;
    }

    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
    0 :
    parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
    localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);

      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else
      {
        this.utcOffset(0, true);
      }
    }
    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset());

  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() &&
      compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

  // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day
  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    var duration = input,
    // matching against regexp is expensive, do it on demand
    match = null,
    sign,
    ret,
    diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months };

    } else if (isNumber(input)) {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign) };

    } else if (duration == null) {// checks for null or undefined
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {};

    res.months = other.month() - base.month() +
    (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
  }

  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;val = period;period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
    days = absRound(duration._days),
    months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
    diff < -1 ? 'lastWeek' :
    diff < 0 ? 'lastDay' :
    diff < 1 ? 'sameDay' :
    diff < 2 ? 'nextDay' :
    diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1(time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
    sod = cloneWithOffset(now, this).startOf('day'),
    format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
    localTo = isMoment(to) ? to : createLocal(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (
    inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }

  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
    inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    var that,
    zoneDelta,
    output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
      case 'year':output = monthDiff(this, that) / 12;break;
      case 'month':output = monthDiff(this, that);break;
      case 'quarter':output = monthDiff(this, that) / 3;break;
      case 'second':output = (this - that) / 1e3;break; // 1000
      case 'minute':output = (this - that) / 6e4;break; // 1000 * 60
      case 'hour':output = (this - that) / 36e5;break; // 1000 * 60 * 60
      case 'day':output = (this - that - zoneDelta) / 864e5;break; // 1000 * 60 * 60 * 24, negate dst
      case 'week':output = (this - that - zoneDelta) / 6048e5;break; // 1000 * 60 * 60 * 24 * 7, negate dst
      default:output = this - that;}


    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
    // b is in (anchor - 1 month, anchor + 1 month)
    anchor = a.clone().add(wholeMonthDiff, 'months'),
    anchor2,adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (this.isValid() && (
    isMoment(time) && time.isValid() ||
    createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (this.isValid() && (
    isMoment(time) && time.isValid() ||
    createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale(key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }

  var lang = deprecate(
  'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
  function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });


  function localeData() {
    return this._locale;
  }

  var MS_PER_SECOND = 1000;
  var MS_PER_MINUTE = 60 * MS_PER_SECOND;
  var MS_PER_HOUR = 60 * MS_PER_MINUTE;
  var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  // actual modulo - handles negative numbers (for dates before 1970):
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }

  function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }

  function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }

  function startOf(units) {
    var time;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year(), 0, 1);
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
        break;
      case 'month':
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case 'hour':
        time = this._d.valueOf();
        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
      case 'minute':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case 'second':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;}


    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function endOf(units) {
    var time;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case 'month':
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case 'hour':
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
      case 'minute':
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case 'second':
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;}


    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds() };

  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict };

  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);


  // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);

  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });

  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this,
    input,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy);
  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this,
    input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
    date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
    locale._dayOfMonthOrdinalParse || locale._ordinalParse :
    locale._dayOfMonthOrdinalParseLenient;
  });

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });


  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);

  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  // MOMENTS

  var getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;

  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  var proto$1 = Locale.prototype;

  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;

  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;

  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;

  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
    shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = toInt(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    } });


  // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

  var mathAbs = Math.abs;

  function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!(milliseconds >= 0 && days >= 0 && months >= 0 ||
    milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;

    hours = absFloor(minutes / 60);
    data.hours = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      switch (units) {
        case 'month':return months;
        case 'quarter':return months / 3;
        case 'year':return months / 12;}

    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':return days / 7 + milliseconds / 6048e5;
        case 'day':return days + milliseconds / 864e5;
        case 'hour':return days * 24 + milliseconds / 36e5;
        case 'minute':return days * 1440 + milliseconds / 6e4;
        case 'second':return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond':return Math.floor(days * 864e5) + milliseconds;
        default:throw new Error('Unknown unit ' + units);}

    }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return (
      this._milliseconds +
      this._days * 864e5 +
      this._months % 12 * 2592e6 +
      toInt(this._months / 12) * 31536e6);

  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asQuarters = makeAs('Q');
  var asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
    ss: 44, // a few seconds to seconds
    s: 45, // seconds to minute
    m: 45, // minutes to hour
    h: 22, // hours to day
    d: 26, // days to month
    M: 11 // months to year
  };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds] ||
    seconds < thresholds.s && ['ss', seconds] ||
    minutes <= 1 && ['m'] ||
    minutes < thresholds.m && ['mm', minutes] ||
    hours <= 1 && ['h'] ||
    hours < thresholds.h && ['hh', hours] ||
    days <= 1 && ['d'] ||
    days < thresholds.d && ['dd', days] ||
    months <= 1 && ['M'] ||
    months < thresholds.M && ['MM', months] ||
    years <= 1 && ['y'] || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }

  function humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days = abs$1(this._days);
    var months = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' + (
    Y ? ymSign + Y + 'Y' : '') + (
    M ? ymSign + M + 'M' : '') + (
    D ? daysSign + D + 'D' : '') + (
    h || m || s ? 'T' : '') + (
    h ? hmsSign + h + 'H' : '') + (
    m ? hmsSign + m + 'M' : '') + (
    s ? hmsSign + s + 'S' : '');
  }

  var proto$2 = Duration.prototype;

  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;

  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

  // Side effect imports

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  });

  // Side effect imports


  hooks.version = '2.24.0';

  setHookCallback(createLocal);

  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />
  };

  return hooks;

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 132)(module)))

/***/ }),
/* 132 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 133 */
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 134,
	"./af.js": 134,
	"./ar": 135,
	"./ar-dz": 136,
	"./ar-dz.js": 136,
	"./ar-kw": 137,
	"./ar-kw.js": 137,
	"./ar-ly": 138,
	"./ar-ly.js": 138,
	"./ar-ma": 139,
	"./ar-ma.js": 139,
	"./ar-sa": 140,
	"./ar-sa.js": 140,
	"./ar-tn": 141,
	"./ar-tn.js": 141,
	"./ar.js": 135,
	"./az": 142,
	"./az.js": 142,
	"./be": 143,
	"./be.js": 143,
	"./bg": 144,
	"./bg.js": 144,
	"./bm": 145,
	"./bm.js": 145,
	"./bn": 146,
	"./bn.js": 146,
	"./bo": 147,
	"./bo.js": 147,
	"./br": 148,
	"./br.js": 148,
	"./bs": 149,
	"./bs.js": 149,
	"./ca": 150,
	"./ca.js": 150,
	"./cs": 151,
	"./cs.js": 151,
	"./cv": 152,
	"./cv.js": 152,
	"./cy": 153,
	"./cy.js": 153,
	"./da": 154,
	"./da.js": 154,
	"./de": 155,
	"./de-at": 156,
	"./de-at.js": 156,
	"./de-ch": 157,
	"./de-ch.js": 157,
	"./de.js": 155,
	"./dv": 158,
	"./dv.js": 158,
	"./el": 159,
	"./el.js": 159,
	"./en-SG": 160,
	"./en-SG.js": 160,
	"./en-au": 161,
	"./en-au.js": 161,
	"./en-ca": 162,
	"./en-ca.js": 162,
	"./en-gb": 163,
	"./en-gb.js": 163,
	"./en-ie": 164,
	"./en-ie.js": 164,
	"./en-il": 165,
	"./en-il.js": 165,
	"./en-nz": 166,
	"./en-nz.js": 166,
	"./eo": 167,
	"./eo.js": 167,
	"./es": 168,
	"./es-do": 169,
	"./es-do.js": 169,
	"./es-us": 170,
	"./es-us.js": 170,
	"./es.js": 168,
	"./et": 171,
	"./et.js": 171,
	"./eu": 172,
	"./eu.js": 172,
	"./fa": 173,
	"./fa.js": 173,
	"./fi": 174,
	"./fi.js": 174,
	"./fo": 175,
	"./fo.js": 175,
	"./fr": 176,
	"./fr-ca": 177,
	"./fr-ca.js": 177,
	"./fr-ch": 178,
	"./fr-ch.js": 178,
	"./fr.js": 176,
	"./fy": 179,
	"./fy.js": 179,
	"./ga": 180,
	"./ga.js": 180,
	"./gd": 181,
	"./gd.js": 181,
	"./gl": 182,
	"./gl.js": 182,
	"./gom-latn": 183,
	"./gom-latn.js": 183,
	"./gu": 184,
	"./gu.js": 184,
	"./he": 185,
	"./he.js": 185,
	"./hi": 186,
	"./hi.js": 186,
	"./hr": 187,
	"./hr.js": 187,
	"./hu": 188,
	"./hu.js": 188,
	"./hy-am": 189,
	"./hy-am.js": 189,
	"./id": 190,
	"./id.js": 190,
	"./is": 191,
	"./is.js": 191,
	"./it": 192,
	"./it-ch": 193,
	"./it-ch.js": 193,
	"./it.js": 192,
	"./ja": 194,
	"./ja.js": 194,
	"./jv": 195,
	"./jv.js": 195,
	"./ka": 196,
	"./ka.js": 196,
	"./kk": 197,
	"./kk.js": 197,
	"./km": 198,
	"./km.js": 198,
	"./kn": 199,
	"./kn.js": 199,
	"./ko": 200,
	"./ko.js": 200,
	"./ku": 201,
	"./ku.js": 201,
	"./ky": 202,
	"./ky.js": 202,
	"./lb": 203,
	"./lb.js": 203,
	"./lo": 204,
	"./lo.js": 204,
	"./lt": 205,
	"./lt.js": 205,
	"./lv": 206,
	"./lv.js": 206,
	"./me": 207,
	"./me.js": 207,
	"./mi": 208,
	"./mi.js": 208,
	"./mk": 209,
	"./mk.js": 209,
	"./ml": 210,
	"./ml.js": 210,
	"./mn": 211,
	"./mn.js": 211,
	"./mr": 212,
	"./mr.js": 212,
	"./ms": 213,
	"./ms-my": 214,
	"./ms-my.js": 214,
	"./ms.js": 213,
	"./mt": 215,
	"./mt.js": 215,
	"./my": 216,
	"./my.js": 216,
	"./nb": 217,
	"./nb.js": 217,
	"./ne": 218,
	"./ne.js": 218,
	"./nl": 219,
	"./nl-be": 220,
	"./nl-be.js": 220,
	"./nl.js": 219,
	"./nn": 221,
	"./nn.js": 221,
	"./pa-in": 222,
	"./pa-in.js": 222,
	"./pl": 223,
	"./pl.js": 223,
	"./pt": 224,
	"./pt-br": 225,
	"./pt-br.js": 225,
	"./pt.js": 224,
	"./ro": 226,
	"./ro.js": 226,
	"./ru": 227,
	"./ru.js": 227,
	"./sd": 228,
	"./sd.js": 228,
	"./se": 229,
	"./se.js": 229,
	"./si": 230,
	"./si.js": 230,
	"./sk": 231,
	"./sk.js": 231,
	"./sl": 232,
	"./sl.js": 232,
	"./sq": 233,
	"./sq.js": 233,
	"./sr": 234,
	"./sr-cyrl": 235,
	"./sr-cyrl.js": 235,
	"./sr.js": 234,
	"./ss": 236,
	"./ss.js": 236,
	"./sv": 237,
	"./sv.js": 237,
	"./sw": 238,
	"./sw.js": 238,
	"./ta": 239,
	"./ta.js": 239,
	"./te": 240,
	"./te.js": 240,
	"./tet": 241,
	"./tet.js": 241,
	"./tg": 242,
	"./tg.js": 242,
	"./th": 243,
	"./th.js": 243,
	"./tl-ph": 244,
	"./tl-ph.js": 244,
	"./tlh": 245,
	"./tlh.js": 245,
	"./tr": 246,
	"./tr.js": 246,
	"./tzl": 247,
	"./tzl.js": 247,
	"./tzm": 248,
	"./tzm-latn": 249,
	"./tzm-latn.js": 249,
	"./tzm.js": 248,
	"./ug-cn": 250,
	"./ug-cn.js": 250,
	"./uk": 251,
	"./uk.js": 251,
	"./ur": 252,
	"./ur.js": 252,
	"./uz": 253,
	"./uz-latn": 254,
	"./uz-latn.js": 254,
	"./uz.js": 253,
	"./vi": 255,
	"./vi.js": 255,
	"./x-pseudo": 256,
	"./x-pseudo.js": 256,
	"./yo": 257,
	"./yo.js": 257,
	"./zh-cn": 258,
	"./zh-cn.js": 258,
	"./zh-hk": 259,
	"./zh-hk.js": 259,
	"./zh-tw": 260,
	"./zh-tw.js": 260
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 133;

/***/ }),
/* 134 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/af.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var af = moment.defineLocale('af', {
    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM: function isPM(input) {
      return /^nm$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'vm' : 'VM';
      } else {
        return isLower ? 'nm' : 'NM';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Vandag om] LT',
      nextDay: '[Môre om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[Gister om] LT',
      lastWeek: '[Laas] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'oor %s',
      past: '%s gelede',
      s: '\'n paar sekondes',
      ss: '%d sekondes',
      m: '\'n minuut',
      mm: '%d minute',
      h: '\'n uur',
      hh: '%d ure',
      d: '\'n dag',
      dd: '%d dae',
      M: '\'n maand',
      MM: '%d maande',
      y: '\'n jaar',
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
    },
    week: {
      dow: 1, // Maandag is die eerste dag van die week.
      doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    } });


  return af;

});

/***/ }),
/* 135 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠' },
  numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0' },
  pluralForm = function pluralForm(n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  },plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'] },
  pluralize = function pluralize(u) {
    return function (number, withoutSuffix, string, isFuture) {
      var f = pluralForm(number),
      str = plurals[u][pluralForm(number)];
      if (f === 2) {
        str = str[withoutSuffix ? 0 : 1];
      }
      return str.replace(/%d/i, number);
    };
  },months = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'];


  var ar = moment.defineLocale('ar', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y') },

    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return ar;

});

/***/ }),
/* 136 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-dz.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var arDz = moment.defineLocale('ar-dz', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return arDz;

});

/***/ }),
/* 137 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-kw.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var arKw = moment.defineLocale('ar-kw', {
    months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return arKw;

});

/***/ }),
/* 138 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-ly.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0' },
  pluralForm = function pluralForm(n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  },plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'] },
  pluralize = function pluralize(u) {
    return function (number, withoutSuffix, string, isFuture) {
      var f = pluralForm(number),
      str = plurals[u][pluralForm(number)];
      if (f === 2) {
        str = str[withoutSuffix ? 0 : 1];
      }
      return str.replace(/%d/i, number);
    };
  },months = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'];


  var arLy = moment.defineLocale('ar-ly', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y') },

    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return arLy;

});

/***/ }),
/* 139 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-ma.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var arMa = moment.defineLocale('ar-ma', {
    months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات' },

    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return arMa;

});

/***/ }),
/* 140 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-sa.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠' },
  numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0' };


  var arSa = moment.defineLocale('ar-sa', {
    months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات' },

    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return arSa;

});

/***/ }),
/* 141 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ar-tn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var arTn = moment.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return arTn;

});

/***/ }),
/* 142 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/az.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı' };


  var az = moment.defineLocale('az', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[sabah saat] LT',
      nextWeek: '[gələn həftə] dddd [saat] LT',
      lastDay: '[dünən] LT',
      lastWeek: '[keçən həftə] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s sonra',
      past: '%s əvvəl',
      s: 'birneçə saniyə',
      ss: '%d saniyə',
      m: 'bir dəqiqə',
      mm: '%d dəqiqə',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir il',
      yy: '%d il' },

    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM: function isPM(input) {
      return /^(gündüz|axşam)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'gecə';
      } else if (hour < 12) {
        return 'səhər';
      } else if (hour < 17) {
        return 'gündüz';
      } else {
        return 'axşam';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal: function ordinal(number) {
      if (number === 0) {// special case for zero
        return number + '-ıncı';
      }
      var a = number % 10,
      b = number % 100 - a,
      c = number >= 100 ? 100 : null;
      return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return az;

});

/***/ }),
/* 143 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/be.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
      'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
      'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
      'dd': 'дзень_дні_дзён',
      'MM': 'месяц_месяцы_месяцаў',
      'yy': 'год_гады_гадоў' };

    if (key === 'm') {
      return withoutSuffix ? 'хвіліна' : 'хвіліну';
    } else
    if (key === 'h') {
      return withoutSuffix ? 'гадзіна' : 'гадзіну';
    } else
    {
      return number + ' ' + plural(format[key], +number);
    }
  }

  var be = moment.defineLocale('be', {
    months: {
      format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
      standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_') },

    monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays: {
      format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
      standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
      isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/ },

    weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., HH:mm',
      LLLL: 'dddd, D MMMM YYYY г., HH:mm' },

    calendar: {
      sameDay: '[Сёння ў] LT',
      nextDay: '[Заўтра ў] LT',
      lastDay: '[Учора ў] LT',
      nextWeek: function nextWeek() {
        return '[У] dddd [ў] LT';
      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return '[У мінулую] dddd [ў] LT';
          case 1:
          case 2:
          case 4:
            return '[У мінулы] dddd [ў] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'праз %s',
      past: '%s таму',
      s: 'некалькі секунд',
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithPlural,
      hh: relativeTimeWithPlural,
      d: 'дзень',
      dd: relativeTimeWithPlural,
      M: 'месяц',
      MM: relativeTimeWithPlural,
      y: 'год',
      yy: relativeTimeWithPlural },

    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM: function isPM(input) {
      return /^(дня|вечара)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночы';
      } else if (hour < 12) {
        return 'раніцы';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечара';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';
        case 'D':
          return number + '-га';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return be;

});

/***/ }),
/* 144 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/bg.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var bg = moment.defineLocale('bg', {
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[Днес в] LT',
      nextDay: '[Утре в] LT',
      nextWeek: 'dddd [в] LT',
      lastDay: '[Вчера в] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[В изминалата] dddd [в] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[В изминалия] dddd [в] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'след %s',
      past: 'преди %s',
      s: 'няколко секунди',
      ss: '%d секунди',
      m: 'минута',
      mm: '%d минути',
      h: 'час',
      hh: '%d часа',
      d: 'ден',
      dd: '%d дни',
      M: 'месец',
      MM: '%d месеца',
      y: 'година',
      yy: '%d години' },

    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
      last2Digits = number % 100;
      if (number === 0) {
        return number + '-ев';
      } else if (last2Digits === 0) {
        return number + '-ен';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-ти';
      } else if (lastDigit === 1) {
        return number + '-ви';
      } else if (lastDigit === 2) {
        return number + '-ри';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-ми';
      } else {
        return number + '-ти';
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return bg;

});

/***/ }),
/* 145 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/bm.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var bm = moment.defineLocale('bm', {
    months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
    monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
    weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
    weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
    weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'MMMM [tile] D [san] YYYY',
      LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
      LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm' },

    calendar: {
      sameDay: '[Bi lɛrɛ] LT',
      nextDay: '[Sini lɛrɛ] LT',
      nextWeek: 'dddd [don lɛrɛ] LT',
      lastDay: '[Kunu lɛrɛ] LT',
      lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s kɔnɔ',
      past: 'a bɛ %s bɔ',
      s: 'sanga dama dama',
      ss: 'sekondi %d',
      m: 'miniti kelen',
      mm: 'miniti %d',
      h: 'lɛrɛ kelen',
      hh: 'lɛrɛ %d',
      d: 'tile kelen',
      dd: 'tile %d',
      M: 'kalo kelen',
      MM: 'kalo %d',
      y: 'san kelen',
      yy: 'san %d' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return bm;

});

/***/ }),
/* 146 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/bn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
    '0': '০' },

  numberMap = {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0' };


  var bn = moment.defineLocale('bn', {
    months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
    longDateFormat: {
      LT: 'A h:mm সময়',
      LTS: 'A h:mm:ss সময়',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm সময়',
      LLLL: 'dddd, D MMMM YYYY, A h:mm সময়' },

    calendar: {
      sameDay: '[আজ] LT',
      nextDay: '[আগামীকাল] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[গতকাল] LT',
      lastWeek: '[গত] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s পরে',
      past: '%s আগে',
      s: 'কয়েক সেকেন্ড',
      ss: '%d সেকেন্ড',
      m: 'এক মিনিট',
      mm: '%d মিনিট',
      h: 'এক ঘন্টা',
      hh: '%d ঘন্টা',
      d: 'এক দিন',
      dd: '%d দিন',
      M: 'এক মাস',
      MM: '%d মাস',
      y: 'এক বছর',
      yy: '%d বছর' },

    preparse: function preparse(string) {
      return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'রাত' && hour >= 4 ||
      meridiem === 'দুপুর' && hour < 5 ||
      meridiem === 'বিকাল') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'রাত';
      } else if (hour < 10) {
        return 'সকাল';
      } else if (hour < 17) {
        return 'দুপুর';
      } else if (hour < 20) {
        return 'বিকাল';
      } else {
        return 'রাত';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return bn;

});

/***/ }),
/* 147 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/bo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '༡',
    '2': '༢',
    '3': '༣',
    '4': '༤',
    '5': '༥',
    '6': '༦',
    '7': '༧',
    '8': '༨',
    '9': '༩',
    '0': '༠' },

  numberMap = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0' };


  var bo = moment.defineLocale('bo', {
    months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[དི་རིང] LT',
      nextDay: '[སང་ཉིན] LT',
      nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
      lastDay: '[ཁ་སང] LT',
      lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ལ་',
      past: '%s སྔན་ལ',
      s: 'ལམ་སང',
      ss: '%d སྐར་ཆ།',
      m: 'སྐར་མ་གཅིག',
      mm: '%d སྐར་མ',
      h: 'ཆུ་ཚོད་གཅིག',
      hh: '%d ཆུ་ཚོད',
      d: 'ཉིན་གཅིག',
      dd: '%d ཉིན་',
      M: 'ཟླ་བ་གཅིག',
      MM: '%d ཟླ་བ',
      y: 'ལོ་གཅིག',
      yy: '%d ལོ' },

    preparse: function preparse(string) {
      return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'མཚན་མོ' && hour >= 4 ||
      meridiem === 'ཉིན་གུང' && hour < 5 ||
      meridiem === 'དགོང་དག') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'མཚན་མོ';
      } else if (hour < 10) {
        return 'ཞོགས་ཀས';
      } else if (hour < 17) {
        return 'ཉིན་གུང';
      } else if (hour < 20) {
        return 'དགོང་དག';
      } else {
        return 'མཚན་མོ';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return bo;

});

/***/ }),
/* 148 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/br.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
      'mm': 'munutenn',
      'MM': 'miz',
      'dd': 'devezh' };

    return number + ' ' + mutation(format[key], number);
  }
  function specialMutationForYears(number) {
    switch (lastNumber(number)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
        return number + ' bloaz';
      default:
        return number + ' vloaz';}

  }
  function lastNumber(number) {
    if (number > 9) {
      return lastNumber(number % 10);
    }
    return number;
  }
  function mutation(text, number) {
    if (number === 2) {
      return softMutation(text);
    }
    return text;
  }
  function softMutation(text) {
    var mutationTable = {
      'm': 'v',
      'b': 'v',
      'd': 'z' };

    if (mutationTable[text.charAt(0)] === undefined) {
      return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
  }

  var br = moment.defineLocale('br', {
    months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h[e]mm A',
      LTS: 'h[e]mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D [a viz] MMMM YYYY',
      LLL: 'D [a viz] MMMM YYYY h[e]mm A',
      LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A' },

    calendar: {
      sameDay: '[Hiziv da] LT',
      nextDay: '[Warc\'hoazh da] LT',
      nextWeek: 'dddd [da] LT',
      lastDay: '[Dec\'h da] LT',
      lastWeek: 'dddd [paset da] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'a-benn %s',
      past: '%s \'zo',
      s: 'un nebeud segondennoù',
      ss: '%d eilenn',
      m: 'ur vunutenn',
      mm: relativeTimeWithMutation,
      h: 'un eur',
      hh: '%d eur',
      d: 'un devezh',
      dd: relativeTimeWithMutation,
      M: 'ur miz',
      MM: relativeTimeWithMutation,
      y: 'ur bloaz',
      yy: specialMutationForYears },

    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'añ' : 'vet';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return br;

});

/***/ }),
/* 149 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/bs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;}

  }

  var bs = moment.defineLocale('bs', {
    months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[jučer u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return '[prošlu] dddd [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return bs;

});

/***/ }),
/* 150 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ca.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ca = moment.defineLocale('ca', {
    months: {
      standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
      format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
      isFormat: /D[oD]?(\s)+MMMM/ },

    monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a les] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
      llll: 'ddd D MMM YYYY, H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextDay: function nextDay() {
        return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'd\'aquí %s',
      past: 'fa %s',
      s: 'uns segons',
      ss: '%d segons',
      m: 'un minut',
      mm: '%d minuts',
      h: 'una hora',
      hh: '%d hores',
      d: 'un dia',
      dd: '%d dies',
      M: 'un mes',
      MM: '%d mesos',
      y: 'un any',
      yy: '%d anys' },

    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal: function ordinal(number, period) {
      var output = number === 1 ? 'r' :
      number === 2 ? 'n' :
      number === 3 ? 'r' :
      number === 4 ? 't' : 'è';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ca;

});

/***/ }),
/* 151 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/cs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

  var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
  // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
  // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
  var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

  function plural(n) {
    return n > 1 && n < 5 && ~~(n / 10) !== 1;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's': // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
      case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekund');
        } else {
          return result + 'sekundami';
        }
        break;
      case 'm': // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minuty' : 'minut');
        } else {
          return result + 'minutami';
        }
        break;
      case 'h': // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodin');
        } else {
          return result + 'hodinami';
        }
        break;
      case 'd': // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'den' : 'dnem';
      case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dny' : 'dní');
        } else {
          return result + 'dny';
        }
        break;
      case 'M': // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
      case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'měsíce' : 'měsíců');
        } else {
          return result + 'měsíci';
        }
        break;
      case 'y': // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokem';
      case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'let');
        } else {
          return result + 'lety';
        }
        break;}

  }

  var cs = moment.defineLocale('cs', {
    months: months,
    monthsShort: monthsShort,
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm',
      l: 'D. M. YYYY' },

    calendar: {
      sameDay: '[dnes v] LT',
      nextDay: '[zítra v] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v neděli v] LT';
          case 1:
          case 2:
            return '[v] dddd [v] LT';
          case 3:
            return '[ve středu v] LT';
          case 4:
            return '[ve čtvrtek v] LT';
          case 5:
            return '[v pátek v] LT';
          case 6:
            return '[v sobotu v] LT';}

      },
      lastDay: '[včera v] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minulou neděli v] LT';
          case 1:
          case 2:
            return '[minulé] dddd [v] LT';
          case 3:
            return '[minulou středu v] LT';
          case 4:
          case 5:
            return '[minulý] dddd [v] LT';
          case 6:
            return '[minulou sobotu v] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'před %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return cs;

});

/***/ }),
/* 152 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/cv.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var cv = moment.defineLocale('cv', {
    months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
      LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
      LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm' },

    calendar: {
      sameDay: '[Паян] LT [сехетре]',
      nextDay: '[Ыран] LT [сехетре]',
      lastDay: '[Ӗнер] LT [сехетре]',
      nextWeek: '[Ҫитес] dddd LT [сехетре]',
      lastWeek: '[Иртнӗ] dddd LT [сехетре]',
      sameElse: 'L' },

    relativeTime: {
      future: function future(output) {
        var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
        return output + affix;
      },
      past: '%s каялла',
      s: 'пӗр-ик ҫеккунт',
      ss: '%d ҫеккунт',
      m: 'пӗр минут',
      mm: '%d минут',
      h: 'пӗр сехет',
      hh: '%d сехет',
      d: 'пӗр кун',
      dd: '%d кун',
      M: 'пӗр уйӑх',
      MM: '%d уйӑх',
      y: 'пӗр ҫул',
      yy: '%d ҫул' },

    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
    ordinal: '%d-мӗш',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return cv;

});

/***/ }),
/* 153 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/cy.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var cy = moment.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact: true,
    // time formats are the same as en-gb
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Heddiw am] LT',
      nextDay: '[Yfory am] LT',
      nextWeek: 'dddd [am] LT',
      lastDay: '[Ddoe am] LT',
      lastWeek: 'dddd [diwethaf am] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'mewn %s',
      past: '%s yn ôl',
      s: 'ychydig eiliadau',
      ss: '%d eiliad',
      m: 'munud',
      mm: '%d munud',
      h: 'awr',
      hh: '%d awr',
      d: 'diwrnod',
      dd: '%d diwrnod',
      M: 'mis',
      MM: '%d mis',
      y: 'blwyddyn',
      yy: '%d flynedd' },

    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function ordinal(number) {
      var b = number,
      output = '',
      lookup = [
      '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
      'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
      ];
      if (b > 20) {
        if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
          output = 'fed'; // not 30ain, 70ain or 90ain
        } else {
          output = 'ain';
        }
      } else if (b > 0) {
        output = lookup[b];
      }
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return cy;

});

/***/ }),
/* 154 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/da.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var da = moment.defineLocale('da', {
    months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'på dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[i] dddd[s kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'få sekunder',
      ss: '%d sekunder',
      m: 'et minut',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dage',
      M: 'en måned',
      MM: '%d måneder',
      y: 'et år',
      yy: '%d år' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return da;

});

/***/ }),
/* 155 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/de.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      'm': ['eine Minute', 'einer Minute'],
      'h': ['eine Stunde', 'einer Stunde'],
      'd': ['ein Tag', 'einem Tag'],
      'dd': [number + ' Tage', number + ' Tagen'],
      'M': ['ein Monat', 'einem Monat'],
      'MM': [number + ' Monate', number + ' Monaten'],
      'y': ['ein Jahr', 'einem Jahr'],
      'yy': [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var de = moment.defineLocale('de', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return de;

});

/***/ }),
/* 156 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/de-at.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      'm': ['eine Minute', 'einer Minute'],
      'h': ['eine Stunde', 'einer Stunde'],
      'd': ['ein Tag', 'einem Tag'],
      'dd': [number + ' Tage', number + ' Tagen'],
      'M': ['ein Monat', 'einem Monat'],
      'MM': [number + ' Monate', number + ' Monaten'],
      'y': ['ein Jahr', 'einem Jahr'],
      'yy': [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var deAt = moment.defineLocale('de-at', {
    months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return deAt;

});

/***/ }),
/* 157 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/de-ch.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      'm': ['eine Minute', 'einer Minute'],
      'h': ['eine Stunde', 'einer Stunde'],
      'd': ['ein Tag', 'einem Tag'],
      'dd': [number + ' Tage', number + ' Tagen'],
      'M': ['ein Monat', 'einem Monat'],
      'MM': [number + ' Monate', number + ' Monaten'],
      'y': ['ein Jahr', 'einem Jahr'],
      'yy': [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var deCh = moment.defineLocale('de-ch', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return deCh;

});

/***/ }),
/* 158 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/dv.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = [
  'ޖެނުއަރީ',
  'ފެބްރުއަރީ',
  'މާރިޗު',
  'އޭޕްރީލު',
  'މޭ',
  'ޖޫން',
  'ޖުލައި',
  'އޯގަސްޓު',
  'ސެޕްޓެމްބަރު',
  'އޮކްޓޯބަރު',
  'ނޮވެމްބަރު',
  'ޑިސެމްބަރު'],
  weekdays = [
  'އާދިއްތަ',
  'ހޯމަ',
  'އަންގާރަ',
  'ބުދަ',
  'ބުރާސްފަތި',
  'ހުކުރު',
  'ހޮނިހިރު'];


  var dv = moment.defineLocale('dv', {
    months: months,
    monthsShort: months,
    weekdays: weekdays,
    weekdaysShort: weekdays,
    weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat: {

      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'D/M/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /މކ|މފ/,
    isPM: function isPM(input) {
      return 'މފ' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'މކ';
      } else {
        return 'މފ';
      }
    },
    calendar: {
      sameDay: '[މިއަދު] LT',
      nextDay: '[މާދަމާ] LT',
      nextWeek: 'dddd LT',
      lastDay: '[އިއްޔެ] LT',
      lastWeek: '[ފާއިތުވި] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ތެރޭގައި %s',
      past: 'ކުރިން %s',
      s: 'ސިކުންތުކޮޅެއް',
      ss: 'd% ސިކުންތު',
      m: 'މިނިޓެއް',
      mm: 'މިނިޓު %d',
      h: 'ގަޑިއިރެއް',
      hh: 'ގަޑިއިރު %d',
      d: 'ދުވަހެއް',
      dd: 'ދުވަސް %d',
      M: 'މަހެއް',
      MM: 'މަސް %d',
      y: 'އަހަރެއް',
      yy: 'އަހަރު %d' },

    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 7, // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return dv;

});

/***/ }),
/* 159 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/el.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }


  var el = moment.defineLocale('el', {
    monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return this._monthsNominativeEl;
      } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) {// if there is a day number before 'MMMM'
        return this._monthsGenitiveEl[momentToFormat.month()];
      } else {
        return this._monthsNominativeEl[momentToFormat.month()];
      }
    },
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'μμ' : 'ΜΜ';
      } else {
        return isLower ? 'πμ' : 'ΠΜ';
      }
    },
    isPM: function isPM(input) {
      return (input + '').toLowerCase()[0] === 'μ';
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendarEl: {
      sameDay: '[Σήμερα {}] LT',
      nextDay: '[Αύριο {}] LT',
      nextWeek: 'dddd [{}] LT',
      lastDay: '[Χθες {}] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 6:
            return '[το προηγούμενο] dddd [{}] LT';
          default:
            return '[την προηγούμενη] dddd [{}] LT';}

      },
      sameElse: 'L' },

    calendar: function calendar(key, mom) {
      var output = this._calendarEl[key],
      hours = mom && mom.hours();
      if (isFunction(output)) {
        output = output.apply(mom);
      }
      return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
    },
    relativeTime: {
      future: 'σε %s',
      past: '%s πριν',
      s: 'λίγα δευτερόλεπτα',
      ss: '%d δευτερόλεπτα',
      m: 'ένα λεπτό',
      mm: '%d λεπτά',
      h: 'μία ώρα',
      hh: '%d ώρες',
      d: 'μία μέρα',
      dd: '%d μέρες',
      M: 'ένας μήνας',
      MM: '%d μήνες',
      y: 'ένας χρόνος',
      yy: '%d χρόνια' },

    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4st is the first week of the year.
    } });


  return el;

});

/***/ }),
/* 160 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-SG.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enSG = moment.defineLocale('en-SG', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enSG;

});

/***/ }),
/* 161 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-au.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enAu = moment.defineLocale('en-au', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enAu;

});

/***/ }),
/* 162 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-ca.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enCa = moment.defineLocale('en-ca', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'YYYY-MM-DD',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    } });


  return enCa;

});

/***/ }),
/* 163 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-gb.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enGb = moment.defineLocale('en-gb', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enGb;

});

/***/ }),
/* 164 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-ie.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enIe = moment.defineLocale('en-ie', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enIe;

});

/***/ }),
/* 165 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-il.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enIl = moment.defineLocale('en-il', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    } });


  return enIl;

});

/***/ }),
/* 166 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/en-nz.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var enNz = moment.defineLocale('en-nz', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enNz;

});

/***/ }),
/* 167 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/eo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var eo = moment.defineLocale('eo', {
    months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
    weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
    weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
    weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D[-a de] MMMM, YYYY',
      LLL: 'D[-a de] MMMM, YYYY HH:mm',
      LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm' },

    meridiemParse: /[ap]\.t\.m/i,
    isPM: function isPM(input) {
      return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'p.t.m.' : 'P.T.M.';
      } else {
        return isLower ? 'a.t.m.' : 'A.T.M.';
      }
    },
    calendar: {
      sameDay: '[Hodiaŭ je] LT',
      nextDay: '[Morgaŭ je] LT',
      nextWeek: 'dddd [je] LT',
      lastDay: '[Hieraŭ je] LT',
      lastWeek: '[pasinta] dddd [je] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'post %s',
      past: 'antaŭ %s',
      s: 'sekundoj',
      ss: '%d sekundoj',
      m: 'minuto',
      mm: '%d minutoj',
      h: 'horo',
      hh: '%d horoj',
      d: 'tago', //ne 'diurno', ĉar estas uzita por proksimumo
      dd: '%d tagoj',
      M: 'monato',
      MM: '%d monatoj',
      y: 'jaro',
      yy: '%d jaroj' },

    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal: '%da',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return eo;

});

/***/ }),
/* 168 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/es.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

  var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var es = moment.defineLocale('es', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return es;

});

/***/ }),
/* 169 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/es-do.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

  var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var esDo = moment.defineLocale('es-do', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return esDo;

});

/***/ }),
/* 170 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/es-us.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

  var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var esUs = moment.defineLocale('es-us', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'MM/DD/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return esUs;

});

/***/ }),
/* 171 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/et.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
      'ss': [number + 'sekundi', number + 'sekundit'],
      'm': ['ühe minuti', 'üks minut'],
      'mm': [number + ' minuti', number + ' minutit'],
      'h': ['ühe tunni', 'tund aega', 'üks tund'],
      'hh': [number + ' tunni', number + ' tundi'],
      'd': ['ühe päeva', 'üks päev'],
      'M': ['kuu aja', 'kuu aega', 'üks kuu'],
      'MM': [number + ' kuu', number + ' kuud'],
      'y': ['ühe aasta', 'aasta', 'üks aasta'],
      'yy': [number + ' aasta', number + ' aastat'] };

    if (withoutSuffix) {
      return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
  }

  var et = moment.defineLocale('et', {
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[Täna,] LT',
      nextDay: '[Homme,] LT',
      nextWeek: '[Järgmine] dddd LT',
      lastDay: '[Eile,] LT',
      lastWeek: '[Eelmine] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s pärast',
      past: '%s tagasi',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: '%d päeva',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return et;

});

/***/ }),
/* 172 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/eu.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var eu = moment.defineLocale('eu', {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    monthsParseExact: true,
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY[ko] MMMM[ren] D[a]',
      LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
      LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
      l: 'YYYY-M-D',
      ll: 'YYYY[ko] MMM D[a]',
      lll: 'YYYY[ko] MMM D[a] HH:mm',
      llll: 'ddd, YYYY[ko] MMM D[a] HH:mm' },

    calendar: {
      sameDay: '[gaur] LT[etan]',
      nextDay: '[bihar] LT[etan]',
      nextWeek: 'dddd LT[etan]',
      lastDay: '[atzo] LT[etan]',
      lastWeek: '[aurreko] dddd LT[etan]',
      sameElse: 'L' },

    relativeTime: {
      future: '%s barru',
      past: 'duela %s',
      s: 'segundo batzuk',
      ss: '%d segundo',
      m: 'minutu bat',
      mm: '%d minutu',
      h: 'ordu bat',
      hh: '%d ordu',
      d: 'egun bat',
      dd: '%d egun',
      M: 'hilabete bat',
      MM: '%d hilabete',
      y: 'urte bat',
      yy: '%d urte' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return eu;

});

/***/ }),
/* 173 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fa.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰' },
  numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0' };


  var fa = moment.defineLocale('fa', {
    months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
    weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function isPM(input) {
      return /بعد از ظهر/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'قبل از ظهر';
      } else {
        return 'بعد از ظهر';
      }
    },
    calendar: {
      sameDay: '[امروز ساعت] LT',
      nextDay: '[فردا ساعت] LT',
      nextWeek: 'dddd [ساعت] LT',
      lastDay: '[دیروز ساعت] LT',
      lastWeek: 'dddd [پیش] [ساعت] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'در %s',
      past: '%s پیش',
      s: 'چند ثانیه',
      ss: 'ثانیه d%',
      m: 'یک دقیقه',
      mm: '%d دقیقه',
      h: 'یک ساعت',
      hh: '%d ساعت',
      d: 'یک روز',
      dd: '%d روز',
      M: 'یک ماه',
      MM: '%d ماه',
      y: 'یک سال',
      yy: '%d سال' },

    preparse: function preparse(string) {
      return string.replace(/[۰-۹]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    dayOfMonthOrdinalParse: /\d{1,2}م/,
    ordinal: '%dم',
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return fa;

});

/***/ }),
/* 174 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fi.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
  numbersFuture = [
  'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
  numbersPast[7], numbersPast[8], numbersPast[9]];

  function translate(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
      case 's':
        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'ss':
        return isFuture ? 'sekunnin' : 'sekuntia';
      case 'm':
        return isFuture ? 'minuutin' : 'minuutti';
      case 'mm':
        result = isFuture ? 'minuutin' : 'minuuttia';
        break;
      case 'h':
        return isFuture ? 'tunnin' : 'tunti';
      case 'hh':
        result = isFuture ? 'tunnin' : 'tuntia';
        break;
      case 'd':
        return isFuture ? 'päivän' : 'päivä';
      case 'dd':
        result = isFuture ? 'päivän' : 'päivää';
        break;
      case 'M':
        return isFuture ? 'kuukauden' : 'kuukausi';
      case 'MM':
        result = isFuture ? 'kuukauden' : 'kuukautta';
        break;
      case 'y':
        return isFuture ? 'vuoden' : 'vuosi';
      case 'yy':
        result = isFuture ? 'vuoden' : 'vuotta';
        break;}

    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
  }
  function verbalNumber(number, isFuture) {
    return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
  }

  var fi = moment.defineLocale('fi', {
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[ta] YYYY',
      LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
      LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
      l: 'D.M.YYYY',
      ll: 'Do MMM YYYY',
      lll: 'Do MMM YYYY, [klo] HH.mm',
      llll: 'ddd, Do MMM YYYY, [klo] HH.mm' },

    calendar: {
      sameDay: '[tänään] [klo] LT',
      nextDay: '[huomenna] [klo] LT',
      nextWeek: 'dddd [klo] LT',
      lastDay: '[eilen] [klo] LT',
      lastWeek: '[viime] dddd[na] [klo] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s päästä',
      past: '%s sitten',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fi;

});

/***/ }),
/* 175 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var fo = moment.defineLocale('fo', {
    months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D. MMMM, YYYY HH:mm' },

    calendar: {
      sameDay: '[Í dag kl.] LT',
      nextDay: '[Í morgin kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[Í gjár kl.] LT',
      lastWeek: '[síðstu] dddd [kl] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'um %s',
      past: '%s síðani',
      s: 'fá sekund',
      ss: '%d sekundir',
      m: 'ein minuttur',
      mm: '%d minuttir',
      h: 'ein tími',
      hh: '%d tímar',
      d: 'ein dagur',
      dd: '%d dagar',
      M: 'ein mánaður',
      MM: '%d mánaðir',
      y: 'eitt ár',
      yy: '%d ár' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fo;

});

/***/ }),
/* 176 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fr.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var fr = moment.defineLocale('fr', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // TODO: Return 'e' when day of month > 1. Move this case inside
        // block for masculine words below.
        // See https://github.com/moment/moment/issues/3375
        case 'D':
          return number + (number === 1 ? 'er' : '');

        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fr;

});

/***/ }),
/* 177 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fr-ca.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var frCa = moment.defineLocale('fr-ca', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    } });


  return frCa;

});

/***/ }),
/* 178 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fr-ch.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var frCh = moment.defineLocale('fr-ch', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return frCh;

});

/***/ }),
/* 179 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/fy.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
  monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

  var fy = moment.defineLocale('fy', {
    months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsParseExact: true,
    weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[hjoed om] LT',
      nextDay: '[moarn om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[juster om] LT',
      lastWeek: '[ôfrûne] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'oer %s',
      past: '%s lyn',
      s: 'in pear sekonden',
      ss: '%d sekonden',
      m: 'ien minút',
      mm: '%d minuten',
      h: 'ien oere',
      hh: '%d oeren',
      d: 'ien dei',
      dd: '%d dagen',
      M: 'ien moanne',
      MM: '%d moannen',
      y: 'ien jier',
      yy: '%d jierren' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fy;

});

/***/ }),
/* 180 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ga.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';



  var months = [
  'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'];


  var monthsShort = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];

  var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];

  var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];

  var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];

  var ga = moment.defineLocale('ga', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Inniu ag] LT',
      nextDay: '[Amárach ag] LT',
      nextWeek: 'dddd [ag] LT',
      lastDay: '[Inné aig] LT',
      lastWeek: 'dddd [seo caite] [ag] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'i %s',
      past: '%s ó shin',
      s: 'cúpla soicind',
      ss: '%d soicind',
      m: 'nóiméad',
      mm: '%d nóiméad',
      h: 'uair an chloig',
      hh: '%d uair an chloig',
      d: 'lá',
      dd: '%d lá',
      M: 'mí',
      MM: '%d mí',
      y: 'bliain',
      yy: '%d bliain' },

    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ga;

});

/***/ }),
/* 181 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/gd.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = [
  'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'];


  var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

  var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

  var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

  var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

  var gd = moment.defineLocale('gd', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[An-diugh aig] LT',
      nextDay: '[A-màireach aig] LT',
      nextWeek: 'dddd [aig] LT',
      lastDay: '[An-dè aig] LT',
      lastWeek: 'dddd [seo chaidh] [aig] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ann an %s',
      past: 'bho chionn %s',
      s: 'beagan diogan',
      ss: '%d diogan',
      m: 'mionaid',
      mm: '%d mionaidean',
      h: 'uair',
      hh: '%d uairean',
      d: 'latha',
      dd: '%d latha',
      M: 'mìos',
      MM: '%d mìosan',
      y: 'bliadhna',
      yy: '%d bliadhna' },

    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return gd;

});

/***/ }),
/* 182 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/gl.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var gl = moment.defineLocale('gl', {
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
      },
      lastDay: function lastDay() {
        return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: function future(str) {
        if (str.indexOf('un') === 0) {
          return 'n' + str;
        }
        return 'en ' + str;
      },
      past: 'hai %s',
      s: 'uns segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'unha hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return gl;

});

/***/ }),
/* 183 */
/*!*****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/gom-latn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      's': ['thodde secondanim', 'thodde second'],
      'ss': [number + ' secondanim', number + ' second'],
      'm': ['eka mintan', 'ek minute'],
      'mm': [number + ' mintanim', number + ' mintam'],
      'h': ['eka voran', 'ek vor'],
      'hh': [number + ' voranim', number + ' voram'],
      'd': ['eka disan', 'ek dis'],
      'dd': [number + ' disanim', number + ' dis'],
      'M': ['eka mhoinean', 'ek mhoino'],
      'MM': [number + ' mhoineanim', number + ' mhoine'],
      'y': ['eka vorsan', 'ek voros'],
      'yy': [number + ' vorsanim', number + ' vorsam'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var gomLatn = moment.defineLocale('gom-latn', {
    months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
    monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
    weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A h:mm [vazta]',
      LTS: 'A h:mm:ss [vazta]',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY A h:mm [vazta]',
      LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
      llll: 'ddd, D MMM YYYY, A h:mm [vazta]' },

    calendar: {
      sameDay: '[Aiz] LT',
      nextDay: '[Faleam] LT',
      nextWeek: '[Ieta to] dddd[,] LT',
      lastDay: '[Kal] LT',
      lastWeek: '[Fatlo] dddd[,] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s',
      past: '%s adim',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // the ordinal 'er' only applies to day of the month
        case 'D':
          return number + 'er';
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
        case 'w':
        case 'W':
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    meridiemParse: /rati|sokalli|donparam|sanje/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'rati') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'sokalli') {
        return hour;
      } else if (meridiem === 'donparam') {
        return hour > 12 ? hour : hour + 12;
      } else if (meridiem === 'sanje') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'rati';
      } else if (hour < 12) {
        return 'sokalli';
      } else if (hour < 16) {
        return 'donparam';
      } else if (hour < 20) {
        return 'sanje';
      } else {
        return 'rati';
      }
    } });


  return gomLatn;

});

/***/ }),
/* 184 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/gu.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '૧',
    '2': '૨',
    '3': '૩',
    '4': '૪',
    '5': '૫',
    '6': '૬',
    '7': '૭',
    '8': '૮',
    '9': '૯',
    '0': '૦' },

  numberMap = {
    '૧': '1',
    '૨': '2',
    '૩': '3',
    '૪': '4',
    '૫': '5',
    '૬': '6',
    '૭': '7',
    '૮': '8',
    '૯': '9',
    '૦': '0' };


  var gu = moment.defineLocale('gu', {
    months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
    monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
    monthsParseExact: true,
    weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
    weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
    weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm વાગ્યે',
      LTS: 'A h:mm:ss વાગ્યે',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
      LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે' },

    calendar: {
      sameDay: '[આજ] LT',
      nextDay: '[કાલે] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ગઇકાલે] LT',
      lastWeek: '[પાછલા] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s મા',
      past: '%s પેહલા',
      s: 'અમુક પળો',
      ss: '%d સેકંડ',
      m: 'એક મિનિટ',
      mm: '%d મિનિટ',
      h: 'એક કલાક',
      hh: '%d કલાક',
      d: 'એક દિવસ',
      dd: '%d દિવસ',
      M: 'એક મહિનો',
      MM: '%d મહિનો',
      y: 'એક વર્ષ',
      yy: '%d વર્ષ' },

    preparse: function preparse(string) {
      return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
    meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'રાત') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'સવાર') {
        return hour;
      } else if (meridiem === 'બપોર') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'સાંજ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'રાત';
      } else if (hour < 10) {
        return 'સવાર';
      } else if (hour < 17) {
        return 'બપોર';
      } else if (hour < 20) {
        return 'સાંજ';
      } else {
        return 'રાત';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return gu;

});

/***/ }),
/* 185 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/he.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var he = moment.defineLocale('he', {
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [ב]MMMM YYYY',
      LLL: 'D [ב]MMMM YYYY HH:mm',
      LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
      l: 'D/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[היום ב־]LT',
      nextDay: '[מחר ב־]LT',
      nextWeek: 'dddd [בשעה] LT',
      lastDay: '[אתמול ב־]LT',
      lastWeek: '[ביום] dddd [האחרון בשעה] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'בעוד %s',
      past: 'לפני %s',
      s: 'מספר שניות',
      ss: '%d שניות',
      m: 'דקה',
      mm: '%d דקות',
      h: 'שעה',
      hh: function hh(number) {
        if (number === 2) {
          return 'שעתיים';
        }
        return number + ' שעות';
      },
      d: 'יום',
      dd: function dd(number) {
        if (number === 2) {
          return 'יומיים';
        }
        return number + ' ימים';
      },
      M: 'חודש',
      MM: function MM(number) {
        if (number === 2) {
          return 'חודשיים';
        }
        return number + ' חודשים';
      },
      y: 'שנה',
      yy: function yy(number) {
        if (number === 2) {
          return 'שנתיים';
        } else if (number % 10 === 0 && number !== 10) {
          return number + ' שנה';
        }
        return number + ' שנים';
      } },

    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: function isPM(input) {
      return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 5) {
        return 'לפנות בוקר';
      } else if (hour < 10) {
        return 'בבוקר';
      } else if (hour < 12) {
        return isLower ? 'לפנה"צ' : 'לפני הצהריים';
      } else if (hour < 18) {
        return isLower ? 'אחה"צ' : 'אחרי הצהריים';
      } else {
        return 'בערב';
      }
    } });


  return he;

});

/***/ }),
/* 186 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/hi.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०' },

  numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0' };


  var hi = moment.defineLocale('hi', {
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm बजे',
      LTS: 'A h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, A h:mm बजे' },

    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[कल] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[कल] LT',
      lastWeek: '[पिछले] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s में',
      past: '%s पहले',
      s: 'कुछ ही क्षण',
      ss: '%d सेकंड',
      m: 'एक मिनट',
      mm: '%d मिनट',
      h: 'एक घंटा',
      hh: '%d घंटे',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महीने',
      MM: '%d महीने',
      y: 'एक वर्ष',
      yy: '%d वर्ष' },

    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'रात') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'सुबह') {
        return hour;
      } else if (meridiem === 'दोपहर') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'शाम') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'रात';
      } else if (hour < 10) {
        return 'सुबह';
      } else if (hour < 17) {
        return 'दोपहर';
      } else if (hour < 20) {
        return 'शाम';
      } else {
        return 'रात';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return hi;

});

/***/ }),
/* 187 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/hr.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;}

  }

  var hr = moment.defineLocale('hr', {
    months: {
      format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
      standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_') },

    monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[jučer u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return '[prošlu] dddd [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return hr;

});

/***/ }),
/* 188 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/hu.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
  function translate(number, withoutSuffix, key, isFuture) {
    var num = number;
    switch (key) {
      case 's':
        return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
      case 'ss':
        return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
      case 'm':
        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'mm':
        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'h':
        return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'hh':
        return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'd':
        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'dd':
        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'M':
        return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'MM':
        return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'y':
        return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
      case 'yy':
        return num + (isFuture || withoutSuffix ? ' év' : ' éve');}

    return '';
  }
  function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
  }

  var hu = moment.defineLocale('hu', {
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY. MMMM D.',
      LLL: 'YYYY. MMMM D. H:mm',
      LLLL: 'YYYY. MMMM D., dddd H:mm' },

    meridiemParse: /de|du/i,
    isPM: function isPM(input) {
      return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower === true ? 'de' : 'DE';
      } else {
        return isLower === true ? 'du' : 'DU';
      }
    },
    calendar: {
      sameDay: '[ma] LT[-kor]',
      nextDay: '[holnap] LT[-kor]',
      nextWeek: function nextWeek() {
        return week.call(this, true);
      },
      lastDay: '[tegnap] LT[-kor]',
      lastWeek: function lastWeek() {
        return week.call(this, false);
      },
      sameElse: 'L' },

    relativeTime: {
      future: '%s múlva',
      past: '%s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return hu;

});

/***/ }),
/* 189 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/hy-am.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var hyAm = moment.defineLocale('hy-am', {
    months: {
      format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
      standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_') },

    monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
    weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
    weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY թ.',
      LLL: 'D MMMM YYYY թ., HH:mm',
      LLLL: 'dddd, D MMMM YYYY թ., HH:mm' },

    calendar: {
      sameDay: '[այսօր] LT',
      nextDay: '[վաղը] LT',
      lastDay: '[երեկ] LT',
      nextWeek: function nextWeek() {
        return 'dddd [օրը ժամը] LT';
      },
      lastWeek: function lastWeek() {
        return '[անցած] dddd [օրը ժամը] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: '%s հետո',
      past: '%s առաջ',
      s: 'մի քանի վայրկյան',
      ss: '%d վայրկյան',
      m: 'րոպե',
      mm: '%d րոպե',
      h: 'ժամ',
      hh: '%d ժամ',
      d: 'օր',
      dd: '%d օր',
      M: 'ամիս',
      MM: '%d ամիս',
      y: 'տարի',
      yy: '%d տարի' },

    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function isPM(input) {
      return /^(ցերեկվա|երեկոյան)$/.test(input);
    },
    meridiem: function meridiem(hour) {
      if (hour < 4) {
        return 'գիշերվա';
      } else if (hour < 12) {
        return 'առավոտվա';
      } else if (hour < 17) {
        return 'ցերեկվա';
      } else {
        return 'երեկոյան';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'DDD':
        case 'w':
        case 'W':
        case 'DDDo':
          if (number === 1) {
            return number + '-ին';
          }
          return number + '-րդ';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return hyAm;

});

/***/ }),
/* 190 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/id.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var id = moment.defineLocale('id', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'siang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sore' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'siang';
      } else if (hours < 19) {
        return 'sore';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Besok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kemarin pukul] LT',
      lastWeek: 'dddd [lalu pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lalu',
      s: 'beberapa detik',
      ss: '%d detik',
      m: 'semenit',
      mm: '%d menit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return id;

});

/***/ }),
/* 191 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/is.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function plural(n) {
    if (n % 100 === 11) {
      return true;
    } else if (n % 10 === 1) {
      return false;
    }
    return true;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
      case 'ss':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
        }
        return result + 'sekúnda';
      case 'm':
        return withoutSuffix ? 'mínúta' : 'mínútu';
      case 'mm':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
        } else if (withoutSuffix) {
          return result + 'mínúta';
        }
        return result + 'mínútu';
      case 'hh':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
        }
        return result + 'klukkustund';
      case 'd':
        if (withoutSuffix) {
          return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
      case 'dd':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'dagar';
          }
          return result + (isFuture ? 'daga' : 'dögum');
        } else if (withoutSuffix) {
          return result + 'dagur';
        }
        return result + (isFuture ? 'dag' : 'degi');
      case 'M':
        if (withoutSuffix) {
          return 'mánuður';
        }
        return isFuture ? 'mánuð' : 'mánuði';
      case 'MM':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'mánuðir';
          }
          return result + (isFuture ? 'mánuði' : 'mánuðum');
        } else if (withoutSuffix) {
          return result + 'mánuður';
        }
        return result + (isFuture ? 'mánuð' : 'mánuði');
      case 'y':
        return withoutSuffix || isFuture ? 'ár' : 'ári';
      case 'yy':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
        }
        return result + (withoutSuffix || isFuture ? 'ár' : 'ári');}

  }

  var is = moment.defineLocale('is', {
    months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm' },

    calendar: {
      sameDay: '[í dag kl.] LT',
      nextDay: '[á morgun kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[í gær kl.] LT',
      lastWeek: '[síðasta] dddd [kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'eftir %s',
      past: 'fyrir %s síðan',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: 'klukkustund',
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return is;

});

/***/ }),
/* 192 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/it.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var it = moment.defineLocale('it', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: function future(s) {
        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
      },
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: 'un\'ora',
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return it;

});

/***/ }),
/* 193 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/it-ch.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var itCh = moment.defineLocale('it-ch', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: function future(s) {
        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
      },
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: 'un\'ora',
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return itCh;

});

/***/ }),
/* 194 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ja.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ja = moment.defineLocale('ja', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日 dddd HH:mm',
      l: 'YYYY/MM/DD',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日(ddd) HH:mm' },

    meridiemParse: /午前|午後/i,
    isPM: function isPM(input) {
      return input === '午後';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '午前';
      } else {
        return '午後';
      }
    },
    calendar: {
      sameDay: '[今日] LT',
      nextDay: '[明日] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() < this.week()) {
          return '[来週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      lastDay: '[昨日] LT',
      lastWeek: function lastWeek(now) {
        if (this.week() < now.week()) {
          return '[先週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '数秒',
      ss: '%d秒',
      m: '1分',
      mm: '%d分',
      h: '1時間',
      hh: '%d時間',
      d: '1日',
      dd: '%d日',
      M: '1ヶ月',
      MM: '%dヶ月',
      y: '1年',
      yy: '%d年' } });



  return ja;

});

/***/ }),
/* 195 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/jv.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var jv = moment.defineLocale('jv', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'enjing') {
        return hour;
      } else if (meridiem === 'siyang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'enjing';
      } else if (hours < 15) {
        return 'siyang';
      } else if (hours < 19) {
        return 'sonten';
      } else {
        return 'ndalu';
      }
    },
    calendar: {
      sameDay: '[Dinten puniko pukul] LT',
      nextDay: '[Mbenjang pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kala wingi pukul] LT',
      lastWeek: 'dddd [kepengker pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'wonten ing %s',
      past: '%s ingkang kepengker',
      s: 'sawetawis detik',
      ss: '%d detik',
      m: 'setunggal menit',
      mm: '%d menit',
      h: 'setunggal jam',
      hh: '%d jam',
      d: 'sedinten',
      dd: '%d dinten',
      M: 'sewulan',
      MM: '%d wulan',
      y: 'setaun',
      yy: '%d taun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return jv;

});

/***/ }),
/* 196 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ka.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ka = moment.defineLocale('ka', {
    months: {
      standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
      format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_') },

    monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays: {
      standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
      format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
      isFormat: /(წინა|შემდეგ)/ },

    weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[დღეს] LT[-ზე]',
      nextDay: '[ხვალ] LT[-ზე]',
      lastDay: '[გუშინ] LT[-ზე]',
      nextWeek: '[შემდეგ] dddd LT[-ზე]',
      lastWeek: '[წინა] dddd LT-ზე',
      sameElse: 'L' },

    relativeTime: {
      future: function future(s) {
        return /(წამი|წუთი|საათი|წელი)/.test(s) ?
        s.replace(/ი$/, 'ში') :
        s + 'ში';
      },
      past: function past(s) {
        if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
          return s.replace(/(ი|ე)$/, 'ის წინ');
        }
        if (/წელი/.test(s)) {
          return s.replace(/წელი$/, 'წლის წინ');
        }
      },
      s: 'რამდენიმე წამი',
      ss: '%d წამი',
      m: 'წუთი',
      mm: '%d წუთი',
      h: 'საათი',
      hh: '%d საათი',
      d: 'დღე',
      dd: '%d დღე',
      M: 'თვე',
      MM: '%d თვე',
      y: 'წელი',
      yy: '%d წელი' },

    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal: function ordinal(number) {
      if (number === 0) {
        return number;
      }
      if (number === 1) {
        return number + '-ლი';
      }
      if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
        return 'მე-' + number;
      }
      return number + '-ე';
    },
    week: {
      dow: 1,
      doy: 7 } });



  return ka;

});

/***/ }),
/* 197 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/kk.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші' };


  var kk = moment.defineLocale('kk', {
    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Бүгін сағат] LT',
      nextDay: '[Ертең сағат] LT',
      nextWeek: 'dddd [сағат] LT',
      lastDay: '[Кеше сағат] LT',
      lastWeek: '[Өткен аптаның] dddd [сағат] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ішінде',
      past: '%s бұрын',
      s: 'бірнеше секунд',
      ss: '%d секунд',
      m: 'бір минут',
      mm: '%d минут',
      h: 'бір сағат',
      hh: '%d сағат',
      d: 'бір күн',
      dd: '%d күн',
      M: 'бір ай',
      MM: '%d ай',
      y: 'бір жыл',
      yy: '%d жыл' },

    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return kk;

});

/***/ }),
/* 198 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/km.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '១',
    '2': '២',
    '3': '៣',
    '4': '៤',
    '5': '៥',
    '6': '៦',
    '7': '៧',
    '8': '៨',
    '9': '៩',
    '0': '០' },
  numberMap = {
    '១': '1',
    '២': '2',
    '៣': '3',
    '៤': '4',
    '៥': '5',
    '៦': '6',
    '៧': '7',
    '៨': '8',
    '៩': '9',
    '០': '0' };


  var km = moment.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
    '_'),

    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
    '_'),

    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /ព្រឹក|ល្ងាច/,
    isPM: function isPM(input) {
      return input === 'ល្ងាច';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ព្រឹក';
      } else {
        return 'ល្ងាច';
      }
    },
    calendar: {
      sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
      nextDay: '[ស្អែក ម៉ោង] LT',
      nextWeek: 'dddd [ម៉ោង] LT',
      lastDay: '[ម្សិលមិញ ម៉ោង] LT',
      lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%sទៀត',
      past: '%sមុន',
      s: 'ប៉ុន្មានវិនាទី',
      ss: '%d វិនាទី',
      m: 'មួយនាទី',
      mm: '%d នាទី',
      h: 'មួយម៉ោង',
      hh: '%d ម៉ោង',
      d: 'មួយថ្ងៃ',
      dd: '%d ថ្ងៃ',
      M: 'មួយខែ',
      MM: '%d ខែ',
      y: 'មួយឆ្នាំ',
      yy: '%d ឆ្នាំ' },

    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
    ordinal: 'ទី%d',
    preparse: function preparse(string) {
      return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return km;

});

/***/ }),
/* 199 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/kn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '೧',
    '2': '೨',
    '3': '೩',
    '4': '೪',
    '5': '೫',
    '6': '೬',
    '7': '೭',
    '8': '೮',
    '9': '೯',
    '0': '೦' },

  numberMap = {
    '೧': '1',
    '೨': '2',
    '೩': '3',
    '೪': '4',
    '೫': '5',
    '೬': '6',
    '೭': '7',
    '೮': '8',
    '೯': '9',
    '೦': '0' };


  var kn = moment.defineLocale('kn', {
    months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
    monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
    monthsParseExact: true,
    weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
    weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[ಇಂದು] LT',
      nextDay: '[ನಾಳೆ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ನಿನ್ನೆ] LT',
      lastWeek: '[ಕೊನೆಯ] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ನಂತರ',
      past: '%s ಹಿಂದೆ',
      s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
      ss: '%d ಸೆಕೆಂಡುಗಳು',
      m: 'ಒಂದು ನಿಮಿಷ',
      mm: '%d ನಿಮಿಷ',
      h: 'ಒಂದು ಗಂಟೆ',
      hh: '%d ಗಂಟೆ',
      d: 'ಒಂದು ದಿನ',
      dd: '%d ದಿನ',
      M: 'ಒಂದು ತಿಂಗಳು',
      MM: '%d ತಿಂಗಳು',
      y: 'ಒಂದು ವರ್ಷ',
      yy: '%d ವರ್ಷ' },

    preparse: function preparse(string) {
      return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ರಾತ್ರಿ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
        return hour;
      } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ಸಂಜೆ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ರಾತ್ರಿ';
      } else if (hour < 10) {
        return 'ಬೆಳಿಗ್ಗೆ';
      } else if (hour < 17) {
        return 'ಮಧ್ಯಾಹ್ನ';
      } else if (hour < 20) {
        return 'ಸಂಜೆ';
      } else {
        return 'ರಾತ್ರಿ';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal: function ordinal(number) {
      return number + 'ನೇ';
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return kn;

});

/***/ }),
/* 200 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ko.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ko = moment.defineLocale('ko', {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY년 MMMM D일',
      LLL: 'YYYY년 MMMM D일 A h:mm',
      LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
      l: 'YYYY.MM.DD.',
      ll: 'YYYY년 MMMM D일',
      lll: 'YYYY년 MMMM D일 A h:mm',
      llll: 'YYYY년 MMMM D일 dddd A h:mm' },

    calendar: {
      sameDay: '오늘 LT',
      nextDay: '내일 LT',
      nextWeek: 'dddd LT',
      lastDay: '어제 LT',
      lastWeek: '지난주 dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇 초',
      ss: '%d초',
      m: '1분',
      mm: '%d분',
      h: '한 시간',
      hh: '%d시간',
      d: '하루',
      dd: '%d일',
      M: '한 달',
      MM: '%d달',
      y: '일 년',
      yy: '%d년' },

    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '일';
        case 'M':
          return number + '월';
        case 'w':
        case 'W':
          return number + '주';
        default:
          return number;}

    },
    meridiemParse: /오전|오후/,
    isPM: function isPM(token) {
      return token === '오후';
    },
    meridiem: function meridiem(hour, minute, isUpper) {
      return hour < 12 ? '오전' : '오후';
    } });


  return ko;

});

/***/ }),
/* 201 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ku.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠' },
  numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0' },

  months = [
  'کانونی دووەم',
  'شوبات',
  'ئازار',
  'نیسان',
  'ئایار',
  'حوزەیران',
  'تەمموز',
  'ئاب',
  'ئەیلوول',
  'تشرینی یەكەم',
  'تشرینی دووەم',
  'كانونی یەکەم'];



  var ku = moment.defineLocale('ku', {
    months: months,
    monthsShort: months,
    weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /ئێواره‌|به‌یانی/,
    isPM: function isPM(input) {
      return /ئێواره‌/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'به‌یانی';
      } else {
        return 'ئێواره‌';
      }
    },
    calendar: {
      sameDay: '[ئه‌مرۆ كاتژمێر] LT',
      nextDay: '[به‌یانی كاتژمێر] LT',
      nextWeek: 'dddd [كاتژمێر] LT',
      lastDay: '[دوێنێ كاتژمێر] LT',
      lastWeek: 'dddd [كاتژمێر] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'له‌ %s',
      past: '%s',
      s: 'چه‌ند چركه‌یه‌ك',
      ss: 'چركه‌ %d',
      m: 'یه‌ك خوله‌ك',
      mm: '%d خوله‌ك',
      h: 'یه‌ك كاتژمێر',
      hh: '%d كاتژمێر',
      d: 'یه‌ك ڕۆژ',
      dd: '%d ڕۆژ',
      M: 'یه‌ك مانگ',
      MM: '%d مانگ',
      y: 'یه‌ك ساڵ',
      yy: '%d ساڵ' },

    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return ku;

});

/***/ }),
/* 202 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ky.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var suffixes = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү' };


  var ky = moment.defineLocale('ky', {
    months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Бүгүн саат] LT',
      nextDay: '[Эртең саат] LT',
      nextWeek: 'dddd [саат] LT',
      lastDay: '[Кечээ саат] LT',
      lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ичинде',
      past: '%s мурун',
      s: 'бирнече секунд',
      ss: '%d секунд',
      m: 'бир мүнөт',
      mm: '%d мүнөт',
      h: 'бир саат',
      hh: '%d саат',
      d: 'бир күн',
      dd: '%d күн',
      M: 'бир ай',
      MM: '%d ай',
      y: 'бир жыл',
      yy: '%d жыл' },

    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ky;

});

/***/ }),
/* 203 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/lb.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      'm': ['eng Minutt', 'enger Minutt'],
      'h': ['eng Stonn', 'enger Stonn'],
      'd': ['een Dag', 'engem Dag'],
      'M': ['ee Mount', 'engem Mount'],
      'y': ['ee Joer', 'engem Joer'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }
  function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'a ' + string;
    }
    return 'an ' + string;
  }
  function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'viru ' + string;
    }
    return 'virun ' + string;
  }
  /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
  function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
      return false;
    }
    if (number < 0) {
      // Negative Number --> always true
      return true;
    } else if (number < 10) {
      // Only 1 digit
      if (4 <= number && number <= 7) {
        return true;
      }
      return false;
    } else if (number < 100) {
      // 2 digits
      var lastDigit = number % 10,firstDigit = number / 10;
      if (lastDigit === 0) {
        return eifelerRegelAppliesToNumber(firstDigit);
      }
      return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
      // 3 or 4 digits --> recursively check first digit
      while (number >= 10) {
        number = number / 10;
      }
      return eifelerRegelAppliesToNumber(number);
    } else {
      // Anything larger than 4 digits: recursively check first n-3 digits
      number = number / 1000;
      return eifelerRegelAppliesToNumber(number);
    }
  }

  var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm [Auer]',
      LTS: 'H:mm:ss [Auer]',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm [Auer]',
      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]' },

    calendar: {
      sameDay: '[Haut um] LT',
      sameElse: 'L',
      nextDay: '[Muer um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[Gëschter um] LT',
      lastWeek: function lastWeek() {
        // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
        switch (this.day()) {
          case 2:
          case 4:
            return '[Leschten] dddd [um] LT';
          default:
            return '[Leschte] dddd [um] LT';}

      } },

    relativeTime: {
      future: processFutureTime,
      past: processPastTime,
      s: 'e puer Sekonnen',
      ss: '%d Sekonnen',
      m: processRelativeTime,
      mm: '%d Minutten',
      h: processRelativeTime,
      hh: '%d Stonnen',
      d: processRelativeTime,
      dd: '%d Deeg',
      M: processRelativeTime,
      MM: '%d Méint',
      y: processRelativeTime,
      yy: '%d Joer' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lb;

});

/***/ }),
/* 204 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/lo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var lo = moment.defineLocale('lo', {
    months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'ວັນdddd D MMMM YYYY HH:mm' },

    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function isPM(input) {
      return input === 'ຕອນແລງ';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ຕອນເຊົ້າ';
      } else {
        return 'ຕອນແລງ';
      }
    },
    calendar: {
      sameDay: '[ມື້ນີ້ເວລາ] LT',
      nextDay: '[ມື້ອື່ນເວລາ] LT',
      nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
      lastDay: '[ມື້ວານນີ້ເວລາ] LT',
      lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ອີກ %s',
      past: '%sຜ່ານມາ',
      s: 'ບໍ່ເທົ່າໃດວິນາທີ',
      ss: '%d ວິນາທີ',
      m: '1 ນາທີ',
      mm: '%d ນາທີ',
      h: '1 ຊົ່ວໂມງ',
      hh: '%d ຊົ່ວໂມງ',
      d: '1 ມື້',
      dd: '%d ມື້',
      M: '1 ເດືອນ',
      MM: '%d ເດືອນ',
      y: '1 ປີ',
      yy: '%d ປີ' },

    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
    ordinal: function ordinal(number) {
      return 'ທີ່' + number;
    } });


  return lo;

});

/***/ }),
/* 205 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/lt.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var units = {
    'ss': 'sekundė_sekundžių_sekundes',
    'm': 'minutė_minutės_minutę',
    'mm': 'minutės_minučių_minutes',
    'h': 'valanda_valandos_valandą',
    'hh': 'valandos_valandų_valandas',
    'd': 'diena_dienos_dieną',
    'dd': 'dienos_dienų_dienas',
    'M': 'mėnuo_mėnesio_mėnesį',
    'MM': 'mėnesiai_mėnesių_mėnesius',
    'y': 'metai_metų_metus',
    'yy': 'metai_metų_metus' };

  function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
      return 'kelios sekundės';
    } else {
      return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
  }
  function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
  }
  function special(number) {
    return number % 10 === 0 || number > 10 && number < 20;
  }
  function forms(key) {
    return units[key].split('_');
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
      return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
      return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
      if (isFuture) {
        return result + forms(key)[1];
      } else {
        return result + (special(number) ? forms(key)[1] : forms(key)[2]);
      }
    }
  }
  var lt = moment.defineLocale('lt', {
    months: {
      format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
      standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ },

    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
      format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
      standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
      isFormat: /dddd HH:mm/ },

    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY [m.] MMMM D [d.]',
      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
      l: 'YYYY-MM-DD',
      ll: 'YYYY [m.] MMMM D [d.]',
      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]' },

    calendar: {
      sameDay: '[Šiandien] LT',
      nextDay: '[Rytoj] LT',
      nextWeek: 'dddd LT',
      lastDay: '[Vakar] LT',
      lastWeek: '[Praėjusį] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'po %s',
      past: 'prieš %s',
      s: translateSeconds,
      ss: translate,
      m: translateSingular,
      mm: translate,
      h: translateSingular,
      hh: translate,
      d: translateSingular,
      dd: translate,
      M: translateSingular,
      MM: translate,
      y: translateSingular,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function ordinal(number) {
      return number + '-oji';
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lt;

});

/***/ }),
/* 206 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/lv.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var units = {
    'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
    'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'h': 'stundas_stundām_stunda_stundas'.split('_'),
    'hh': 'stundas_stundām_stunda_stundas'.split('_'),
    'd': 'dienas_dienām_diena_dienas'.split('_'),
    'dd': 'dienas_dienām_diena_dienas'.split('_'),
    'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'y': 'gada_gadiem_gads_gadi'.split('_'),
    'yy': 'gada_gadiem_gads_gadi'.split('_') };

  /**
                                                 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
                                                 */
  function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
      // E.g. "21 minūte", "3 minūtes".
      return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
      // E.g. "21 minūtes" as in "pēc 21 minūtes".
      // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
      return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
  }
  function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
  }
  function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
  }

  var lv = moment.defineLocale('lv', {
    months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY.',
      LL: 'YYYY. [gada] D. MMMM',
      LLL: 'YYYY. [gada] D. MMMM, HH:mm',
      LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm' },

    calendar: {
      sameDay: '[Šodien pulksten] LT',
      nextDay: '[Rīt pulksten] LT',
      nextWeek: 'dddd [pulksten] LT',
      lastDay: '[Vakar pulksten] LT',
      lastWeek: '[Pagājušā] dddd [pulksten] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'pēc %s',
      past: 'pirms %s',
      s: relativeSeconds,
      ss: relativeTimeWithPlural,
      m: relativeTimeWithSingular,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithSingular,
      hh: relativeTimeWithPlural,
      d: relativeTimeWithSingular,
      dd: relativeTimeWithPlural,
      M: relativeTimeWithSingular,
      MM: relativeTimeWithPlural,
      y: relativeTimeWithSingular,
      yy: relativeTimeWithPlural },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lv;

});

/***/ }),
/* 207 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/me.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var translator = {
    words: { //Different grammatical cases
      ss: ['sekund', 'sekunda', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mjesec', 'mjeseca', 'mjeseci'],
      yy: ['godina', 'godine', 'godina'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
      }
    } };


  var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sjutra u] LT',

      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[juče u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[prošle] [nedjelje] [u] LT',
        '[prošlog] [ponedjeljka] [u] LT',
        '[prošlog] [utorka] [u] LT',
        '[prošle] [srijede] [u] LT',
        '[prošlog] [četvrtka] [u] LT',
        '[prošlog] [petka] [u] LT',
        '[prošle] [subote] [u] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mjesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return me;

});

/***/ }),
/* 208 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/mi.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var mi = moment.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [i] HH:mm',
      LLLL: 'dddd, D MMMM YYYY [i] HH:mm' },

    calendar: {
      sameDay: '[i teie mahana, i] LT',
      nextDay: '[apopo i] LT',
      nextWeek: 'dddd [i] LT',
      lastDay: '[inanahi i] LT',
      lastWeek: 'dddd [whakamutunga i] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'i roto i %s',
      past: '%s i mua',
      s: 'te hēkona ruarua',
      ss: '%d hēkona',
      m: 'he meneti',
      mm: '%d meneti',
      h: 'te haora',
      hh: '%d haora',
      d: 'he ra',
      dd: '%d ra',
      M: 'he marama',
      MM: '%d marama',
      y: 'he tau',
      yy: '%d tau' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return mi;

});

/***/ }),
/* 209 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/mk.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var mk = moment.defineLocale('mk', {
    months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[Денес во] LT',
      nextDay: '[Утре во] LT',
      nextWeek: '[Во] dddd [во] LT',
      lastDay: '[Вчера во] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[Изминатата] dddd [во] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[Изминатиот] dddd [во] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'после %s',
      past: 'пред %s',
      s: 'неколку секунди',
      ss: '%d секунди',
      m: 'минута',
      mm: '%d минути',
      h: 'час',
      hh: '%d часа',
      d: 'ден',
      dd: '%d дена',
      M: 'месец',
      MM: '%d месеци',
      y: 'година',
      yy: '%d години' },

    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
      last2Digits = number % 100;
      if (number === 0) {
        return number + '-ев';
      } else if (last2Digits === 0) {
        return number + '-ен';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-ти';
      } else if (lastDigit === 1) {
        return number + '-ви';
      } else if (lastDigit === 2) {
        return number + '-ри';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-ми';
      } else {
        return number + '-ти';
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return mk;

});

/***/ }),
/* 210 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ml.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ml = moment.defineLocale('ml', {
    months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm -നു',
      LTS: 'A h:mm:ss -നു',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm -നു',
      LLLL: 'dddd, D MMMM YYYY, A h:mm -നു' },

    calendar: {
      sameDay: '[ഇന്ന്] LT',
      nextDay: '[നാളെ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ഇന്നലെ] LT',
      lastWeek: '[കഴിഞ്ഞ] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s കഴിഞ്ഞ്',
      past: '%s മുൻപ്',
      s: 'അൽപ നിമിഷങ്ങൾ',
      ss: '%d സെക്കൻഡ്',
      m: 'ഒരു മിനിറ്റ്',
      mm: '%d മിനിറ്റ്',
      h: 'ഒരു മണിക്കൂർ',
      hh: '%d മണിക്കൂർ',
      d: 'ഒരു ദിവസം',
      dd: '%d ദിവസം',
      M: 'ഒരു മാസം',
      MM: '%d മാസം',
      y: 'ഒരു വർഷം',
      yy: '%d വർഷം' },

    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'രാത്രി' && hour >= 4 ||
      meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
      meridiem === 'വൈകുന്നേരം') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'രാത്രി';
      } else if (hour < 12) {
        return 'രാവിലെ';
      } else if (hour < 17) {
        return 'ഉച്ച കഴിഞ്ഞ്';
      } else if (hour < 20) {
        return 'വൈകുന്നേരം';
      } else {
        return 'രാത്രി';
      }
    } });


  return ml;

});

/***/ }),
/* 211 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/mn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function translate(number, withoutSuffix, key, isFuture) {
    switch (key) {
      case 's':
        return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
      case 'ss':
        return number + (withoutSuffix ? ' секунд' : ' секундын');
      case 'm':
      case 'mm':
        return number + (withoutSuffix ? ' минут' : ' минутын');
      case 'h':
      case 'hh':
        return number + (withoutSuffix ? ' цаг' : ' цагийн');
      case 'd':
      case 'dd':
        return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
      case 'M':
      case 'MM':
        return number + (withoutSuffix ? ' сар' : ' сарын');
      case 'y':
      case 'yy':
        return number + (withoutSuffix ? ' жил' : ' жилийн');
      default:
        return number;}

  }

  var mn = moment.defineLocale('mn', {
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY оны MMMMын D',
      LLL: 'YYYY оны MMMMын D HH:mm',
      LLLL: 'dddd, YYYY оны MMMMын D HH:mm' },

    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function isPM(input) {
      return input === 'ҮХ';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ҮӨ';
      } else {
        return 'ҮХ';
      }
    },
    calendar: {
      sameDay: '[Өнөөдөр] LT',
      nextDay: '[Маргааш] LT',
      nextWeek: '[Ирэх] dddd LT',
      lastDay: '[Өчигдөр] LT',
      lastWeek: '[Өнгөрсөн] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s дараа',
      past: '%s өмнө',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + ' өдөр';
        default:
          return number;}

    } });


  return mn;

});

/***/ }),
/* 212 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/mr.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०' },

  numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0' };


  function relativeTimeMr(number, withoutSuffix, string, isFuture)
  {
    var output = '';
    if (withoutSuffix) {
      switch (string) {
        case 's':output = 'काही सेकंद';break;
        case 'ss':output = '%d सेकंद';break;
        case 'm':output = 'एक मिनिट';break;
        case 'mm':output = '%d मिनिटे';break;
        case 'h':output = 'एक तास';break;
        case 'hh':output = '%d तास';break;
        case 'd':output = 'एक दिवस';break;
        case 'dd':output = '%d दिवस';break;
        case 'M':output = 'एक महिना';break;
        case 'MM':output = '%d महिने';break;
        case 'y':output = 'एक वर्ष';break;
        case 'yy':output = '%d वर्षे';break;}

    } else
    {
      switch (string) {
        case 's':output = 'काही सेकंदां';break;
        case 'ss':output = '%d सेकंदां';break;
        case 'm':output = 'एका मिनिटा';break;
        case 'mm':output = '%d मिनिटां';break;
        case 'h':output = 'एका तासा';break;
        case 'hh':output = '%d तासां';break;
        case 'd':output = 'एका दिवसा';break;
        case 'dd':output = '%d दिवसां';break;
        case 'M':output = 'एका महिन्या';break;
        case 'MM':output = '%d महिन्यां';break;
        case 'y':output = 'एका वर्षा';break;
        case 'yy':output = '%d वर्षां';break;}

    }
    return output.replace(/%d/i, number);
  }

  var mr = moment.defineLocale('mr', {
    months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm वाजता',
      LTS: 'A h:mm:ss वाजता',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm वाजता',
      LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता' },

    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[उद्या] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[काल] LT',
      lastWeek: '[मागील] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%sमध्ये',
      past: '%sपूर्वी',
      s: relativeTimeMr,
      ss: relativeTimeMr,
      m: relativeTimeMr,
      mm: relativeTimeMr,
      h: relativeTimeMr,
      hh: relativeTimeMr,
      d: relativeTimeMr,
      dd: relativeTimeMr,
      M: relativeTimeMr,
      MM: relativeTimeMr,
      y: relativeTimeMr,
      yy: relativeTimeMr },

    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'रात्री') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'सकाळी') {
        return hour;
      } else if (meridiem === 'दुपारी') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'सायंकाळी') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'रात्री';
      } else if (hour < 10) {
        return 'सकाळी';
      } else if (hour < 17) {
        return 'दुपारी';
      } else if (hour < 20) {
        return 'सायंकाळी';
      } else {
        return 'रात्री';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return mr;

});

/***/ }),
/* 213 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ms.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ms = moment.defineLocale('ms', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ms;

});

/***/ }),
/* 214 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ms-my.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var msMy = moment.defineLocale('ms-my', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return msMy;

});

/***/ }),
/* 215 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/mt.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var mt = moment.defineLocale('mt', {
    months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
    monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
    weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
    weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
    weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Illum fil-]LT',
      nextDay: '[Għada fil-]LT',
      nextWeek: 'dddd [fil-]LT',
      lastDay: '[Il-bieraħ fil-]LT',
      lastWeek: 'dddd [li għadda] [fil-]LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'f’ %s',
      past: '%s ilu',
      s: 'ftit sekondi',
      ss: '%d sekondi',
      m: 'minuta',
      mm: '%d minuti',
      h: 'siegħa',
      hh: '%d siegħat',
      d: 'ġurnata',
      dd: '%d ġranet',
      M: 'xahar',
      MM: '%d xhur',
      y: 'sena',
      yy: '%d sni' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return mt;

});

/***/ }),
/* 216 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/my.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '၁',
    '2': '၂',
    '3': '၃',
    '4': '၄',
    '5': '၅',
    '6': '၆',
    '7': '၇',
    '8': '၈',
    '9': '၉',
    '0': '၀' },
  numberMap = {
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
    '၀': '0' };


  var my = moment.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[ယနေ.] LT [မှာ]',
      nextDay: '[မနက်ဖြန်] LT [မှာ]',
      nextWeek: 'dddd LT [မှာ]',
      lastDay: '[မနေ.က] LT [မှာ]',
      lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
      sameElse: 'L' },

    relativeTime: {
      future: 'လာမည့် %s မှာ',
      past: 'လွန်ခဲ့သော %s က',
      s: 'စက္ကန်.အနည်းငယ်',
      ss: '%d စက္ကန့်',
      m: 'တစ်မိနစ်',
      mm: '%d မိနစ်',
      h: 'တစ်နာရီ',
      hh: '%d နာရီ',
      d: 'တစ်ရက်',
      dd: '%d ရက်',
      M: 'တစ်လ',
      MM: '%d လ',
      y: 'တစ်နှစ်',
      yy: '%d နှစ်' },

    preparse: function preparse(string) {
      return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return my;

});

/***/ }),
/* 217 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/nb.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var nb = moment.defineLocale('nb', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[forrige] dddd [kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'noen sekunder',
      ss: '%d sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dager',
      M: 'en måned',
      MM: '%d måneder',
      y: 'ett år',
      yy: '%d år' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nb;

});

/***/ }),
/* 218 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ne.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०' },

  numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0' };


  var ne = moment.defineLocale('ne', {
    months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact: true,
    weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'Aको h:mm बजे',
      LTS: 'Aको h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, Aको h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे' },

    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'राति') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'बिहान') {
        return hour;
      } else if (meridiem === 'दिउँसो') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'साँझ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 3) {
        return 'राति';
      } else if (hour < 12) {
        return 'बिहान';
      } else if (hour < 16) {
        return 'दिउँसो';
      } else if (hour < 20) {
        return 'साँझ';
      } else {
        return 'राति';
      }
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[भोलि] LT',
      nextWeek: '[आउँदो] dddd[,] LT',
      lastDay: '[हिजो] LT',
      lastWeek: '[गएको] dddd[,] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%sमा',
      past: '%s अगाडि',
      s: 'केही क्षण',
      ss: '%d सेकेण्ड',
      m: 'एक मिनेट',
      mm: '%d मिनेट',
      h: 'एक घण्टा',
      hh: '%d घण्टा',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महिना',
      MM: '%d महिना',
      y: 'एक बर्ष',
      yy: '%d बर्ष' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return ne;

});

/***/ }),
/* 219 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/nl.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
  monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

  var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
  var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

  var nl = moment.defineLocale('nl', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nl;

});

/***/ }),
/* 220 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/nl-be.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
  monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

  var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
  var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

  var nlBe = moment.defineLocale('nl-be', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nlBe;

});

/***/ }),
/* 221 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/nn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var nn = moment.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
    weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[I dag klokka] LT',
      nextDay: '[I morgon klokka] LT',
      nextWeek: 'dddd [klokka] LT',
      lastDay: '[I går klokka] LT',
      lastWeek: '[Føregåande] dddd [klokka] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s sidan',
      s: 'nokre sekund',
      ss: '%d sekund',
      m: 'eit minutt',
      mm: '%d minutt',
      h: 'ein time',
      hh: '%d timar',
      d: 'ein dag',
      dd: '%d dagar',
      M: 'ein månad',
      MM: '%d månader',
      y: 'eit år',
      yy: '%d år' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nn;

});

/***/ }),
/* 222 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/pa-in.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '੧',
    '2': '੨',
    '3': '੩',
    '4': '੪',
    '5': '੫',
    '6': '੬',
    '7': '੭',
    '8': '੮',
    '9': '੯',
    '0': '੦' },

  numberMap = {
    '੧': '1',
    '੨': '2',
    '੩': '3',
    '੪': '4',
    '੫': '5',
    '੬': '6',
    '੭': '7',
    '੮': '8',
    '੯': '9',
    '੦': '0' };


  var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
    months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ਵਜੇ',
      LTS: 'A h:mm:ss ਵਜੇ',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ' },

    calendar: {
      sameDay: '[ਅਜ] LT',
      nextDay: '[ਕਲ] LT',
      nextWeek: '[ਅਗਲਾ] dddd, LT',
      lastDay: '[ਕਲ] LT',
      lastWeek: '[ਪਿਛਲੇ] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ਵਿੱਚ',
      past: '%s ਪਿਛਲੇ',
      s: 'ਕੁਝ ਸਕਿੰਟ',
      ss: '%d ਸਕਿੰਟ',
      m: 'ਇਕ ਮਿੰਟ',
      mm: '%d ਮਿੰਟ',
      h: 'ਇੱਕ ਘੰਟਾ',
      hh: '%d ਘੰਟੇ',
      d: 'ਇੱਕ ਦਿਨ',
      dd: '%d ਦਿਨ',
      M: 'ਇੱਕ ਮਹੀਨਾ',
      MM: '%d ਮਹੀਨੇ',
      y: 'ਇੱਕ ਸਾਲ',
      yy: '%d ਸਾਲ' },

    preparse: function preparse(string) {
      return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ਰਾਤ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ਸਵੇਰ') {
        return hour;
      } else if (meridiem === 'ਦੁਪਹਿਰ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ਸ਼ਾਮ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ਰਾਤ';
      } else if (hour < 10) {
        return 'ਸਵੇਰ';
      } else if (hour < 17) {
        return 'ਦੁਪਹਿਰ';
      } else if (hour < 20) {
        return 'ਸ਼ਾਮ';
      } else {
        return 'ਰਾਤ';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return paIn;

});

/***/ }),
/* 223 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/pl.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
  monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
  function plural(n) {
    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
  }
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        return result + (plural(number) ? 'sekundy' : 'sekund');
      case 'm':
        return withoutSuffix ? 'minuta' : 'minutę';
      case 'mm':
        return result + (plural(number) ? 'minuty' : 'minut');
      case 'h':
        return withoutSuffix ? 'godzina' : 'godzinę';
      case 'hh':
        return result + (plural(number) ? 'godziny' : 'godzin');
      case 'MM':
        return result + (plural(number) ? 'miesiące' : 'miesięcy');
      case 'yy':
        return result + (plural(number) ? 'lata' : 'lat');}

  }

  var pl = moment.defineLocale('pl', {
    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return monthsNominative;
      } else if (format === '') {
        // Hack: if format empty we know this is used to generate
        // RegExp by moment. Give then back both valid forms of months
        // in RegExp ready format.
        return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
      } else if (/D MMMM/.test(format)) {
        return monthsSubjective[momentToFormat.month()];
      } else {
        return monthsNominative[momentToFormat.month()];
      }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Dziś o] LT',
      nextDay: '[Jutro o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[W niedzielę o] LT';

          case 2:
            return '[We wtorek o] LT';

          case 3:
            return '[W środę o] LT';

          case 6:
            return '[W sobotę o] LT';

          default:
            return '[W] dddd [o] LT';}

      },
      lastDay: '[Wczoraj o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[W zeszłą niedzielę o] LT';
          case 3:
            return '[W zeszłą środę o] LT';
          case 6:
            return '[W zeszłą sobotę o] LT';
          default:
            return '[W zeszły] dddd [o] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: '%s temu',
      s: 'kilka sekund',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: '1 dzień',
      dd: '%d dni',
      M: 'miesiąc',
      MM: translate,
      y: 'rok',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return pl;

});

/***/ }),
/* 224 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/pt.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var pt = moment.defineLocale('pt', {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm' },

    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ?
        '[Último] dddd [às] LT' : // Saturday + Sunday
        '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return pt;

});

/***/ }),
/* 225 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/pt-br.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ptBr = moment.defineLocale('pt-br', {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm' },

    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ?
        '[Último] dddd [às] LT' : // Saturday + Sunday
        '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº' });


  return ptBr;

});

/***/ }),
/* 226 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ro.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      'ss': 'secunde',
      'mm': 'minute',
      'hh': 'ore',
      'dd': 'zile',
      'MM': 'luni',
      'yy': 'ani' },

    separator = ' ';
    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }

  var ro = moment.defineLocale('ro', {
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[azi la] LT',
      nextDay: '[mâine la] LT',
      nextWeek: 'dddd [la] LT',
      lastDay: '[ieri la] LT',
      lastWeek: '[fosta] dddd [la] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'peste %s',
      past: '%s în urmă',
      s: 'câteva secunde',
      ss: relativeTimeWithPlural,
      m: 'un minut',
      mm: relativeTimeWithPlural,
      h: 'o oră',
      hh: relativeTimeWithPlural,
      d: 'o zi',
      dd: relativeTimeWithPlural,
      M: 'o lună',
      MM: relativeTimeWithPlural,
      y: 'un an',
      yy: relativeTimeWithPlural },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ro;

});

/***/ }),
/* 227 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ru.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
      'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
      'hh': 'час_часа_часов',
      'dd': 'день_дня_дней',
      'MM': 'месяц_месяца_месяцев',
      'yy': 'год_года_лет' };

    if (key === 'm') {
      return withoutSuffix ? 'минута' : 'минуту';
    } else
    {
      return number + ' ' + plural(format[key], +number);
    }
  }
  var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

  // http://new.gramota.ru/spravka/rules/139-prop : § 103
  // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
  // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
  var ru = moment.defineLocale('ru', {
    months: {
      format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
      standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_') },

    monthsShort: {
      // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
      format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
      standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_') },

    weekdays: {
      standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
      format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ },

    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., H:mm',
      LLLL: 'dddd, D MMMM YYYY г., H:mm' },

    calendar: {
      sameDay: '[Сегодня, в] LT',
      nextDay: '[Завтра, в] LT',
      lastDay: '[Вчера, в] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В следующее] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В следующий] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В следующую] dddd, [в] LT';}

        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      lastWeek: function lastWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В прошлое] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В прошлый] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В прошлую] dddd, [в] LT';}

        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'через %s',
      past: '%s назад',
      s: 'несколько секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'час',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'месяц',
      MM: relativeTimeWithPlural,
      y: 'год',
      yy: relativeTimeWithPlural },

    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function isPM(input) {
      return /^(дня|вечера)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночи';
      } else if (hour < 12) {
        return 'утра';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечера';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
          return number + '-й';
        case 'D':
          return number + '-го';
        case 'w':
        case 'W':
          return number + '-я';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ru;

});

/***/ }),
/* 228 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sd.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = [
  'جنوري',
  'فيبروري',
  'مارچ',
  'اپريل',
  'مئي',
  'جون',
  'جولاءِ',
  'آگسٽ',
  'سيپٽمبر',
  'آڪٽوبر',
  'نومبر',
  'ڊسمبر'];

  var days = [
  'آچر',
  'سومر',
  'اڱارو',
  'اربع',
  'خميس',
  'جمع',
  'ڇنڇر'];


  var sd = moment.defineLocale('sd', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm' },

    meridiemParse: /صبح|شام/,
    isPM: function isPM(input) {
      return 'شام' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[اڄ] LT',
      nextDay: '[سڀاڻي] LT',
      nextWeek: 'dddd [اڳين هفتي تي] LT',
      lastDay: '[ڪالهه] LT',
      lastWeek: '[گزريل هفتي] dddd [تي] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s پوء',
      past: '%s اڳ',
      s: 'چند سيڪنڊ',
      ss: '%d سيڪنڊ',
      m: 'هڪ منٽ',
      mm: '%d منٽ',
      h: 'هڪ ڪلاڪ',
      hh: '%d ڪلاڪ',
      d: 'هڪ ڏينهن',
      dd: '%d ڏينهن',
      M: 'هڪ مهينو',
      MM: '%d مهينا',
      y: 'هڪ سال',
      yy: '%d سال' },

    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sd;

});

/***/ }),
/* 229 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/se.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var se = moment.defineLocale('se', {
    months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'MMMM D. [b.] YYYY',
      LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
      LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm' },

    calendar: {
      sameDay: '[otne ti] LT',
      nextDay: '[ihttin ti] LT',
      nextWeek: 'dddd [ti] LT',
      lastDay: '[ikte ti] LT',
      lastWeek: '[ovddit] dddd [ti] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s geažes',
      past: 'maŋit %s',
      s: 'moadde sekunddat',
      ss: '%d sekunddat',
      m: 'okta minuhta',
      mm: '%d minuhtat',
      h: 'okta diimmu',
      hh: '%d diimmut',
      d: 'okta beaivi',
      dd: '%d beaivvit',
      M: 'okta mánnu',
      MM: '%d mánut',
      y: 'okta jahki',
      yy: '%d jagit' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return se;

});

/***/ }),
/* 230 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/si.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  /*jshint -W100*/
  var si = moment.defineLocale('si', {
    months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'a h:mm',
      LTS: 'a h:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY MMMM D',
      LLL: 'YYYY MMMM D, a h:mm',
      LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss' },

    calendar: {
      sameDay: '[අද] LT[ට]',
      nextDay: '[හෙට] LT[ට]',
      nextWeek: 'dddd LT[ට]',
      lastDay: '[ඊයේ] LT[ට]',
      lastWeek: '[පසුගිය] dddd LT[ට]',
      sameElse: 'L' },

    relativeTime: {
      future: '%sකින්',
      past: '%sකට පෙර',
      s: 'තත්පර කිහිපය',
      ss: 'තත්පර %d',
      m: 'මිනිත්තුව',
      mm: 'මිනිත්තු %d',
      h: 'පැය',
      hh: 'පැය %d',
      d: 'දිනය',
      dd: 'දින %d',
      M: 'මාසය',
      MM: 'මාස %d',
      y: 'වසර',
      yy: 'වසර %d' },

    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
    ordinal: function ordinal(number) {
      return number + ' වැනි';
    },
    meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM: function isPM(input) {
      return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'ප.ව.' : 'පස් වරු';
      } else {
        return isLower ? 'පෙ.ව.' : 'පෙර වරු';
      }
    } });


  return si;

});

/***/ }),
/* 231 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sk.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
  monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
  function plural(n) {
    return n > 1 && n < 5;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's': // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
      case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekúnd');
        } else {
          return result + 'sekundami';
        }
        break;
      case 'm': // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minúty' : 'minút');
        } else {
          return result + 'minútami';
        }
        break;
      case 'h': // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodín');
        } else {
          return result + 'hodinami';
        }
        break;
      case 'd': // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'deň' : 'dňom';
      case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dni' : 'dní');
        } else {
          return result + 'dňami';
        }
        break;
      case 'M': // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
      case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'mesiace' : 'mesiacov');
        } else {
          return result + 'mesiacmi';
        }
        break;
      case 'y': // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokom';
      case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'rokov');
        } else {
          return result + 'rokmi';
        }
        break;}

  }

  var sk = moment.defineLocale('sk', {
    months: months,
    monthsShort: monthsShort,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[dnes o] LT',
      nextDay: '[zajtra o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v nedeľu o] LT';
          case 1:
          case 2:
            return '[v] dddd [o] LT';
          case 3:
            return '[v stredu o] LT';
          case 4:
            return '[vo štvrtok o] LT';
          case 5:
            return '[v piatok o] LT';
          case 6:
            return '[v sobotu o] LT';}

      },
      lastDay: '[včera o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minulú nedeľu o] LT';
          case 1:
          case 2:
            return '[minulý] dddd [o] LT';
          case 3:
            return '[minulú stredu o] LT';
          case 4:
          case 5:
            return '[minulý] dddd [o] LT';
          case 6:
            return '[minulú sobotu o] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'pred %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sk;

});

/***/ }),
/* 232 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sl.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
      case 'ss':
        if (number === 1) {
          result += withoutSuffix ? 'sekundo' : 'sekundi';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
        } else {
          result += 'sekund';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'ena minuta' : 'eno minuto';
      case 'mm':
        if (number === 1) {
          result += withoutSuffix ? 'minuta' : 'minuto';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'minute' : 'minutami';
        } else {
          result += withoutSuffix || isFuture ? 'minut' : 'minutami';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'ena ura' : 'eno uro';
      case 'hh':
        if (number === 1) {
          result += withoutSuffix ? 'ura' : 'uro';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'uri' : 'urama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'ure' : 'urami';
        } else {
          result += withoutSuffix || isFuture ? 'ur' : 'urami';
        }
        return result;
      case 'd':
        return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
      case 'dd':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'dan' : 'dnem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
        } else {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
        }
        return result;
      case 'M':
        return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
      case 'MM':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
        } else {
          result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
        }
        return result;
      case 'y':
        return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
      case 'yy':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'leto' : 'letom';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'leti' : 'letoma';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'leta' : 'leti';
        } else {
          result += withoutSuffix || isFuture ? 'let' : 'leti';
        }
        return result;}

  }

  var sl = moment.defineLocale('sl', {
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danes ob] LT',
      nextDay: '[jutri ob] LT',

      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v] [nedeljo] [ob] LT';
          case 3:
            return '[v] [sredo] [ob] LT';
          case 6:
            return '[v] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[v] dddd [ob] LT';}

      },
      lastDay: '[včeraj ob] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[prejšnjo] [nedeljo] [ob] LT';
          case 3:
            return '[prejšnjo] [sredo] [ob] LT';
          case 6:
            return '[prejšnjo] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prejšnji] dddd [ob] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'čez %s',
      past: 'pred %s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sl;

});

/***/ }),
/* 233 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sq.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var sq = moment.defineLocale('sq', {
    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /PD|MD/,
    isPM: function isPM(input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Sot në] LT',
      nextDay: '[Nesër në] LT',
      nextWeek: 'dddd [në] LT',
      lastDay: '[Dje në] LT',
      lastWeek: 'dddd [e kaluar në] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'në %s',
      past: '%s më parë',
      s: 'disa sekonda',
      ss: '%d sekonda',
      m: 'një minutë',
      mm: '%d minuta',
      h: 'një orë',
      hh: '%d orë',
      d: 'një ditë',
      dd: '%d ditë',
      M: 'një muaj',
      MM: '%d muaj',
      y: 'një vit',
      yy: '%d vite' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sq;

});

/***/ }),
/* 234 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sr.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var translator = {
    words: { //Different grammatical cases
      ss: ['sekunda', 'sekunde', 'sekundi'],
      m: ['jedan minut', 'jedne minute'],
      mm: ['minut', 'minute', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mesec', 'meseca', 'meseci'],
      yy: ['godina', 'godine', 'godina'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
      }
    } };


  var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedelju] [u] LT';
          case 3:
            return '[u] [sredu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[juče u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[prošle] [nedelje] [u] LT',
        '[prošlog] [ponedeljka] [u] LT',
        '[prošlog] [utorka] [u] LT',
        '[prošle] [srede] [u] LT',
        '[prošlog] [četvrtka] [u] LT',
        '[prošlog] [petka] [u] LT',
        '[prošle] [subote] [u] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'pre %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sr;

});

/***/ }),
/* 235 */
/*!****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sr-cyrl.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var translator = {
    words: { //Different grammatical cases
      ss: ['секунда', 'секунде', 'секунди'],
      m: ['један минут', 'једне минуте'],
      mm: ['минут', 'минуте', 'минута'],
      h: ['један сат', 'једног сата'],
      hh: ['сат', 'сата', 'сати'],
      dd: ['дан', 'дана', 'дана'],
      MM: ['месец', 'месеца', 'месеци'],
      yy: ['година', 'године', 'година'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
      }
    } };


  var srCyrl = moment.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[данас у] LT',
      nextDay: '[сутра у] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[у] [недељу] [у] LT';
          case 3:
            return '[у] [среду] [у] LT';
          case 6:
            return '[у] [суботу] [у] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[у] dddd [у] LT';}

      },
      lastDay: '[јуче у] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[прошле] [недеље] [у] LT',
        '[прошлог] [понедељка] [у] LT',
        '[прошлог] [уторка] [у] LT',
        '[прошле] [среде] [у] LT',
        '[прошлог] [четвртка] [у] LT',
        '[прошлог] [петка] [у] LT',
        '[прошле] [суботе] [у] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'за %s',
      past: 'пре %s',
      s: 'неколико секунди',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'дан',
      dd: translator.translate,
      M: 'месец',
      MM: translator.translate,
      y: 'годину',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return srCyrl;

});

/***/ }),
/* 236 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ss.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ss = moment.defineLocale('ss', {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Namuhla nga] LT',
      nextDay: '[Kusasa nga] LT',
      nextWeek: 'dddd [nga] LT',
      lastDay: '[Itolo nga] LT',
      lastWeek: 'dddd [leliphelile] [nga] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'nga %s',
      past: 'wenteka nga %s',
      s: 'emizuzwana lomcane',
      ss: '%d mzuzwana',
      m: 'umzuzu',
      mm: '%d emizuzu',
      h: 'lihora',
      hh: '%d emahora',
      d: 'lilanga',
      dd: '%d emalanga',
      M: 'inyanga',
      MM: '%d tinyanga',
      y: 'umnyaka',
      yy: '%d iminyaka' },

    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'ekuseni';
      } else if (hours < 15) {
        return 'emini';
      } else if (hours < 19) {
        return 'entsambama';
      } else {
        return 'ebusuku';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ekuseni') {
        return hour;
      } else if (meridiem === 'emini') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
        if (hour === 0) {
          return 0;
        }
        return hour + 12;
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: '%d',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ss;

});

/***/ }),
/* 237 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sv.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var sv = moment.defineLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Idag] LT',
      nextDay: '[Imorgon] LT',
      lastDay: '[Igår] LT',
      nextWeek: '[På] dddd LT',
      lastWeek: '[I] dddd[s] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: 'för %s sedan',
      s: 'några sekunder',
      ss: '%d sekunder',
      m: 'en minut',
      mm: '%d minuter',
      h: 'en timme',
      hh: '%d timmar',
      d: 'en dag',
      dd: '%d dagar',
      M: 'en månad',
      MM: '%d månader',
      y: 'ett år',
      yy: '%d år' },

    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'e' :
      b === 1 ? 'a' :
      b === 2 ? 'a' :
      b === 3 ? 'e' : 'e';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sv;

});

/***/ }),
/* 238 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/sw.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var sw = moment.defineLocale('sw', {
    months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[leo saa] LT',
      nextDay: '[kesho saa] LT',
      nextWeek: '[wiki ijayo] dddd [saat] LT',
      lastDay: '[jana] LT',
      lastWeek: '[wiki iliyopita] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s baadaye',
      past: 'tokea %s',
      s: 'hivi punde',
      ss: 'sekunde %d',
      m: 'dakika moja',
      mm: 'dakika %d',
      h: 'saa limoja',
      hh: 'masaa %d',
      d: 'siku moja',
      dd: 'masiku %d',
      M: 'mwezi mmoja',
      MM: 'miezi %d',
      y: 'mwaka mmoja',
      yy: 'miaka %d' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sw;

});

/***/ }),
/* 239 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ta.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var symbolMap = {
    '1': '௧',
    '2': '௨',
    '3': '௩',
    '4': '௪',
    '5': '௫',
    '6': '௬',
    '7': '௭',
    '8': '௮',
    '9': '௯',
    '0': '௦' },
  numberMap = {
    '௧': '1',
    '௨': '2',
    '௩': '3',
    '௪': '4',
    '௫': '5',
    '௬': '6',
    '௭': '7',
    '௮': '8',
    '௯': '9',
    '௦': '0' };


  var ta = moment.defineLocale('ta', {
    months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, HH:mm',
      LLLL: 'dddd, D MMMM YYYY, HH:mm' },

    calendar: {
      sameDay: '[இன்று] LT',
      nextDay: '[நாளை] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[நேற்று] LT',
      lastWeek: '[கடந்த வாரம்] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s இல்',
      past: '%s முன்',
      s: 'ஒரு சில விநாடிகள்',
      ss: '%d விநாடிகள்',
      m: 'ஒரு நிமிடம்',
      mm: '%d நிமிடங்கள்',
      h: 'ஒரு மணி நேரம்',
      hh: '%d மணி நேரம்',
      d: 'ஒரு நாள்',
      dd: '%d நாட்கள்',
      M: 'ஒரு மாதம்',
      MM: '%d மாதங்கள்',
      y: 'ஒரு வருடம்',
      yy: '%d ஆண்டுகள்' },

    dayOfMonthOrdinalParse: /\d{1,2}வது/,
    ordinal: function ordinal(number) {
      return number + 'வது';
    },
    preparse: function preparse(string) {
      return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 2) {
        return ' யாமம்';
      } else if (hour < 6) {
        return ' வைகறை'; // வைகறை
      } else if (hour < 10) {
        return ' காலை'; // காலை
      } else if (hour < 14) {
        return ' நண்பகல்'; // நண்பகல்
      } else if (hour < 18) {
        return ' எற்பாடு'; // எற்பாடு
      } else if (hour < 22) {
        return ' மாலை'; // மாலை
      } else {
        return ' யாமம்';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'யாமம்') {
        return hour < 2 ? hour : hour + 12;
      } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
        return hour;
      } else if (meridiem === 'நண்பகல்') {
        return hour >= 10 ? hour : hour + 12;
      } else {
        return hour + 12;
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return ta;

});

/***/ }),
/* 240 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/te.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var te = moment.defineLocale('te', {
    months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[నేడు] LT',
      nextDay: '[రేపు] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[నిన్న] LT',
      lastWeek: '[గత] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s లో',
      past: '%s క్రితం',
      s: 'కొన్ని క్షణాలు',
      ss: '%d సెకన్లు',
      m: 'ఒక నిమిషం',
      mm: '%d నిమిషాలు',
      h: 'ఒక గంట',
      hh: '%d గంటలు',
      d: 'ఒక రోజు',
      dd: '%d రోజులు',
      M: 'ఒక నెల',
      MM: '%d నెలలు',
      y: 'ఒక సంవత్సరం',
      yy: '%d సంవత్సరాలు' },

    dayOfMonthOrdinalParse: /\d{1,2}వ/,
    ordinal: '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'రాత్రి') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ఉదయం') {
        return hour;
      } else if (meridiem === 'మధ్యాహ్నం') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'సాయంత్రం') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'రాత్రి';
      } else if (hour < 10) {
        return 'ఉదయం';
      } else if (hour < 17) {
        return 'మధ్యాహ్నం';
      } else if (hour < 20) {
        return 'సాయంత్రం';
      } else {
        return 'రాత్రి';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return te;

});

/***/ }),
/* 241 */
/*!************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tet.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var tet = moment.defineLocale('tet', {
    months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
    weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
    weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Ohin iha] LT',
      nextDay: '[Aban iha] LT',
      nextWeek: 'dddd [iha] LT',
      lastDay: '[Horiseik iha] LT',
      lastWeek: 'dddd [semana kotuk] [iha] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'iha %s',
      past: '%s liuba',
      s: 'minutu balun',
      ss: 'minutu %d',
      m: 'minutu ida',
      mm: 'minutu %d',
      h: 'oras ida',
      hh: 'oras %d',
      d: 'loron ida',
      dd: 'loron %d',
      M: 'fulan ida',
      MM: 'fulan %d',
      y: 'tinan ida',
      yy: 'tinan %d' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tet;

});

/***/ }),
/* 242 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tg.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var suffixes = {
    0: '-ум',
    1: '-ум',
    2: '-юм',
    3: '-юм',
    4: '-ум',
    5: '-ум',
    6: '-ум',
    7: '-ум',
    8: '-ум',
    9: '-ум',
    10: '-ум',
    12: '-ум',
    13: '-ум',
    20: '-ум',
    30: '-юм',
    40: '-ум',
    50: '-ум',
    60: '-ум',
    70: '-ум',
    80: '-ум',
    90: '-ум',
    100: '-ум' };


  var tg = moment.defineLocale('tg', {
    months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
    weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
    weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Имрӯз соати] LT',
      nextDay: '[Пагоҳ соати] LT',
      lastDay: '[Дирӯз соати] LT',
      nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
      lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'баъди %s',
      past: '%s пеш',
      s: 'якчанд сония',
      m: 'як дақиқа',
      mm: '%d дақиқа',
      h: 'як соат',
      hh: '%d соат',
      d: 'як рӯз',
      dd: '%d рӯз',
      M: 'як моҳ',
      MM: '%d моҳ',
      y: 'як сол',
      yy: '%d сол' },

    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'шаб') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'субҳ') {
        return hour;
      } else if (meridiem === 'рӯз') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'бегоҳ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'шаб';
      } else if (hour < 11) {
        return 'субҳ';
      } else if (hour < 16) {
        return 'рӯз';
      } else if (hour < 19) {
        return 'бегоҳ';
      } else {
        return 'шаб';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1th is the first week of the year.
    } });


  return tg;

});

/***/ }),
/* 243 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/th.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var th = moment.defineLocale('th', {
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY เวลา H:mm',
      LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm' },

    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function isPM(input) {
      return input === 'หลังเที่ยง';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ก่อนเที่ยง';
      } else {
        return 'หลังเที่ยง';
      }
    },
    calendar: {
      sameDay: '[วันนี้ เวลา] LT',
      nextDay: '[พรุ่งนี้ เวลา] LT',
      nextWeek: 'dddd[หน้า เวลา] LT',
      lastDay: '[เมื่อวานนี้ เวลา] LT',
      lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'อีก %s',
      past: '%sที่แล้ว',
      s: 'ไม่กี่วินาที',
      ss: '%d วินาที',
      m: '1 นาที',
      mm: '%d นาที',
      h: '1 ชั่วโมง',
      hh: '%d ชั่วโมง',
      d: '1 วัน',
      dd: '%d วัน',
      M: '1 เดือน',
      MM: '%d เดือน',
      y: '1 ปี',
      yy: '%d ปี' } });



  return th;

});

/***/ }),
/* 244 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tl-ph.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var tlPh = moment.defineLocale('tl-ph', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm' },

    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L' },

    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon' },

    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tlPh;

});

/***/ }),
/* 245 */
/*!************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tlh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

  function translateFuture(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ?
    time.slice(0, -3) + 'leS' :
    output.indexOf('jar') !== -1 ?
    time.slice(0, -3) + 'waQ' :
    output.indexOf('DIS') !== -1 ?
    time.slice(0, -3) + 'nem' :
    time + ' pIq';
    return time;
  }

  function translatePast(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ?
    time.slice(0, -3) + 'Hu’' :
    output.indexOf('jar') !== -1 ?
    time.slice(0, -3) + 'wen' :
    output.indexOf('DIS') !== -1 ?
    time.slice(0, -3) + 'ben' :
    time + ' ret';
    return time;
  }

  function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
      case 'ss':
        return numberNoun + ' lup';
      case 'mm':
        return numberNoun + ' tup';
      case 'hh':
        return numberNoun + ' rep';
      case 'dd':
        return numberNoun + ' jaj';
      case 'MM':
        return numberNoun + ' jar';
      case 'yy':
        return numberNoun + ' DIS';}

  }

  function numberAsNoun(number) {
    var hundred = Math.floor(number % 1000 / 100),
    ten = Math.floor(number % 100 / 10),
    one = number % 10,
    word = '';
    if (hundred > 0) {
      word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[one];
    }
    return word === '' ? 'pagh' : word;
  }

  var tlh = moment.defineLocale('tlh', {
    months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact: true,
    weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[DaHjaj] LT',
      nextDay: '[wa’leS] LT',
      nextWeek: 'LLL',
      lastDay: '[wa’Hu’] LT',
      lastWeek: 'LLL',
      sameElse: 'L' },

    relativeTime: {
      future: translateFuture,
      past: translatePast,
      s: 'puS lup',
      ss: translate,
      m: 'wa’ tup',
      mm: translate,
      h: 'wa’ rep',
      hh: translate,
      d: 'wa’ jaj',
      dd: translate,
      M: 'wa’ jar',
      MM: translate,
      y: 'wa’ DIS',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tlh;

});

/***/ }),
/* 246 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tr.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';

  var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı' };


  var tr = moment.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[yarın saat] LT',
      nextWeek: '[gelecek] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s sonra',
      past: '%s önce',
      s: 'birkaç saniye',
      ss: '%d saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir yıl',
      yy: '%d yıl' },

    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {// special case for zero
            return number + '\'ıncı';
          }
          var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return tr;

});

/***/ }),
/* 247 */
/*!************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tzl.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
  // This is currently too difficult (maybe even impossible) to add.
  var tzl = moment.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM [dallas] YYYY',
      LLL: 'D. MMMM [dallas] YYYY HH.mm',
      LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm' },

    meridiemParse: /d\'o|d\'a/i,
    isPM: function isPM(input) {
      return 'd\'o' === input.toLowerCase();
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'd\'o' : 'D\'O';
      } else {
        return isLower ? 'd\'a' : 'D\'A';
      }
    },
    calendar: {
      sameDay: '[oxhi à] LT',
      nextDay: '[demà à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[ieiri à] LT',
      lastWeek: '[sür el] dddd [lasteu à] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'osprei %s',
      past: 'ja%s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      's': ['viensas secunds', '\'iensas secunds'],
      'ss': [number + ' secunds', '' + number + ' secunds'],
      'm': ['\'n míut', '\'iens míut'],
      'mm': [number + ' míuts', '' + number + ' míuts'],
      'h': ['\'n þora', '\'iensa þora'],
      'hh': [number + ' þoras', '' + number + ' þoras'],
      'd': ['\'n ziua', '\'iensa ziua'],
      'dd': [number + ' ziuas', '' + number + ' ziuas'],
      'M': ['\'n mes', '\'iens mes'],
      'MM': [number + ' mesen', '' + number + ' mesen'],
      'y': ['\'n ar', '\'iens ar'],
      'yy': [number + ' ars', '' + number + ' ars'] };

    return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
  }

  return tzl;

});

/***/ }),
/* 248 */
/*!************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tzm.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var tzm = moment.defineLocale('tzm', {
    months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
      nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
      nextWeek: 'dddd [ⴴ] LT',
      lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
      lastWeek: 'dddd [ⴴ] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
      past: 'ⵢⴰⵏ %s',
      s: 'ⵉⵎⵉⴽ',
      ss: '%d ⵉⵎⵉⴽ',
      m: 'ⵎⵉⵏⵓⴺ',
      mm: '%d ⵎⵉⵏⵓⴺ',
      h: 'ⵙⴰⵄⴰ',
      hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
      d: 'ⴰⵙⵙ',
      dd: '%d oⵙⵙⴰⵏ',
      M: 'ⴰⵢoⵓⵔ',
      MM: '%d ⵉⵢⵢⵉⵔⵏ',
      y: 'ⴰⵙⴳⴰⵙ',
      yy: '%d ⵉⵙⴳⴰⵙⵏ' },

    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return tzm;

});

/***/ }),
/* 249 */
/*!*****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/tzm-latn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var tzmLatn = moment.defineLocale('tzm-latn', {
    months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[asdkh g] LT',
      nextDay: '[aska g] LT',
      nextWeek: 'dddd [g] LT',
      lastDay: '[assant g] LT',
      lastWeek: 'dddd [g] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dadkh s yan %s',
      past: 'yan %s',
      s: 'imik',
      ss: '%d imik',
      m: 'minuḍ',
      mm: '%d minuḍ',
      h: 'saɛa',
      hh: '%d tassaɛin',
      d: 'ass',
      dd: '%d ossan',
      M: 'ayowr',
      MM: '%d iyyirn',
      y: 'asgas',
      yy: '%d isgasn' },

    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return tzmLatn;

});

/***/ }),
/* 250 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ug-cn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js language configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var ugCn = moment.defineLocale('ug-cn', {
    months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
    '_'),

    monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
    '_'),

    weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
    '_'),

    weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
      LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
      LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm' },

    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (
      meridiem === 'يېرىم كېچە' ||
      meridiem === 'سەھەر' ||
      meridiem === 'چۈشتىن بۇرۇن')
      {
        return hour;
      } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
        return hour + 12;
      } else {
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return 'يېرىم كېچە';
      } else if (hm < 900) {
        return 'سەھەر';
      } else if (hm < 1130) {
        return 'چۈشتىن بۇرۇن';
      } else if (hm < 1230) {
        return 'چۈش';
      } else if (hm < 1800) {
        return 'چۈشتىن كېيىن';
      } else {
        return 'كەچ';
      }
    },
    calendar: {
      sameDay: '[بۈگۈن سائەت] LT',
      nextDay: '[ئەتە سائەت] LT',
      nextWeek: '[كېلەركى] dddd [سائەت] LT',
      lastDay: '[تۆنۈگۈن] LT',
      lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s كېيىن',
      past: '%s بۇرۇن',
      s: 'نەچچە سېكونت',
      ss: '%d سېكونت',
      m: 'بىر مىنۇت',
      mm: '%d مىنۇت',
      h: 'بىر سائەت',
      hh: '%d سائەت',
      d: 'بىر كۈن',
      dd: '%d كۈن',
      M: 'بىر ئاي',
      MM: '%d ئاي',
      y: 'بىر يىل',
      yy: '%d يىل' },


    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '-كۈنى';
        case 'w':
        case 'W':
          return number + '-ھەپتە';
        default:
          return number;}

    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    } });


  return ugCn;

});

/***/ }),
/* 251 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/uk.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
      'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
      'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
      'dd': 'день_дні_днів',
      'MM': 'місяць_місяці_місяців',
      'yy': 'рік_роки_років' };

    if (key === 'm') {
      return withoutSuffix ? 'хвилина' : 'хвилину';
    } else
    if (key === 'h') {
      return withoutSuffix ? 'година' : 'годину';
    } else
    {
      return number + ' ' + plural(format[key], +number);
    }
  }
  function weekdaysCaseReplace(m, format) {
    var weekdays = {
      'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
      'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
      'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_') };


    if (m === true) {
      return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
    }
    if (!m) {
      return weekdays['nominative'];
    }

    var nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ?
    'accusative' :
    /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ?
    'genitive' :
    'nominative';
    return weekdays[nounCase][m.day()];
  }
  function processHoursFunction(str) {
    return function () {
      return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
  }

  var uk = moment.defineLocale('uk', {
    months: {
      'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
      'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_') },

    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY р.',
      LLL: 'D MMMM YYYY р., HH:mm',
      LLLL: 'dddd, D MMMM YYYY р., HH:mm' },

    calendar: {
      sameDay: processHoursFunction('[Сьогодні '),
      nextDay: processHoursFunction('[Завтра '),
      lastDay: processHoursFunction('[Вчора '),
      nextWeek: processHoursFunction('[У] dddd ['),
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return processHoursFunction('[Минулої] dddd [').call(this);
          case 1:
          case 2:
          case 4:
            return processHoursFunction('[Минулого] dddd [').call(this);}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'за %s',
      past: '%s тому',
      s: 'декілька секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'годину',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'місяць',
      MM: relativeTimeWithPlural,
      y: 'рік',
      yy: relativeTimeWithPlural },

    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function isPM(input) {
      return /^(дня|вечора)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночі';
      } else if (hour < 12) {
        return 'ранку';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечора';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return number + '-й';
        case 'D':
          return number + '-го';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return uk;

});

/***/ }),
/* 252 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/ur.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var months = [
  'جنوری',
  'فروری',
  'مارچ',
  'اپریل',
  'مئی',
  'جون',
  'جولائی',
  'اگست',
  'ستمبر',
  'اکتوبر',
  'نومبر',
  'دسمبر'];

  var days = [
  'اتوار',
  'پیر',
  'منگل',
  'بدھ',
  'جمعرات',
  'جمعہ',
  'ہفتہ'];


  var ur = moment.defineLocale('ur', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm' },

    meridiemParse: /صبح|شام/,
    isPM: function isPM(input) {
      return 'شام' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[آج بوقت] LT',
      nextDay: '[کل بوقت] LT',
      nextWeek: 'dddd [بوقت] LT',
      lastDay: '[گذشتہ روز بوقت] LT',
      lastWeek: '[گذشتہ] dddd [بوقت] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s بعد',
      past: '%s قبل',
      s: 'چند سیکنڈ',
      ss: '%d سیکنڈ',
      m: 'ایک منٹ',
      mm: '%d منٹ',
      h: 'ایک گھنٹہ',
      hh: '%d گھنٹے',
      d: 'ایک دن',
      dd: '%d دن',
      M: 'ایک ماہ',
      MM: '%d ماہ',
      y: 'ایک سال',
      yy: '%d سال' },

    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ur;

});

/***/ }),
/* 253 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/uz.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var uz = moment.defineLocale('uz', {
    months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm' },

    calendar: {
      sameDay: '[Бугун соат] LT [да]',
      nextDay: '[Эртага] LT [да]',
      nextWeek: 'dddd [куни соат] LT [да]',
      lastDay: '[Кеча соат] LT [да]',
      lastWeek: '[Утган] dddd [куни соат] LT [да]',
      sameElse: 'L' },

    relativeTime: {
      future: 'Якин %s ичида',
      past: 'Бир неча %s олдин',
      s: 'фурсат',
      ss: '%d фурсат',
      m: 'бир дакика',
      mm: '%d дакика',
      h: 'бир соат',
      hh: '%d соат',
      d: 'бир кун',
      dd: '%d кун',
      M: 'бир ой',
      MM: '%d ой',
      y: 'бир йил',
      yy: '%d йил' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 4th is the first week of the year.
    } });


  return uz;

});

/***/ }),
/* 254 */
/*!****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/uz-latn.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var uzLatn = moment.defineLocale('uz-latn', {
    months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
    monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
    weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm' },

    calendar: {
      sameDay: '[Bugun soat] LT [da]',
      nextDay: '[Ertaga] LT [da]',
      nextWeek: 'dddd [kuni soat] LT [da]',
      lastDay: '[Kecha soat] LT [da]',
      lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
      sameElse: 'L' },

    relativeTime: {
      future: 'Yaqin %s ichida',
      past: 'Bir necha %s oldin',
      s: 'soniya',
      ss: '%d soniya',
      m: 'bir daqiqa',
      mm: '%d daqiqa',
      h: 'bir soat',
      hh: '%d soat',
      d: 'bir kun',
      dd: '%d kun',
      M: 'bir oy',
      MM: '%d oy',
      y: 'bir yil',
      yy: '%d yil' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return uzLatn;

});

/***/ }),
/* 255 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/vi.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var vi = moment.defineLocale('vi', {
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: function isPM(input) {
      return /^ch$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'sa' : 'SA';
      } else {
        return isLower ? 'ch' : 'CH';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [năm] YYYY',
      LLL: 'D MMMM [năm] YYYY HH:mm',
      LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
      l: 'DD/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Hôm nay lúc] LT',
      nextDay: '[Ngày mai lúc] LT',
      nextWeek: 'dddd [tuần tới lúc] LT',
      lastDay: '[Hôm qua lúc] LT',
      lastWeek: 'dddd [tuần rồi lúc] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s tới',
      past: '%s trước',
      s: 'vài giây',
      ss: '%d giây',
      m: 'một phút',
      mm: '%d phút',
      h: 'một giờ',
      hh: '%d giờ',
      d: 'một ngày',
      dd: '%d ngày',
      M: 'một tháng',
      MM: '%d tháng',
      y: 'một năm',
      yy: '%d năm' },

    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return vi;

});

/***/ }),
/* 256 */
/*!*****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/x-pseudo.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var xPseudo = moment.defineLocale('x-pseudo', {
    months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
    monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
    monthsParseExact: true,
    weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
    weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
    weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[T~ódá~ý át] LT',
      nextDay: '[T~ómó~rró~w át] LT',
      nextWeek: 'dddd [át] LT',
      lastDay: '[Ý~ést~érdá~ý át] LT',
      lastWeek: '[L~ást] dddd [át] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'í~ñ %s',
      past: '%s á~gó',
      s: 'á ~féw ~sécó~ñds',
      ss: '%d s~écóñ~ds',
      m: 'á ~míñ~úté',
      mm: '%d m~íñú~tés',
      h: 'á~ñ hó~úr',
      hh: '%d h~óúrs',
      d: 'á ~dáý',
      dd: '%d d~áýs',
      M: 'á ~móñ~th',
      MM: '%d m~óñt~hs',
      y: 'á ~ýéár',
      yy: '%d ý~éárs' },

    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output = ~~(number % 100 / 10) === 1 ? 'th' :
      b === 1 ? 'st' :
      b === 2 ? 'nd' :
      b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return xPseudo;

});

/***/ }),
/* 257 */
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/yo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var yo = moment.defineLocale('yo', {
    months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Ònì ni] LT',
      nextDay: '[Ọ̀la ni] LT',
      nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
      lastDay: '[Àna ni] LT',
      lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ní %s',
      past: '%s kọjá',
      s: 'ìsẹjú aayá die',
      ss: 'aayá %d',
      m: 'ìsẹjú kan',
      mm: 'ìsẹjú %d',
      h: 'wákati kan',
      hh: 'wákati %d',
      d: 'ọjọ́ kan',
      dd: 'ọjọ́ %d',
      M: 'osù kan',
      MM: 'osù %d',
      y: 'ọdún kan',
      yy: 'ọdún %d' },

    dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
    ordinal: 'ọjọ́ %d',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return yo;

});

/***/ }),
/* 258 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/zh-cn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var zhCn = moment.defineLocale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日Ah点mm分',
      LLLL: 'YYYY年M月D日ddddAh点mm分',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm' },

    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' ||
      meridiem === '上午') {
        return hour;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      } else {
        // '中午'
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '周';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '几秒',
      ss: '%d 秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年' },

    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return zhCn;

});

/***/ }),
/* 259 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/zh-hk.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var zhHk = moment.defineLocale('zh-hk', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm' },

    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s內',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年' } });



  return zhHk;

});

/***/ }),
/* 260 */
/*!**************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/node_modules/moment/locale/zh-tw.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //! moment.js locale configuration

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 131)) :
  undefined;
})(void 0, function (moment) {'use strict';


  var zhTw = moment.defineLocale('zh-tw', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm' },

    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天] LT',
      nextDay: '[明天] LT',
      nextWeek: '[下]dddd LT',
      lastDay: '[昨天] LT',
      lastWeek: '[上]dddd LT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s內',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年' } });



  return zhTw;

});

/***/ }),
/* 261 */,
/* 262 */,
/* 263 */
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Forder%2Forder"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _order = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order.vue */ 264));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/*!*******************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2ForderDetail%2ForderDetail"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/orderDetail/orderDetail.vue */ 272));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
/*!*************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fdelivery%2Fdelivery"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _delivery = _interopRequireDefault(__webpack_require__(/*! ./pages/delivery/delivery.vue */ 280));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_delivery.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/*!*********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FTransferPage%2FTransferPage"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _TransferPage = _interopRequireDefault(__webpack_require__(/*! ./pages/TransferPage/TransferPage.vue */ 288));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_TransferPage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */
/*!********************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/components/w-picker/city-data/province.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "北京市",
  "value": "11" },

{
  "label": "天津市",
  "value": "12" },

{
  "label": "河北省",
  "value": "13" },

{
  "label": "山西省",
  "value": "14" },

{
  "label": "内蒙古自治区",
  "value": "15" },

{
  "label": "辽宁省",
  "value": "21" },

{
  "label": "吉林省",
  "value": "22" },

{
  "label": "黑龙江省",
  "value": "23" },

{
  "label": "上海市",
  "value": "31" },

{
  "label": "江苏省",
  "value": "32" },

{
  "label": "浙江省",
  "value": "33" },

{
  "label": "安徽省",
  "value": "34" },

{
  "label": "福建省",
  "value": "35" },

{
  "label": "江西省",
  "value": "36" },

{
  "label": "山东省",
  "value": "37" },

{
  "label": "河南省",
  "value": "41" },

{
  "label": "湖北省",
  "value": "42" },

{
  "label": "湖南省",
  "value": "43" },

{
  "label": "广东省",
  "value": "44" },

{
  "label": "广西壮族自治区",
  "value": "45" },

{
  "label": "海南省",
  "value": "46" },

{
  "label": "重庆市",
  "value": "50" },

{
  "label": "四川省",
  "value": "51" },

{
  "label": "贵州省",
  "value": "52" },

{
  "label": "云南省",
  "value": "53" },

{
  "label": "西藏自治区",
  "value": "54" },

{
  "label": "陕西省",
  "value": "61" },

{
  "label": "甘肃省",
  "value": "62" },

{
  "label": "青海省",
  "value": "63" },

{
  "label": "宁夏回族自治区",
  "value": "64" },

{
  "label": "新疆维吾尔自治区",
  "value": "65" },

{
  "label": "台湾",
  "value": "66" },

{
  "label": "香港",
  "value": "67" },

{
  "label": "澳门",
  "value": "68" }];var _default =


provinceData;exports.default = _default;

/***/ }),
/* 418 */
/*!****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/components/w-picker/city-data/city.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "市辖区",
  "value": "1101" }],

[{
  "label": "市辖区",
  "value": "1201" }],

[{
  "label": "石家庄市",
  "value": "1301" },

{
  "label": "唐山市",
  "value": "1302" },

{
  "label": "秦皇岛市",
  "value": "1303" },

{
  "label": "邯郸市",
  "value": "1304" },

{
  "label": "邢台市",
  "value": "1305" },

{
  "label": "保定市",
  "value": "1306" },

{
  "label": "张家口市",
  "value": "1307" },

{
  "label": "承德市",
  "value": "1308" },

{
  "label": "沧州市",
  "value": "1309" },

{
  "label": "廊坊市",
  "value": "1310" },

{
  "label": "衡水市",
  "value": "1311" }],


[{
  "label": "太原市",
  "value": "1401" },

{
  "label": "大同市",
  "value": "1402" },

{
  "label": "阳泉市",
  "value": "1403" },

{
  "label": "长治市",
  "value": "1404" },

{
  "label": "晋城市",
  "value": "1405" },

{
  "label": "朔州市",
  "value": "1406" },

{
  "label": "晋中市",
  "value": "1407" },

{
  "label": "运城市",
  "value": "1408" },

{
  "label": "忻州市",
  "value": "1409" },

{
  "label": "临汾市",
  "value": "1410" },

{
  "label": "吕梁市",
  "value": "1411" }],


[{
  "label": "呼和浩特市",
  "value": "1501" },

{
  "label": "包头市",
  "value": "1502" },

{
  "label": "乌海市",
  "value": "1503" },

{
  "label": "赤峰市",
  "value": "1504" },

{
  "label": "通辽市",
  "value": "1505" },

{
  "label": "鄂尔多斯市",
  "value": "1506" },

{
  "label": "呼伦贝尔市",
  "value": "1507" },

{
  "label": "巴彦淖尔市",
  "value": "1508" },

{
  "label": "乌兰察布市",
  "value": "1509" },

{
  "label": "兴安盟",
  "value": "1522" },

{
  "label": "锡林郭勒盟",
  "value": "1525" },

{
  "label": "阿拉善盟",
  "value": "1529" }],


[{
  "label": "沈阳市",
  "value": "2101" },

{
  "label": "大连市",
  "value": "2102" },

{
  "label": "鞍山市",
  "value": "2103" },

{
  "label": "抚顺市",
  "value": "2104" },

{
  "label": "本溪市",
  "value": "2105" },

{
  "label": "丹东市",
  "value": "2106" },

{
  "label": "锦州市",
  "value": "2107" },

{
  "label": "营口市",
  "value": "2108" },

{
  "label": "阜新市",
  "value": "2109" },

{
  "label": "辽阳市",
  "value": "2110" },

{
  "label": "盘锦市",
  "value": "2111" },

{
  "label": "铁岭市",
  "value": "2112" },

{
  "label": "朝阳市",
  "value": "2113" },

{
  "label": "葫芦岛市",
  "value": "2114" }],


[{
  "label": "长春市",
  "value": "2201" },

{
  "label": "吉林市",
  "value": "2202" },

{
  "label": "四平市",
  "value": "2203" },

{
  "label": "辽源市",
  "value": "2204" },

{
  "label": "通化市",
  "value": "2205" },

{
  "label": "白山市",
  "value": "2206" },

{
  "label": "松原市",
  "value": "2207" },

{
  "label": "白城市",
  "value": "2208" },

{
  "label": "延边朝鲜族自治州",
  "value": "2224" }],


[{
  "label": "哈尔滨市",
  "value": "2301" },

{
  "label": "齐齐哈尔市",
  "value": "2302" },

{
  "label": "鸡西市",
  "value": "2303" },

{
  "label": "鹤岗市",
  "value": "2304" },

{
  "label": "双鸭山市",
  "value": "2305" },

{
  "label": "大庆市",
  "value": "2306" },

{
  "label": "伊春市",
  "value": "2307" },

{
  "label": "佳木斯市",
  "value": "2308" },

{
  "label": "七台河市",
  "value": "2309" },

{
  "label": "牡丹江市",
  "value": "2310" },

{
  "label": "黑河市",
  "value": "2311" },

{
  "label": "绥化市",
  "value": "2312" },

{
  "label": "大兴安岭地区",
  "value": "2327" }],


[{
  "label": "市辖区",
  "value": "3101" }],

[{
  "label": "南京市",
  "value": "3201" },

{
  "label": "无锡市",
  "value": "3202" },

{
  "label": "徐州市",
  "value": "3203" },

{
  "label": "常州市",
  "value": "3204" },

{
  "label": "苏州市",
  "value": "3205" },

{
  "label": "南通市",
  "value": "3206" },

{
  "label": "连云港市",
  "value": "3207" },

{
  "label": "淮安市",
  "value": "3208" },

{
  "label": "盐城市",
  "value": "3209" },

{
  "label": "扬州市",
  "value": "3210" },

{
  "label": "镇江市",
  "value": "3211" },

{
  "label": "泰州市",
  "value": "3212" },

{
  "label": "宿迁市",
  "value": "3213" }],


[{
  "label": "杭州市",
  "value": "3301" },

{
  "label": "宁波市",
  "value": "3302" },

{
  "label": "温州市",
  "value": "3303" },

{
  "label": "嘉兴市",
  "value": "3304" },

{
  "label": "湖州市",
  "value": "3305" },

{
  "label": "绍兴市",
  "value": "3306" },

{
  "label": "金华市",
  "value": "3307" },

{
  "label": "衢州市",
  "value": "3308" },

{
  "label": "舟山市",
  "value": "3309" },

{
  "label": "台州市",
  "value": "3310" },

{
  "label": "丽水市",
  "value": "3311" }],


[{
  "label": "合肥市",
  "value": "3401" },

{
  "label": "芜湖市",
  "value": "3402" },

{
  "label": "蚌埠市",
  "value": "3403" },

{
  "label": "淮南市",
  "value": "3404" },

{
  "label": "马鞍山市",
  "value": "3405" },

{
  "label": "淮北市",
  "value": "3406" },

{
  "label": "铜陵市",
  "value": "3407" },

{
  "label": "安庆市",
  "value": "3408" },

{
  "label": "黄山市",
  "value": "3410" },

{
  "label": "滁州市",
  "value": "3411" },

{
  "label": "阜阳市",
  "value": "3412" },

{
  "label": "宿州市",
  "value": "3413" },

{
  "label": "六安市",
  "value": "3415" },

{
  "label": "亳州市",
  "value": "3416" },

{
  "label": "池州市",
  "value": "3417" },

{
  "label": "宣城市",
  "value": "3418" }],


[{
  "label": "福州市",
  "value": "3501" },

{
  "label": "厦门市",
  "value": "3502" },

{
  "label": "莆田市",
  "value": "3503" },

{
  "label": "三明市",
  "value": "3504" },

{
  "label": "泉州市",
  "value": "3505" },

{
  "label": "漳州市",
  "value": "3506" },

{
  "label": "南平市",
  "value": "3507" },

{
  "label": "龙岩市",
  "value": "3508" },

{
  "label": "宁德市",
  "value": "3509" }],


[{
  "label": "南昌市",
  "value": "3601" },

{
  "label": "景德镇市",
  "value": "3602" },

{
  "label": "萍乡市",
  "value": "3603" },

{
  "label": "九江市",
  "value": "3604" },

{
  "label": "新余市",
  "value": "3605" },

{
  "label": "鹰潭市",
  "value": "3606" },

{
  "label": "赣州市",
  "value": "3607" },

{
  "label": "吉安市",
  "value": "3608" },

{
  "label": "宜春市",
  "value": "3609" },

{
  "label": "抚州市",
  "value": "3610" },

{
  "label": "上饶市",
  "value": "3611" }],


[{
  "label": "济南市",
  "value": "3701" },

{
  "label": "青岛市",
  "value": "3702" },

{
  "label": "淄博市",
  "value": "3703" },

{
  "label": "枣庄市",
  "value": "3704" },

{
  "label": "东营市",
  "value": "3705" },

{
  "label": "烟台市",
  "value": "3706" },

{
  "label": "潍坊市",
  "value": "3707" },

{
  "label": "济宁市",
  "value": "3708" },

{
  "label": "泰安市",
  "value": "3709" },

{
  "label": "威海市",
  "value": "3710" },

{
  "label": "日照市",
  "value": "3711" },

{
  "label": "莱芜市",
  "value": "3712" },

{
  "label": "临沂市",
  "value": "3713" },

{
  "label": "德州市",
  "value": "3714" },

{
  "label": "聊城市",
  "value": "3715" },

{
  "label": "滨州市",
  "value": "3716" },

{
  "label": "菏泽市",
  "value": "3717" }],


[{
  "label": "郑州市",
  "value": "4101" },

{
  "label": "开封市",
  "value": "4102" },

{
  "label": "洛阳市",
  "value": "4103" },

{
  "label": "平顶山市",
  "value": "4104" },

{
  "label": "安阳市",
  "value": "4105" },

{
  "label": "鹤壁市",
  "value": "4106" },

{
  "label": "新乡市",
  "value": "4107" },

{
  "label": "焦作市",
  "value": "4108" },

{
  "label": "濮阳市",
  "value": "4109" },

{
  "label": "许昌市",
  "value": "4110" },

{
  "label": "漯河市",
  "value": "4111" },

{
  "label": "三门峡市",
  "value": "4112" },

{
  "label": "南阳市",
  "value": "4113" },

{
  "label": "商丘市",
  "value": "4114" },

{
  "label": "信阳市",
  "value": "4115" },

{
  "label": "周口市",
  "value": "4116" },

{
  "label": "驻马店市",
  "value": "4117" },

{
  "label": "省直辖县级行政区划",
  "value": "4190" }],


[{
  "label": "武汉市",
  "value": "4201" },

{
  "label": "黄石市",
  "value": "4202" },

{
  "label": "十堰市",
  "value": "4203" },

{
  "label": "宜昌市",
  "value": "4205" },

{
  "label": "襄阳市",
  "value": "4206" },

{
  "label": "鄂州市",
  "value": "4207" },

{
  "label": "荆门市",
  "value": "4208" },

{
  "label": "孝感市",
  "value": "4209" },

{
  "label": "荆州市",
  "value": "4210" },

{
  "label": "黄冈市",
  "value": "4211" },

{
  "label": "咸宁市",
  "value": "4212" },

{
  "label": "随州市",
  "value": "4213" },

{
  "label": "恩施土家族苗族自治州",
  "value": "4228" },

{
  "label": "省直辖县级行政区划",
  "value": "4290" }],


[{
  "label": "长沙市",
  "value": "4301" },

{
  "label": "株洲市",
  "value": "4302" },

{
  "label": "湘潭市",
  "value": "4303" },

{
  "label": "衡阳市",
  "value": "4304" },

{
  "label": "邵阳市",
  "value": "4305" },

{
  "label": "岳阳市",
  "value": "4306" },

{
  "label": "常德市",
  "value": "4307" },

{
  "label": "张家界市",
  "value": "4308" },

{
  "label": "益阳市",
  "value": "4309" },

{
  "label": "郴州市",
  "value": "4310" },

{
  "label": "永州市",
  "value": "4311" },

{
  "label": "怀化市",
  "value": "4312" },

{
  "label": "娄底市",
  "value": "4313" },

{
  "label": "湘西土家族苗族自治州",
  "value": "4331" }],


[{
  "label": "广州市",
  "value": "4401" },

{
  "label": "韶关市",
  "value": "4402" },

{
  "label": "深圳市",
  "value": "4403" },

{
  "label": "珠海市",
  "value": "4404" },

{
  "label": "汕头市",
  "value": "4405" },

{
  "label": "佛山市",
  "value": "4406" },

{
  "label": "江门市",
  "value": "4407" },

{
  "label": "湛江市",
  "value": "4408" },

{
  "label": "茂名市",
  "value": "4409" },

{
  "label": "肇庆市",
  "value": "4412" },

{
  "label": "惠州市",
  "value": "4413" },

{
  "label": "梅州市",
  "value": "4414" },

{
  "label": "汕尾市",
  "value": "4415" },

{
  "label": "河源市",
  "value": "4416" },

{
  "label": "阳江市",
  "value": "4417" },

{
  "label": "清远市",
  "value": "4418" },

{
  "label": "东莞市",
  "value": "4419" },

{
  "label": "中山市",
  "value": "4420" },

{
  "label": "潮州市",
  "value": "4451" },

{
  "label": "揭阳市",
  "value": "4452" },

{
  "label": "云浮市",
  "value": "4453" }],


[{
  "label": "南宁市",
  "value": "4501" },

{
  "label": "柳州市",
  "value": "4502" },

{
  "label": "桂林市",
  "value": "4503" },

{
  "label": "梧州市",
  "value": "4504" },

{
  "label": "北海市",
  "value": "4505" },

{
  "label": "防城港市",
  "value": "4506" },

{
  "label": "钦州市",
  "value": "4507" },

{
  "label": "贵港市",
  "value": "4508" },

{
  "label": "玉林市",
  "value": "4509" },

{
  "label": "百色市",
  "value": "4510" },

{
  "label": "贺州市",
  "value": "4511" },

{
  "label": "河池市",
  "value": "4512" },

{
  "label": "来宾市",
  "value": "4513" },

{
  "label": "崇左市",
  "value": "4514" }],


[{
  "label": "海口市",
  "value": "4601" },

{
  "label": "三亚市",
  "value": "4602" },

{
  "label": "三沙市",
  "value": "4603" },

{
  "label": "儋州市",
  "value": "4604" },

{
  "label": "省直辖县级行政区划",
  "value": "4690" }],


[{
  "label": "市辖区",
  "value": "5001" },

{
  "label": "县",
  "value": "5002" }],


[{
  "label": "成都市",
  "value": "5101" },

{
  "label": "自贡市",
  "value": "5103" },

{
  "label": "攀枝花市",
  "value": "5104" },

{
  "label": "泸州市",
  "value": "5105" },

{
  "label": "德阳市",
  "value": "5106" },

{
  "label": "绵阳市",
  "value": "5107" },

{
  "label": "广元市",
  "value": "5108" },

{
  "label": "遂宁市",
  "value": "5109" },

{
  "label": "内江市",
  "value": "5110" },

{
  "label": "乐山市",
  "value": "5111" },

{
  "label": "南充市",
  "value": "5113" },

{
  "label": "眉山市",
  "value": "5114" },

{
  "label": "宜宾市",
  "value": "5115" },

{
  "label": "广安市",
  "value": "5116" },

{
  "label": "达州市",
  "value": "5117" },

{
  "label": "雅安市",
  "value": "5118" },

{
  "label": "巴中市",
  "value": "5119" },

{
  "label": "资阳市",
  "value": "5120" },

{
  "label": "阿坝藏族羌族自治州",
  "value": "5132" },

{
  "label": "甘孜藏族自治州",
  "value": "5133" },

{
  "label": "凉山彝族自治州",
  "value": "5134" }],


[{
  "label": "贵阳市",
  "value": "5201" },

{
  "label": "六盘水市",
  "value": "5202" },

{
  "label": "遵义市",
  "value": "5203" },

{
  "label": "安顺市",
  "value": "5204" },

{
  "label": "毕节市",
  "value": "5205" },

{
  "label": "铜仁市",
  "value": "5206" },

{
  "label": "黔西南布依族苗族自治州",
  "value": "5223" },

{
  "label": "黔东南苗族侗族自治州",
  "value": "5226" },

{
  "label": "黔南布依族苗族自治州",
  "value": "5227" }],


[{
  "label": "昆明市",
  "value": "5301" },

{
  "label": "曲靖市",
  "value": "5303" },

{
  "label": "玉溪市",
  "value": "5304" },

{
  "label": "保山市",
  "value": "5305" },

{
  "label": "昭通市",
  "value": "5306" },

{
  "label": "丽江市",
  "value": "5307" },

{
  "label": "普洱市",
  "value": "5308" },

{
  "label": "临沧市",
  "value": "5309" },

{
  "label": "楚雄彝族自治州",
  "value": "5323" },

{
  "label": "红河哈尼族彝族自治州",
  "value": "5325" },

{
  "label": "文山壮族苗族自治州",
  "value": "5326" },

{
  "label": "西双版纳傣族自治州",
  "value": "5328" },

{
  "label": "大理白族自治州",
  "value": "5329" },

{
  "label": "德宏傣族景颇族自治州",
  "value": "5331" },

{
  "label": "怒江傈僳族自治州",
  "value": "5333" },

{
  "label": "迪庆藏族自治州",
  "value": "5334" }],


[{
  "label": "拉萨市",
  "value": "5401" },

{
  "label": "日喀则市",
  "value": "5402" },

{
  "label": "昌都市",
  "value": "5403" },

{
  "label": "林芝市",
  "value": "5404" },

{
  "label": "山南市",
  "value": "5405" },

{
  "label": "那曲地区",
  "value": "5424" },

{
  "label": "阿里地区",
  "value": "5425" }],


[{
  "label": "西安市",
  "value": "6101" },

{
  "label": "铜川市",
  "value": "6102" },

{
  "label": "宝鸡市",
  "value": "6103" },

{
  "label": "咸阳市",
  "value": "6104" },

{
  "label": "渭南市",
  "value": "6105" },

{
  "label": "延安市",
  "value": "6106" },

{
  "label": "汉中市",
  "value": "6107" },

{
  "label": "榆林市",
  "value": "6108" },

{
  "label": "安康市",
  "value": "6109" },

{
  "label": "商洛市",
  "value": "6110" }],


[{
  "label": "兰州市",
  "value": "6201" },

{
  "label": "嘉峪关市",
  "value": "6202" },

{
  "label": "金昌市",
  "value": "6203" },

{
  "label": "白银市",
  "value": "6204" },

{
  "label": "天水市",
  "value": "6205" },

{
  "label": "武威市",
  "value": "6206" },

{
  "label": "张掖市",
  "value": "6207" },

{
  "label": "平凉市",
  "value": "6208" },

{
  "label": "酒泉市",
  "value": "6209" },

{
  "label": "庆阳市",
  "value": "6210" },

{
  "label": "定西市",
  "value": "6211" },

{
  "label": "陇南市",
  "value": "6212" },

{
  "label": "临夏回族自治州",
  "value": "6229" },

{
  "label": "甘南藏族自治州",
  "value": "6230" }],


[{
  "label": "西宁市",
  "value": "6301" },

{
  "label": "海东市",
  "value": "6302" },

{
  "label": "海北藏族自治州",
  "value": "6322" },

{
  "label": "黄南藏族自治州",
  "value": "6323" },

{
  "label": "海南藏族自治州",
  "value": "6325" },

{
  "label": "果洛藏族自治州",
  "value": "6326" },

{
  "label": "玉树藏族自治州",
  "value": "6327" },

{
  "label": "海西蒙古族藏族自治州",
  "value": "6328" }],


[{
  "label": "银川市",
  "value": "6401" },

{
  "label": "石嘴山市",
  "value": "6402" },

{
  "label": "吴忠市",
  "value": "6403" },

{
  "label": "固原市",
  "value": "6404" },

{
  "label": "中卫市",
  "value": "6405" }],


[{
  "label": "乌鲁木齐市",
  "value": "6501" },

{
  "label": "克拉玛依市",
  "value": "6502" },

{
  "label": "吐鲁番市",
  "value": "6504" },

{
  "label": "哈密市",
  "value": "6505" },

{
  "label": "昌吉回族自治州",
  "value": "6523" },

{
  "label": "博尔塔拉蒙古自治州",
  "value": "6527" },

{
  "label": "巴音郭楞蒙古自治州",
  "value": "6528" },

{
  "label": "阿克苏地区",
  "value": "6529" },

{
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530" },

{
  "label": "喀什地区",
  "value": "6531" },

{
  "label": "和田地区",
  "value": "6532" },

{
  "label": "伊犁哈萨克自治州",
  "value": "6540" },

{
  "label": "塔城地区",
  "value": "6542" },

{
  "label": "阿勒泰地区",
  "value": "6543" },

{
  "label": "自治区直辖县级行政区划",
  "value": "6590" }],


[{
  "label": "台北",
  "value": "6601" },

{
  "label": "高雄",
  "value": "6602" },

{
  "label": "基隆",
  "value": "6603" },

{
  "label": "台中",
  "value": "6604" },

{
  "label": "台南",
  "value": "6605" },

{
  "label": "新竹",
  "value": "6606" },

{
  "label": "嘉义",
  "value": "6607" },

{
  "label": "宜兰",
  "value": "6608" },

{
  "label": "桃园",
  "value": "6609" },

{
  "label": "苗栗",
  "value": "6610" },

{
  "label": "彰化",
  "value": "6611" },

{
  "label": "南投",
  "value": "6612" },

{
  "label": "云林",
  "value": "6613" },

{
  "label": "屏东",
  "value": "6614" },

{
  "label": "台东",
  "value": "6615" },

{
  "label": "花莲",
  "value": "6616" },

{
  "label": "澎湖",
  "value": "6617" }],


[{
  "label": "香港岛",
  "value": "6701" },

{
  "label": "九龙",
  "value": "6702" },

{
  "label": "新界",
  "value": "6703" }],


[{
  "label": "澳门半岛",
  "value": "6801" },

{
  "label": "氹仔岛",
  "value": "6802" },

{
  "label": "路环岛",
  "value": "6803" },

{
  "label": "路氹城",
  "value": "6804" }]];var _default =



cityData;exports.default = _default;

/***/ }),
/* 419 */
/*!****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/components/w-picker/city-data/area.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "东城区",
  "value": "110101" },

{
  "label": "西城区",
  "value": "110102" },

{
  "label": "朝阳区",
  "value": "110105" },

{
  "label": "丰台区",
  "value": "110106" },

{
  "label": "石景山区",
  "value": "110107" },

{
  "label": "海淀区",
  "value": "110108" },

{
  "label": "门头沟区",
  "value": "110109" },

{
  "label": "房山区",
  "value": "110111" },

{
  "label": "通州区",
  "value": "110112" },

{
  "label": "顺义区",
  "value": "110113" },

{
  "label": "昌平区",
  "value": "110114" },

{
  "label": "大兴区",
  "value": "110115" },

{
  "label": "怀柔区",
  "value": "110116" },

{
  "label": "平谷区",
  "value": "110117" },

{
  "label": "密云区",
  "value": "110118" },

{
  "label": "延庆区",
  "value": "110119" }]],



[
[{
  "label": "和平区",
  "value": "120101" },

{
  "label": "河东区",
  "value": "120102" },

{
  "label": "河西区",
  "value": "120103" },

{
  "label": "南开区",
  "value": "120104" },

{
  "label": "河北区",
  "value": "120105" },

{
  "label": "红桥区",
  "value": "120106" },

{
  "label": "东丽区",
  "value": "120110" },

{
  "label": "西青区",
  "value": "120111" },

{
  "label": "津南区",
  "value": "120112" },

{
  "label": "北辰区",
  "value": "120113" },

{
  "label": "武清区",
  "value": "120114" },

{
  "label": "宝坻区",
  "value": "120115" },

{
  "label": "滨海新区",
  "value": "120116" },

{
  "label": "宁河区",
  "value": "120117" },

{
  "label": "静海区",
  "value": "120118" },

{
  "label": "蓟州区",
  "value": "120119" }]],



[
[{
  "label": "长安区",
  "value": "130102" },

{
  "label": "桥西区",
  "value": "130104" },

{
  "label": "新华区",
  "value": "130105" },

{
  "label": "井陉矿区",
  "value": "130107" },

{
  "label": "裕华区",
  "value": "130108" },

{
  "label": "藁城区",
  "value": "130109" },

{
  "label": "鹿泉区",
  "value": "130110" },

{
  "label": "栾城区",
  "value": "130111" },

{
  "label": "井陉县",
  "value": "130121" },

{
  "label": "正定县",
  "value": "130123" },

{
  "label": "行唐县",
  "value": "130125" },

{
  "label": "灵寿县",
  "value": "130126" },

{
  "label": "高邑县",
  "value": "130127" },

{
  "label": "深泽县",
  "value": "130128" },

{
  "label": "赞皇县",
  "value": "130129" },

{
  "label": "无极县",
  "value": "130130" },

{
  "label": "平山县",
  "value": "130131" },

{
  "label": "元氏县",
  "value": "130132" },

{
  "label": "赵县",
  "value": "130133" },

{
  "label": "石家庄高新技术产业开发区",
  "value": "130171" },

{
  "label": "石家庄循环化工园区",
  "value": "130172" },

{
  "label": "辛集市",
  "value": "130181" },

{
  "label": "晋州市",
  "value": "130183" },

{
  "label": "新乐市",
  "value": "130184" }],


[{
  "label": "路南区",
  "value": "130202" },

{
  "label": "路北区",
  "value": "130203" },

{
  "label": "古冶区",
  "value": "130204" },

{
  "label": "开平区",
  "value": "130205" },

{
  "label": "丰南区",
  "value": "130207" },

{
  "label": "丰润区",
  "value": "130208" },

{
  "label": "曹妃甸区",
  "value": "130209" },

{
  "label": "滦县",
  "value": "130223" },

{
  "label": "滦南县",
  "value": "130224" },

{
  "label": "乐亭县",
  "value": "130225" },

{
  "label": "迁西县",
  "value": "130227" },

{
  "label": "玉田县",
  "value": "130229" },

{
  "label": "唐山市芦台经济技术开发区",
  "value": "130271" },

{
  "label": "唐山市汉沽管理区",
  "value": "130272" },

{
  "label": "唐山高新技术产业开发区",
  "value": "130273" },

{
  "label": "河北唐山海港经济开发区",
  "value": "130274" },

{
  "label": "遵化市",
  "value": "130281" },

{
  "label": "迁安市",
  "value": "130283" }],


[{
  "label": "海港区",
  "value": "130302" },

{
  "label": "山海关区",
  "value": "130303" },

{
  "label": "北戴河区",
  "value": "130304" },

{
  "label": "抚宁区",
  "value": "130306" },

{
  "label": "青龙满族自治县",
  "value": "130321" },

{
  "label": "昌黎县",
  "value": "130322" },

{
  "label": "卢龙县",
  "value": "130324" },

{
  "label": "秦皇岛市经济技术开发区",
  "value": "130371" },

{
  "label": "北戴河新区",
  "value": "130372" }],


[{
  "label": "邯山区",
  "value": "130402" },

{
  "label": "丛台区",
  "value": "130403" },

{
  "label": "复兴区",
  "value": "130404" },

{
  "label": "峰峰矿区",
  "value": "130406" },

{
  "label": "肥乡区",
  "value": "130407" },

{
  "label": "永年区",
  "value": "130408" },

{
  "label": "临漳县",
  "value": "130423" },

{
  "label": "成安县",
  "value": "130424" },

{
  "label": "大名县",
  "value": "130425" },

{
  "label": "涉县",
  "value": "130426" },

{
  "label": "磁县",
  "value": "130427" },

{
  "label": "邱县",
  "value": "130430" },

{
  "label": "鸡泽县",
  "value": "130431" },

{
  "label": "广平县",
  "value": "130432" },

{
  "label": "馆陶县",
  "value": "130433" },

{
  "label": "魏县",
  "value": "130434" },

{
  "label": "曲周县",
  "value": "130435" },

{
  "label": "邯郸经济技术开发区",
  "value": "130471" },

{
  "label": "邯郸冀南新区",
  "value": "130473" },

{
  "label": "武安市",
  "value": "130481" }],


[{
  "label": "桥东区",
  "value": "130502" },

{
  "label": "桥西区",
  "value": "130503" },

{
  "label": "邢台县",
  "value": "130521" },

{
  "label": "临城县",
  "value": "130522" },

{
  "label": "内丘县",
  "value": "130523" },

{
  "label": "柏乡县",
  "value": "130524" },

{
  "label": "隆尧县",
  "value": "130525" },

{
  "label": "任县",
  "value": "130526" },

{
  "label": "南和县",
  "value": "130527" },

{
  "label": "宁晋县",
  "value": "130528" },

{
  "label": "巨鹿县",
  "value": "130529" },

{
  "label": "新河县",
  "value": "130530" },

{
  "label": "广宗县",
  "value": "130531" },

{
  "label": "平乡县",
  "value": "130532" },

{
  "label": "威县",
  "value": "130533" },

{
  "label": "清河县",
  "value": "130534" },

{
  "label": "临西县",
  "value": "130535" },

{
  "label": "河北邢台经济开发区",
  "value": "130571" },

{
  "label": "南宫市",
  "value": "130581" },

{
  "label": "沙河市",
  "value": "130582" }],


[{
  "label": "竞秀区",
  "value": "130602" },

{
  "label": "莲池区",
  "value": "130606" },

{
  "label": "满城区",
  "value": "130607" },

{
  "label": "清苑区",
  "value": "130608" },

{
  "label": "徐水区",
  "value": "130609" },

{
  "label": "涞水县",
  "value": "130623" },

{
  "label": "阜平县",
  "value": "130624" },

{
  "label": "定兴县",
  "value": "130626" },

{
  "label": "唐县",
  "value": "130627" },

{
  "label": "高阳县",
  "value": "130628" },

{
  "label": "容城县",
  "value": "130629" },

{
  "label": "涞源县",
  "value": "130630" },

{
  "label": "望都县",
  "value": "130631" },

{
  "label": "安新县",
  "value": "130632" },

{
  "label": "易县",
  "value": "130633" },

{
  "label": "曲阳县",
  "value": "130634" },

{
  "label": "蠡县",
  "value": "130635" },

{
  "label": "顺平县",
  "value": "130636" },

{
  "label": "博野县",
  "value": "130637" },

{
  "label": "雄县",
  "value": "130638" },

{
  "label": "保定高新技术产业开发区",
  "value": "130671" },

{
  "label": "保定白沟新城",
  "value": "130672" },

{
  "label": "涿州市",
  "value": "130681" },

{
  "label": "定州市",
  "value": "130682" },

{
  "label": "安国市",
  "value": "130683" },

{
  "label": "高碑店市",
  "value": "130684" }],


[{
  "label": "桥东区",
  "value": "130702" },

{
  "label": "桥西区",
  "value": "130703" },

{
  "label": "宣化区",
  "value": "130705" },

{
  "label": "下花园区",
  "value": "130706" },

{
  "label": "万全区",
  "value": "130708" },

{
  "label": "崇礼区",
  "value": "130709" },

{
  "label": "张北县",
  "value": "130722" },

{
  "label": "康保县",
  "value": "130723" },

{
  "label": "沽源县",
  "value": "130724" },

{
  "label": "尚义县",
  "value": "130725" },

{
  "label": "蔚县",
  "value": "130726" },

{
  "label": "阳原县",
  "value": "130727" },

{
  "label": "怀安县",
  "value": "130728" },

{
  "label": "怀来县",
  "value": "130730" },

{
  "label": "涿鹿县",
  "value": "130731" },

{
  "label": "赤城县",
  "value": "130732" },

{
  "label": "张家口市高新技术产业开发区",
  "value": "130771" },

{
  "label": "张家口市察北管理区",
  "value": "130772" },

{
  "label": "张家口市塞北管理区",
  "value": "130773" }],


[{
  "label": "双桥区",
  "value": "130802" },

{
  "label": "双滦区",
  "value": "130803" },

{
  "label": "鹰手营子矿区",
  "value": "130804" },

{
  "label": "承德县",
  "value": "130821" },

{
  "label": "兴隆县",
  "value": "130822" },

{
  "label": "滦平县",
  "value": "130824" },

{
  "label": "隆化县",
  "value": "130825" },

{
  "label": "丰宁满族自治县",
  "value": "130826" },

{
  "label": "宽城满族自治县",
  "value": "130827" },

{
  "label": "围场满族蒙古族自治县",
  "value": "130828" },

{
  "label": "承德高新技术产业开发区",
  "value": "130871" },

{
  "label": "平泉市",
  "value": "130881" }],


[{
  "label": "新华区",
  "value": "130902" },

{
  "label": "运河区",
  "value": "130903" },

{
  "label": "沧县",
  "value": "130921" },

{
  "label": "青县",
  "value": "130922" },

{
  "label": "东光县",
  "value": "130923" },

{
  "label": "海兴县",
  "value": "130924" },

{
  "label": "盐山县",
  "value": "130925" },

{
  "label": "肃宁县",
  "value": "130926" },

{
  "label": "南皮县",
  "value": "130927" },

{
  "label": "吴桥县",
  "value": "130928" },

{
  "label": "献县",
  "value": "130929" },

{
  "label": "孟村回族自治县",
  "value": "130930" },

{
  "label": "河北沧州经济开发区",
  "value": "130971" },

{
  "label": "沧州高新技术产业开发区",
  "value": "130972" },

{
  "label": "沧州渤海新区",
  "value": "130973" },

{
  "label": "泊头市",
  "value": "130981" },

{
  "label": "任丘市",
  "value": "130982" },

{
  "label": "黄骅市",
  "value": "130983" },

{
  "label": "河间市",
  "value": "130984" }],


[{
  "label": "安次区",
  "value": "131002" },

{
  "label": "广阳区",
  "value": "131003" },

{
  "label": "固安县",
  "value": "131022" },

{
  "label": "永清县",
  "value": "131023" },

{
  "label": "香河县",
  "value": "131024" },

{
  "label": "大城县",
  "value": "131025" },

{
  "label": "文安县",
  "value": "131026" },

{
  "label": "大厂回族自治县",
  "value": "131028" },

{
  "label": "廊坊经济技术开发区",
  "value": "131071" },

{
  "label": "霸州市",
  "value": "131081" },

{
  "label": "三河市",
  "value": "131082" }],


[{
  "label": "桃城区",
  "value": "131102" },

{
  "label": "冀州区",
  "value": "131103" },

{
  "label": "枣强县",
  "value": "131121" },

{
  "label": "武邑县",
  "value": "131122" },

{
  "label": "武强县",
  "value": "131123" },

{
  "label": "饶阳县",
  "value": "131124" },

{
  "label": "安平县",
  "value": "131125" },

{
  "label": "故城县",
  "value": "131126" },

{
  "label": "景县",
  "value": "131127" },

{
  "label": "阜城县",
  "value": "131128" },

{
  "label": "河北衡水经济开发区",
  "value": "131171" },

{
  "label": "衡水滨湖新区",
  "value": "131172" },

{
  "label": "深州市",
  "value": "131182" }]],



[
[{
  "label": "小店区",
  "value": "140105" },

{
  "label": "迎泽区",
  "value": "140106" },

{
  "label": "杏花岭区",
  "value": "140107" },

{
  "label": "尖草坪区",
  "value": "140108" },

{
  "label": "万柏林区",
  "value": "140109" },

{
  "label": "晋源区",
  "value": "140110" },

{
  "label": "清徐县",
  "value": "140121" },

{
  "label": "阳曲县",
  "value": "140122" },

{
  "label": "娄烦县",
  "value": "140123" },

{
  "label": "山西转型综合改革示范区",
  "value": "140171" },

{
  "label": "古交市",
  "value": "140181" }],


[{
  "label": "城区",
  "value": "140202" },

{
  "label": "矿区",
  "value": "140203" },

{
  "label": "南郊区",
  "value": "140211" },

{
  "label": "新荣区",
  "value": "140212" },

{
  "label": "阳高县",
  "value": "140221" },

{
  "label": "天镇县",
  "value": "140222" },

{
  "label": "广灵县",
  "value": "140223" },

{
  "label": "灵丘县",
  "value": "140224" },

{
  "label": "浑源县",
  "value": "140225" },

{
  "label": "左云县",
  "value": "140226" },

{
  "label": "大同县",
  "value": "140227" },

{
  "label": "山西大同经济开发区",
  "value": "140271" }],


[{
  "label": "城区",
  "value": "140302" },

{
  "label": "矿区",
  "value": "140303" },

{
  "label": "郊区",
  "value": "140311" },

{
  "label": "平定县",
  "value": "140321" },

{
  "label": "盂县",
  "value": "140322" },

{
  "label": "山西阳泉经济开发区",
  "value": "140371" }],


[{
  "label": "城区",
  "value": "140402" },

{
  "label": "郊区",
  "value": "140411" },

{
  "label": "长治县",
  "value": "140421" },

{
  "label": "襄垣县",
  "value": "140423" },

{
  "label": "屯留县",
  "value": "140424" },

{
  "label": "平顺县",
  "value": "140425" },

{
  "label": "黎城县",
  "value": "140426" },

{
  "label": "壶关县",
  "value": "140427" },

{
  "label": "长子县",
  "value": "140428" },

{
  "label": "武乡县",
  "value": "140429" },

{
  "label": "沁县",
  "value": "140430" },

{
  "label": "沁源县",
  "value": "140431" },

{
  "label": "山西长治高新技术产业园区",
  "value": "140471" },

{
  "label": "潞城市",
  "value": "140481" }],


[{
  "label": "城区",
  "value": "140502" },

{
  "label": "沁水县",
  "value": "140521" },

{
  "label": "阳城县",
  "value": "140522" },

{
  "label": "陵川县",
  "value": "140524" },

{
  "label": "泽州县",
  "value": "140525" },

{
  "label": "高平市",
  "value": "140581" }],


[{
  "label": "朔城区",
  "value": "140602" },

{
  "label": "平鲁区",
  "value": "140603" },

{
  "label": "山阴县",
  "value": "140621" },

{
  "label": "应县",
  "value": "140622" },

{
  "label": "右玉县",
  "value": "140623" },

{
  "label": "怀仁县",
  "value": "140624" },

{
  "label": "山西朔州经济开发区",
  "value": "140671" }],


[{
  "label": "榆次区",
  "value": "140702" },

{
  "label": "榆社县",
  "value": "140721" },

{
  "label": "左权县",
  "value": "140722" },

{
  "label": "和顺县",
  "value": "140723" },

{
  "label": "昔阳县",
  "value": "140724" },

{
  "label": "寿阳县",
  "value": "140725" },

{
  "label": "太谷县",
  "value": "140726" },

{
  "label": "祁县",
  "value": "140727" },

{
  "label": "平遥县",
  "value": "140728" },

{
  "label": "灵石县",
  "value": "140729" },

{
  "label": "介休市",
  "value": "140781" }],


[{
  "label": "盐湖区",
  "value": "140802" },

{
  "label": "临猗县",
  "value": "140821" },

{
  "label": "万荣县",
  "value": "140822" },

{
  "label": "闻喜县",
  "value": "140823" },

{
  "label": "稷山县",
  "value": "140824" },

{
  "label": "新绛县",
  "value": "140825" },

{
  "label": "绛县",
  "value": "140826" },

{
  "label": "垣曲县",
  "value": "140827" },

{
  "label": "夏县",
  "value": "140828" },

{
  "label": "平陆县",
  "value": "140829" },

{
  "label": "芮城县",
  "value": "140830" },

{
  "label": "永济市",
  "value": "140881" },

{
  "label": "河津市",
  "value": "140882" }],


[{
  "label": "忻府区",
  "value": "140902" },

{
  "label": "定襄县",
  "value": "140921" },

{
  "label": "五台县",
  "value": "140922" },

{
  "label": "代县",
  "value": "140923" },

{
  "label": "繁峙县",
  "value": "140924" },

{
  "label": "宁武县",
  "value": "140925" },

{
  "label": "静乐县",
  "value": "140926" },

{
  "label": "神池县",
  "value": "140927" },

{
  "label": "五寨县",
  "value": "140928" },

{
  "label": "岢岚县",
  "value": "140929" },

{
  "label": "河曲县",
  "value": "140930" },

{
  "label": "保德县",
  "value": "140931" },

{
  "label": "偏关县",
  "value": "140932" },

{
  "label": "五台山风景名胜区",
  "value": "140971" },

{
  "label": "原平市",
  "value": "140981" }],


[{
  "label": "尧都区",
  "value": "141002" },

{
  "label": "曲沃县",
  "value": "141021" },

{
  "label": "翼城县",
  "value": "141022" },

{
  "label": "襄汾县",
  "value": "141023" },

{
  "label": "洪洞县",
  "value": "141024" },

{
  "label": "古县",
  "value": "141025" },

{
  "label": "安泽县",
  "value": "141026" },

{
  "label": "浮山县",
  "value": "141027" },

{
  "label": "吉县",
  "value": "141028" },

{
  "label": "乡宁县",
  "value": "141029" },

{
  "label": "大宁县",
  "value": "141030" },

{
  "label": "隰县",
  "value": "141031" },

{
  "label": "永和县",
  "value": "141032" },

{
  "label": "蒲县",
  "value": "141033" },

{
  "label": "汾西县",
  "value": "141034" },

{
  "label": "侯马市",
  "value": "141081" },

{
  "label": "霍州市",
  "value": "141082" }],


[{
  "label": "离石区",
  "value": "141102" },

{
  "label": "文水县",
  "value": "141121" },

{
  "label": "交城县",
  "value": "141122" },

{
  "label": "兴县",
  "value": "141123" },

{
  "label": "临县",
  "value": "141124" },

{
  "label": "柳林县",
  "value": "141125" },

{
  "label": "石楼县",
  "value": "141126" },

{
  "label": "岚县",
  "value": "141127" },

{
  "label": "方山县",
  "value": "141128" },

{
  "label": "中阳县",
  "value": "141129" },

{
  "label": "交口县",
  "value": "141130" },

{
  "label": "孝义市",
  "value": "141181" },

{
  "label": "汾阳市",
  "value": "141182" }]],



[
[{
  "label": "新城区",
  "value": "150102" },

{
  "label": "回民区",
  "value": "150103" },

{
  "label": "玉泉区",
  "value": "150104" },

{
  "label": "赛罕区",
  "value": "150105" },

{
  "label": "土默特左旗",
  "value": "150121" },

{
  "label": "托克托县",
  "value": "150122" },

{
  "label": "和林格尔县",
  "value": "150123" },

{
  "label": "清水河县",
  "value": "150124" },

{
  "label": "武川县",
  "value": "150125" },

{
  "label": "呼和浩特金海工业园区",
  "value": "150171" },

{
  "label": "呼和浩特经济技术开发区",
  "value": "150172" }],


[{
  "label": "东河区",
  "value": "150202" },

{
  "label": "昆都仑区",
  "value": "150203" },

{
  "label": "青山区",
  "value": "150204" },

{
  "label": "石拐区",
  "value": "150205" },

{
  "label": "白云鄂博矿区",
  "value": "150206" },

{
  "label": "九原区",
  "value": "150207" },

{
  "label": "土默特右旗",
  "value": "150221" },

{
  "label": "固阳县",
  "value": "150222" },

{
  "label": "达尔罕茂明安联合旗",
  "value": "150223" },

{
  "label": "包头稀土高新技术产业开发区",
  "value": "150271" }],


[{
  "label": "海勃湾区",
  "value": "150302" },

{
  "label": "海南区",
  "value": "150303" },

{
  "label": "乌达区",
  "value": "150304" }],


[{
  "label": "红山区",
  "value": "150402" },

{
  "label": "元宝山区",
  "value": "150403" },

{
  "label": "松山区",
  "value": "150404" },

{
  "label": "阿鲁科尔沁旗",
  "value": "150421" },

{
  "label": "巴林左旗",
  "value": "150422" },

{
  "label": "巴林右旗",
  "value": "150423" },

{
  "label": "林西县",
  "value": "150424" },

{
  "label": "克什克腾旗",
  "value": "150425" },

{
  "label": "翁牛特旗",
  "value": "150426" },

{
  "label": "喀喇沁旗",
  "value": "150428" },

{
  "label": "宁城县",
  "value": "150429" },

{
  "label": "敖汉旗",
  "value": "150430" }],


[{
  "label": "科尔沁区",
  "value": "150502" },

{
  "label": "科尔沁左翼中旗",
  "value": "150521" },

{
  "label": "科尔沁左翼后旗",
  "value": "150522" },

{
  "label": "开鲁县",
  "value": "150523" },

{
  "label": "库伦旗",
  "value": "150524" },

{
  "label": "奈曼旗",
  "value": "150525" },

{
  "label": "扎鲁特旗",
  "value": "150526" },

{
  "label": "通辽经济技术开发区",
  "value": "150571" },

{
  "label": "霍林郭勒市",
  "value": "150581" }],


[{
  "label": "东胜区",
  "value": "150602" },

{
  "label": "康巴什区",
  "value": "150603" },

{
  "label": "达拉特旗",
  "value": "150621" },

{
  "label": "准格尔旗",
  "value": "150622" },

{
  "label": "鄂托克前旗",
  "value": "150623" },

{
  "label": "鄂托克旗",
  "value": "150624" },

{
  "label": "杭锦旗",
  "value": "150625" },

{
  "label": "乌审旗",
  "value": "150626" },

{
  "label": "伊金霍洛旗",
  "value": "150627" }],


[{
  "label": "海拉尔区",
  "value": "150702" },

{
  "label": "扎赉诺尔区",
  "value": "150703" },

{
  "label": "阿荣旗",
  "value": "150721" },

{
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722" },

{
  "label": "鄂伦春自治旗",
  "value": "150723" },

{
  "label": "鄂温克族自治旗",
  "value": "150724" },

{
  "label": "陈巴尔虎旗",
  "value": "150725" },

{
  "label": "新巴尔虎左旗",
  "value": "150726" },

{
  "label": "新巴尔虎右旗",
  "value": "150727" },

{
  "label": "满洲里市",
  "value": "150781" },

{
  "label": "牙克石市",
  "value": "150782" },

{
  "label": "扎兰屯市",
  "value": "150783" },

{
  "label": "额尔古纳市",
  "value": "150784" },

{
  "label": "根河市",
  "value": "150785" }],


[{
  "label": "临河区",
  "value": "150802" },

{
  "label": "五原县",
  "value": "150821" },

{
  "label": "磴口县",
  "value": "150822" },

{
  "label": "乌拉特前旗",
  "value": "150823" },

{
  "label": "乌拉特中旗",
  "value": "150824" },

{
  "label": "乌拉特后旗",
  "value": "150825" },

{
  "label": "杭锦后旗",
  "value": "150826" }],


[{
  "label": "集宁区",
  "value": "150902" },

{
  "label": "卓资县",
  "value": "150921" },

{
  "label": "化德县",
  "value": "150922" },

{
  "label": "商都县",
  "value": "150923" },

{
  "label": "兴和县",
  "value": "150924" },

{
  "label": "凉城县",
  "value": "150925" },

{
  "label": "察哈尔右翼前旗",
  "value": "150926" },

{
  "label": "察哈尔右翼中旗",
  "value": "150927" },

{
  "label": "察哈尔右翼后旗",
  "value": "150928" },

{
  "label": "四子王旗",
  "value": "150929" },

{
  "label": "丰镇市",
  "value": "150981" }],


[{
  "label": "乌兰浩特市",
  "value": "152201" },

{
  "label": "阿尔山市",
  "value": "152202" },

{
  "label": "科尔沁右翼前旗",
  "value": "152221" },

{
  "label": "科尔沁右翼中旗",
  "value": "152222" },

{
  "label": "扎赉特旗",
  "value": "152223" },

{
  "label": "突泉县",
  "value": "152224" }],


[{
  "label": "二连浩特市",
  "value": "152501" },

{
  "label": "锡林浩特市",
  "value": "152502" },

{
  "label": "阿巴嘎旗",
  "value": "152522" },

{
  "label": "苏尼特左旗",
  "value": "152523" },

{
  "label": "苏尼特右旗",
  "value": "152524" },

{
  "label": "东乌珠穆沁旗",
  "value": "152525" },

{
  "label": "西乌珠穆沁旗",
  "value": "152526" },

{
  "label": "太仆寺旗",
  "value": "152527" },

{
  "label": "镶黄旗",
  "value": "152528" },

{
  "label": "正镶白旗",
  "value": "152529" },

{
  "label": "正蓝旗",
  "value": "152530" },

{
  "label": "多伦县",
  "value": "152531" },

{
  "label": "乌拉盖管委会",
  "value": "152571" }],


[{
  "label": "阿拉善左旗",
  "value": "152921" },

{
  "label": "阿拉善右旗",
  "value": "152922" },

{
  "label": "额济纳旗",
  "value": "152923" },

{
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971" }]],



[
[{
  "label": "和平区",
  "value": "210102" },

{
  "label": "沈河区",
  "value": "210103" },

{
  "label": "大东区",
  "value": "210104" },

{
  "label": "皇姑区",
  "value": "210105" },

{
  "label": "铁西区",
  "value": "210106" },

{
  "label": "苏家屯区",
  "value": "210111" },

{
  "label": "浑南区",
  "value": "210112" },

{
  "label": "沈北新区",
  "value": "210113" },

{
  "label": "于洪区",
  "value": "210114" },

{
  "label": "辽中区",
  "value": "210115" },

{
  "label": "康平县",
  "value": "210123" },

{
  "label": "法库县",
  "value": "210124" },

{
  "label": "新民市",
  "value": "210181" }],


[{
  "label": "中山区",
  "value": "210202" },

{
  "label": "西岗区",
  "value": "210203" },

{
  "label": "沙河口区",
  "value": "210204" },

{
  "label": "甘井子区",
  "value": "210211" },

{
  "label": "旅顺口区",
  "value": "210212" },

{
  "label": "金州区",
  "value": "210213" },

{
  "label": "普兰店区",
  "value": "210214" },

{
  "label": "长海县",
  "value": "210224" },

{
  "label": "瓦房店市",
  "value": "210281" },

{
  "label": "庄河市",
  "value": "210283" }],


[{
  "label": "铁东区",
  "value": "210302" },

{
  "label": "铁西区",
  "value": "210303" },

{
  "label": "立山区",
  "value": "210304" },

{
  "label": "千山区",
  "value": "210311" },

{
  "label": "台安县",
  "value": "210321" },

{
  "label": "岫岩满族自治县",
  "value": "210323" },

{
  "label": "海城市",
  "value": "210381" }],


[{
  "label": "新抚区",
  "value": "210402" },

{
  "label": "东洲区",
  "value": "210403" },

{
  "label": "望花区",
  "value": "210404" },

{
  "label": "顺城区",
  "value": "210411" },

{
  "label": "抚顺县",
  "value": "210421" },

{
  "label": "新宾满族自治县",
  "value": "210422" },

{
  "label": "清原满族自治县",
  "value": "210423" }],


[{
  "label": "平山区",
  "value": "210502" },

{
  "label": "溪湖区",
  "value": "210503" },

{
  "label": "明山区",
  "value": "210504" },

{
  "label": "南芬区",
  "value": "210505" },

{
  "label": "本溪满族自治县",
  "value": "210521" },

{
  "label": "桓仁满族自治县",
  "value": "210522" }],


[{
  "label": "元宝区",
  "value": "210602" },

{
  "label": "振兴区",
  "value": "210603" },

{
  "label": "振安区",
  "value": "210604" },

{
  "label": "宽甸满族自治县",
  "value": "210624" },

{
  "label": "东港市",
  "value": "210681" },

{
  "label": "凤城市",
  "value": "210682" }],


[{
  "label": "古塔区",
  "value": "210702" },

{
  "label": "凌河区",
  "value": "210703" },

{
  "label": "太和区",
  "value": "210711" },

{
  "label": "黑山县",
  "value": "210726" },

{
  "label": "义县",
  "value": "210727" },

{
  "label": "凌海市",
  "value": "210781" },

{
  "label": "北镇市",
  "value": "210782" }],


[{
  "label": "站前区",
  "value": "210802" },

{
  "label": "西市区",
  "value": "210803" },

{
  "label": "鲅鱼圈区",
  "value": "210804" },

{
  "label": "老边区",
  "value": "210811" },

{
  "label": "盖州市",
  "value": "210881" },

{
  "label": "大石桥市",
  "value": "210882" }],


[{
  "label": "海州区",
  "value": "210902" },

{
  "label": "新邱区",
  "value": "210903" },

{
  "label": "太平区",
  "value": "210904" },

{
  "label": "清河门区",
  "value": "210905" },

{
  "label": "细河区",
  "value": "210911" },

{
  "label": "阜新蒙古族自治县",
  "value": "210921" },

{
  "label": "彰武县",
  "value": "210922" }],


[{
  "label": "白塔区",
  "value": "211002" },

{
  "label": "文圣区",
  "value": "211003" },

{
  "label": "宏伟区",
  "value": "211004" },

{
  "label": "弓长岭区",
  "value": "211005" },

{
  "label": "太子河区",
  "value": "211011" },

{
  "label": "辽阳县",
  "value": "211021" },

{
  "label": "灯塔市",
  "value": "211081" }],


[{
  "label": "双台子区",
  "value": "211102" },

{
  "label": "兴隆台区",
  "value": "211103" },

{
  "label": "大洼区",
  "value": "211104" },

{
  "label": "盘山县",
  "value": "211122" }],


[{
  "label": "银州区",
  "value": "211202" },

{
  "label": "清河区",
  "value": "211204" },

{
  "label": "铁岭县",
  "value": "211221" },

{
  "label": "西丰县",
  "value": "211223" },

{
  "label": "昌图县",
  "value": "211224" },

{
  "label": "调兵山市",
  "value": "211281" },

{
  "label": "开原市",
  "value": "211282" }],


[{
  "label": "双塔区",
  "value": "211302" },

{
  "label": "龙城区",
  "value": "211303" },

{
  "label": "朝阳县",
  "value": "211321" },

{
  "label": "建平县",
  "value": "211322" },

{
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324" },

{
  "label": "北票市",
  "value": "211381" },

{
  "label": "凌源市",
  "value": "211382" }],


[{
  "label": "连山区",
  "value": "211402" },

{
  "label": "龙港区",
  "value": "211403" },

{
  "label": "南票区",
  "value": "211404" },

{
  "label": "绥中县",
  "value": "211421" },

{
  "label": "建昌县",
  "value": "211422" },

{
  "label": "兴城市",
  "value": "211481" }]],



[
[{
  "label": "南关区",
  "value": "220102" },

{
  "label": "宽城区",
  "value": "220103" },

{
  "label": "朝阳区",
  "value": "220104" },

{
  "label": "二道区",
  "value": "220105" },

{
  "label": "绿园区",
  "value": "220106" },

{
  "label": "双阳区",
  "value": "220112" },

{
  "label": "九台区",
  "value": "220113" },

{
  "label": "农安县",
  "value": "220122" },

{
  "label": "长春经济技术开发区",
  "value": "220171" },

{
  "label": "长春净月高新技术产业开发区",
  "value": "220172" },

{
  "label": "长春高新技术产业开发区",
  "value": "220173" },

{
  "label": "长春汽车经济技术开发区",
  "value": "220174" },

{
  "label": "榆树市",
  "value": "220182" },

{
  "label": "德惠市",
  "value": "220183" }],


[{
  "label": "昌邑区",
  "value": "220202" },

{
  "label": "龙潭区",
  "value": "220203" },

{
  "label": "船营区",
  "value": "220204" },

{
  "label": "丰满区",
  "value": "220211" },

{
  "label": "永吉县",
  "value": "220221" },

{
  "label": "吉林经济开发区",
  "value": "220271" },

{
  "label": "吉林高新技术产业开发区",
  "value": "220272" },

{
  "label": "吉林中国新加坡食品区",
  "value": "220273" },

{
  "label": "蛟河市",
  "value": "220281" },

{
  "label": "桦甸市",
  "value": "220282" },

{
  "label": "舒兰市",
  "value": "220283" },

{
  "label": "磐石市",
  "value": "220284" }],


[{
  "label": "铁西区",
  "value": "220302" },

{
  "label": "铁东区",
  "value": "220303" },

{
  "label": "梨树县",
  "value": "220322" },

{
  "label": "伊通满族自治县",
  "value": "220323" },

{
  "label": "公主岭市",
  "value": "220381" },

{
  "label": "双辽市",
  "value": "220382" }],


[{
  "label": "龙山区",
  "value": "220402" },

{
  "label": "西安区",
  "value": "220403" },

{
  "label": "东丰县",
  "value": "220421" },

{
  "label": "东辽县",
  "value": "220422" }],


[{
  "label": "东昌区",
  "value": "220502" },

{
  "label": "二道江区",
  "value": "220503" },

{
  "label": "通化县",
  "value": "220521" },

{
  "label": "辉南县",
  "value": "220523" },

{
  "label": "柳河县",
  "value": "220524" },

{
  "label": "梅河口市",
  "value": "220581" },

{
  "label": "集安市",
  "value": "220582" }],


[{
  "label": "浑江区",
  "value": "220602" },

{
  "label": "江源区",
  "value": "220605" },

{
  "label": "抚松县",
  "value": "220621" },

{
  "label": "靖宇县",
  "value": "220622" },

{
  "label": "长白朝鲜族自治县",
  "value": "220623" },

{
  "label": "临江市",
  "value": "220681" }],


[{
  "label": "宁江区",
  "value": "220702" },

{
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721" },

{
  "label": "长岭县",
  "value": "220722" },

{
  "label": "乾安县",
  "value": "220723" },

{
  "label": "吉林松原经济开发区",
  "value": "220771" },

{
  "label": "扶余市",
  "value": "220781" }],


[{
  "label": "洮北区",
  "value": "220802" },

{
  "label": "镇赉县",
  "value": "220821" },

{
  "label": "通榆县",
  "value": "220822" },

{
  "label": "吉林白城经济开发区",
  "value": "220871" },

{
  "label": "洮南市",
  "value": "220881" },

{
  "label": "大安市",
  "value": "220882" }],


[{
  "label": "延吉市",
  "value": "222401" },

{
  "label": "图们市",
  "value": "222402" },

{
  "label": "敦化市",
  "value": "222403" },

{
  "label": "珲春市",
  "value": "222404" },

{
  "label": "龙井市",
  "value": "222405" },

{
  "label": "和龙市",
  "value": "222406" },

{
  "label": "汪清县",
  "value": "222424" },

{
  "label": "安图县",
  "value": "222426" }]],



[
[{
  "label": "道里区",
  "value": "230102" },

{
  "label": "南岗区",
  "value": "230103" },

{
  "label": "道外区",
  "value": "230104" },

{
  "label": "平房区",
  "value": "230108" },

{
  "label": "松北区",
  "value": "230109" },

{
  "label": "香坊区",
  "value": "230110" },

{
  "label": "呼兰区",
  "value": "230111" },

{
  "label": "阿城区",
  "value": "230112" },

{
  "label": "双城区",
  "value": "230113" },

{
  "label": "依兰县",
  "value": "230123" },

{
  "label": "方正县",
  "value": "230124" },

{
  "label": "宾县",
  "value": "230125" },

{
  "label": "巴彦县",
  "value": "230126" },

{
  "label": "木兰县",
  "value": "230127" },

{
  "label": "通河县",
  "value": "230128" },

{
  "label": "延寿县",
  "value": "230129" },

{
  "label": "尚志市",
  "value": "230183" },

{
  "label": "五常市",
  "value": "230184" }],


[{
  "label": "龙沙区",
  "value": "230202" },

{
  "label": "建华区",
  "value": "230203" },

{
  "label": "铁锋区",
  "value": "230204" },

{
  "label": "昂昂溪区",
  "value": "230205" },

{
  "label": "富拉尔基区",
  "value": "230206" },

{
  "label": "碾子山区",
  "value": "230207" },

{
  "label": "梅里斯达斡尔族区",
  "value": "230208" },

{
  "label": "龙江县",
  "value": "230221" },

{
  "label": "依安县",
  "value": "230223" },

{
  "label": "泰来县",
  "value": "230224" },

{
  "label": "甘南县",
  "value": "230225" },

{
  "label": "富裕县",
  "value": "230227" },

{
  "label": "克山县",
  "value": "230229" },

{
  "label": "克东县",
  "value": "230230" },

{
  "label": "拜泉县",
  "value": "230231" },

{
  "label": "讷河市",
  "value": "230281" }],


[{
  "label": "鸡冠区",
  "value": "230302" },

{
  "label": "恒山区",
  "value": "230303" },

{
  "label": "滴道区",
  "value": "230304" },

{
  "label": "梨树区",
  "value": "230305" },

{
  "label": "城子河区",
  "value": "230306" },

{
  "label": "麻山区",
  "value": "230307" },

{
  "label": "鸡东县",
  "value": "230321" },

{
  "label": "虎林市",
  "value": "230381" },

{
  "label": "密山市",
  "value": "230382" }],


[{
  "label": "向阳区",
  "value": "230402" },

{
  "label": "工农区",
  "value": "230403" },

{
  "label": "南山区",
  "value": "230404" },

{
  "label": "兴安区",
  "value": "230405" },

{
  "label": "东山区",
  "value": "230406" },

{
  "label": "兴山区",
  "value": "230407" },

{
  "label": "萝北县",
  "value": "230421" },

{
  "label": "绥滨县",
  "value": "230422" }],


[{
  "label": "尖山区",
  "value": "230502" },

{
  "label": "岭东区",
  "value": "230503" },

{
  "label": "四方台区",
  "value": "230505" },

{
  "label": "宝山区",
  "value": "230506" },

{
  "label": "集贤县",
  "value": "230521" },

{
  "label": "友谊县",
  "value": "230522" },

{
  "label": "宝清县",
  "value": "230523" },

{
  "label": "饶河县",
  "value": "230524" }],


[{
  "label": "萨尔图区",
  "value": "230602" },

{
  "label": "龙凤区",
  "value": "230603" },

{
  "label": "让胡路区",
  "value": "230604" },

{
  "label": "红岗区",
  "value": "230605" },

{
  "label": "大同区",
  "value": "230606" },

{
  "label": "肇州县",
  "value": "230621" },

{
  "label": "肇源县",
  "value": "230622" },

{
  "label": "林甸县",
  "value": "230623" },

{
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624" },

{
  "label": "大庆高新技术产业开发区",
  "value": "230671" }],


[{
  "label": "伊春区",
  "value": "230702" },

{
  "label": "南岔区",
  "value": "230703" },

{
  "label": "友好区",
  "value": "230704" },

{
  "label": "西林区",
  "value": "230705" },

{
  "label": "翠峦区",
  "value": "230706" },

{
  "label": "新青区",
  "value": "230707" },

{
  "label": "美溪区",
  "value": "230708" },

{
  "label": "金山屯区",
  "value": "230709" },

{
  "label": "五营区",
  "value": "230710" },

{
  "label": "乌马河区",
  "value": "230711" },

{
  "label": "汤旺河区",
  "value": "230712" },

{
  "label": "带岭区",
  "value": "230713" },

{
  "label": "乌伊岭区",
  "value": "230714" },

{
  "label": "红星区",
  "value": "230715" },

{
  "label": "上甘岭区",
  "value": "230716" },

{
  "label": "嘉荫县",
  "value": "230722" },

{
  "label": "铁力市",
  "value": "230781" }],


[{
  "label": "向阳区",
  "value": "230803" },

{
  "label": "前进区",
  "value": "230804" },

{
  "label": "东风区",
  "value": "230805" },

{
  "label": "郊区",
  "value": "230811" },

{
  "label": "桦南县",
  "value": "230822" },

{
  "label": "桦川县",
  "value": "230826" },

{
  "label": "汤原县",
  "value": "230828" },

{
  "label": "同江市",
  "value": "230881" },

{
  "label": "富锦市",
  "value": "230882" },

{
  "label": "抚远市",
  "value": "230883" }],


[{
  "label": "新兴区",
  "value": "230902" },

{
  "label": "桃山区",
  "value": "230903" },

{
  "label": "茄子河区",
  "value": "230904" },

{
  "label": "勃利县",
  "value": "230921" }],


[{
  "label": "东安区",
  "value": "231002" },

{
  "label": "阳明区",
  "value": "231003" },

{
  "label": "爱民区",
  "value": "231004" },

{
  "label": "西安区",
  "value": "231005" },

{
  "label": "林口县",
  "value": "231025" },

{
  "label": "牡丹江经济技术开发区",
  "value": "231071" },

{
  "label": "绥芬河市",
  "value": "231081" },

{
  "label": "海林市",
  "value": "231083" },

{
  "label": "宁安市",
  "value": "231084" },

{
  "label": "穆棱市",
  "value": "231085" },

{
  "label": "东宁市",
  "value": "231086" }],


[{
  "label": "爱辉区",
  "value": "231102" },

{
  "label": "嫩江县",
  "value": "231121" },

{
  "label": "逊克县",
  "value": "231123" },

{
  "label": "孙吴县",
  "value": "231124" },

{
  "label": "北安市",
  "value": "231181" },

{
  "label": "五大连池市",
  "value": "231182" }],


[{
  "label": "北林区",
  "value": "231202" },

{
  "label": "望奎县",
  "value": "231221" },

{
  "label": "兰西县",
  "value": "231222" },

{
  "label": "青冈县",
  "value": "231223" },

{
  "label": "庆安县",
  "value": "231224" },

{
  "label": "明水县",
  "value": "231225" },

{
  "label": "绥棱县",
  "value": "231226" },

{
  "label": "安达市",
  "value": "231281" },

{
  "label": "肇东市",
  "value": "231282" },

{
  "label": "海伦市",
  "value": "231283" }],


[{
  "label": "加格达奇区",
  "value": "232701" },

{
  "label": "松岭区",
  "value": "232702" },

{
  "label": "新林区",
  "value": "232703" },

{
  "label": "呼中区",
  "value": "232704" },

{
  "label": "呼玛县",
  "value": "232721" },

{
  "label": "塔河县",
  "value": "232722" },

{
  "label": "漠河县",
  "value": "232723" }]],



[
[{
  "label": "黄浦区",
  "value": "310101" },

{
  "label": "徐汇区",
  "value": "310104" },

{
  "label": "长宁区",
  "value": "310105" },

{
  "label": "静安区",
  "value": "310106" },

{
  "label": "普陀区",
  "value": "310107" },

{
  "label": "虹口区",
  "value": "310109" },

{
  "label": "杨浦区",
  "value": "310110" },

{
  "label": "闵行区",
  "value": "310112" },

{
  "label": "宝山区",
  "value": "310113" },

{
  "label": "嘉定区",
  "value": "310114" },

{
  "label": "浦东新区",
  "value": "310115" },

{
  "label": "金山区",
  "value": "310116" },

{
  "label": "松江区",
  "value": "310117" },

{
  "label": "青浦区",
  "value": "310118" },

{
  "label": "奉贤区",
  "value": "310120" },

{
  "label": "崇明区",
  "value": "310151" }]],



[
[{
  "label": "玄武区",
  "value": "320102" },

{
  "label": "秦淮区",
  "value": "320104" },

{
  "label": "建邺区",
  "value": "320105" },

{
  "label": "鼓楼区",
  "value": "320106" },

{
  "label": "浦口区",
  "value": "320111" },

{
  "label": "栖霞区",
  "value": "320113" },

{
  "label": "雨花台区",
  "value": "320114" },

{
  "label": "江宁区",
  "value": "320115" },

{
  "label": "六合区",
  "value": "320116" },

{
  "label": "溧水区",
  "value": "320117" },

{
  "label": "高淳区",
  "value": "320118" }],


[{
  "label": "锡山区",
  "value": "320205" },

{
  "label": "惠山区",
  "value": "320206" },

{
  "label": "滨湖区",
  "value": "320211" },

{
  "label": "梁溪区",
  "value": "320213" },

{
  "label": "新吴区",
  "value": "320214" },

{
  "label": "江阴市",
  "value": "320281" },

{
  "label": "宜兴市",
  "value": "320282" }],


[{
  "label": "鼓楼区",
  "value": "320302" },

{
  "label": "云龙区",
  "value": "320303" },

{
  "label": "贾汪区",
  "value": "320305" },

{
  "label": "泉山区",
  "value": "320311" },

{
  "label": "铜山区",
  "value": "320312" },

{
  "label": "丰县",
  "value": "320321" },

{
  "label": "沛县",
  "value": "320322" },

{
  "label": "睢宁县",
  "value": "320324" },

{
  "label": "徐州经济技术开发区",
  "value": "320371" },

{
  "label": "新沂市",
  "value": "320381" },

{
  "label": "邳州市",
  "value": "320382" }],


[{
  "label": "天宁区",
  "value": "320402" },

{
  "label": "钟楼区",
  "value": "320404" },

{
  "label": "新北区",
  "value": "320411" },

{
  "label": "武进区",
  "value": "320412" },

{
  "label": "金坛区",
  "value": "320413" },

{
  "label": "溧阳市",
  "value": "320481" }],


[{
  "label": "虎丘区",
  "value": "320505" },

{
  "label": "吴中区",
  "value": "320506" },

{
  "label": "相城区",
  "value": "320507" },

{
  "label": "姑苏区",
  "value": "320508" },

{
  "label": "吴江区",
  "value": "320509" },

{
  "label": "苏州工业园区",
  "value": "320571" },

{
  "label": "常熟市",
  "value": "320581" },

{
  "label": "张家港市",
  "value": "320582" },

{
  "label": "昆山市",
  "value": "320583" },

{
  "label": "太仓市",
  "value": "320585" }],


[{
  "label": "崇川区",
  "value": "320602" },

{
  "label": "港闸区",
  "value": "320611" },

{
  "label": "通州区",
  "value": "320612" },

{
  "label": "海安县",
  "value": "320621" },

{
  "label": "如东县",
  "value": "320623" },

{
  "label": "南通经济技术开发区",
  "value": "320671" },

{
  "label": "启东市",
  "value": "320681" },

{
  "label": "如皋市",
  "value": "320682" },

{
  "label": "海门市",
  "value": "320684" }],


[{
  "label": "连云区",
  "value": "320703" },

{
  "label": "海州区",
  "value": "320706" },

{
  "label": "赣榆区",
  "value": "320707" },

{
  "label": "东海县",
  "value": "320722" },

{
  "label": "灌云县",
  "value": "320723" },

{
  "label": "灌南县",
  "value": "320724" },

{
  "label": "连云港经济技术开发区",
  "value": "320771" },

{
  "label": "连云港高新技术产业开发区",
  "value": "320772" }],


[{
  "label": "淮安区",
  "value": "320803" },

{
  "label": "淮阴区",
  "value": "320804" },

{
  "label": "清江浦区",
  "value": "320812" },

{
  "label": "洪泽区",
  "value": "320813" },

{
  "label": "涟水县",
  "value": "320826" },

{
  "label": "盱眙县",
  "value": "320830" },

{
  "label": "金湖县",
  "value": "320831" },

{
  "label": "淮安经济技术开发区",
  "value": "320871" }],


[{
  "label": "亭湖区",
  "value": "320902" },

{
  "label": "盐都区",
  "value": "320903" },

{
  "label": "大丰区",
  "value": "320904" },

{
  "label": "响水县",
  "value": "320921" },

{
  "label": "滨海县",
  "value": "320922" },

{
  "label": "阜宁县",
  "value": "320923" },

{
  "label": "射阳县",
  "value": "320924" },

{
  "label": "建湖县",
  "value": "320925" },

{
  "label": "盐城经济技术开发区",
  "value": "320971" },

{
  "label": "东台市",
  "value": "320981" }],


[{
  "label": "广陵区",
  "value": "321002" },

{
  "label": "邗江区",
  "value": "321003" },

{
  "label": "江都区",
  "value": "321012" },

{
  "label": "宝应县",
  "value": "321023" },

{
  "label": "扬州经济技术开发区",
  "value": "321071" },

{
  "label": "仪征市",
  "value": "321081" },

{
  "label": "高邮市",
  "value": "321084" }],


[{
  "label": "京口区",
  "value": "321102" },

{
  "label": "润州区",
  "value": "321111" },

{
  "label": "丹徒区",
  "value": "321112" },

{
  "label": "镇江新区",
  "value": "321171" },

{
  "label": "丹阳市",
  "value": "321181" },

{
  "label": "扬中市",
  "value": "321182" },

{
  "label": "句容市",
  "value": "321183" }],


[{
  "label": "海陵区",
  "value": "321202" },

{
  "label": "高港区",
  "value": "321203" },

{
  "label": "姜堰区",
  "value": "321204" },

{
  "label": "泰州医药高新技术产业开发区",
  "value": "321271" },

{
  "label": "兴化市",
  "value": "321281" },

{
  "label": "靖江市",
  "value": "321282" },

{
  "label": "泰兴市",
  "value": "321283" }],


[{
  "label": "宿城区",
  "value": "321302" },

{
  "label": "宿豫区",
  "value": "321311" },

{
  "label": "沭阳县",
  "value": "321322" },

{
  "label": "泗阳县",
  "value": "321323" },

{
  "label": "泗洪县",
  "value": "321324" },

{
  "label": "宿迁经济技术开发区",
  "value": "321371" }]],



[
[{
  "label": "上城区",
  "value": "330102" },

{
  "label": "下城区",
  "value": "330103" },

{
  "label": "江干区",
  "value": "330104" },

{
  "label": "拱墅区",
  "value": "330105" },

{
  "label": "西湖区",
  "value": "330106" },

{
  "label": "滨江区",
  "value": "330108" },

{
  "label": "萧山区",
  "value": "330109" },

{
  "label": "余杭区",
  "value": "330110" },

{
  "label": "富阳区",
  "value": "330111" },

{
  "label": "临安区",
  "value": "330112" },

{
  "label": "桐庐县",
  "value": "330122" },

{
  "label": "淳安县",
  "value": "330127" },

{
  "label": "建德市",
  "value": "330182" }],


[{
  "label": "海曙区",
  "value": "330203" },

{
  "label": "江北区",
  "value": "330205" },

{
  "label": "北仑区",
  "value": "330206" },

{
  "label": "镇海区",
  "value": "330211" },

{
  "label": "鄞州区",
  "value": "330212" },

{
  "label": "奉化区",
  "value": "330213" },

{
  "label": "象山县",
  "value": "330225" },

{
  "label": "宁海县",
  "value": "330226" },

{
  "label": "余姚市",
  "value": "330281" },

{
  "label": "慈溪市",
  "value": "330282" }],


[{
  "label": "鹿城区",
  "value": "330302" },

{
  "label": "龙湾区",
  "value": "330303" },

{
  "label": "瓯海区",
  "value": "330304" },

{
  "label": "洞头区",
  "value": "330305" },

{
  "label": "永嘉县",
  "value": "330324" },

{
  "label": "平阳县",
  "value": "330326" },

{
  "label": "苍南县",
  "value": "330327" },

{
  "label": "文成县",
  "value": "330328" },

{
  "label": "泰顺县",
  "value": "330329" },

{
  "label": "温州经济技术开发区",
  "value": "330371" },

{
  "label": "瑞安市",
  "value": "330381" },

{
  "label": "乐清市",
  "value": "330382" }],


[{
  "label": "南湖区",
  "value": "330402" },

{
  "label": "秀洲区",
  "value": "330411" },

{
  "label": "嘉善县",
  "value": "330421" },

{
  "label": "海盐县",
  "value": "330424" },

{
  "label": "海宁市",
  "value": "330481" },

{
  "label": "平湖市",
  "value": "330482" },

{
  "label": "桐乡市",
  "value": "330483" }],


[{
  "label": "吴兴区",
  "value": "330502" },

{
  "label": "南浔区",
  "value": "330503" },

{
  "label": "德清县",
  "value": "330521" },

{
  "label": "长兴县",
  "value": "330522" },

{
  "label": "安吉县",
  "value": "330523" }],


[{
  "label": "越城区",
  "value": "330602" },

{
  "label": "柯桥区",
  "value": "330603" },

{
  "label": "上虞区",
  "value": "330604" },

{
  "label": "新昌县",
  "value": "330624" },

{
  "label": "诸暨市",
  "value": "330681" },

{
  "label": "嵊州市",
  "value": "330683" }],


[{
  "label": "婺城区",
  "value": "330702" },

{
  "label": "金东区",
  "value": "330703" },

{
  "label": "武义县",
  "value": "330723" },

{
  "label": "浦江县",
  "value": "330726" },

{
  "label": "磐安县",
  "value": "330727" },

{
  "label": "兰溪市",
  "value": "330781" },

{
  "label": "义乌市",
  "value": "330782" },

{
  "label": "东阳市",
  "value": "330783" },

{
  "label": "永康市",
  "value": "330784" }],


[{
  "label": "柯城区",
  "value": "330802" },

{
  "label": "衢江区",
  "value": "330803" },

{
  "label": "常山县",
  "value": "330822" },

{
  "label": "开化县",
  "value": "330824" },

{
  "label": "龙游县",
  "value": "330825" },

{
  "label": "江山市",
  "value": "330881" }],


[{
  "label": "定海区",
  "value": "330902" },

{
  "label": "普陀区",
  "value": "330903" },

{
  "label": "岱山县",
  "value": "330921" },

{
  "label": "嵊泗县",
  "value": "330922" }],


[{
  "label": "椒江区",
  "value": "331002" },

{
  "label": "黄岩区",
  "value": "331003" },

{
  "label": "路桥区",
  "value": "331004" },

{
  "label": "三门县",
  "value": "331022" },

{
  "label": "天台县",
  "value": "331023" },

{
  "label": "仙居县",
  "value": "331024" },

{
  "label": "温岭市",
  "value": "331081" },

{
  "label": "临海市",
  "value": "331082" },

{
  "label": "玉环市",
  "value": "331083" }],


[{
  "label": "莲都区",
  "value": "331102" },

{
  "label": "青田县",
  "value": "331121" },

{
  "label": "缙云县",
  "value": "331122" },

{
  "label": "遂昌县",
  "value": "331123" },

{
  "label": "松阳县",
  "value": "331124" },

{
  "label": "云和县",
  "value": "331125" },

{
  "label": "庆元县",
  "value": "331126" },

{
  "label": "景宁畲族自治县",
  "value": "331127" },

{
  "label": "龙泉市",
  "value": "331181" }]],



[
[{
  "label": "瑶海区",
  "value": "340102" },

{
  "label": "庐阳区",
  "value": "340103" },

{
  "label": "蜀山区",
  "value": "340104" },

{
  "label": "包河区",
  "value": "340111" },

{
  "label": "长丰县",
  "value": "340121" },

{
  "label": "肥东县",
  "value": "340122" },

{
  "label": "肥西县",
  "value": "340123" },

{
  "label": "庐江县",
  "value": "340124" },

{
  "label": "合肥高新技术产业开发区",
  "value": "340171" },

{
  "label": "合肥经济技术开发区",
  "value": "340172" },

{
  "label": "合肥新站高新技术产业开发区",
  "value": "340173" },

{
  "label": "巢湖市",
  "value": "340181" }],


[{
  "label": "镜湖区",
  "value": "340202" },

{
  "label": "弋江区",
  "value": "340203" },

{
  "label": "鸠江区",
  "value": "340207" },

{
  "label": "三山区",
  "value": "340208" },

{
  "label": "芜湖县",
  "value": "340221" },

{
  "label": "繁昌县",
  "value": "340222" },

{
  "label": "南陵县",
  "value": "340223" },

{
  "label": "无为县",
  "value": "340225" },

{
  "label": "芜湖经济技术开发区",
  "value": "340271" },

{
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272" }],


[{
  "label": "龙子湖区",
  "value": "340302" },

{
  "label": "蚌山区",
  "value": "340303" },

{
  "label": "禹会区",
  "value": "340304" },

{
  "label": "淮上区",
  "value": "340311" },

{
  "label": "怀远县",
  "value": "340321" },

{
  "label": "五河县",
  "value": "340322" },

{
  "label": "固镇县",
  "value": "340323" },

{
  "label": "蚌埠市高新技术开发区",
  "value": "340371" },

{
  "label": "蚌埠市经济开发区",
  "value": "340372" }],


[{
  "label": "大通区",
  "value": "340402" },

{
  "label": "田家庵区",
  "value": "340403" },

{
  "label": "谢家集区",
  "value": "340404" },

{
  "label": "八公山区",
  "value": "340405" },

{
  "label": "潘集区",
  "value": "340406" },

{
  "label": "凤台县",
  "value": "340421" },

{
  "label": "寿县",
  "value": "340422" }],


[{
  "label": "花山区",
  "value": "340503" },

{
  "label": "雨山区",
  "value": "340504" },

{
  "label": "博望区",
  "value": "340506" },

{
  "label": "当涂县",
  "value": "340521" },

{
  "label": "含山县",
  "value": "340522" },

{
  "label": "和县",
  "value": "340523" }],


[{
  "label": "杜集区",
  "value": "340602" },

{
  "label": "相山区",
  "value": "340603" },

{
  "label": "烈山区",
  "value": "340604" },

{
  "label": "濉溪县",
  "value": "340621" }],


[{
  "label": "铜官区",
  "value": "340705" },

{
  "label": "义安区",
  "value": "340706" },

{
  "label": "郊区",
  "value": "340711" },

{
  "label": "枞阳县",
  "value": "340722" }],


[{
  "label": "迎江区",
  "value": "340802" },

{
  "label": "大观区",
  "value": "340803" },

{
  "label": "宜秀区",
  "value": "340811" },

{
  "label": "怀宁县",
  "value": "340822" },

{
  "label": "潜山县",
  "value": "340824" },

{
  "label": "太湖县",
  "value": "340825" },

{
  "label": "宿松县",
  "value": "340826" },

{
  "label": "望江县",
  "value": "340827" },

{
  "label": "岳西县",
  "value": "340828" },

{
  "label": "安徽安庆经济开发区",
  "value": "340871" },

{
  "label": "桐城市",
  "value": "340881" }],


[{
  "label": "屯溪区",
  "value": "341002" },

{
  "label": "黄山区",
  "value": "341003" },

{
  "label": "徽州区",
  "value": "341004" },

{
  "label": "歙县",
  "value": "341021" },

{
  "label": "休宁县",
  "value": "341022" },

{
  "label": "黟县",
  "value": "341023" },

{
  "label": "祁门县",
  "value": "341024" }],


[{
  "label": "琅琊区",
  "value": "341102" },

{
  "label": "南谯区",
  "value": "341103" },

{
  "label": "来安县",
  "value": "341122" },

{
  "label": "全椒县",
  "value": "341124" },

{
  "label": "定远县",
  "value": "341125" },

{
  "label": "凤阳县",
  "value": "341126" },

{
  "label": "苏滁现代产业园",
  "value": "341171" },

{
  "label": "滁州经济技术开发区",
  "value": "341172" },

{
  "label": "天长市",
  "value": "341181" },

{
  "label": "明光市",
  "value": "341182" }],


[{
  "label": "颍州区",
  "value": "341202" },

{
  "label": "颍东区",
  "value": "341203" },

{
  "label": "颍泉区",
  "value": "341204" },

{
  "label": "临泉县",
  "value": "341221" },

{
  "label": "太和县",
  "value": "341222" },

{
  "label": "阜南县",
  "value": "341225" },

{
  "label": "颍上县",
  "value": "341226" },

{
  "label": "阜阳合肥现代产业园区",
  "value": "341271" },

{
  "label": "阜阳经济技术开发区",
  "value": "341272" },

{
  "label": "界首市",
  "value": "341282" }],


[{
  "label": "埇桥区",
  "value": "341302" },

{
  "label": "砀山县",
  "value": "341321" },

{
  "label": "萧县",
  "value": "341322" },

{
  "label": "灵璧县",
  "value": "341323" },

{
  "label": "泗县",
  "value": "341324" },

{
  "label": "宿州马鞍山现代产业园区",
  "value": "341371" },

{
  "label": "宿州经济技术开发区",
  "value": "341372" }],


[{
  "label": "金安区",
  "value": "341502" },

{
  "label": "裕安区",
  "value": "341503" },

{
  "label": "叶集区",
  "value": "341504" },

{
  "label": "霍邱县",
  "value": "341522" },

{
  "label": "舒城县",
  "value": "341523" },

{
  "label": "金寨县",
  "value": "341524" },

{
  "label": "霍山县",
  "value": "341525" }],


[{
  "label": "谯城区",
  "value": "341602" },

{
  "label": "涡阳县",
  "value": "341621" },

{
  "label": "蒙城县",
  "value": "341622" },

{
  "label": "利辛县",
  "value": "341623" }],


[{
  "label": "贵池区",
  "value": "341702" },

{
  "label": "东至县",
  "value": "341721" },

{
  "label": "石台县",
  "value": "341722" },

{
  "label": "青阳县",
  "value": "341723" }],


[{
  "label": "宣州区",
  "value": "341802" },

{
  "label": "郎溪县",
  "value": "341821" },

{
  "label": "广德县",
  "value": "341822" },

{
  "label": "泾县",
  "value": "341823" },

{
  "label": "绩溪县",
  "value": "341824" },

{
  "label": "旌德县",
  "value": "341825" },

{
  "label": "宣城市经济开发区",
  "value": "341871" },

{
  "label": "宁国市",
  "value": "341881" }]],



[
[{
  "label": "鼓楼区",
  "value": "350102" },

{
  "label": "台江区",
  "value": "350103" },

{
  "label": "仓山区",
  "value": "350104" },

{
  "label": "马尾区",
  "value": "350105" },

{
  "label": "晋安区",
  "value": "350111" },

{
  "label": "闽侯县",
  "value": "350121" },

{
  "label": "连江县",
  "value": "350122" },

{
  "label": "罗源县",
  "value": "350123" },

{
  "label": "闽清县",
  "value": "350124" },

{
  "label": "永泰县",
  "value": "350125" },

{
  "label": "平潭县",
  "value": "350128" },

{
  "label": "福清市",
  "value": "350181" },

{
  "label": "长乐市",
  "value": "350182" }],


[{
  "label": "思明区",
  "value": "350203" },

{
  "label": "海沧区",
  "value": "350205" },

{
  "label": "湖里区",
  "value": "350206" },

{
  "label": "集美区",
  "value": "350211" },

{
  "label": "同安区",
  "value": "350212" },

{
  "label": "翔安区",
  "value": "350213" }],


[{
  "label": "城厢区",
  "value": "350302" },

{
  "label": "涵江区",
  "value": "350303" },

{
  "label": "荔城区",
  "value": "350304" },

{
  "label": "秀屿区",
  "value": "350305" },

{
  "label": "仙游县",
  "value": "350322" }],


[{
  "label": "梅列区",
  "value": "350402" },

{
  "label": "三元区",
  "value": "350403" },

{
  "label": "明溪县",
  "value": "350421" },

{
  "label": "清流县",
  "value": "350423" },

{
  "label": "宁化县",
  "value": "350424" },

{
  "label": "大田县",
  "value": "350425" },

{
  "label": "尤溪县",
  "value": "350426" },

{
  "label": "沙县",
  "value": "350427" },

{
  "label": "将乐县",
  "value": "350428" },

{
  "label": "泰宁县",
  "value": "350429" },

{
  "label": "建宁县",
  "value": "350430" },

{
  "label": "永安市",
  "value": "350481" }],


[{
  "label": "鲤城区",
  "value": "350502" },

{
  "label": "丰泽区",
  "value": "350503" },

{
  "label": "洛江区",
  "value": "350504" },

{
  "label": "泉港区",
  "value": "350505" },

{
  "label": "惠安县",
  "value": "350521" },

{
  "label": "安溪县",
  "value": "350524" },

{
  "label": "永春县",
  "value": "350525" },

{
  "label": "德化县",
  "value": "350526" },

{
  "label": "金门县",
  "value": "350527" },

{
  "label": "石狮市",
  "value": "350581" },

{
  "label": "晋江市",
  "value": "350582" },

{
  "label": "南安市",
  "value": "350583" }],


[{
  "label": "芗城区",
  "value": "350602" },

{
  "label": "龙文区",
  "value": "350603" },

{
  "label": "云霄县",
  "value": "350622" },

{
  "label": "漳浦县",
  "value": "350623" },

{
  "label": "诏安县",
  "value": "350624" },

{
  "label": "长泰县",
  "value": "350625" },

{
  "label": "东山县",
  "value": "350626" },

{
  "label": "南靖县",
  "value": "350627" },

{
  "label": "平和县",
  "value": "350628" },

{
  "label": "华安县",
  "value": "350629" },

{
  "label": "龙海市",
  "value": "350681" }],


[{
  "label": "延平区",
  "value": "350702" },

{
  "label": "建阳区",
  "value": "350703" },

{
  "label": "顺昌县",
  "value": "350721" },

{
  "label": "浦城县",
  "value": "350722" },

{
  "label": "光泽县",
  "value": "350723" },

{
  "label": "松溪县",
  "value": "350724" },

{
  "label": "政和县",
  "value": "350725" },

{
  "label": "邵武市",
  "value": "350781" },

{
  "label": "武夷山市",
  "value": "350782" },

{
  "label": "建瓯市",
  "value": "350783" }],


[{
  "label": "新罗区",
  "value": "350802" },

{
  "label": "永定区",
  "value": "350803" },

{
  "label": "长汀县",
  "value": "350821" },

{
  "label": "上杭县",
  "value": "350823" },

{
  "label": "武平县",
  "value": "350824" },

{
  "label": "连城县",
  "value": "350825" },

{
  "label": "漳平市",
  "value": "350881" }],


[{
  "label": "蕉城区",
  "value": "350902" },

{
  "label": "霞浦县",
  "value": "350921" },

{
  "label": "古田县",
  "value": "350922" },

{
  "label": "屏南县",
  "value": "350923" },

{
  "label": "寿宁县",
  "value": "350924" },

{
  "label": "周宁县",
  "value": "350925" },

{
  "label": "柘荣县",
  "value": "350926" },

{
  "label": "福安市",
  "value": "350981" },

{
  "label": "福鼎市",
  "value": "350982" }]],



[
[{
  "label": "东湖区",
  "value": "360102" },

{
  "label": "西湖区",
  "value": "360103" },

{
  "label": "青云谱区",
  "value": "360104" },

{
  "label": "湾里区",
  "value": "360105" },

{
  "label": "青山湖区",
  "value": "360111" },

{
  "label": "新建区",
  "value": "360112" },

{
  "label": "南昌县",
  "value": "360121" },

{
  "label": "安义县",
  "value": "360123" },

{
  "label": "进贤县",
  "value": "360124" }],


[{
  "label": "昌江区",
  "value": "360202" },

{
  "label": "珠山区",
  "value": "360203" },

{
  "label": "浮梁县",
  "value": "360222" },

{
  "label": "乐平市",
  "value": "360281" }],


[{
  "label": "安源区",
  "value": "360302" },

{
  "label": "湘东区",
  "value": "360313" },

{
  "label": "莲花县",
  "value": "360321" },

{
  "label": "上栗县",
  "value": "360322" },

{
  "label": "芦溪县",
  "value": "360323" }],


[{
  "label": "濂溪区",
  "value": "360402" },

{
  "label": "浔阳区",
  "value": "360403" },

{
  "label": "柴桑区",
  "value": "360404" },

{
  "label": "武宁县",
  "value": "360423" },

{
  "label": "修水县",
  "value": "360424" },

{
  "label": "永修县",
  "value": "360425" },

{
  "label": "德安县",
  "value": "360426" },

{
  "label": "都昌县",
  "value": "360428" },

{
  "label": "湖口县",
  "value": "360429" },

{
  "label": "彭泽县",
  "value": "360430" },

{
  "label": "瑞昌市",
  "value": "360481" },

{
  "label": "共青城市",
  "value": "360482" },

{
  "label": "庐山市",
  "value": "360483" }],


[{
  "label": "渝水区",
  "value": "360502" },

{
  "label": "分宜县",
  "value": "360521" }],


[{
  "label": "月湖区",
  "value": "360602" },

{
  "label": "余江县",
  "value": "360622" },

{
  "label": "贵溪市",
  "value": "360681" }],


[{
  "label": "章贡区",
  "value": "360702" },

{
  "label": "南康区",
  "value": "360703" },

{
  "label": "赣县区",
  "value": "360704" },

{
  "label": "信丰县",
  "value": "360722" },

{
  "label": "大余县",
  "value": "360723" },

{
  "label": "上犹县",
  "value": "360724" },

{
  "label": "崇义县",
  "value": "360725" },

{
  "label": "安远县",
  "value": "360726" },

{
  "label": "龙南县",
  "value": "360727" },

{
  "label": "定南县",
  "value": "360728" },

{
  "label": "全南县",
  "value": "360729" },

{
  "label": "宁都县",
  "value": "360730" },

{
  "label": "于都县",
  "value": "360731" },

{
  "label": "兴国县",
  "value": "360732" },

{
  "label": "会昌县",
  "value": "360733" },

{
  "label": "寻乌县",
  "value": "360734" },

{
  "label": "石城县",
  "value": "360735" },

{
  "label": "瑞金市",
  "value": "360781" }],


[{
  "label": "吉州区",
  "value": "360802" },

{
  "label": "青原区",
  "value": "360803" },

{
  "label": "吉安县",
  "value": "360821" },

{
  "label": "吉水县",
  "value": "360822" },

{
  "label": "峡江县",
  "value": "360823" },

{
  "label": "新干县",
  "value": "360824" },

{
  "label": "永丰县",
  "value": "360825" },

{
  "label": "泰和县",
  "value": "360826" },

{
  "label": "遂川县",
  "value": "360827" },

{
  "label": "万安县",
  "value": "360828" },

{
  "label": "安福县",
  "value": "360829" },

{
  "label": "永新县",
  "value": "360830" },

{
  "label": "井冈山市",
  "value": "360881" }],


[{
  "label": "袁州区",
  "value": "360902" },

{
  "label": "奉新县",
  "value": "360921" },

{
  "label": "万载县",
  "value": "360922" },

{
  "label": "上高县",
  "value": "360923" },

{
  "label": "宜丰县",
  "value": "360924" },

{
  "label": "靖安县",
  "value": "360925" },

{
  "label": "铜鼓县",
  "value": "360926" },

{
  "label": "丰城市",
  "value": "360981" },

{
  "label": "樟树市",
  "value": "360982" },

{
  "label": "高安市",
  "value": "360983" }],


[{
  "label": "临川区",
  "value": "361002" },

{
  "label": "东乡区",
  "value": "361003" },

{
  "label": "南城县",
  "value": "361021" },

{
  "label": "黎川县",
  "value": "361022" },

{
  "label": "南丰县",
  "value": "361023" },

{
  "label": "崇仁县",
  "value": "361024" },

{
  "label": "乐安县",
  "value": "361025" },

{
  "label": "宜黄县",
  "value": "361026" },

{
  "label": "金溪县",
  "value": "361027" },

{
  "label": "资溪县",
  "value": "361028" },

{
  "label": "广昌县",
  "value": "361030" }],


[{
  "label": "信州区",
  "value": "361102" },

{
  "label": "广丰区",
  "value": "361103" },

{
  "label": "上饶县",
  "value": "361121" },

{
  "label": "玉山县",
  "value": "361123" },

{
  "label": "铅山县",
  "value": "361124" },

{
  "label": "横峰县",
  "value": "361125" },

{
  "label": "弋阳县",
  "value": "361126" },

{
  "label": "余干县",
  "value": "361127" },

{
  "label": "鄱阳县",
  "value": "361128" },

{
  "label": "万年县",
  "value": "361129" },

{
  "label": "婺源县",
  "value": "361130" },

{
  "label": "德兴市",
  "value": "361181" }]],



[
[{
  "label": "历下区",
  "value": "370102" },

{
  "label": "市中区",
  "value": "370103" },

{
  "label": "槐荫区",
  "value": "370104" },

{
  "label": "天桥区",
  "value": "370105" },

{
  "label": "历城区",
  "value": "370112" },

{
  "label": "长清区",
  "value": "370113" },

{
  "label": "章丘区",
  "value": "370114" },

{
  "label": "平阴县",
  "value": "370124" },

{
  "label": "济阳县",
  "value": "370125" },

{
  "label": "商河县",
  "value": "370126" },

{
  "label": "济南高新技术产业开发区",
  "value": "370171" }],


[{
  "label": "市南区",
  "value": "370202" },

{
  "label": "市北区",
  "value": "370203" },

{
  "label": "黄岛区",
  "value": "370211" },

{
  "label": "崂山区",
  "value": "370212" },

{
  "label": "李沧区",
  "value": "370213" },

{
  "label": "城阳区",
  "value": "370214" },

{
  "label": "即墨区",
  "value": "370215" },

{
  "label": "青岛高新技术产业开发区",
  "value": "370271" },

{
  "label": "胶州市",
  "value": "370281" },

{
  "label": "平度市",
  "value": "370283" },

{
  "label": "莱西市",
  "value": "370285" }],


[{
  "label": "淄川区",
  "value": "370302" },

{
  "label": "张店区",
  "value": "370303" },

{
  "label": "博山区",
  "value": "370304" },

{
  "label": "临淄区",
  "value": "370305" },

{
  "label": "周村区",
  "value": "370306" },

{
  "label": "桓台县",
  "value": "370321" },

{
  "label": "高青县",
  "value": "370322" },

{
  "label": "沂源县",
  "value": "370323" }],


[{
  "label": "市中区",
  "value": "370402" },

{
  "label": "薛城区",
  "value": "370403" },

{
  "label": "峄城区",
  "value": "370404" },

{
  "label": "台儿庄区",
  "value": "370405" },

{
  "label": "山亭区",
  "value": "370406" },

{
  "label": "滕州市",
  "value": "370481" }],


[{
  "label": "东营区",
  "value": "370502" },

{
  "label": "河口区",
  "value": "370503" },

{
  "label": "垦利区",
  "value": "370505" },

{
  "label": "利津县",
  "value": "370522" },

{
  "label": "广饶县",
  "value": "370523" },

{
  "label": "东营经济技术开发区",
  "value": "370571" },

{
  "label": "东营港经济开发区",
  "value": "370572" }],


[{
  "label": "芝罘区",
  "value": "370602" },

{
  "label": "福山区",
  "value": "370611" },

{
  "label": "牟平区",
  "value": "370612" },

{
  "label": "莱山区",
  "value": "370613" },

{
  "label": "长岛县",
  "value": "370634" },

{
  "label": "烟台高新技术产业开发区",
  "value": "370671" },

{
  "label": "烟台经济技术开发区",
  "value": "370672" },

{
  "label": "龙口市",
  "value": "370681" },

{
  "label": "莱阳市",
  "value": "370682" },

{
  "label": "莱州市",
  "value": "370683" },

{
  "label": "蓬莱市",
  "value": "370684" },

{
  "label": "招远市",
  "value": "370685" },

{
  "label": "栖霞市",
  "value": "370686" },

{
  "label": "海阳市",
  "value": "370687" }],


[{
  "label": "潍城区",
  "value": "370702" },

{
  "label": "寒亭区",
  "value": "370703" },

{
  "label": "坊子区",
  "value": "370704" },

{
  "label": "奎文区",
  "value": "370705" },

{
  "label": "临朐县",
  "value": "370724" },

{
  "label": "昌乐县",
  "value": "370725" },

{
  "label": "潍坊滨海经济技术开发区",
  "value": "370772" },

{
  "label": "青州市",
  "value": "370781" },

{
  "label": "诸城市",
  "value": "370782" },

{
  "label": "寿光市",
  "value": "370783" },

{
  "label": "安丘市",
  "value": "370784" },

{
  "label": "高密市",
  "value": "370785" },

{
  "label": "昌邑市",
  "value": "370786" }],


[{
  "label": "任城区",
  "value": "370811" },

{
  "label": "兖州区",
  "value": "370812" },

{
  "label": "微山县",
  "value": "370826" },

{
  "label": "鱼台县",
  "value": "370827" },

{
  "label": "金乡县",
  "value": "370828" },

{
  "label": "嘉祥县",
  "value": "370829" },

{
  "label": "汶上县",
  "value": "370830" },

{
  "label": "泗水县",
  "value": "370831" },

{
  "label": "梁山县",
  "value": "370832" },

{
  "label": "济宁高新技术产业开发区",
  "value": "370871" },

{
  "label": "曲阜市",
  "value": "370881" },

{
  "label": "邹城市",
  "value": "370883" }],


[{
  "label": "泰山区",
  "value": "370902" },

{
  "label": "岱岳区",
  "value": "370911" },

{
  "label": "宁阳县",
  "value": "370921" },

{
  "label": "东平县",
  "value": "370923" },

{
  "label": "新泰市",
  "value": "370982" },

{
  "label": "肥城市",
  "value": "370983" }],


[{
  "label": "环翠区",
  "value": "371002" },

{
  "label": "文登区",
  "value": "371003" },

{
  "label": "威海火炬高技术产业开发区",
  "value": "371071" },

{
  "label": "威海经济技术开发区",
  "value": "371072" },

{
  "label": "威海临港经济技术开发区",
  "value": "371073" },

{
  "label": "荣成市",
  "value": "371082" },

{
  "label": "乳山市",
  "value": "371083" }],


[{
  "label": "东港区",
  "value": "371102" },

{
  "label": "岚山区",
  "value": "371103" },

{
  "label": "五莲县",
  "value": "371121" },

{
  "label": "莒县",
  "value": "371122" },

{
  "label": "日照经济技术开发区",
  "value": "371171" },

{
  "label": "日照国际海洋城",
  "value": "371172" }],


[{
  "label": "莱城区",
  "value": "371202" },

{
  "label": "钢城区",
  "value": "371203" }],


[{
  "label": "兰山区",
  "value": "371302" },

{
  "label": "罗庄区",
  "value": "371311" },

{
  "label": "河东区",
  "value": "371312" },

{
  "label": "沂南县",
  "value": "371321" },

{
  "label": "郯城县",
  "value": "371322" },

{
  "label": "沂水县",
  "value": "371323" },

{
  "label": "兰陵县",
  "value": "371324" },

{
  "label": "费县",
  "value": "371325" },

{
  "label": "平邑县",
  "value": "371326" },

{
  "label": "莒南县",
  "value": "371327" },

{
  "label": "蒙阴县",
  "value": "371328" },

{
  "label": "临沭县",
  "value": "371329" },

{
  "label": "临沂高新技术产业开发区",
  "value": "371371" },

{
  "label": "临沂经济技术开发区",
  "value": "371372" },

{
  "label": "临沂临港经济开发区",
  "value": "371373" }],


[{
  "label": "德城区",
  "value": "371402" },

{
  "label": "陵城区",
  "value": "371403" },

{
  "label": "宁津县",
  "value": "371422" },

{
  "label": "庆云县",
  "value": "371423" },

{
  "label": "临邑县",
  "value": "371424" },

{
  "label": "齐河县",
  "value": "371425" },

{
  "label": "平原县",
  "value": "371426" },

{
  "label": "夏津县",
  "value": "371427" },

{
  "label": "武城县",
  "value": "371428" },

{
  "label": "德州经济技术开发区",
  "value": "371471" },

{
  "label": "德州运河经济开发区",
  "value": "371472" },

{
  "label": "乐陵市",
  "value": "371481" },

{
  "label": "禹城市",
  "value": "371482" }],


[{
  "label": "东昌府区",
  "value": "371502" },

{
  "label": "阳谷县",
  "value": "371521" },

{
  "label": "莘县",
  "value": "371522" },

{
  "label": "茌平县",
  "value": "371523" },

{
  "label": "东阿县",
  "value": "371524" },

{
  "label": "冠县",
  "value": "371525" },

{
  "label": "高唐县",
  "value": "371526" },

{
  "label": "临清市",
  "value": "371581" }],


[{
  "label": "滨城区",
  "value": "371602" },

{
  "label": "沾化区",
  "value": "371603" },

{
  "label": "惠民县",
  "value": "371621" },

{
  "label": "阳信县",
  "value": "371622" },

{
  "label": "无棣县",
  "value": "371623" },

{
  "label": "博兴县",
  "value": "371625" },

{
  "label": "邹平县",
  "value": "371626" }],


[{
  "label": "牡丹区",
  "value": "371702" },

{
  "label": "定陶区",
  "value": "371703" },

{
  "label": "曹县",
  "value": "371721" },

{
  "label": "单县",
  "value": "371722" },

{
  "label": "成武县",
  "value": "371723" },

{
  "label": "巨野县",
  "value": "371724" },

{
  "label": "郓城县",
  "value": "371725" },

{
  "label": "鄄城县",
  "value": "371726" },

{
  "label": "东明县",
  "value": "371728" },

{
  "label": "菏泽经济技术开发区",
  "value": "371771" },

{
  "label": "菏泽高新技术开发区",
  "value": "371772" }]],



[
[{
  "label": "中原区",
  "value": "410102" },

{
  "label": "二七区",
  "value": "410103" },

{
  "label": "管城回族区",
  "value": "410104" },

{
  "label": "金水区",
  "value": "410105" },

{
  "label": "上街区",
  "value": "410106" },

{
  "label": "惠济区",
  "value": "410108" },

{
  "label": "中牟县",
  "value": "410122" },

{
  "label": "郑州经济技术开发区",
  "value": "410171" },

{
  "label": "郑州高新技术产业开发区",
  "value": "410172" },

{
  "label": "郑州航空港经济综合实验区",
  "value": "410173" },

{
  "label": "巩义市",
  "value": "410181" },

{
  "label": "荥阳市",
  "value": "410182" },

{
  "label": "新密市",
  "value": "410183" },

{
  "label": "新郑市",
  "value": "410184" },

{
  "label": "登封市",
  "value": "410185" }],


[{
  "label": "龙亭区",
  "value": "410202" },

{
  "label": "顺河回族区",
  "value": "410203" },

{
  "label": "鼓楼区",
  "value": "410204" },

{
  "label": "禹王台区",
  "value": "410205" },

{
  "label": "祥符区",
  "value": "410212" },

{
  "label": "杞县",
  "value": "410221" },

{
  "label": "通许县",
  "value": "410222" },

{
  "label": "尉氏县",
  "value": "410223" },

{
  "label": "兰考县",
  "value": "410225" }],


[{
  "label": "老城区",
  "value": "410302" },

{
  "label": "西工区",
  "value": "410303" },

{
  "label": "瀍河回族区",
  "value": "410304" },

{
  "label": "涧西区",
  "value": "410305" },

{
  "label": "吉利区",
  "value": "410306" },

{
  "label": "洛龙区",
  "value": "410311" },

{
  "label": "孟津县",
  "value": "410322" },

{
  "label": "新安县",
  "value": "410323" },

{
  "label": "栾川县",
  "value": "410324" },

{
  "label": "嵩县",
  "value": "410325" },

{
  "label": "汝阳县",
  "value": "410326" },

{
  "label": "宜阳县",
  "value": "410327" },

{
  "label": "洛宁县",
  "value": "410328" },

{
  "label": "伊川县",
  "value": "410329" },

{
  "label": "洛阳高新技术产业开发区",
  "value": "410371" },

{
  "label": "偃师市",
  "value": "410381" }],


[{
  "label": "新华区",
  "value": "410402" },

{
  "label": "卫东区",
  "value": "410403" },

{
  "label": "石龙区",
  "value": "410404" },

{
  "label": "湛河区",
  "value": "410411" },

{
  "label": "宝丰县",
  "value": "410421" },

{
  "label": "叶县",
  "value": "410422" },

{
  "label": "鲁山县",
  "value": "410423" },

{
  "label": "郏县",
  "value": "410425" },

{
  "label": "平顶山高新技术产业开发区",
  "value": "410471" },

{
  "label": "平顶山市新城区",
  "value": "410472" },

{
  "label": "舞钢市",
  "value": "410481" },

{
  "label": "汝州市",
  "value": "410482" }],


[{
  "label": "文峰区",
  "value": "410502" },

{
  "label": "北关区",
  "value": "410503" },

{
  "label": "殷都区",
  "value": "410505" },

{
  "label": "龙安区",
  "value": "410506" },

{
  "label": "安阳县",
  "value": "410522" },

{
  "label": "汤阴县",
  "value": "410523" },

{
  "label": "滑县",
  "value": "410526" },

{
  "label": "内黄县",
  "value": "410527" },

{
  "label": "安阳高新技术产业开发区",
  "value": "410571" },

{
  "label": "林州市",
  "value": "410581" }],


[{
  "label": "鹤山区",
  "value": "410602" },

{
  "label": "山城区",
  "value": "410603" },

{
  "label": "淇滨区",
  "value": "410611" },

{
  "label": "浚县",
  "value": "410621" },

{
  "label": "淇县",
  "value": "410622" },

{
  "label": "鹤壁经济技术开发区",
  "value": "410671" }],


[{
  "label": "红旗区",
  "value": "410702" },

{
  "label": "卫滨区",
  "value": "410703" },

{
  "label": "凤泉区",
  "value": "410704" },

{
  "label": "牧野区",
  "value": "410711" },

{
  "label": "新乡县",
  "value": "410721" },

{
  "label": "获嘉县",
  "value": "410724" },

{
  "label": "原阳县",
  "value": "410725" },

{
  "label": "延津县",
  "value": "410726" },

{
  "label": "封丘县",
  "value": "410727" },

{
  "label": "长垣县",
  "value": "410728" },

{
  "label": "新乡高新技术产业开发区",
  "value": "410771" },

{
  "label": "新乡经济技术开发区",
  "value": "410772" },

{
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773" },

{
  "label": "卫辉市",
  "value": "410781" },

{
  "label": "辉县市",
  "value": "410782" }],


[{
  "label": "解放区",
  "value": "410802" },

{
  "label": "中站区",
  "value": "410803" },

{
  "label": "马村区",
  "value": "410804" },

{
  "label": "山阳区",
  "value": "410811" },

{
  "label": "修武县",
  "value": "410821" },

{
  "label": "博爱县",
  "value": "410822" },

{
  "label": "武陟县",
  "value": "410823" },

{
  "label": "温县",
  "value": "410825" },

{
  "label": "焦作城乡一体化示范区",
  "value": "410871" },

{
  "label": "沁阳市",
  "value": "410882" },

{
  "label": "孟州市",
  "value": "410883" }],


[{
  "label": "华龙区",
  "value": "410902" },

{
  "label": "清丰县",
  "value": "410922" },

{
  "label": "南乐县",
  "value": "410923" },

{
  "label": "范县",
  "value": "410926" },

{
  "label": "台前县",
  "value": "410927" },

{
  "label": "濮阳县",
  "value": "410928" },

{
  "label": "河南濮阳工业园区",
  "value": "410971" },

{
  "label": "濮阳经济技术开发区",
  "value": "410972" }],


[{
  "label": "魏都区",
  "value": "411002" },

{
  "label": "建安区",
  "value": "411003" },

{
  "label": "鄢陵县",
  "value": "411024" },

{
  "label": "襄城县",
  "value": "411025" },

{
  "label": "许昌经济技术开发区",
  "value": "411071" },

{
  "label": "禹州市",
  "value": "411081" },

{
  "label": "长葛市",
  "value": "411082" }],


[{
  "label": "源汇区",
  "value": "411102" },

{
  "label": "郾城区",
  "value": "411103" },

{
  "label": "召陵区",
  "value": "411104" },

{
  "label": "舞阳县",
  "value": "411121" },

{
  "label": "临颍县",
  "value": "411122" },

{
  "label": "漯河经济技术开发区",
  "value": "411171" }],


[{
  "label": "湖滨区",
  "value": "411202" },

{
  "label": "陕州区",
  "value": "411203" },

{
  "label": "渑池县",
  "value": "411221" },

{
  "label": "卢氏县",
  "value": "411224" },

{
  "label": "河南三门峡经济开发区",
  "value": "411271" },

{
  "label": "义马市",
  "value": "411281" },

{
  "label": "灵宝市",
  "value": "411282" }],


[{
  "label": "宛城区",
  "value": "411302" },

{
  "label": "卧龙区",
  "value": "411303" },

{
  "label": "南召县",
  "value": "411321" },

{
  "label": "方城县",
  "value": "411322" },

{
  "label": "西峡县",
  "value": "411323" },

{
  "label": "镇平县",
  "value": "411324" },

{
  "label": "内乡县",
  "value": "411325" },

{
  "label": "淅川县",
  "value": "411326" },

{
  "label": "社旗县",
  "value": "411327" },

{
  "label": "唐河县",
  "value": "411328" },

{
  "label": "新野县",
  "value": "411329" },

{
  "label": "桐柏县",
  "value": "411330" },

{
  "label": "南阳高新技术产业开发区",
  "value": "411371" },

{
  "label": "南阳市城乡一体化示范区",
  "value": "411372" },

{
  "label": "邓州市",
  "value": "411381" }],


[{
  "label": "梁园区",
  "value": "411402" },

{
  "label": "睢阳区",
  "value": "411403" },

{
  "label": "民权县",
  "value": "411421" },

{
  "label": "睢县",
  "value": "411422" },

{
  "label": "宁陵县",
  "value": "411423" },

{
  "label": "柘城县",
  "value": "411424" },

{
  "label": "虞城县",
  "value": "411425" },

{
  "label": "夏邑县",
  "value": "411426" },

{
  "label": "豫东综合物流产业聚集区",
  "value": "411471" },

{
  "label": "河南商丘经济开发区",
  "value": "411472" },

{
  "label": "永城市",
  "value": "411481" }],


[{
  "label": "浉河区",
  "value": "411502" },

{
  "label": "平桥区",
  "value": "411503" },

{
  "label": "罗山县",
  "value": "411521" },

{
  "label": "光山县",
  "value": "411522" },

{
  "label": "新县",
  "value": "411523" },

{
  "label": "商城县",
  "value": "411524" },

{
  "label": "固始县",
  "value": "411525" },

{
  "label": "潢川县",
  "value": "411526" },

{
  "label": "淮滨县",
  "value": "411527" },

{
  "label": "息县",
  "value": "411528" },

{
  "label": "信阳高新技术产业开发区",
  "value": "411571" }],


[{
  "label": "川汇区",
  "value": "411602" },

{
  "label": "扶沟县",
  "value": "411621" },

{
  "label": "西华县",
  "value": "411622" },

{
  "label": "商水县",
  "value": "411623" },

{
  "label": "沈丘县",
  "value": "411624" },

{
  "label": "郸城县",
  "value": "411625" },

{
  "label": "淮阳县",
  "value": "411626" },

{
  "label": "太康县",
  "value": "411627" },

{
  "label": "鹿邑县",
  "value": "411628" },

{
  "label": "河南周口经济开发区",
  "value": "411671" },

{
  "label": "项城市",
  "value": "411681" }],


[{
  "label": "驿城区",
  "value": "411702" },

{
  "label": "西平县",
  "value": "411721" },

{
  "label": "上蔡县",
  "value": "411722" },

{
  "label": "平舆县",
  "value": "411723" },

{
  "label": "正阳县",
  "value": "411724" },

{
  "label": "确山县",
  "value": "411725" },

{
  "label": "泌阳县",
  "value": "411726" },

{
  "label": "汝南县",
  "value": "411727" },

{
  "label": "遂平县",
  "value": "411728" },

{
  "label": "新蔡县",
  "value": "411729" },

{
  "label": "河南驻马店经济开发区",
  "value": "411771" }],


[{
  "label": "济源市",
  "value": "419001" }]],


[
[{
  "label": "江岸区",
  "value": "420102" },

{
  "label": "江汉区",
  "value": "420103" },

{
  "label": "硚口区",
  "value": "420104" },

{
  "label": "汉阳区",
  "value": "420105" },

{
  "label": "武昌区",
  "value": "420106" },

{
  "label": "青山区",
  "value": "420107" },

{
  "label": "洪山区",
  "value": "420111" },

{
  "label": "东西湖区",
  "value": "420112" },

{
  "label": "汉南区",
  "value": "420113" },

{
  "label": "蔡甸区",
  "value": "420114" },

{
  "label": "江夏区",
  "value": "420115" },

{
  "label": "黄陂区",
  "value": "420116" },

{
  "label": "新洲区",
  "value": "420117" }],


[{
  "label": "黄石港区",
  "value": "420202" },

{
  "label": "西塞山区",
  "value": "420203" },

{
  "label": "下陆区",
  "value": "420204" },

{
  "label": "铁山区",
  "value": "420205" },

{
  "label": "阳新县",
  "value": "420222" },

{
  "label": "大冶市",
  "value": "420281" }],


[{
  "label": "茅箭区",
  "value": "420302" },

{
  "label": "张湾区",
  "value": "420303" },

{
  "label": "郧阳区",
  "value": "420304" },

{
  "label": "郧西县",
  "value": "420322" },

{
  "label": "竹山县",
  "value": "420323" },

{
  "label": "竹溪县",
  "value": "420324" },

{
  "label": "房县",
  "value": "420325" },

{
  "label": "丹江口市",
  "value": "420381" }],


[{
  "label": "西陵区",
  "value": "420502" },

{
  "label": "伍家岗区",
  "value": "420503" },

{
  "label": "点军区",
  "value": "420504" },

{
  "label": "猇亭区",
  "value": "420505" },

{
  "label": "夷陵区",
  "value": "420506" },

{
  "label": "远安县",
  "value": "420525" },

{
  "label": "兴山县",
  "value": "420526" },

{
  "label": "秭归县",
  "value": "420527" },

{
  "label": "长阳土家族自治县",
  "value": "420528" },

{
  "label": "五峰土家族自治县",
  "value": "420529" },

{
  "label": "宜都市",
  "value": "420581" },

{
  "label": "当阳市",
  "value": "420582" },

{
  "label": "枝江市",
  "value": "420583" }],


[{
  "label": "襄城区",
  "value": "420602" },

{
  "label": "樊城区",
  "value": "420606" },

{
  "label": "襄州区",
  "value": "420607" },

{
  "label": "南漳县",
  "value": "420624" },

{
  "label": "谷城县",
  "value": "420625" },

{
  "label": "保康县",
  "value": "420626" },

{
  "label": "老河口市",
  "value": "420682" },

{
  "label": "枣阳市",
  "value": "420683" },

{
  "label": "宜城市",
  "value": "420684" }],


[{
  "label": "梁子湖区",
  "value": "420702" },

{
  "label": "华容区",
  "value": "420703" },

{
  "label": "鄂城区",
  "value": "420704" }],


[{
  "label": "东宝区",
  "value": "420802" },

{
  "label": "掇刀区",
  "value": "420804" },

{
  "label": "京山县",
  "value": "420821" },

{
  "label": "沙洋县",
  "value": "420822" },

{
  "label": "钟祥市",
  "value": "420881" }],


[{
  "label": "孝南区",
  "value": "420902" },

{
  "label": "孝昌县",
  "value": "420921" },

{
  "label": "大悟县",
  "value": "420922" },

{
  "label": "云梦县",
  "value": "420923" },

{
  "label": "应城市",
  "value": "420981" },

{
  "label": "安陆市",
  "value": "420982" },

{
  "label": "汉川市",
  "value": "420984" }],


[{
  "label": "沙市区",
  "value": "421002" },

{
  "label": "荆州区",
  "value": "421003" },

{
  "label": "公安县",
  "value": "421022" },

{
  "label": "监利县",
  "value": "421023" },

{
  "label": "江陵县",
  "value": "421024" },

{
  "label": "荆州经济技术开发区",
  "value": "421071" },

{
  "label": "石首市",
  "value": "421081" },

{
  "label": "洪湖市",
  "value": "421083" },

{
  "label": "松滋市",
  "value": "421087" }],


[{
  "label": "黄州区",
  "value": "421102" },

{
  "label": "团风县",
  "value": "421121" },

{
  "label": "红安县",
  "value": "421122" },

{
  "label": "罗田县",
  "value": "421123" },

{
  "label": "英山县",
  "value": "421124" },

{
  "label": "浠水县",
  "value": "421125" },

{
  "label": "蕲春县",
  "value": "421126" },

{
  "label": "黄梅县",
  "value": "421127" },

{
  "label": "龙感湖管理区",
  "value": "421171" },

{
  "label": "麻城市",
  "value": "421181" },

{
  "label": "武穴市",
  "value": "421182" }],


[{
  "label": "咸安区",
  "value": "421202" },

{
  "label": "嘉鱼县",
  "value": "421221" },

{
  "label": "通城县",
  "value": "421222" },

{
  "label": "崇阳县",
  "value": "421223" },

{
  "label": "通山县",
  "value": "421224" },

{
  "label": "赤壁市",
  "value": "421281" }],


[{
  "label": "曾都区",
  "value": "421303" },

{
  "label": "随县",
  "value": "421321" },

{
  "label": "广水市",
  "value": "421381" }],


[{
  "label": "恩施市",
  "value": "422801" },

{
  "label": "利川市",
  "value": "422802" },

{
  "label": "建始县",
  "value": "422822" },

{
  "label": "巴东县",
  "value": "422823" },

{
  "label": "宣恩县",
  "value": "422825" },

{
  "label": "咸丰县",
  "value": "422826" },

{
  "label": "来凤县",
  "value": "422827" },

{
  "label": "鹤峰县",
  "value": "422828" }],


[{
  "label": "仙桃市",
  "value": "429004" },

{
  "label": "潜江市",
  "value": "429005" },

{
  "label": "天门市",
  "value": "429006" },

{
  "label": "神农架林区",
  "value": "429021" }]],



[
[{
  "label": "芙蓉区",
  "value": "430102" },

{
  "label": "天心区",
  "value": "430103" },

{
  "label": "岳麓区",
  "value": "430104" },

{
  "label": "开福区",
  "value": "430105" },

{
  "label": "雨花区",
  "value": "430111" },

{
  "label": "望城区",
  "value": "430112" },

{
  "label": "长沙县",
  "value": "430121" },

{
  "label": "浏阳市",
  "value": "430181" },

{
  "label": "宁乡市",
  "value": "430182" }],


[{
  "label": "荷塘区",
  "value": "430202" },

{
  "label": "芦淞区",
  "value": "430203" },

{
  "label": "石峰区",
  "value": "430204" },

{
  "label": "天元区",
  "value": "430211" },

{
  "label": "株洲县",
  "value": "430221" },

{
  "label": "攸县",
  "value": "430223" },

{
  "label": "茶陵县",
  "value": "430224" },

{
  "label": "炎陵县",
  "value": "430225" },

{
  "label": "云龙示范区",
  "value": "430271" },

{
  "label": "醴陵市",
  "value": "430281" }],


[{
  "label": "雨湖区",
  "value": "430302" },

{
  "label": "岳塘区",
  "value": "430304" },

{
  "label": "湘潭县",
  "value": "430321" },

{
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371" },

{
  "label": "湘潭昭山示范区",
  "value": "430372" },

{
  "label": "湘潭九华示范区",
  "value": "430373" },

{
  "label": "湘乡市",
  "value": "430381" },

{
  "label": "韶山市",
  "value": "430382" }],


[{
  "label": "珠晖区",
  "value": "430405" },

{
  "label": "雁峰区",
  "value": "430406" },

{
  "label": "石鼓区",
  "value": "430407" },

{
  "label": "蒸湘区",
  "value": "430408" },

{
  "label": "南岳区",
  "value": "430412" },

{
  "label": "衡阳县",
  "value": "430421" },

{
  "label": "衡南县",
  "value": "430422" },

{
  "label": "衡山县",
  "value": "430423" },

{
  "label": "衡东县",
  "value": "430424" },

{
  "label": "祁东县",
  "value": "430426" },

{
  "label": "衡阳综合保税区",
  "value": "430471" },

{
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472" },

{
  "label": "湖南衡阳松木经济开发区",
  "value": "430473" },

{
  "label": "耒阳市",
  "value": "430481" },

{
  "label": "常宁市",
  "value": "430482" }],


[{
  "label": "双清区",
  "value": "430502" },

{
  "label": "大祥区",
  "value": "430503" },

{
  "label": "北塔区",
  "value": "430511" },

{
  "label": "邵东县",
  "value": "430521" },

{
  "label": "新邵县",
  "value": "430522" },

{
  "label": "邵阳县",
  "value": "430523" },

{
  "label": "隆回县",
  "value": "430524" },

{
  "label": "洞口县",
  "value": "430525" },

{
  "label": "绥宁县",
  "value": "430527" },

{
  "label": "新宁县",
  "value": "430528" },

{
  "label": "城步苗族自治县",
  "value": "430529" },

{
  "label": "武冈市",
  "value": "430581" }],


[{
  "label": "岳阳楼区",
  "value": "430602" },

{
  "label": "云溪区",
  "value": "430603" },

{
  "label": "君山区",
  "value": "430611" },

{
  "label": "岳阳县",
  "value": "430621" },

{
  "label": "华容县",
  "value": "430623" },

{
  "label": "湘阴县",
  "value": "430624" },

{
  "label": "平江县",
  "value": "430626" },

{
  "label": "岳阳市屈原管理区",
  "value": "430671" },

{
  "label": "汨罗市",
  "value": "430681" },

{
  "label": "临湘市",
  "value": "430682" }],


[{
  "label": "武陵区",
  "value": "430702" },

{
  "label": "鼎城区",
  "value": "430703" },

{
  "label": "安乡县",
  "value": "430721" },

{
  "label": "汉寿县",
  "value": "430722" },

{
  "label": "澧县",
  "value": "430723" },

{
  "label": "临澧县",
  "value": "430724" },

{
  "label": "桃源县",
  "value": "430725" },

{
  "label": "石门县",
  "value": "430726" },

{
  "label": "常德市西洞庭管理区",
  "value": "430771" },

{
  "label": "津市市",
  "value": "430781" }],


[{
  "label": "永定区",
  "value": "430802" },

{
  "label": "武陵源区",
  "value": "430811" },

{
  "label": "慈利县",
  "value": "430821" },

{
  "label": "桑植县",
  "value": "430822" }],


[{
  "label": "资阳区",
  "value": "430902" },

{
  "label": "赫山区",
  "value": "430903" },

{
  "label": "南县",
  "value": "430921" },

{
  "label": "桃江县",
  "value": "430922" },

{
  "label": "安化县",
  "value": "430923" },

{
  "label": "益阳市大通湖管理区",
  "value": "430971" },

{
  "label": "湖南益阳高新技术产业园区",
  "value": "430972" },

{
  "label": "沅江市",
  "value": "430981" }],


[{
  "label": "北湖区",
  "value": "431002" },

{
  "label": "苏仙区",
  "value": "431003" },

{
  "label": "桂阳县",
  "value": "431021" },

{
  "label": "宜章县",
  "value": "431022" },

{
  "label": "永兴县",
  "value": "431023" },

{
  "label": "嘉禾县",
  "value": "431024" },

{
  "label": "临武县",
  "value": "431025" },

{
  "label": "汝城县",
  "value": "431026" },

{
  "label": "桂东县",
  "value": "431027" },

{
  "label": "安仁县",
  "value": "431028" },

{
  "label": "资兴市",
  "value": "431081" }],


[{
  "label": "零陵区",
  "value": "431102" },

{
  "label": "冷水滩区",
  "value": "431103" },

{
  "label": "祁阳县",
  "value": "431121" },

{
  "label": "东安县",
  "value": "431122" },

{
  "label": "双牌县",
  "value": "431123" },

{
  "label": "道县",
  "value": "431124" },

{
  "label": "江永县",
  "value": "431125" },

{
  "label": "宁远县",
  "value": "431126" },

{
  "label": "蓝山县",
  "value": "431127" },

{
  "label": "新田县",
  "value": "431128" },

{
  "label": "江华瑶族自治县",
  "value": "431129" },

{
  "label": "永州经济技术开发区",
  "value": "431171" },

{
  "label": "永州市金洞管理区",
  "value": "431172" },

{
  "label": "永州市回龙圩管理区",
  "value": "431173" }],


[{
  "label": "鹤城区",
  "value": "431202" },

{
  "label": "中方县",
  "value": "431221" },

{
  "label": "沅陵县",
  "value": "431222" },

{
  "label": "辰溪县",
  "value": "431223" },

{
  "label": "溆浦县",
  "value": "431224" },

{
  "label": "会同县",
  "value": "431225" },

{
  "label": "麻阳苗族自治县",
  "value": "431226" },

{
  "label": "新晃侗族自治县",
  "value": "431227" },

{
  "label": "芷江侗族自治县",
  "value": "431228" },

{
  "label": "靖州苗族侗族自治县",
  "value": "431229" },

{
  "label": "通道侗族自治县",
  "value": "431230" },

{
  "label": "怀化市洪江管理区",
  "value": "431271" },

{
  "label": "洪江市",
  "value": "431281" }],


[{
  "label": "娄星区",
  "value": "431302" },

{
  "label": "双峰县",
  "value": "431321" },

{
  "label": "新化县",
  "value": "431322" },

{
  "label": "冷水江市",
  "value": "431381" },

{
  "label": "涟源市",
  "value": "431382" }],


[{
  "label": "吉首市",
  "value": "433101" },

{
  "label": "泸溪县",
  "value": "433122" },

{
  "label": "凤凰县",
  "value": "433123" },

{
  "label": "花垣县",
  "value": "433124" },

{
  "label": "保靖县",
  "value": "433125" },

{
  "label": "古丈县",
  "value": "433126" },

{
  "label": "永顺县",
  "value": "433127" },

{
  "label": "龙山县",
  "value": "433130" },

{
  "label": "湖南吉首经济开发区",
  "value": "433172" },

{
  "label": "湖南永顺经济开发区",
  "value": "433173" }]],



[
[{
  "label": "荔湾区",
  "value": "440103" },

{
  "label": "越秀区",
  "value": "440104" },

{
  "label": "海珠区",
  "value": "440105" },

{
  "label": "天河区",
  "value": "440106" },

{
  "label": "白云区",
  "value": "440111" },

{
  "label": "黄埔区",
  "value": "440112" },

{
  "label": "番禺区",
  "value": "440113" },

{
  "label": "花都区",
  "value": "440114" },

{
  "label": "南沙区",
  "value": "440115" },

{
  "label": "从化区",
  "value": "440117" },

{
  "label": "增城区",
  "value": "440118" }],


[{
  "label": "武江区",
  "value": "440203" },

{
  "label": "浈江区",
  "value": "440204" },

{
  "label": "曲江区",
  "value": "440205" },

{
  "label": "始兴县",
  "value": "440222" },

{
  "label": "仁化县",
  "value": "440224" },

{
  "label": "翁源县",
  "value": "440229" },

{
  "label": "乳源瑶族自治县",
  "value": "440232" },

{
  "label": "新丰县",
  "value": "440233" },

{
  "label": "乐昌市",
  "value": "440281" },

{
  "label": "南雄市",
  "value": "440282" }],


[{
  "label": "罗湖区",
  "value": "440303" },

{
  "label": "福田区",
  "value": "440304" },

{
  "label": "南山区",
  "value": "440305" },

{
  "label": "宝安区",
  "value": "440306" },

{
  "label": "龙岗区",
  "value": "440307" },

{
  "label": "盐田区",
  "value": "440308" },

{
  "label": "龙华区",
  "value": "440309" },

{
  "label": "坪山区",
  "value": "440310" }],


[{
  "label": "香洲区",
  "value": "440402" },

{
  "label": "斗门区",
  "value": "440403" },

{
  "label": "金湾区",
  "value": "440404" }],


[{
  "label": "龙湖区",
  "value": "440507" },

{
  "label": "金平区",
  "value": "440511" },

{
  "label": "濠江区",
  "value": "440512" },

{
  "label": "潮阳区",
  "value": "440513" },

{
  "label": "潮南区",
  "value": "440514" },

{
  "label": "澄海区",
  "value": "440515" },

{
  "label": "南澳县",
  "value": "440523" }],


[{
  "label": "禅城区",
  "value": "440604" },

{
  "label": "南海区",
  "value": "440605" },

{
  "label": "顺德区",
  "value": "440606" },

{
  "label": "三水区",
  "value": "440607" },

{
  "label": "高明区",
  "value": "440608" }],


[{
  "label": "蓬江区",
  "value": "440703" },

{
  "label": "江海区",
  "value": "440704" },

{
  "label": "新会区",
  "value": "440705" },

{
  "label": "台山市",
  "value": "440781" },

{
  "label": "开平市",
  "value": "440783" },

{
  "label": "鹤山市",
  "value": "440784" },

{
  "label": "恩平市",
  "value": "440785" }],


[{
  "label": "赤坎区",
  "value": "440802" },

{
  "label": "霞山区",
  "value": "440803" },

{
  "label": "坡头区",
  "value": "440804" },

{
  "label": "麻章区",
  "value": "440811" },

{
  "label": "遂溪县",
  "value": "440823" },

{
  "label": "徐闻县",
  "value": "440825" },

{
  "label": "廉江市",
  "value": "440881" },

{
  "label": "雷州市",
  "value": "440882" },

{
  "label": "吴川市",
  "value": "440883" }],


[{
  "label": "茂南区",
  "value": "440902" },

{
  "label": "电白区",
  "value": "440904" },

{
  "label": "高州市",
  "value": "440981" },

{
  "label": "化州市",
  "value": "440982" },

{
  "label": "信宜市",
  "value": "440983" }],


[{
  "label": "端州区",
  "value": "441202" },

{
  "label": "鼎湖区",
  "value": "441203" },

{
  "label": "高要区",
  "value": "441204" },

{
  "label": "广宁县",
  "value": "441223" },

{
  "label": "怀集县",
  "value": "441224" },

{
  "label": "封开县",
  "value": "441225" },

{
  "label": "德庆县",
  "value": "441226" },

{
  "label": "四会市",
  "value": "441284" }],


[{
  "label": "惠城区",
  "value": "441302" },

{
  "label": "惠阳区",
  "value": "441303" },

{
  "label": "博罗县",
  "value": "441322" },

{
  "label": "惠东县",
  "value": "441323" },

{
  "label": "龙门县",
  "value": "441324" }],


[{
  "label": "梅江区",
  "value": "441402" },

{
  "label": "梅县区",
  "value": "441403" },

{
  "label": "大埔县",
  "value": "441422" },

{
  "label": "丰顺县",
  "value": "441423" },

{
  "label": "五华县",
  "value": "441424" },

{
  "label": "平远县",
  "value": "441426" },

{
  "label": "蕉岭县",
  "value": "441427" },

{
  "label": "兴宁市",
  "value": "441481" }],


[{
  "label": "城区",
  "value": "441502" },

{
  "label": "海丰县",
  "value": "441521" },

{
  "label": "陆河县",
  "value": "441523" },

{
  "label": "陆丰市",
  "value": "441581" }],


[{
  "label": "源城区",
  "value": "441602" },

{
  "label": "紫金县",
  "value": "441621" },

{
  "label": "龙川县",
  "value": "441622" },

{
  "label": "连平县",
  "value": "441623" },

{
  "label": "和平县",
  "value": "441624" },

{
  "label": "东源县",
  "value": "441625" }],


[{
  "label": "江城区",
  "value": "441702" },

{
  "label": "阳东区",
  "value": "441704" },

{
  "label": "阳西县",
  "value": "441721" },

{
  "label": "阳春市",
  "value": "441781" }],


[{
  "label": "清城区",
  "value": "441802" },

{
  "label": "清新区",
  "value": "441803" },

{
  "label": "佛冈县",
  "value": "441821" },

{
  "label": "阳山县",
  "value": "441823" },

{
  "label": "连山壮族瑶族自治县",
  "value": "441825" },

{
  "label": "连南瑶族自治县",
  "value": "441826" },

{
  "label": "英德市",
  "value": "441881" },

{
  "label": "连州市",
  "value": "441882" }],


[{
  "label": "东莞市",
  "value": "441900" }],

[{
  "label": "中山市",
  "value": "442000" }],

[{
  "label": "湘桥区",
  "value": "445102" },

{
  "label": "潮安区",
  "value": "445103" },

{
  "label": "饶平县",
  "value": "445122" }],


[{
  "label": "榕城区",
  "value": "445202" },

{
  "label": "揭东区",
  "value": "445203" },

{
  "label": "揭西县",
  "value": "445222" },

{
  "label": "惠来县",
  "value": "445224" },

{
  "label": "普宁市",
  "value": "445281" }],


[{
  "label": "云城区",
  "value": "445302" },

{
  "label": "云安区",
  "value": "445303" },

{
  "label": "新兴县",
  "value": "445321" },

{
  "label": "郁南县",
  "value": "445322" },

{
  "label": "罗定市",
  "value": "445381" }]],



[
[{
  "label": "兴宁区",
  "value": "450102" },

{
  "label": "青秀区",
  "value": "450103" },

{
  "label": "江南区",
  "value": "450105" },

{
  "label": "西乡塘区",
  "value": "450107" },

{
  "label": "良庆区",
  "value": "450108" },

{
  "label": "邕宁区",
  "value": "450109" },

{
  "label": "武鸣区",
  "value": "450110" },

{
  "label": "隆安县",
  "value": "450123" },

{
  "label": "马山县",
  "value": "450124" },

{
  "label": "上林县",
  "value": "450125" },

{
  "label": "宾阳县",
  "value": "450126" },

{
  "label": "横县",
  "value": "450127" }],


[{
  "label": "城中区",
  "value": "450202" },

{
  "label": "鱼峰区",
  "value": "450203" },

{
  "label": "柳南区",
  "value": "450204" },

{
  "label": "柳北区",
  "value": "450205" },

{
  "label": "柳江区",
  "value": "450206" },

{
  "label": "柳城县",
  "value": "450222" },

{
  "label": "鹿寨县",
  "value": "450223" },

{
  "label": "融安县",
  "value": "450224" },

{
  "label": "融水苗族自治县",
  "value": "450225" },

{
  "label": "三江侗族自治县",
  "value": "450226" }],


[{
  "label": "秀峰区",
  "value": "450302" },

{
  "label": "叠彩区",
  "value": "450303" },

{
  "label": "象山区",
  "value": "450304" },

{
  "label": "七星区",
  "value": "450305" },

{
  "label": "雁山区",
  "value": "450311" },

{
  "label": "临桂区",
  "value": "450312" },

{
  "label": "阳朔县",
  "value": "450321" },

{
  "label": "灵川县",
  "value": "450323" },

{
  "label": "全州县",
  "value": "450324" },

{
  "label": "兴安县",
  "value": "450325" },

{
  "label": "永福县",
  "value": "450326" },

{
  "label": "灌阳县",
  "value": "450327" },

{
  "label": "龙胜各族自治县",
  "value": "450328" },

{
  "label": "资源县",
  "value": "450329" },

{
  "label": "平乐县",
  "value": "450330" },

{
  "label": "荔浦县",
  "value": "450331" },

{
  "label": "恭城瑶族自治县",
  "value": "450332" }],


[{
  "label": "万秀区",
  "value": "450403" },

{
  "label": "长洲区",
  "value": "450405" },

{
  "label": "龙圩区",
  "value": "450406" },

{
  "label": "苍梧县",
  "value": "450421" },

{
  "label": "藤县",
  "value": "450422" },

{
  "label": "蒙山县",
  "value": "450423" },

{
  "label": "岑溪市",
  "value": "450481" }],


[{
  "label": "海城区",
  "value": "450502" },

{
  "label": "银海区",
  "value": "450503" },

{
  "label": "铁山港区",
  "value": "450512" },

{
  "label": "合浦县",
  "value": "450521" }],


[{
  "label": "港口区",
  "value": "450602" },

{
  "label": "防城区",
  "value": "450603" },

{
  "label": "上思县",
  "value": "450621" },

{
  "label": "东兴市",
  "value": "450681" }],


[{
  "label": "钦南区",
  "value": "450702" },

{
  "label": "钦北区",
  "value": "450703" },

{
  "label": "灵山县",
  "value": "450721" },

{
  "label": "浦北县",
  "value": "450722" }],


[{
  "label": "港北区",
  "value": "450802" },

{
  "label": "港南区",
  "value": "450803" },

{
  "label": "覃塘区",
  "value": "450804" },

{
  "label": "平南县",
  "value": "450821" },

{
  "label": "桂平市",
  "value": "450881" }],


[{
  "label": "玉州区",
  "value": "450902" },

{
  "label": "福绵区",
  "value": "450903" },

{
  "label": "容县",
  "value": "450921" },

{
  "label": "陆川县",
  "value": "450922" },

{
  "label": "博白县",
  "value": "450923" },

{
  "label": "兴业县",
  "value": "450924" },

{
  "label": "北流市",
  "value": "450981" }],


[{
  "label": "右江区",
  "value": "451002" },

{
  "label": "田阳县",
  "value": "451021" },

{
  "label": "田东县",
  "value": "451022" },

{
  "label": "平果县",
  "value": "451023" },

{
  "label": "德保县",
  "value": "451024" },

{
  "label": "那坡县",
  "value": "451026" },

{
  "label": "凌云县",
  "value": "451027" },

{
  "label": "乐业县",
  "value": "451028" },

{
  "label": "田林县",
  "value": "451029" },

{
  "label": "西林县",
  "value": "451030" },

{
  "label": "隆林各族自治县",
  "value": "451031" },

{
  "label": "靖西市",
  "value": "451081" }],


[{
  "label": "八步区",
  "value": "451102" },

{
  "label": "平桂区",
  "value": "451103" },

{
  "label": "昭平县",
  "value": "451121" },

{
  "label": "钟山县",
  "value": "451122" },

{
  "label": "富川瑶族自治县",
  "value": "451123" }],


[{
  "label": "金城江区",
  "value": "451202" },

{
  "label": "宜州区",
  "value": "451203" },

{
  "label": "南丹县",
  "value": "451221" },

{
  "label": "天峨县",
  "value": "451222" },

{
  "label": "凤山县",
  "value": "451223" },

{
  "label": "东兰县",
  "value": "451224" },

{
  "label": "罗城仫佬族自治县",
  "value": "451225" },

{
  "label": "环江毛南族自治县",
  "value": "451226" },

{
  "label": "巴马瑶族自治县",
  "value": "451227" },

{
  "label": "都安瑶族自治县",
  "value": "451228" },

{
  "label": "大化瑶族自治县",
  "value": "451229" }],


[{
  "label": "兴宾区",
  "value": "451302" },

{
  "label": "忻城县",
  "value": "451321" },

{
  "label": "象州县",
  "value": "451322" },

{
  "label": "武宣县",
  "value": "451323" },

{
  "label": "金秀瑶族自治县",
  "value": "451324" },

{
  "label": "合山市",
  "value": "451381" }],


[{
  "label": "江州区",
  "value": "451402" },

{
  "label": "扶绥县",
  "value": "451421" },

{
  "label": "宁明县",
  "value": "451422" },

{
  "label": "龙州县",
  "value": "451423" },

{
  "label": "大新县",
  "value": "451424" },

{
  "label": "天等县",
  "value": "451425" },

{
  "label": "凭祥市",
  "value": "451481" }]],



[
[{
  "label": "秀英区",
  "value": "460105" },

{
  "label": "龙华区",
  "value": "460106" },

{
  "label": "琼山区",
  "value": "460107" },

{
  "label": "美兰区",
  "value": "460108" }],


[{
  "label": "海棠区",
  "value": "460202" },

{
  "label": "吉阳区",
  "value": "460203" },

{
  "label": "天涯区",
  "value": "460204" },

{
  "label": "崖州区",
  "value": "460205" }],


[{
  "label": "西沙群岛",
  "value": "460321" },

{
  "label": "南沙群岛",
  "value": "460322" },

{
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323" }],


[{
  "label": "儋州市",
  "value": "460400" }],

[{
  "label": "五指山市",
  "value": "469001" },

{
  "label": "琼海市",
  "value": "469002" },

{
  "label": "文昌市",
  "value": "469005" },

{
  "label": "万宁市",
  "value": "469006" },

{
  "label": "东方市",
  "value": "469007" },

{
  "label": "定安县",
  "value": "469021" },

{
  "label": "屯昌县",
  "value": "469022" },

{
  "label": "澄迈县",
  "value": "469023" },

{
  "label": "临高县",
  "value": "469024" },

{
  "label": "白沙黎族自治县",
  "value": "469025" },

{
  "label": "昌江黎族自治县",
  "value": "469026" },

{
  "label": "乐东黎族自治县",
  "value": "469027" },

{
  "label": "陵水黎族自治县",
  "value": "469028" },

{
  "label": "保亭黎族苗族自治县",
  "value": "469029" },

{
  "label": "琼中黎族苗族自治县",
  "value": "469030" }]],



[
[{
  "label": "万州区",
  "value": "500101" },

{
  "label": "涪陵区",
  "value": "500102" },

{
  "label": "渝中区",
  "value": "500103" },

{
  "label": "大渡口区",
  "value": "500104" },

{
  "label": "江北区",
  "value": "500105" },

{
  "label": "沙坪坝区",
  "value": "500106" },

{
  "label": "九龙坡区",
  "value": "500107" },

{
  "label": "南岸区",
  "value": "500108" },

{
  "label": "北碚区",
  "value": "500109" },

{
  "label": "綦江区",
  "value": "500110" },

{
  "label": "大足区",
  "value": "500111" },

{
  "label": "渝北区",
  "value": "500112" },

{
  "label": "巴南区",
  "value": "500113" },

{
  "label": "黔江区",
  "value": "500114" },

{
  "label": "长寿区",
  "value": "500115" },

{
  "label": "江津区",
  "value": "500116" },

{
  "label": "合川区",
  "value": "500117" },

{
  "label": "永川区",
  "value": "500118" },

{
  "label": "南川区",
  "value": "500119" },

{
  "label": "璧山区",
  "value": "500120" },

{
  "label": "铜梁区",
  "value": "500151" },

{
  "label": "潼南区",
  "value": "500152" },

{
  "label": "荣昌区",
  "value": "500153" },

{
  "label": "开州区",
  "value": "500154" },

{
  "label": "梁平区",
  "value": "500155" },

{
  "label": "武隆区",
  "value": "500156" }],


[{
  "label": "城口县",
  "value": "500229" },

{
  "label": "丰都县",
  "value": "500230" },

{
  "label": "垫江县",
  "value": "500231" },

{
  "label": "忠县",
  "value": "500233" },

{
  "label": "云阳县",
  "value": "500235" },

{
  "label": "奉节县",
  "value": "500236" },

{
  "label": "巫山县",
  "value": "500237" },

{
  "label": "巫溪县",
  "value": "500238" },

{
  "label": "石柱土家族自治县",
  "value": "500240" },

{
  "label": "秀山土家族苗族自治县",
  "value": "500241" },

{
  "label": "酉阳土家族苗族自治县",
  "value": "500242" },

{
  "label": "彭水苗族土家族自治县",
  "value": "500243" }]],



[
[{
  "label": "锦江区",
  "value": "510104" },

{
  "label": "青羊区",
  "value": "510105" },

{
  "label": "金牛区",
  "value": "510106" },

{
  "label": "武侯区",
  "value": "510107" },

{
  "label": "成华区",
  "value": "510108" },

{
  "label": "龙泉驿区",
  "value": "510112" },

{
  "label": "青白江区",
  "value": "510113" },

{
  "label": "新都区",
  "value": "510114" },

{
  "label": "温江区",
  "value": "510115" },

{
  "label": "双流区",
  "value": "510116" },

{
  "label": "郫都区",
  "value": "510117" },

{
  "label": "金堂县",
  "value": "510121" },

{
  "label": "大邑县",
  "value": "510129" },

{
  "label": "蒲江县",
  "value": "510131" },

{
  "label": "新津县",
  "value": "510132" },

{
  "label": "都江堰市",
  "value": "510181" },

{
  "label": "彭州市",
  "value": "510182" },

{
  "label": "邛崃市",
  "value": "510183" },

{
  "label": "崇州市",
  "value": "510184" },

{
  "label": "简阳市",
  "value": "510185" }],


[{
  "label": "自流井区",
  "value": "510302" },

{
  "label": "贡井区",
  "value": "510303" },

{
  "label": "大安区",
  "value": "510304" },

{
  "label": "沿滩区",
  "value": "510311" },

{
  "label": "荣县",
  "value": "510321" },

{
  "label": "富顺县",
  "value": "510322" }],


[{
  "label": "东区",
  "value": "510402" },

{
  "label": "西区",
  "value": "510403" },

{
  "label": "仁和区",
  "value": "510411" },

{
  "label": "米易县",
  "value": "510421" },

{
  "label": "盐边县",
  "value": "510422" }],


[{
  "label": "江阳区",
  "value": "510502" },

{
  "label": "纳溪区",
  "value": "510503" },

{
  "label": "龙马潭区",
  "value": "510504" },

{
  "label": "泸县",
  "value": "510521" },

{
  "label": "合江县",
  "value": "510522" },

{
  "label": "叙永县",
  "value": "510524" },

{
  "label": "古蔺县",
  "value": "510525" }],


[{
  "label": "旌阳区",
  "value": "510603" },

{
  "label": "罗江区",
  "value": "510604" },

{
  "label": "中江县",
  "value": "510623" },

{
  "label": "广汉市",
  "value": "510681" },

{
  "label": "什邡市",
  "value": "510682" },

{
  "label": "绵竹市",
  "value": "510683" }],


[{
  "label": "涪城区",
  "value": "510703" },

{
  "label": "游仙区",
  "value": "510704" },

{
  "label": "安州区",
  "value": "510705" },

{
  "label": "三台县",
  "value": "510722" },

{
  "label": "盐亭县",
  "value": "510723" },

{
  "label": "梓潼县",
  "value": "510725" },

{
  "label": "北川羌族自治县",
  "value": "510726" },

{
  "label": "平武县",
  "value": "510727" },

{
  "label": "江油市",
  "value": "510781" }],


[{
  "label": "利州区",
  "value": "510802" },

{
  "label": "昭化区",
  "value": "510811" },

{
  "label": "朝天区",
  "value": "510812" },

{
  "label": "旺苍县",
  "value": "510821" },

{
  "label": "青川县",
  "value": "510822" },

{
  "label": "剑阁县",
  "value": "510823" },

{
  "label": "苍溪县",
  "value": "510824" }],


[{
  "label": "船山区",
  "value": "510903" },

{
  "label": "安居区",
  "value": "510904" },

{
  "label": "蓬溪县",
  "value": "510921" },

{
  "label": "射洪县",
  "value": "510922" },

{
  "label": "大英县",
  "value": "510923" }],


[{
  "label": "市中区",
  "value": "511002" },

{
  "label": "东兴区",
  "value": "511011" },

{
  "label": "威远县",
  "value": "511024" },

{
  "label": "资中县",
  "value": "511025" },

{
  "label": "内江经济开发区",
  "value": "511071" },

{
  "label": "隆昌市",
  "value": "511083" }],


[{
  "label": "市中区",
  "value": "511102" },

{
  "label": "沙湾区",
  "value": "511111" },

{
  "label": "五通桥区",
  "value": "511112" },

{
  "label": "金口河区",
  "value": "511113" },

{
  "label": "犍为县",
  "value": "511123" },

{
  "label": "井研县",
  "value": "511124" },

{
  "label": "夹江县",
  "value": "511126" },

{
  "label": "沐川县",
  "value": "511129" },

{
  "label": "峨边彝族自治县",
  "value": "511132" },

{
  "label": "马边彝族自治县",
  "value": "511133" },

{
  "label": "峨眉山市",
  "value": "511181" }],


[{
  "label": "顺庆区",
  "value": "511302" },

{
  "label": "高坪区",
  "value": "511303" },

{
  "label": "嘉陵区",
  "value": "511304" },

{
  "label": "南部县",
  "value": "511321" },

{
  "label": "营山县",
  "value": "511322" },

{
  "label": "蓬安县",
  "value": "511323" },

{
  "label": "仪陇县",
  "value": "511324" },

{
  "label": "西充县",
  "value": "511325" },

{
  "label": "阆中市",
  "value": "511381" }],


[{
  "label": "东坡区",
  "value": "511402" },

{
  "label": "彭山区",
  "value": "511403" },

{
  "label": "仁寿县",
  "value": "511421" },

{
  "label": "洪雅县",
  "value": "511423" },

{
  "label": "丹棱县",
  "value": "511424" },

{
  "label": "青神县",
  "value": "511425" }],


[{
  "label": "翠屏区",
  "value": "511502" },

{
  "label": "南溪区",
  "value": "511503" },

{
  "label": "宜宾县",
  "value": "511521" },

{
  "label": "江安县",
  "value": "511523" },

{
  "label": "长宁县",
  "value": "511524" },

{
  "label": "高县",
  "value": "511525" },

{
  "label": "珙县",
  "value": "511526" },

{
  "label": "筠连县",
  "value": "511527" },

{
  "label": "兴文县",
  "value": "511528" },

{
  "label": "屏山县",
  "value": "511529" }],


[{
  "label": "广安区",
  "value": "511602" },

{
  "label": "前锋区",
  "value": "511603" },

{
  "label": "岳池县",
  "value": "511621" },

{
  "label": "武胜县",
  "value": "511622" },

{
  "label": "邻水县",
  "value": "511623" },

{
  "label": "华蓥市",
  "value": "511681" }],


[{
  "label": "通川区",
  "value": "511702" },

{
  "label": "达川区",
  "value": "511703" },

{
  "label": "宣汉县",
  "value": "511722" },

{
  "label": "开江县",
  "value": "511723" },

{
  "label": "大竹县",
  "value": "511724" },

{
  "label": "渠县",
  "value": "511725" },

{
  "label": "达州经济开发区",
  "value": "511771" },

{
  "label": "万源市",
  "value": "511781" }],


[{
  "label": "雨城区",
  "value": "511802" },

{
  "label": "名山区",
  "value": "511803" },

{
  "label": "荥经县",
  "value": "511822" },

{
  "label": "汉源县",
  "value": "511823" },

{
  "label": "石棉县",
  "value": "511824" },

{
  "label": "天全县",
  "value": "511825" },

{
  "label": "芦山县",
  "value": "511826" },

{
  "label": "宝兴县",
  "value": "511827" }],


[{
  "label": "巴州区",
  "value": "511902" },

{
  "label": "恩阳区",
  "value": "511903" },

{
  "label": "通江县",
  "value": "511921" },

{
  "label": "南江县",
  "value": "511922" },

{
  "label": "平昌县",
  "value": "511923" },

{
  "label": "巴中经济开发区",
  "value": "511971" }],


[{
  "label": "雁江区",
  "value": "512002" },

{
  "label": "安岳县",
  "value": "512021" },

{
  "label": "乐至县",
  "value": "512022" }],


[{
  "label": "马尔康市",
  "value": "513201" },

{
  "label": "汶川县",
  "value": "513221" },

{
  "label": "理县",
  "value": "513222" },

{
  "label": "茂县",
  "value": "513223" },

{
  "label": "松潘县",
  "value": "513224" },

{
  "label": "九寨沟县",
  "value": "513225" },

{
  "label": "金川县",
  "value": "513226" },

{
  "label": "小金县",
  "value": "513227" },

{
  "label": "黑水县",
  "value": "513228" },

{
  "label": "壤塘县",
  "value": "513230" },

{
  "label": "阿坝县",
  "value": "513231" },

{
  "label": "若尔盖县",
  "value": "513232" },

{
  "label": "红原县",
  "value": "513233" }],


[{
  "label": "康定市",
  "value": "513301" },

{
  "label": "泸定县",
  "value": "513322" },

{
  "label": "丹巴县",
  "value": "513323" },

{
  "label": "九龙县",
  "value": "513324" },

{
  "label": "雅江县",
  "value": "513325" },

{
  "label": "道孚县",
  "value": "513326" },

{
  "label": "炉霍县",
  "value": "513327" },

{
  "label": "甘孜县",
  "value": "513328" },

{
  "label": "新龙县",
  "value": "513329" },

{
  "label": "德格县",
  "value": "513330" },

{
  "label": "白玉县",
  "value": "513331" },

{
  "label": "石渠县",
  "value": "513332" },

{
  "label": "色达县",
  "value": "513333" },

{
  "label": "理塘县",
  "value": "513334" },

{
  "label": "巴塘县",
  "value": "513335" },

{
  "label": "乡城县",
  "value": "513336" },

{
  "label": "稻城县",
  "value": "513337" },

{
  "label": "得荣县",
  "value": "513338" }],


[{
  "label": "西昌市",
  "value": "513401" },

{
  "label": "木里藏族自治县",
  "value": "513422" },

{
  "label": "盐源县",
  "value": "513423" },

{
  "label": "德昌县",
  "value": "513424" },

{
  "label": "会理县",
  "value": "513425" },

{
  "label": "会东县",
  "value": "513426" },

{
  "label": "宁南县",
  "value": "513427" },

{
  "label": "普格县",
  "value": "513428" },

{
  "label": "布拖县",
  "value": "513429" },

{
  "label": "金阳县",
  "value": "513430" },

{
  "label": "昭觉县",
  "value": "513431" },

{
  "label": "喜德县",
  "value": "513432" },

{
  "label": "冕宁县",
  "value": "513433" },

{
  "label": "越西县",
  "value": "513434" },

{
  "label": "甘洛县",
  "value": "513435" },

{
  "label": "美姑县",
  "value": "513436" },

{
  "label": "雷波县",
  "value": "513437" }]],



[
[{
  "label": "南明区",
  "value": "520102" },

{
  "label": "云岩区",
  "value": "520103" },

{
  "label": "花溪区",
  "value": "520111" },

{
  "label": "乌当区",
  "value": "520112" },

{
  "label": "白云区",
  "value": "520113" },

{
  "label": "观山湖区",
  "value": "520115" },

{
  "label": "开阳县",
  "value": "520121" },

{
  "label": "息烽县",
  "value": "520122" },

{
  "label": "修文县",
  "value": "520123" },

{
  "label": "清镇市",
  "value": "520181" }],


[{
  "label": "钟山区",
  "value": "520201" },

{
  "label": "六枝特区",
  "value": "520203" },

{
  "label": "水城县",
  "value": "520221" },

{
  "label": "盘州市",
  "value": "520281" }],


[{
  "label": "红花岗区",
  "value": "520302" },

{
  "label": "汇川区",
  "value": "520303" },

{
  "label": "播州区",
  "value": "520304" },

{
  "label": "桐梓县",
  "value": "520322" },

{
  "label": "绥阳县",
  "value": "520323" },

{
  "label": "正安县",
  "value": "520324" },

{
  "label": "道真仡佬族苗族自治县",
  "value": "520325" },

{
  "label": "务川仡佬族苗族自治县",
  "value": "520326" },

{
  "label": "凤冈县",
  "value": "520327" },

{
  "label": "湄潭县",
  "value": "520328" },

{
  "label": "余庆县",
  "value": "520329" },

{
  "label": "习水县",
  "value": "520330" },

{
  "label": "赤水市",
  "value": "520381" },

{
  "label": "仁怀市",
  "value": "520382" }],


[{
  "label": "西秀区",
  "value": "520402" },

{
  "label": "平坝区",
  "value": "520403" },

{
  "label": "普定县",
  "value": "520422" },

{
  "label": "镇宁布依族苗族自治县",
  "value": "520423" },

{
  "label": "关岭布依族苗族自治县",
  "value": "520424" },

{
  "label": "紫云苗族布依族自治县",
  "value": "520425" }],


[{
  "label": "七星关区",
  "value": "520502" },

{
  "label": "大方县",
  "value": "520521" },

{
  "label": "黔西县",
  "value": "520522" },

{
  "label": "金沙县",
  "value": "520523" },

{
  "label": "织金县",
  "value": "520524" },

{
  "label": "纳雍县",
  "value": "520525" },

{
  "label": "威宁彝族回族苗族自治县",
  "value": "520526" },

{
  "label": "赫章县",
  "value": "520527" }],


[{
  "label": "碧江区",
  "value": "520602" },

{
  "label": "万山区",
  "value": "520603" },

{
  "label": "江口县",
  "value": "520621" },

{
  "label": "玉屏侗族自治县",
  "value": "520622" },

{
  "label": "石阡县",
  "value": "520623" },

{
  "label": "思南县",
  "value": "520624" },

{
  "label": "印江土家族苗族自治县",
  "value": "520625" },

{
  "label": "德江县",
  "value": "520626" },

{
  "label": "沿河土家族自治县",
  "value": "520627" },

{
  "label": "松桃苗族自治县",
  "value": "520628" }],


[{
  "label": "兴义市",
  "value": "522301" },

{
  "label": "兴仁县",
  "value": "522322" },

{
  "label": "普安县",
  "value": "522323" },

{
  "label": "晴隆县",
  "value": "522324" },

{
  "label": "贞丰县",
  "value": "522325" },

{
  "label": "望谟县",
  "value": "522326" },

{
  "label": "册亨县",
  "value": "522327" },

{
  "label": "安龙县",
  "value": "522328" }],


[{
  "label": "凯里市",
  "value": "522601" },

{
  "label": "黄平县",
  "value": "522622" },

{
  "label": "施秉县",
  "value": "522623" },

{
  "label": "三穗县",
  "value": "522624" },

{
  "label": "镇远县",
  "value": "522625" },

{
  "label": "岑巩县",
  "value": "522626" },

{
  "label": "天柱县",
  "value": "522627" },

{
  "label": "锦屏县",
  "value": "522628" },

{
  "label": "剑河县",
  "value": "522629" },

{
  "label": "台江县",
  "value": "522630" },

{
  "label": "黎平县",
  "value": "522631" },

{
  "label": "榕江县",
  "value": "522632" },

{
  "label": "从江县",
  "value": "522633" },

{
  "label": "雷山县",
  "value": "522634" },

{
  "label": "麻江县",
  "value": "522635" },

{
  "label": "丹寨县",
  "value": "522636" }],


[{
  "label": "都匀市",
  "value": "522701" },

{
  "label": "福泉市",
  "value": "522702" },

{
  "label": "荔波县",
  "value": "522722" },

{
  "label": "贵定县",
  "value": "522723" },

{
  "label": "瓮安县",
  "value": "522725" },

{
  "label": "独山县",
  "value": "522726" },

{
  "label": "平塘县",
  "value": "522727" },

{
  "label": "罗甸县",
  "value": "522728" },

{
  "label": "长顺县",
  "value": "522729" },

{
  "label": "龙里县",
  "value": "522730" },

{
  "label": "惠水县",
  "value": "522731" },

{
  "label": "三都水族自治县",
  "value": "522732" }]],



[
[{
  "label": "五华区",
  "value": "530102" },

{
  "label": "盘龙区",
  "value": "530103" },

{
  "label": "官渡区",
  "value": "530111" },

{
  "label": "西山区",
  "value": "530112" },

{
  "label": "东川区",
  "value": "530113" },

{
  "label": "呈贡区",
  "value": "530114" },

{
  "label": "晋宁区",
  "value": "530115" },

{
  "label": "富民县",
  "value": "530124" },

{
  "label": "宜良县",
  "value": "530125" },

{
  "label": "石林彝族自治县",
  "value": "530126" },

{
  "label": "嵩明县",
  "value": "530127" },

{
  "label": "禄劝彝族苗族自治县",
  "value": "530128" },

{
  "label": "寻甸回族彝族自治县",
  "value": "530129" },

{
  "label": "安宁市",
  "value": "530181" }],


[{
  "label": "麒麟区",
  "value": "530302" },

{
  "label": "沾益区",
  "value": "530303" },

{
  "label": "马龙县",
  "value": "530321" },

{
  "label": "陆良县",
  "value": "530322" },

{
  "label": "师宗县",
  "value": "530323" },

{
  "label": "罗平县",
  "value": "530324" },

{
  "label": "富源县",
  "value": "530325" },

{
  "label": "会泽县",
  "value": "530326" },

{
  "label": "宣威市",
  "value": "530381" }],


[{
  "label": "红塔区",
  "value": "530402" },

{
  "label": "江川区",
  "value": "530403" },

{
  "label": "澄江县",
  "value": "530422" },

{
  "label": "通海县",
  "value": "530423" },

{
  "label": "华宁县",
  "value": "530424" },

{
  "label": "易门县",
  "value": "530425" },

{
  "label": "峨山彝族自治县",
  "value": "530426" },

{
  "label": "新平彝族傣族自治县",
  "value": "530427" },

{
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428" }],


[{
  "label": "隆阳区",
  "value": "530502" },

{
  "label": "施甸县",
  "value": "530521" },

{
  "label": "龙陵县",
  "value": "530523" },

{
  "label": "昌宁县",
  "value": "530524" },

{
  "label": "腾冲市",
  "value": "530581" }],


[{
  "label": "昭阳区",
  "value": "530602" },

{
  "label": "鲁甸县",
  "value": "530621" },

{
  "label": "巧家县",
  "value": "530622" },

{
  "label": "盐津县",
  "value": "530623" },

{
  "label": "大关县",
  "value": "530624" },

{
  "label": "永善县",
  "value": "530625" },

{
  "label": "绥江县",
  "value": "530626" },

{
  "label": "镇雄县",
  "value": "530627" },

{
  "label": "彝良县",
  "value": "530628" },

{
  "label": "威信县",
  "value": "530629" },

{
  "label": "水富县",
  "value": "530630" }],


[{
  "label": "古城区",
  "value": "530702" },

{
  "label": "玉龙纳西族自治县",
  "value": "530721" },

{
  "label": "永胜县",
  "value": "530722" },

{
  "label": "华坪县",
  "value": "530723" },

{
  "label": "宁蒗彝族自治县",
  "value": "530724" }],


[{
  "label": "思茅区",
  "value": "530802" },

{
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821" },

{
  "label": "墨江哈尼族自治县",
  "value": "530822" },

{
  "label": "景东彝族自治县",
  "value": "530823" },

{
  "label": "景谷傣族彝族自治县",
  "value": "530824" },

{
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825" },

{
  "label": "江城哈尼族彝族自治县",
  "value": "530826" },

{
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827" },

{
  "label": "澜沧拉祜族自治县",
  "value": "530828" },

{
  "label": "西盟佤族自治县",
  "value": "530829" }],


[{
  "label": "临翔区",
  "value": "530902" },

{
  "label": "凤庆县",
  "value": "530921" },

{
  "label": "云县",
  "value": "530922" },

{
  "label": "永德县",
  "value": "530923" },

{
  "label": "镇康县",
  "value": "530924" },

{
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925" },

{
  "label": "耿马傣族佤族自治县",
  "value": "530926" },

{
  "label": "沧源佤族自治县",
  "value": "530927" }],


[{
  "label": "楚雄市",
  "value": "532301" },

{
  "label": "双柏县",
  "value": "532322" },

{
  "label": "牟定县",
  "value": "532323" },

{
  "label": "南华县",
  "value": "532324" },

{
  "label": "姚安县",
  "value": "532325" },

{
  "label": "大姚县",
  "value": "532326" },

{
  "label": "永仁县",
  "value": "532327" },

{
  "label": "元谋县",
  "value": "532328" },

{
  "label": "武定县",
  "value": "532329" },

{
  "label": "禄丰县",
  "value": "532331" }],


[{
  "label": "个旧市",
  "value": "532501" },

{
  "label": "开远市",
  "value": "532502" },

{
  "label": "蒙自市",
  "value": "532503" },

{
  "label": "弥勒市",
  "value": "532504" },

{
  "label": "屏边苗族自治县",
  "value": "532523" },

{
  "label": "建水县",
  "value": "532524" },

{
  "label": "石屏县",
  "value": "532525" },

{
  "label": "泸西县",
  "value": "532527" },

{
  "label": "元阳县",
  "value": "532528" },

{
  "label": "红河县",
  "value": "532529" },

{
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530" },

{
  "label": "绿春县",
  "value": "532531" },

{
  "label": "河口瑶族自治县",
  "value": "532532" }],


[{
  "label": "文山市",
  "value": "532601" },

{
  "label": "砚山县",
  "value": "532622" },

{
  "label": "西畴县",
  "value": "532623" },

{
  "label": "麻栗坡县",
  "value": "532624" },

{
  "label": "马关县",
  "value": "532625" },

{
  "label": "丘北县",
  "value": "532626" },

{
  "label": "广南县",
  "value": "532627" },

{
  "label": "富宁县",
  "value": "532628" }],


[{
  "label": "景洪市",
  "value": "532801" },

{
  "label": "勐海县",
  "value": "532822" },

{
  "label": "勐腊县",
  "value": "532823" }],


[{
  "label": "大理市",
  "value": "532901" },

{
  "label": "漾濞彝族自治县",
  "value": "532922" },

{
  "label": "祥云县",
  "value": "532923" },

{
  "label": "宾川县",
  "value": "532924" },

{
  "label": "弥渡县",
  "value": "532925" },

{
  "label": "南涧彝族自治县",
  "value": "532926" },

{
  "label": "巍山彝族回族自治县",
  "value": "532927" },

{
  "label": "永平县",
  "value": "532928" },

{
  "label": "云龙县",
  "value": "532929" },

{
  "label": "洱源县",
  "value": "532930" },

{
  "label": "剑川县",
  "value": "532931" },

{
  "label": "鹤庆县",
  "value": "532932" }],


[{
  "label": "瑞丽市",
  "value": "533102" },

{
  "label": "芒市",
  "value": "533103" },

{
  "label": "梁河县",
  "value": "533122" },

{
  "label": "盈江县",
  "value": "533123" },

{
  "label": "陇川县",
  "value": "533124" }],


[{
  "label": "泸水市",
  "value": "533301" },

{
  "label": "福贡县",
  "value": "533323" },

{
  "label": "贡山独龙族怒族自治县",
  "value": "533324" },

{
  "label": "兰坪白族普米族自治县",
  "value": "533325" }],


[{
  "label": "香格里拉市",
  "value": "533401" },

{
  "label": "德钦县",
  "value": "533422" },

{
  "label": "维西傈僳族自治县",
  "value": "533423" }]],



[
[{
  "label": "城关区",
  "value": "540102" },

{
  "label": "堆龙德庆区",
  "value": "540103" },

{
  "label": "林周县",
  "value": "540121" },

{
  "label": "当雄县",
  "value": "540122" },

{
  "label": "尼木县",
  "value": "540123" },

{
  "label": "曲水县",
  "value": "540124" },

{
  "label": "达孜县",
  "value": "540126" },

{
  "label": "墨竹工卡县",
  "value": "540127" },

{
  "label": "格尔木藏青工业园区",
  "value": "540171" },

{
  "label": "拉萨经济技术开发区",
  "value": "540172" },

{
  "label": "西藏文化旅游创意园区",
  "value": "540173" },

{
  "label": "达孜工业园区",
  "value": "540174" }],


[{
  "label": "桑珠孜区",
  "value": "540202" },

{
  "label": "南木林县",
  "value": "540221" },

{
  "label": "江孜县",
  "value": "540222" },

{
  "label": "定日县",
  "value": "540223" },

{
  "label": "萨迦县",
  "value": "540224" },

{
  "label": "拉孜县",
  "value": "540225" },

{
  "label": "昂仁县",
  "value": "540226" },

{
  "label": "谢通门县",
  "value": "540227" },

{
  "label": "白朗县",
  "value": "540228" },

{
  "label": "仁布县",
  "value": "540229" },

{
  "label": "康马县",
  "value": "540230" },

{
  "label": "定结县",
  "value": "540231" },

{
  "label": "仲巴县",
  "value": "540232" },

{
  "label": "亚东县",
  "value": "540233" },

{
  "label": "吉隆县",
  "value": "540234" },

{
  "label": "聂拉木县",
  "value": "540235" },

{
  "label": "萨嘎县",
  "value": "540236" },

{
  "label": "岗巴县",
  "value": "540237" }],


[{
  "label": "卡若区",
  "value": "540302" },

{
  "label": "江达县",
  "value": "540321" },

{
  "label": "贡觉县",
  "value": "540322" },

{
  "label": "类乌齐县",
  "value": "540323" },

{
  "label": "丁青县",
  "value": "540324" },

{
  "label": "察雅县",
  "value": "540325" },

{
  "label": "八宿县",
  "value": "540326" },

{
  "label": "左贡县",
  "value": "540327" },

{
  "label": "芒康县",
  "value": "540328" },

{
  "label": "洛隆县",
  "value": "540329" },

{
  "label": "边坝县",
  "value": "540330" }],


[{
  "label": "巴宜区",
  "value": "540402" },

{
  "label": "工布江达县",
  "value": "540421" },

{
  "label": "米林县",
  "value": "540422" },

{
  "label": "墨脱县",
  "value": "540423" },

{
  "label": "波密县",
  "value": "540424" },

{
  "label": "察隅县",
  "value": "540425" },

{
  "label": "朗县",
  "value": "540426" }],


[{
  "label": "乃东区",
  "value": "540502" },

{
  "label": "扎囊县",
  "value": "540521" },

{
  "label": "贡嘎县",
  "value": "540522" },

{
  "label": "桑日县",
  "value": "540523" },

{
  "label": "琼结县",
  "value": "540524" },

{
  "label": "曲松县",
  "value": "540525" },

{
  "label": "措美县",
  "value": "540526" },

{
  "label": "洛扎县",
  "value": "540527" },

{
  "label": "加查县",
  "value": "540528" },

{
  "label": "隆子县",
  "value": "540529" },

{
  "label": "错那县",
  "value": "540530" },

{
  "label": "浪卡子县",
  "value": "540531" }],


[{
  "label": "那曲县",
  "value": "542421" },

{
  "label": "嘉黎县",
  "value": "542422" },

{
  "label": "比如县",
  "value": "542423" },

{
  "label": "聂荣县",
  "value": "542424" },

{
  "label": "安多县",
  "value": "542425" },

{
  "label": "申扎县",
  "value": "542426" },

{
  "label": "索县",
  "value": "542427" },

{
  "label": "班戈县",
  "value": "542428" },

{
  "label": "巴青县",
  "value": "542429" },

{
  "label": "尼玛县",
  "value": "542430" },

{
  "label": "双湖县",
  "value": "542431" }],


[{
  "label": "普兰县",
  "value": "542521" },

{
  "label": "札达县",
  "value": "542522" },

{
  "label": "噶尔县",
  "value": "542523" },

{
  "label": "日土县",
  "value": "542524" },

{
  "label": "革吉县",
  "value": "542525" },

{
  "label": "改则县",
  "value": "542526" },

{
  "label": "措勤县",
  "value": "542527" }]],



[
[{
  "label": "新城区",
  "value": "610102" },

{
  "label": "碑林区",
  "value": "610103" },

{
  "label": "莲湖区",
  "value": "610104" },

{
  "label": "灞桥区",
  "value": "610111" },

{
  "label": "未央区",
  "value": "610112" },

{
  "label": "雁塔区",
  "value": "610113" },

{
  "label": "阎良区",
  "value": "610114" },

{
  "label": "临潼区",
  "value": "610115" },

{
  "label": "长安区",
  "value": "610116" },

{
  "label": "高陵区",
  "value": "610117" },

{
  "label": "鄠邑区",
  "value": "610118" },

{
  "label": "蓝田县",
  "value": "610122" },

{
  "label": "周至县",
  "value": "610124" }],


[{
  "label": "王益区",
  "value": "610202" },

{
  "label": "印台区",
  "value": "610203" },

{
  "label": "耀州区",
  "value": "610204" },

{
  "label": "宜君县",
  "value": "610222" }],


[{
  "label": "渭滨区",
  "value": "610302" },

{
  "label": "金台区",
  "value": "610303" },

{
  "label": "陈仓区",
  "value": "610304" },

{
  "label": "凤翔县",
  "value": "610322" },

{
  "label": "岐山县",
  "value": "610323" },

{
  "label": "扶风县",
  "value": "610324" },

{
  "label": "眉县",
  "value": "610326" },

{
  "label": "陇县",
  "value": "610327" },

{
  "label": "千阳县",
  "value": "610328" },

{
  "label": "麟游县",
  "value": "610329" },

{
  "label": "凤县",
  "value": "610330" },

{
  "label": "太白县",
  "value": "610331" }],


[{
  "label": "秦都区",
  "value": "610402" },

{
  "label": "杨陵区",
  "value": "610403" },

{
  "label": "渭城区",
  "value": "610404" },

{
  "label": "三原县",
  "value": "610422" },

{
  "label": "泾阳县",
  "value": "610423" },

{
  "label": "乾县",
  "value": "610424" },

{
  "label": "礼泉县",
  "value": "610425" },

{
  "label": "永寿县",
  "value": "610426" },

{
  "label": "彬县",
  "value": "610427" },

{
  "label": "长武县",
  "value": "610428" },

{
  "label": "旬邑县",
  "value": "610429" },

{
  "label": "淳化县",
  "value": "610430" },

{
  "label": "武功县",
  "value": "610431" },

{
  "label": "兴平市",
  "value": "610481" }],


[{
  "label": "临渭区",
  "value": "610502" },

{
  "label": "华州区",
  "value": "610503" },

{
  "label": "潼关县",
  "value": "610522" },

{
  "label": "大荔县",
  "value": "610523" },

{
  "label": "合阳县",
  "value": "610524" },

{
  "label": "澄城县",
  "value": "610525" },

{
  "label": "蒲城县",
  "value": "610526" },

{
  "label": "白水县",
  "value": "610527" },

{
  "label": "富平县",
  "value": "610528" },

{
  "label": "韩城市",
  "value": "610581" },

{
  "label": "华阴市",
  "value": "610582" }],


[{
  "label": "宝塔区",
  "value": "610602" },

{
  "label": "安塞区",
  "value": "610603" },

{
  "label": "延长县",
  "value": "610621" },

{
  "label": "延川县",
  "value": "610622" },

{
  "label": "子长县",
  "value": "610623" },

{
  "label": "志丹县",
  "value": "610625" },

{
  "label": "吴起县",
  "value": "610626" },

{
  "label": "甘泉县",
  "value": "610627" },

{
  "label": "富县",
  "value": "610628" },

{
  "label": "洛川县",
  "value": "610629" },

{
  "label": "宜川县",
  "value": "610630" },

{
  "label": "黄龙县",
  "value": "610631" },

{
  "label": "黄陵县",
  "value": "610632" }],


[{
  "label": "汉台区",
  "value": "610702" },

{
  "label": "南郑区",
  "value": "610703" },

{
  "label": "城固县",
  "value": "610722" },

{
  "label": "洋县",
  "value": "610723" },

{
  "label": "西乡县",
  "value": "610724" },

{
  "label": "勉县",
  "value": "610725" },

{
  "label": "宁强县",
  "value": "610726" },

{
  "label": "略阳县",
  "value": "610727" },

{
  "label": "镇巴县",
  "value": "610728" },

{
  "label": "留坝县",
  "value": "610729" },

{
  "label": "佛坪县",
  "value": "610730" }],


[{
  "label": "榆阳区",
  "value": "610802" },

{
  "label": "横山区",
  "value": "610803" },

{
  "label": "府谷县",
  "value": "610822" },

{
  "label": "靖边县",
  "value": "610824" },

{
  "label": "定边县",
  "value": "610825" },

{
  "label": "绥德县",
  "value": "610826" },

{
  "label": "米脂县",
  "value": "610827" },

{
  "label": "佳县",
  "value": "610828" },

{
  "label": "吴堡县",
  "value": "610829" },

{
  "label": "清涧县",
  "value": "610830" },

{
  "label": "子洲县",
  "value": "610831" },

{
  "label": "神木市",
  "value": "610881" }],


[{
  "label": "汉滨区",
  "value": "610902" },

{
  "label": "汉阴县",
  "value": "610921" },

{
  "label": "石泉县",
  "value": "610922" },

{
  "label": "宁陕县",
  "value": "610923" },

{
  "label": "紫阳县",
  "value": "610924" },

{
  "label": "岚皋县",
  "value": "610925" },

{
  "label": "平利县",
  "value": "610926" },

{
  "label": "镇坪县",
  "value": "610927" },

{
  "label": "旬阳县",
  "value": "610928" },

{
  "label": "白河县",
  "value": "610929" }],


[{
  "label": "商州区",
  "value": "611002" },

{
  "label": "洛南县",
  "value": "611021" },

{
  "label": "丹凤县",
  "value": "611022" },

{
  "label": "商南县",
  "value": "611023" },

{
  "label": "山阳县",
  "value": "611024" },

{
  "label": "镇安县",
  "value": "611025" },

{
  "label": "柞水县",
  "value": "611026" }]],



[
[{
  "label": "城关区",
  "value": "620102" },

{
  "label": "七里河区",
  "value": "620103" },

{
  "label": "西固区",
  "value": "620104" },

{
  "label": "安宁区",
  "value": "620105" },

{
  "label": "红古区",
  "value": "620111" },

{
  "label": "永登县",
  "value": "620121" },

{
  "label": "皋兰县",
  "value": "620122" },

{
  "label": "榆中县",
  "value": "620123" },

{
  "label": "兰州新区",
  "value": "620171" }],


[{
  "label": "嘉峪关市",
  "value": "620201" }],

[{
  "label": "金川区",
  "value": "620302" },

{
  "label": "永昌县",
  "value": "620321" }],


[{
  "label": "白银区",
  "value": "620402" },

{
  "label": "平川区",
  "value": "620403" },

{
  "label": "靖远县",
  "value": "620421" },

{
  "label": "会宁县",
  "value": "620422" },

{
  "label": "景泰县",
  "value": "620423" }],


[{
  "label": "秦州区",
  "value": "620502" },

{
  "label": "麦积区",
  "value": "620503" },

{
  "label": "清水县",
  "value": "620521" },

{
  "label": "秦安县",
  "value": "620522" },

{
  "label": "甘谷县",
  "value": "620523" },

{
  "label": "武山县",
  "value": "620524" },

{
  "label": "张家川回族自治县",
  "value": "620525" }],


[{
  "label": "凉州区",
  "value": "620602" },

{
  "label": "民勤县",
  "value": "620621" },

{
  "label": "古浪县",
  "value": "620622" },

{
  "label": "天祝藏族自治县",
  "value": "620623" }],


[{
  "label": "甘州区",
  "value": "620702" },

{
  "label": "肃南裕固族自治县",
  "value": "620721" },

{
  "label": "民乐县",
  "value": "620722" },

{
  "label": "临泽县",
  "value": "620723" },

{
  "label": "高台县",
  "value": "620724" },

{
  "label": "山丹县",
  "value": "620725" }],


[{
  "label": "崆峒区",
  "value": "620802" },

{
  "label": "泾川县",
  "value": "620821" },

{
  "label": "灵台县",
  "value": "620822" },

{
  "label": "崇信县",
  "value": "620823" },

{
  "label": "华亭县",
  "value": "620824" },

{
  "label": "庄浪县",
  "value": "620825" },

{
  "label": "静宁县",
  "value": "620826" },

{
  "label": "平凉工业园区",
  "value": "620871" }],


[{
  "label": "肃州区",
  "value": "620902" },

{
  "label": "金塔县",
  "value": "620921" },

{
  "label": "瓜州县",
  "value": "620922" },

{
  "label": "肃北蒙古族自治县",
  "value": "620923" },

{
  "label": "阿克塞哈萨克族自治县",
  "value": "620924" },

{
  "label": "玉门市",
  "value": "620981" },

{
  "label": "敦煌市",
  "value": "620982" }],


[{
  "label": "西峰区",
  "value": "621002" },

{
  "label": "庆城县",
  "value": "621021" },

{
  "label": "环县",
  "value": "621022" },

{
  "label": "华池县",
  "value": "621023" },

{
  "label": "合水县",
  "value": "621024" },

{
  "label": "正宁县",
  "value": "621025" },

{
  "label": "宁县",
  "value": "621026" },

{
  "label": "镇原县",
  "value": "621027" }],


[{
  "label": "安定区",
  "value": "621102" },

{
  "label": "通渭县",
  "value": "621121" },

{
  "label": "陇西县",
  "value": "621122" },

{
  "label": "渭源县",
  "value": "621123" },

{
  "label": "临洮县",
  "value": "621124" },

{
  "label": "漳县",
  "value": "621125" },

{
  "label": "岷县",
  "value": "621126" }],


[{
  "label": "武都区",
  "value": "621202" },

{
  "label": "成县",
  "value": "621221" },

{
  "label": "文县",
  "value": "621222" },

{
  "label": "宕昌县",
  "value": "621223" },

{
  "label": "康县",
  "value": "621224" },

{
  "label": "西和县",
  "value": "621225" },

{
  "label": "礼县",
  "value": "621226" },

{
  "label": "徽县",
  "value": "621227" },

{
  "label": "两当县",
  "value": "621228" }],


[{
  "label": "临夏市",
  "value": "622901" },

{
  "label": "临夏县",
  "value": "622921" },

{
  "label": "康乐县",
  "value": "622922" },

{
  "label": "永靖县",
  "value": "622923" },

{
  "label": "广河县",
  "value": "622924" },

{
  "label": "和政县",
  "value": "622925" },

{
  "label": "东乡族自治县",
  "value": "622926" },

{
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927" }],


[{
  "label": "合作市",
  "value": "623001" },

{
  "label": "临潭县",
  "value": "623021" },

{
  "label": "卓尼县",
  "value": "623022" },

{
  "label": "舟曲县",
  "value": "623023" },

{
  "label": "迭部县",
  "value": "623024" },

{
  "label": "玛曲县",
  "value": "623025" },

{
  "label": "碌曲县",
  "value": "623026" },

{
  "label": "夏河县",
  "value": "623027" }]],



[
[{
  "label": "城东区",
  "value": "630102" },

{
  "label": "城中区",
  "value": "630103" },

{
  "label": "城西区",
  "value": "630104" },

{
  "label": "城北区",
  "value": "630105" },

{
  "label": "大通回族土族自治县",
  "value": "630121" },

{
  "label": "湟中县",
  "value": "630122" },

{
  "label": "湟源县",
  "value": "630123" }],


[{
  "label": "乐都区",
  "value": "630202" },

{
  "label": "平安区",
  "value": "630203" },

{
  "label": "民和回族土族自治县",
  "value": "630222" },

{
  "label": "互助土族自治县",
  "value": "630223" },

{
  "label": "化隆回族自治县",
  "value": "630224" },

{
  "label": "循化撒拉族自治县",
  "value": "630225" }],


[{
  "label": "门源回族自治县",
  "value": "632221" },

{
  "label": "祁连县",
  "value": "632222" },

{
  "label": "海晏县",
  "value": "632223" },

{
  "label": "刚察县",
  "value": "632224" }],


[{
  "label": "同仁县",
  "value": "632321" },

{
  "label": "尖扎县",
  "value": "632322" },

{
  "label": "泽库县",
  "value": "632323" },

{
  "label": "河南蒙古族自治县",
  "value": "632324" }],


[{
  "label": "共和县",
  "value": "632521" },

{
  "label": "同德县",
  "value": "632522" },

{
  "label": "贵德县",
  "value": "632523" },

{
  "label": "兴海县",
  "value": "632524" },

{
  "label": "贵南县",
  "value": "632525" }],


[{
  "label": "玛沁县",
  "value": "632621" },

{
  "label": "班玛县",
  "value": "632622" },

{
  "label": "甘德县",
  "value": "632623" },

{
  "label": "达日县",
  "value": "632624" },

{
  "label": "久治县",
  "value": "632625" },

{
  "label": "玛多县",
  "value": "632626" }],


[{
  "label": "玉树市",
  "value": "632701" },

{
  "label": "杂多县",
  "value": "632722" },

{
  "label": "称多县",
  "value": "632723" },

{
  "label": "治多县",
  "value": "632724" },

{
  "label": "囊谦县",
  "value": "632725" },

{
  "label": "曲麻莱县",
  "value": "632726" }],


[{
  "label": "格尔木市",
  "value": "632801" },

{
  "label": "德令哈市",
  "value": "632802" },

{
  "label": "乌兰县",
  "value": "632821" },

{
  "label": "都兰县",
  "value": "632822" },

{
  "label": "天峻县",
  "value": "632823" },

{
  "label": "大柴旦行政委员会",
  "value": "632857" },

{
  "label": "冷湖行政委员会",
  "value": "632858" },

{
  "label": "茫崖行政委员会",
  "value": "632859" }]],



[
[{
  "label": "兴庆区",
  "value": "640104" },

{
  "label": "西夏区",
  "value": "640105" },

{
  "label": "金凤区",
  "value": "640106" },

{
  "label": "永宁县",
  "value": "640121" },

{
  "label": "贺兰县",
  "value": "640122" },

{
  "label": "灵武市",
  "value": "640181" }],


[{
  "label": "大武口区",
  "value": "640202" },

{
  "label": "惠农区",
  "value": "640205" },

{
  "label": "平罗县",
  "value": "640221" }],


[{
  "label": "利通区",
  "value": "640302" },

{
  "label": "红寺堡区",
  "value": "640303" },

{
  "label": "盐池县",
  "value": "640323" },

{
  "label": "同心县",
  "value": "640324" },

{
  "label": "青铜峡市",
  "value": "640381" }],


[{
  "label": "原州区",
  "value": "640402" },

{
  "label": "西吉县",
  "value": "640422" },

{
  "label": "隆德县",
  "value": "640423" },

{
  "label": "泾源县",
  "value": "640424" },

{
  "label": "彭阳县",
  "value": "640425" }],


[{
  "label": "沙坡头区",
  "value": "640502" },

{
  "label": "中宁县",
  "value": "640521" },

{
  "label": "海原县",
  "value": "640522" }]],



[
[{
  "label": "天山区",
  "value": "650102" },

{
  "label": "沙依巴克区",
  "value": "650103" },

{
  "label": "新市区",
  "value": "650104" },

{
  "label": "水磨沟区",
  "value": "650105" },

{
  "label": "头屯河区",
  "value": "650106" },

{
  "label": "达坂城区",
  "value": "650107" },

{
  "label": "米东区",
  "value": "650109" },

{
  "label": "乌鲁木齐县",
  "value": "650121" },

{
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171" },

{
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172" }],


[{
  "label": "独山子区",
  "value": "650202" },

{
  "label": "克拉玛依区",
  "value": "650203" },

{
  "label": "白碱滩区",
  "value": "650204" },

{
  "label": "乌尔禾区",
  "value": "650205" }],


[{
  "label": "高昌区",
  "value": "650402" },

{
  "label": "鄯善县",
  "value": "650421" },

{
  "label": "托克逊县",
  "value": "650422" }],


[{
  "label": "伊州区",
  "value": "650502" },

{
  "label": "巴里坤哈萨克自治县",
  "value": "650521" },

{
  "label": "伊吾县",
  "value": "650522" }],


[{
  "label": "昌吉市",
  "value": "652301" },

{
  "label": "阜康市",
  "value": "652302" },

{
  "label": "呼图壁县",
  "value": "652323" },

{
  "label": "玛纳斯县",
  "value": "652324" },

{
  "label": "奇台县",
  "value": "652325" },

{
  "label": "吉木萨尔县",
  "value": "652327" },

{
  "label": "木垒哈萨克自治县",
  "value": "652328" }],


[{
  "label": "博乐市",
  "value": "652701" },

{
  "label": "阿拉山口市",
  "value": "652702" },

{
  "label": "精河县",
  "value": "652722" },

{
  "label": "温泉县",
  "value": "652723" }],


[{
  "label": "库尔勒市",
  "value": "652801" },

{
  "label": "轮台县",
  "value": "652822" },

{
  "label": "尉犁县",
  "value": "652823" },

{
  "label": "若羌县",
  "value": "652824" },

{
  "label": "且末县",
  "value": "652825" },

{
  "label": "焉耆回族自治县",
  "value": "652826" },

{
  "label": "和静县",
  "value": "652827" },

{
  "label": "和硕县",
  "value": "652828" },

{
  "label": "博湖县",
  "value": "652829" },

{
  "label": "库尔勒经济技术开发区",
  "value": "652871" }],


[{
  "label": "阿克苏市",
  "value": "652901" },

{
  "label": "温宿县",
  "value": "652922" },

{
  "label": "库车县",
  "value": "652923" },

{
  "label": "沙雅县",
  "value": "652924" },

{
  "label": "新和县",
  "value": "652925" },

{
  "label": "拜城县",
  "value": "652926" },

{
  "label": "乌什县",
  "value": "652927" },

{
  "label": "阿瓦提县",
  "value": "652928" },

{
  "label": "柯坪县",
  "value": "652929" }],


[{
  "label": "阿图什市",
  "value": "653001" },

{
  "label": "阿克陶县",
  "value": "653022" },

{
  "label": "阿合奇县",
  "value": "653023" },

{
  "label": "乌恰县",
  "value": "653024" }],


[{
  "label": "喀什市",
  "value": "653101" },

{
  "label": "疏附县",
  "value": "653121" },

{
  "label": "疏勒县",
  "value": "653122" },

{
  "label": "英吉沙县",
  "value": "653123" },

{
  "label": "泽普县",
  "value": "653124" },

{
  "label": "莎车县",
  "value": "653125" },

{
  "label": "叶城县",
  "value": "653126" },

{
  "label": "麦盖提县",
  "value": "653127" },

{
  "label": "岳普湖县",
  "value": "653128" },

{
  "label": "伽师县",
  "value": "653129" },

{
  "label": "巴楚县",
  "value": "653130" },

{
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131" }],


[{
  "label": "和田市",
  "value": "653201" },

{
  "label": "和田县",
  "value": "653221" },

{
  "label": "墨玉县",
  "value": "653222" },

{
  "label": "皮山县",
  "value": "653223" },

{
  "label": "洛浦县",
  "value": "653224" },

{
  "label": "策勒县",
  "value": "653225" },

{
  "label": "于田县",
  "value": "653226" },

{
  "label": "民丰县",
  "value": "653227" }],


[{
  "label": "伊宁市",
  "value": "654002" },

{
  "label": "奎屯市",
  "value": "654003" },

{
  "label": "霍尔果斯市",
  "value": "654004" },

{
  "label": "伊宁县",
  "value": "654021" },

{
  "label": "察布查尔锡伯自治县",
  "value": "654022" },

{
  "label": "霍城县",
  "value": "654023" },

{
  "label": "巩留县",
  "value": "654024" },

{
  "label": "新源县",
  "value": "654025" },

{
  "label": "昭苏县",
  "value": "654026" },

{
  "label": "特克斯县",
  "value": "654027" },

{
  "label": "尼勒克县",
  "value": "654028" }],


[{
  "label": "塔城市",
  "value": "654201" },

{
  "label": "乌苏市",
  "value": "654202" },

{
  "label": "额敏县",
  "value": "654221" },

{
  "label": "沙湾县",
  "value": "654223" },

{
  "label": "托里县",
  "value": "654224" },

{
  "label": "裕民县",
  "value": "654225" },

{
  "label": "和布克赛尔蒙古自治县",
  "value": "654226" }],


[{
  "label": "阿勒泰市",
  "value": "654301" },

{
  "label": "布尔津县",
  "value": "654321" },

{
  "label": "富蕴县",
  "value": "654322" },

{
  "label": "福海县",
  "value": "654323" },

{
  "label": "哈巴河县",
  "value": "654324" },

{
  "label": "青河县",
  "value": "654325" },

{
  "label": "吉木乃县",
  "value": "654326" }],


[{
  "label": "石河子市",
  "value": "659001" },

{
  "label": "阿拉尔市",
  "value": "659002" },

{
  "label": "图木舒克市",
  "value": "659003" },

{
  "label": "五家渠市",
  "value": "659004" },

{
  "label": "铁门关市",
  "value": "659006" }]],



[
[{
  "label": "台北",
  "value": "660101" }],

[{
  "label": "高雄",
  "value": "660201" }],

[{
  "label": "基隆",
  "value": "660301" }],

[{
  "label": "台中",
  "value": "660401" }],

[{
  "label": "台南",
  "value": "660501" }],

[{
  "label": "新竹",
  "value": "660601" }],

[{
  "label": "嘉义",
  "value": "660701" }],

[{
  "label": "宜兰",
  "value": "660801" }],

[{
  "label": "桃园",
  "value": "660901" }],

[{
  "label": "苗栗",
  "value": "661001" }],

[{
  "label": "彰化",
  "value": "661101" }],

[{
  "label": "南投",
  "value": "661201" }],

[{
  "label": "云林",
  "value": "661301" }],

[{
  "label": "屏东",
  "value": "661401" }],

[{
  "label": "台东",
  "value": "661501" }],

[{
  "label": "花莲",
  "value": "661601" }],

[{
  "label": "澎湖",
  "value": "661701" }]],


[
[{
  "label": "香港岛",
  "value": "670101" }],

[{
  "label": "九龙",
  "value": "670201" }],

[{
  "label": "新界",
  "value": "670301" }]],


[
[{
  "label": "澳门半岛",
  "value": "680101" }],

[{
  "label": "氹仔岛",
  "value": "680201" }],

[{
  "label": "路环岛",
  "value": "680301" }],

[{
  "label": "路氹城",
  "value": "680401" }]]];var _default =



areaData;exports.default = _default;

/***/ }),
/* 420 */
/*!**********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/components/w-picker/w-picker.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var forMatNum = function forMatNum(num) {
  return num < 10 ? '0' + num : num + '';
};
var initPicker = {
  initDays: function initDays(year, month) {
    var totalDays = new Date(year, month, 0).getDate();
    var dates = [];
    for (var d = 1; d <= totalDays; d++) {
      dates.push(forMatNum(d));
    };
    return dates;
  },
  //日期初始化
  date: function date(start, end) {var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "date";var step = arguments.length > 3 ? arguments[3] : undefined;var value = arguments.length > 4 ? arguments[4] : undefined;var flag = arguments.length > 5 ? arguments[5] : undefined;
    var aToday = new Date();
    var tYear,tMonth,tDay,tHours,tMinutes,tSeconds,defaultVal = [];
    var initstartDate = new Date(start);
    var endDate = new Date(end);
    if (start > end) {
      initstartDate = new Date(end);
      endDate = new Date(start);
    };
    var startYear = initstartDate.getFullYear();
    var startMonth = initstartDate.getMonth() + 1;
    var endYear = endDate.getFullYear();
    var years = [],months = [],days = [],hours = [],minutes = [],seconds = [],returnArr = [];
    var curMonth = flag ? value[1] * 1 : value[1] + 1;
    var totalDays = new Date(startYear, curMonth, 0).getDate();
    for (var s = startYear; s <= endYear; s++) {
      years.push(s + '');
    };
    for (var m = 1; m <= 12; m++) {
      months.push(forMatNum(m));
    };
    for (var d = 1; d <= totalDays; d++) {
      days.push(forMatNum(d));
    }
    for (var h = 0; h < 24; h++) {
      hours.push(forMatNum(h));
    }
    for (var _m = 0; _m < 60; _m += step * 1) {
      minutes.push(forMatNum(_m));
    }
    for (var _s = 0; _s < 60; _s++) {
      seconds.push(forMatNum(_s));
    }
    if (flag) {
      returnArr = [
      years.indexOf(value[0]),
      months.indexOf(value[1]),
      days.indexOf(value[2]),
      hours.indexOf(value[3]),
      minutes.indexOf(value[4]) == -1 ? 0 : minutes.indexOf(value[4]),
      seconds.indexOf(value[5])];

    };
    switch (mode) {
      case "range":
        if (flag) {
          defaultVal = [returnArr[0], returnArr[1], returnArr[2], 0, returnArr[0], returnArr[1], returnArr[2]];
          return { years: years, months: months, days: days, defaultVal: defaultVal };
        } else {
          return { years: years, months: months, days: days };
        }
        break;
      case "date":
        if (flag) {
          defaultVal = [returnArr[0], returnArr[1], returnArr[2]];
          return { years: years, months: months, days: days, defaultVal: defaultVal };
        } else {
          return { years: years, months: months, days: days };
        }
        break;
      case "yearMonth":
        if (flag) {
          defaultVal = [returnArr[0], returnArr[1]];
          return { years: years, months: months, defaultVal: defaultVal };
        } else {
          return { years: years, months: months };
        }
        break;
      case "dateTime":
        if (flag) {
          defaultVal = returnArr;
          return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
        } else {
          return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds };
        }
        break;
      case "time":
        if (flag) {
          defaultVal = [returnArr[3], returnArr[4], returnArr[5]];
          return { hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
        } else {
          return { hours: hours, minutes: minutes, seconds: seconds };
        }
        break;}

  },
  //短期时间初始化小时
  initLimitHours: function initLimitHours(startHour, endHour) {
    var hours = [];
    for (var k = startHour * 1; k <= endHour * 1; k++) {
      hours.push({
        label: forMatNum(k),
        value: forMatNum(k),
        flag: false });

    }
    return hours;
  },
  //短期时间初始化分钟
  initLimitMinutes: function initLimitMinutes(minuteStep) {
    var minutes = [];
    for (var j = 0; j < 60; j += minuteStep * 1) {
      minutes.push({
        label: forMatNum(j),
        value: forMatNum(j) });

    }
    return minutes;
  },
  //短期时间初始化
  limit: function limit() {var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;var startHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;var endHour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;var minuteStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;var afterStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
    var startDate = new Date();
    var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
    var date = [];
    var hours = [];
    var minutes = [];
    var hour = bsDate.getHours();
    var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
    var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    for (var i = 0; i < dayStep; i++) {
      var year = void 0,month = void 0,day = void 0,weekday = void 0;
      year = startDate.getFullYear();
      month = forMatNum(startDate.getMonth() + 1);
      day = forMatNum(startDate.getDate());
      weekday = weeks[startDate.getDay()];
      var label = "";
      switch (i) {
        case 0:
          label = "今天";
          break;
        case 1:
          label = "明天";
          break;
        case 2:
          label = "后天";
          break;
        default:
          label = month + "月" + day + "日" + " " + weekday;
          break;}

      date.push({
        label: label,
        value: year + "-" + month + "-" + day,
        flag: i == 0 ? true : false });

      startDate.setDate(startDate.getDate() + 1);
    }
    if (hour > endHour) {
      hour = endHour;
    };
    for (var k = hour * 1; k <= endHour * 1; k++) {
      hours.push({
        label: forMatNum(k),
        value: forMatNum(k),
        flag: k == hour ? true : false });

    };
    for (var j = minute; j < 60; j += minuteStep * 1) {
      minutes.push({
        label: forMatNum(j),
        value: forMatNum(j) });

    }
    return { date: date, hours: hours, minutes: minutes };
  },
  //选择区间初始化日期
  initRangeDays: function initRangeDays(year, month) {
    var totalDays = new Date(year, month, 0).getDate();
    var dates = [];
    for (var d = 1; d <= totalDays; d++) {
      dates.push(forMatNum(d));
    };
    return dates;
  },
  //选择区间初始化
  range: function range(start, end, value, flag) {
    var aToday = new Date();
    var tYear,tMonth,tDay,tHours,tMinutes,tSeconds,defaultVal = [];
    var initstartDate = new Date(start);
    var endDate = new Date(end);
    if (start > end) {
      initstartDate = new Date(end);
      endDate = new Date(start);
    };
    var startYear = initstartDate.getFullYear();
    var startMonth = initstartDate.getMonth() + 1;
    var endYear = endDate.getFullYear();
    var fyears = [],fmonths = [],fdays = [],tyears = [],tmonths = [],tdays = [],returnArr = [];
    var curMonth = flag ? value[1] * 1 : value[1] + 1;
    var totalDays = new Date(startYear, curMonth, 0).getDate();
    for (var s = startYear; s <= endYear; s++) {
      fyears.push(s + '');
    };
    for (var m = 1; m <= 12; m++) {
      fmonths.push(forMatNum(m));
    };
    for (var d = 1; d <= totalDays; d++) {
      fdays.push(forMatNum(d));
    };
    for (var _s2 = startYear; _s2 <= endYear; _s2++) {
      tyears.push(_s2 + '');
    };
    for (var _m2 = 1; _m2 <= 12; _m2++) {
      tmonths.push(forMatNum(_m2));
    };
    for (var _d = 1; _d <= totalDays; _d++) {
      tdays.push(forMatNum(_d));
    };
    if (flag) {
      defaultVal = [
      fyears.indexOf(value[0]),
      fmonths.indexOf(value[1]),
      fdays.indexOf(value[2]),
      0,
      tyears.indexOf(value[0]),
      tmonths.indexOf(value[1]),
      tdays.indexOf(value[2])];

      return {
        fyears: fyears,
        fmonths: fmonths,
        fdays: fdays,
        tyears: tyears,
        tmonths: tmonths,
        tdays: tdays,
        defaultVal: defaultVal };

    } else {
      return {
        fyears: fyears,
        fmonths: fmonths,
        fdays: fdays,
        tyears: tyears,
        tmonths: tmonths,
        tdays: tdays };

    }
  } };var _default =


initPicker;exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map