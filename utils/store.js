import {
  validatenull
} from './validate.js';
/**
 * 存储localStorage
 */
export const setStore = (params) => {
  let {
    name,
    content,
    type,
    datetime
  } = params;
  let obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }
  if (type) uni.setStorageSync(name, JSON.stringify(obj));
  else uni.setStorage(name, JSON.stringify(obj));
}
/**
 * 获取localStorage
 */
export const getStore = (params) => {
  let {
    name,
    type
  } = params;
  let obj = {},
      content;
  obj = uni.getStorageSync(name);
  // if (validatenull(obj)) obj = uni.getStorage(name);
  if (validatenull(obj)) return;
  obj = JSON.parse(obj);
  
  if (obj.dataType == 'string') {
    content = obj.content;
  } else if (obj.dataType == 'number') {
    content = Number(obj.content);
  } else if (obj.dataType == 'boolean') {
    content = Boolean(obj.content);
  } else if (obj.dataType == 'object') {
    content = obj.content;
  }
  return content;
}
/**
 * 删除localStorage
 */
export const removeStore = params => {
  let {
    name
  } = params;
  uni.removeStorageSync(name);
  uni.removeStorage(name);
}

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
