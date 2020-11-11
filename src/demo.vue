<template>
<button @click="increment">
    当前是: {{ state.count }}, 双倍是: {{ state.double }}
</button>
<p ref="content"></p>
<p>{{num}}</p>
</template>

<script>
import {
    computed,
    onMounted,
    reactive,
    ref,
    watchEffect
} from 'vue'
const checkUsername = (props, context) => {
  onMounted(() => {
    console.log(props)
    context.emit('event', 'payload')
  })
}
export default {
  setup (props, context) {
    checkUsername(props, context)
  }
}

</script>
