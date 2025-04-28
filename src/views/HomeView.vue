<script setup>
import { useMouse, useTitle, useEventListener } from '@vueuse/core'
import { reactive, onUnmounted } from 'vue'

const mouse = reactive(useMouse())
const title = useTitle('Right')

useEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY)
})

console.log(mouse.x, mouse.y)
onUnmounted(() => {
  console.log('unmounted')
})
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>
