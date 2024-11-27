import { getMe, saveData } from '@/services/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useXpStore = defineStore('xp', () => {
  const xp = ref<number>(0)
  const memoryXp = ref<number>(0)

  getMe().then((user) => {
    xp.value = user?.xp || 0
    memoryXp.value = user?.xp || 0
  })

  const addXp = (amount: number) => {
    xp.value += amount
  }

  setInterval(() => {
    if (memoryXp.value === xp.value) return

    saveData({ xp: xp.value })
    memoryXp.value = xp.value
  }, 1000 * 30)

  return { xp, addXp }
})
