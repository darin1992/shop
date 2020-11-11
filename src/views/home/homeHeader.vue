<template>
<div class="header">
    <img class="logo" src="@/assets/logo-npm.png" alt="">
    <van-dropdown-menu class="menu">
        <!-- 以前的v-model = input事件 + value -->
        <van-dropdown-item :modelValue="category" :options="option" @change="change"/>  <!--组件接收多个属性，都是双向绑定值-->
    </van-dropdown-menu>
</div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from '@/typings';
import { defineComponent,PropType, reactive, toRefs} from 'vue';

export default defineComponent({
    props: {
        category: {
            type: Number as PropType<CATEGORY_TYPES>
        }
    },
    emits: ['setCurrentCategory'],      //为了做提示用的;也可以做校验
    setup(props,context){
        let state = reactive({
            option: [
                {text: '全部',value: CATEGORY_TYPES.ALL},
                {text: '鞋子',value: CATEGORY_TYPES.SHOES},
                {text: '袜子',value: CATEGORY_TYPES.SOCKES},
                {text: '衬衫',value: CATEGORY_TYPES.SHIRT},
                {text: '裤子',value: CATEGORY_TYPES.PANTS},
            ]
        })
        function change(value: CATEGORY_TYPES){
            context.emit('setCurrentCategory',value) 
        }

        return {
            //ref用来处理简单类型
            ...toRefs(state),
            change
        }
    }
})
</script>

<style scoped lang="scss">
.header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .logo{
        width: 100px;
        height: 50px;
        margin-left: 20px;
    }
    .menu{
        width: 200px;
    }
}
</style>