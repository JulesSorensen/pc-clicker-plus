import type { AutoClickerDb } from '@/models/autoClicker'
import type { Skill } from './skill'

export type User = {
  id?: string
  name: string
  money: number
  xp: number
  autoClickers: AutoClickerDb[]
  skills: Skill[]
  completedChallenges: number[]
}
