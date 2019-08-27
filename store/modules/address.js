const state = {
  address_selected:0,
  address_id:"",
  isNew:""
}
const mutations = {
  addressSelected (state, data) {
    state.address_selected = data.addressIndex
    state.address_id = data.addressId
  },
  addressIsNew (state, data) {
    state.isNew = data
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
