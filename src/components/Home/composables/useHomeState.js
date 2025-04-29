import { useTitle } from '@vueuse/core'

export const useHomeState = () => {
  const title = useTitle('Right')

  return {
    title,
  }
}
