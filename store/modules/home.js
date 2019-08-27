const state = {
    init:{"001":"Search","002":"Navigation","003":"Banner","004":"Block","005":"Lines",
    "006":"navCircle",
    "101":"Discount","201":"CustomFloor","202":"TopList",
    "203":"MoreGoods",
    // "203":"singleProduct",
    "204":"CustomBannerAndProduct","205":"singleProduct"},
    componentIdList:[],
    needNotice:false,
    haveNews:false,
    bannerList:[],
    appkey:"",
    uid:"",
    preview:"",
    credits:0,
    appUnit:"",
    weburl:"",
    isBonus:'',
    isBranch:'',
    branchRequire:'',
    needInfo:''
}
const mutations = {
    SET_APPKEY(state,data){
        state.appkey = data;
    },
    SET_UID(state,data){
        state.uid = data;
    },
    SET_CREDITS(state,data){
        state.credits = data;
    },
    SET_ISBONUS(state,data){
        state.isBonus = data;
    },
    SET_COMPONENTIDLIST(state,data){
        state.componentIdList = data;
    },
    SET_APPUNIT(state,data){
        state.appUnit = data;
    },
    SET_PREVIEW(state,data){
        state.preview = data;
    },
    SET_ISBRANCH(state,data){
        state.isBranch = data;
    },
    SET_BRANCHREQUIRE(state,data){
        state.branchRequire = data;
    },
    SET_NEEDINFO(state,data){
        state.needInfo = data;
    }
}
const actions = {
    setUserInfo({commit},params){
        commit('SET_APPKEY',params.appkey);
        commit('SET_PREVIEW',params.preview);
    },
    setAppInfo({commit},params){
        commit('SET_ISBRANCH',params.isBranch);                      
        commit('SET_APPUNIT',params.appUnit);
        commit('SET_CREDITS',params.credits);  
        commit('SET_ISBONUS',params.isBonus);
        commit('SET_BRANCHREQUIRE',params.branchRequire);
        commit('SET_NEEDINFO',params.needInfo)
    },
    setComponentIdList({commit},params){
        commit('SET_COMPONENTIDLIST',params);   
    }
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
