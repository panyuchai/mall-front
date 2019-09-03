import { setStore, getStore, removeStore } from '../../utils/store.js'
const state = {
  order_goodsList: []
}
const mutations = {
	SET_ORDER_GOODSLIST (state, data){
		state.order_goodsList = data;
		setStore({ name: 'order_goodsList', content: state.data, type: 'sync' });
	}
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
