import Vue from 'vue';
import Vuex from 'vuex';
// import home from './modules/home';
// import address from './modules/address';
// import virtualCard from "./modules/virtualCard";
import common from "./modules/common";
import order from './modules/order';
import getters from './getters';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
	order
  },
  getters,
})

export default store
