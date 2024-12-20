import { ChallengeObjective, type Challenge } from '@/models/challenge'

export const CHALLENGES: Challenge[] = [
  // Clics
  {
    id: 1,
    name: 'Premier clic',
    description: 'Effectue ton premier clic.',
    objective: { type: ChallengeObjective.Clicks, goal: 1 },
    reward: { money: 100, xp: 10 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 2,
    name: 'Petit clickeur',
    description: 'Effectue 100 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 100 },
    reward: { money: 500, xp: 50 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 3,
    name: 'Accro au clic',
    description: 'Effectue 1,000 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 1000 },
    reward: { money: 4000, xp: 100 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 4,
    name: 'Clic master',
    description: 'Effectue 10,000 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 10000 },
    reward: { money: 25000, xp: 500 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 5,
    name: 'Légende du clic',
    description: 'Effectue 100,000 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 100000 },
    reward: { money: 1000000, xp: 2000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 6,
    name: 'Maître du clic',
    description: 'Effectue 500,000 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 500000 },
    reward: { money: 100000000, xp: 5000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 7,
    name: 'Héros du clic',
    description: 'Effectue 1,000,000 clics.',
    objective: { type: ChallengeObjective.Clicks, goal: 1000000 },
    reward: { money: 1000000000, xp: 10000 },
    progress: 0,
    rewardClaimed: false,
  },

  // Argent
  {
    id: 8,
    name: 'Début d’une fortune',
    description: 'Gagne 1,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 1000 },
    reward: { money: 500, xp: 50 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 9,
    name: 'Petit entrepreneur',
    description: 'Gagne 10,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 10000 },
    reward: { money: 2000, xp: 100 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 10,
    name: 'Homme d’affaires',
    description: 'Gagne 100,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 100000 },
    reward: { money: 10000, xp: 300 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 11,
    name: 'Millionnaire',
    description: 'Gagne 1,000,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 1000000 },
    reward: { money: 100000, xp: 1000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 12,
    name: 'Magnat',
    description: 'Gagne 10,000,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 10000000 },
    reward: { money: 1000000, xp: 5000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 13,
    name: 'Baron d’affaires',
    description: 'Gagne 50,000,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 50000000 },
    reward: { money: 5000000, xp: 15000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 14,
    name: 'Roi des affaires',
    description: 'Gagne 100,000,000 pièces d’argent.',
    objective: { type: ChallengeObjective.Money, goal: 100000000 },
    reward: { money: 10000000, xp: 30000 },
    progress: 0,
    rewardClaimed: false,
  },

  // AutoClickers
  {
    id: 15,
    name: 'Petit clic automatique',
    description: 'Achète ton premier AutoClicker.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 1 },
    reward: { money: 500, xp: 20 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 16,
    name: 'Armée de clics',
    description: 'Possède 10 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 10 },
    reward: { money: 2000, xp: 100 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 17,
    name: 'Machine à clics',
    description: 'Possède 50 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 50 },
    reward: { money: 10000, xp: 500 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 18,
    name: 'Roi du clic',
    description: 'Possède 100 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 100 },
    reward: { money: 20000, xp: 1000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 19,
    name: 'Monopole des clics',
    description: 'Possède 500 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 500 },
    reward: { money: 50000, xp: 5000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 20,
    name: 'Bill Gates',
    description: 'Possède 1000 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 1000 },
    reward: { money: 100000, xp: 7000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 21,
    name: 'Empereur des clics',
    description: 'Possède 5000 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 5000 },
    reward: { money: 200000, xp: 15000 },
    progress: 0,
    rewardClaimed: false,
  },
  {
    id: 22,
    name: 'Dieu des clics',
    description: 'Possède 10000 AutoClickers.',
    objective: { type: ChallengeObjective.AutoClickers, goal: 10000 },
    reward: { money: 500000, xp: 30000 },
    progress: 0,
    rewardClaimed: false,
  },
]
