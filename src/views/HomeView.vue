<script setup>
import { UseMouse } from '@vueuse/components'
import { onUnmounted } from 'vue'
import { useHomeEvents } from '@/components/Home/composables/useHomeEvents'
import { useHomeState } from '@/components/Home/composables/useHomeState'

const { mouse } = useHomeEvents()
const { title } = useHomeState()

onUnmounted(() => {
  console.log('unmounted')
})
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <UseMouse #default="{ x, y }">
      <div>{{ x }}, {{ y }}</div>
    </UseMouse>
  </main>
</template>
