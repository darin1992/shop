<template>
<div>
    <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
    <Suspense>
      <!-- 新的内置组件 -->
        <template #default>
          <HomeSwiper></HomeSwiper>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
    </Suspense> 
    
    <HomeList></HomeList>
    {{category}}
</div>
</template>

<script lang="ts">
import {
    IGlobalState
} from '@/store'
import {
    computed,
    defineComponent
} from 'vue'
import {
    Store,
    useStore
} from 'vuex'
import HomeHeader from './homeHeader.vue'
import HomeSwiper from './homeSwiper.vue'
import HomeList from './homeList.vue'
import {
    CATEGORY_TYPES
} from '@/typings'
import * as Types from '@/store/action-types'
//专门为切换状态使用
function useCategory(store: Store < IGlobalState > ) {
    let category = computed(() => {
        return store.state.home.currentCategory
    })      //如果不用computed，这里就是一个死值，只是取到值放在这里；使用计算属性才能保证状态变了，计算一个新值在这里

    function setCurrentCategory(category: CATEGORY_TYPES) {
        store.commit(`home/${Types.SET_CATEGORY}`, category)
    }
    return {
        category,
        setCurrentCategory
    }
}
export default defineComponent({
    components: {
        HomeHeader,
        HomeSwiper,
        HomeList
    },
    setup() {
        let store = useStore < IGlobalState > ();
        let {
            category,
            setCurrentCategory
        } = useCategory(store);
        return {
          category,
          setCurrentCategory
        }
    }
})
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>
