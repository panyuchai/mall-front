const state = {
  order_status:"",
  order_No:"",
  order_goods:[{goodsid:"",count:"",overbalanceid:""}],
  order_from:"",
}
const mutations = {
  order_type_change (state, data) {
    state.order_status = data;
  },
  order_No_link (state, data) {
    state.order_No = data;
  },
  SETORDERGOODS(state,data){
    state.order_goods = data;
  },
  SETORDERFROM(state,data){
    state.order_from = data;
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
