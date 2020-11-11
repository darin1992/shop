
import { IHomeState } from '@/typings';
import { createStore } from 'vuex'

import home from './modules/home'

export interface IGlobalState{
  home: IHomeState
}

const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})
//store.state.home.currentCategory   所有状态可以通过代码提示来引导
export default store;

