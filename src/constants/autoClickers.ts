import type { AutoClicker } from '@/models/autoClicker'

export const AUTO_CLICKERS: AutoClicker[] = [
  {
    id: 1,
    name: 'Stagiaire',
    price: 100,
    cps: 2,
    description: 'Le stagiaire : il clique... mais il prend aussi des pauses café !',
    image: new URL('../assets/autoClickerImages/Stagiaire.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 2,
    name: 'Stagiaire 2.0',
    price: 150,
    cps: 5,
    description: "Le stagiaire 2.0 : dispose d'un termo de café sur son bureau.",
    image: new URL('../assets/autoClickerImages/Stagiaire2_0.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 3,
    name: 'Étudiant en dev',
    price: 300,
    cps: 10,
    description:
      "L'étudiant en dev : clique, mais passe 70% de son temps à chercher des solutions StackOverflow.",
    image: new URL('../assets/autoClickerImages/Student.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 4,
    name: 'Alternant',
    price: 600,
    cps: 15,
    description: "L'alternant : l'expert en multi-tâches et en recherche d'email à répondre.",
    image: new URL('../assets/autoClickerImages/alternant.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 5,
    name: 'Développeur',
    price: 2000,
    cps: 25,
    description:
      'Le développeur : une machine à coder, mais qui oublie parfois de faire ses commits.',
    image: new URL('../assets/autoClickerImages/developpeur.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 6,
    name: 'Senior',
    price: 10000,
    cps: 50,
    description: "Le senior : plus d'expérience, moins de patience pour les bugs.",
    image: new URL('../assets/autoClickerImages/Senior.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 7,
    name: 'Lead Dev',
    price: 30000,
    cps: 100,
    description: 'Le Lead Dev : responsable du code, de la qualité... et des réunions inutiles.',
    image: new URL('../assets/autoClickerImages/lead dev.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 8,
    name: 'CTO',
    price: 50000,
    cps: 150,
    description: 'Le CTO : clique sur des idées brillantes, mais trop occupé pour coder.',
    image: new URL('../assets/autoClickerImages/CTO.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 9,
    name: 'DevOps',
    price: 100000,
    cps: 250,
    description: 'Le DevOps : il clique pour déployer, mais ça prend toujours 3 heures.',
    image: new URL('../assets/autoClickerImages/DevOps.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 10,
    name: 'Testeur',
    price: 200000,
    cps: 500,
    description: 'Le QA : clique sans cesse pour tester, mais il se plaint que tout est cassé.',
    image: new URL('../assets/autoClickerImages/QA_enginer.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 11,
    name: 'Consultant',
    price: 400000,
    cps: 1000,
    description: 'Le consultant : il clique tout en vous facturant par heure.',
    image: new URL('../assets/autoClickerImages/Consultant.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 12,
    name: 'Freelance',
    price: 1000000,
    cps: 1500,
    description: 'Le freelance : clique vite, mais envoie la facture avant même de terminer.',
    image: new URL('../assets/autoClickerImages/Freelance.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 13,
    name: 'Blockchain Dev',
    price: 2000000,
    cps: 2500,
    description: 'Le dev blockchain : clique, mais ça ne marche jamais comme prévu.',
    image: new URL('../assets/autoClickerImages/Blockchain.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 14,
    name: 'Ingenieur IA',
    price: 4000000,
    cps: 4000,
    description:
      "L'Ingenieur IA : clique, mais il pense qu'il est déjà à la retraite grâce à l'IA.",
    image: new URL('../assets/autoClickerImages/Dev_IA.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 15,
    name: 'Tech Lead',
    price: 10000000,
    cps: 5500,
    description: 'Le Tech Lead : clique avec confiance, mais son équipe doit coder derrière.',
    image: new URL('../assets/autoClickerImages/Tech_Lead.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 16,
    name: 'Designer',
    price: 20000000,
    cps: 10000,
    description: 'Le designer : clique sur le PC, mais ne sait pas où est le bouton droit.',
    image: new URL('../assets/autoClickerImages/Designer.png', import.meta.url).href,
    currentAmount: 0,
  },
  {
    id: 17,
    name: 'Guru',
    price: 200000000,
    cps: 50000,
    description: 'Le Guru : clique avec sagesse... mais personne ne comprend comment il le fait.',
    image: new URL('../assets/autoClickerImages/Guru.png', import.meta.url).href,
    currentAmount: 0,
  },
]
