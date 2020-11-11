<template>
    <van-swipe v-if="sliderList.length" class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="l in sliderList" :key="l.url">
            <img class="banner" :src="l.url" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script lang="ts">
import { IGlobalState } from '@/store'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import * as Types from '@/store/action-types'
export default defineComponent({
    async setup(){
        let store = useStore<IGlobalState>();
        let sliderList = computed(() => store.state.home.sliders);
        if(sliderList.value.length == 0){       //如果数据没有获取到
            await store.dispatch(`home/${Types.SET_SLIDER_LIST}`);      //dispatch返回一个promise
        }   
        // await new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //         resolve();
        //     }, 1000);
        // })
        return {
            sliderList
        }
    }
})
</script>

<style scoped>
.banner{
    width: 100%;
}
</style>