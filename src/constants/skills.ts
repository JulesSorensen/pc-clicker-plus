import type { Skill } from '@/models/skill'

export const SKILLS: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    price: 0,
    multiplier: 1,
    description:
      "HTML : la base du web, simple comme bonjour... et tout le monde l'oublie quand il s'agit de balises !",
    image: new URL('../assets/bonusClickImages/Html.png', import.meta.url).href,
    isAcquired: true,
  },
  {
    id: 2,
    name: 'CSS',
    price: 5000,
    multiplier: 3,
    description:
      'CSS : stylise le web, mais attention aux sélecteurs, ils peuvent vous donner des maux de tête !',
    image: new URL('../assets/bonusClickImages/Css.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 3,
    name: 'JavaScript',
    price: 50000,
    multiplier: 15,
    description:
      "JavaScript : le moteur interactif du web, parfois aussi imprévisible qu'un chat sur un clavier.",
    image: new URL('../assets/bonusClickImages/Js.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 4,
    name: 'Python',
    price: 400000,
    multiplier: 35,
    description:
      "Python : polyvalent et puissant, mais attention aux indentations, c'est là que tout se joue !",
    image: new URL('../assets/bonusClickImages/Python.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 5,
    name: 'Java',
    price: 800000,
    multiplier: 75,
    description:
      "Java : robuste et fiable, mais si long à écrire qu'on pourrait y mettre un café entre chaque ligne.",
    image: new URL('../assets/bonusClickImages/Java.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 6,
    name: 'C#',
    price: 1500000,
    multiplier: 150,
    description:
      "C# : orienté objet et clair, comme un bon vieux film d'action... avec quelques rebondissements inattendus.",
    image: new URL('../assets/bonusClickImages/Csharp.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 7,
    name: 'C++',
    price: 5000000,
    multiplier: 300,
    description:
      "C++ : performant et complexe comme un Rubik's Cube (pour les développeurs qui aiment les défis).",
    image: new URL('../assets/bonusClickImages/Cplusplus.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 8,
    name: 'Ruby',
    price: 10000000,
    multiplier: 400,
    description:
      'Ruby : élégant et expressif, mais attention aux gemmes...elles peuvent vous faire pleurerde frustration.',
    image: new URL('../assets/bonusClickImages/Ruby.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 9,
    name: 'PHP',
    price: 25000000,
    multiplier: 500,
    description:
      'PHP : omniprésent sur le web, comme ce cousin que vous ne pouvez pas éviter lors des réunions de famille.',
    image: new URL('../assets/bonusClickImages/Php.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 10,
    name: 'Go',
    price: 75000000,
    multiplier: 600,
    description:
      'Go : efficace et moderne, comme un café bien serré pour les développeurs pressés.',
    image: new URL('../assets/bonusClickImages/Go.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 11,
    name: 'Swift',
    price: 500000000,
    multiplier: 700,
    description:
      'Swift : rapide et sûr, idéal pour le développement iOS... mais ne lui parlez pas de Java !',
    image: new URL('../assets/bonusClickImages/Swift.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 12,
    name: 'Perl',
    price: 1000000000,
    multiplier: 800,
    description:
      "Perl : puissant pour le texte, mais parfois aussi obscur qu'un poème surréaliste.",
    image: new URL('../assets/bonusClickImages/Perl.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 13,
    name: 'Kotlin',
    price: 1500000000,
    multiplier: 900,
    description: 'Kotlin : moderne et concis, comme un espresso pour les développeurs Android.',
    image: new URL('../assets/bonusClickImages/Kotlin.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 14,
    name: 'TypeScript',
    price: 3000000000,
    multiplier: 1000,
    description: "TypeScript : JavaScript avec des types, c'est plus sûr...Gare au Any!",
    image: new URL('../assets/bonusClickImages/Ts.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 15,
    name: 'Scala',
    price: 6000000000,
    multiplier: 1500,
    description:
      "Scala : combine la programmation fonctionnelle et orientée objet... c'est comme avoir le meilleur des deux mondes sans le désordre.",
    image: new URL('../assets/bonusClickImages/Scala.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 16,
    name: 'Rust',
    price: 12000000000,
    multiplier: 2000,
    description:
      "Rust : sécurisé par conception, mais avec une courbe d'apprentissage qui ressemble à un roller coaster.",
    image: new URL('../assets/bonusClickImages/Rust.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 17,
    name: 'Haskell',
    price: 20000000000,
    multiplier: 3000,
    description:
      'Haskell : purement fonctionnel et académique, parfait pour impressionner vos amis en soirée.',
    image: new URL('../assets/bonusClickImages/Haskell.png', import.meta.url).href,
    isAcquired: false,
  },
  {
    id: 18,
    name: 'Assembly',
    price: 40000000000,
    multiplier: 10000,
    description:
      "Assembly : bas niveau et performant, Réservez à ceux qui n'ont pas froid aux yeux !",
    image: new URL('../assets/bonusClickImages/Assembly.png', import.meta.url).href,
    isAcquired: false,
  },
]
