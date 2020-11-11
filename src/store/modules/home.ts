import { getSliders } from "@/api/home";
import { CATEGORY_TYPES,IHomeState, ISlider } from "@/typings";
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from '../action-types'



//首页要存的状态
const state:IHomeState = {
    currentCategory: CATEGORY_TYPES.ALL,
    sliders: [],
    shops: {
        hasMore: true,
        loading: false,
        offset: 0,
        limit: 5,
        list: [],       //本次加载的数据
    }
};

//Module<S,R>  S:当前状态 R:根状态/全局状态
const home:Module<IHomeState,IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
        [Types.SET_CATEGORY](state,payload:CATEGORY_TYPES){
            state.currentCategory = payload;
        },
        [Types.SET_SLIDER_LIST](state,payload:ISlider[]){
            state.sliders = payload;
        }
    },
    actions: {
        async [Types.SET_SLIDER_LIST]({commit}){
            let sliders = await getSliders<ISlider>();
            commit(Types.SET_SLIDER_LIST,sliders)
        }
    }
}

export default home;