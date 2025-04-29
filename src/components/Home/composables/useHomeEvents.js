import { useEventListener, useMouse } from '@vueuse/core'
import { reactive } from 'vue'

export const useHomeEvents = () => {
  const mouse = reactive(useMouse())

  useEventListener('mousemove', (e) => {
    // 如果需要處理滑鼠移動事件，可以在這裡添加邏輯
  })

  return {
    mouse,
  }
}
