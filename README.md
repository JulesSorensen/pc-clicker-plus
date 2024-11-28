# pc-clicker-plus

PC-CLICKER + est le jeux de l'année.
Il vous propose de monter les échellons de l'empire du dev via la frénésie de vos clicks.
Augmentez vos connaissance, montez en expérience et affrontez le reste du monde !😎
Prêt à relever le défi ?

## Configuration recommandée pour l'IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactivez Verur).

## Prise en charge des types pour les imports `.vue` en TS

TypeScript ne peut pas gérer les informations de type pour les imports`.vue` par défaut, nous remplaçons donc l'interface de ligne de commande `tsc` par `vue-tsc`  pour la vérification des types. Dans les éditeurs, nous avons besoin de [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) pour rendre le service de langage TypeScript conscient des types `.vue`.

## Personnalisez la configuration

Voir [Vite Configuration Reference](https://vite.dev/config/).

## Installation du projet

```sh
npm install
```

### Compiler et recharger à chaud pour le développement

```sh
npm run dev
```

### Vérification des types, compilation et minification pour la production

```sh
npm run build
```

### Analyse avec [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Les Technos utilisées

Le projet est développé en Vue avec TypeScript comme surcouche et compilé avec Vite.


Vue est un framework JavaScript pour construire des interfaces utilisateur. 
Il s'appuie sur le HTML, le CSS et le JavaScript standards.
Vue propose un modèle de programmation déclaratif basé sur des composants, qui vous aide à développer efficacement tout types d'interfaces utilisateur.

TypeScript ajoute une syntaxe supplémentaire à JavaScript pour une meilleure intégration avec votre éditeur. 
Il permet d'identifier les erreurs dès le début, directement dans votre éditeur.
TypeScript s'exécute partout où JavaScript fonctionne : dans un navigateur, sur Node.js, Deno, Bun et dans vos applications.
Ce dernier comprend JavaScript et utilise l'inférence de types pour vous offrir d'excellents outils sans nécessiter de code supplémentaire.

Vite est une nouvelle génération d'outils de construction pour le développement frontend, qui améliore considérablement l'expérience des développeurs. 

Il se compose de deux parties principales :

    Un serveur de développement qui sert vos fichiers source via des modules ES natifs, avec de riches fonctionnalités intégrées et un remplacement rapide des modules à chaud (Hot Module Replacement, HMR).

    Une commande de build qui regroupe votre code avec Rollup, préconfigurée pour produire des assets statiques hautement optimisés pour la production.

En outre, Vite est hautement extensible grâce à son API de plugins et son API JavaScript, avec une prise en charge complète du typage.

## Page du jeu

Après avoir entré votre pseudo et lancé la partie, vous accédez à la page principale du jeu. 

Celle-ci est divisée en plusieurs sections pour vous permettre de progresser efficacement. 
Voici les éléments essentiels:

- Section gauche : le PC Clicker
- Le cœur du jeu: L’élément central de cette section est le PC Clicker. En cliquant dessus, vous générez vos premiers revenus, indispensables pour faire décoller votre aventure et commencer votre ascension.
- Fonctionnement:
Cliquez sur l’image de l’ordinateur pour accumuler de l’argent.
Sous l’ordinateur, vous trouverez un affichage de vos économies actuelles, pour surveiller combien d’argent vous avez à dépenser.
Plus bas, l’indicateur Clics par seconde (CPS) vous montre combien d’argent vos Autoclickers génèrent automatiquement chaque seconde.
- Barre de progression: Une barre d’expérience au bas de cette section affiche votre niveau actuel et votre progression jusqu’au prochain niveau. Elle vous aide à suivre vos progrès et à mesurer votre croissance dans le jeu.
- Section droite : menus avancés
Cette partie de l’écran regroupe plusieurs onglets essentiels pour enrichir votre expérience:

### Page Autoclickers
Ici, vous pouvez investir dans des Autoclickers, qui augmentent la génération automatique de revenus. Chaque autoclicker comporte:

- Nom: Pour identifier le type d’autoclicker.
- Prix: Le coût en monnaie du jeu pour l’acquérir.
- Description: Une brève explication de son rôle ou de ses caractéristiques.
- Revenus par seconde: L’argent généré automatiquement grâce à cet autoclicker.
- Page Compétences
Cette section vous permet d’acheter des compétences, représentées par des langages de programmation. Ces compétences améliorent vos clics manuels en augmentant les revenus générés à chaque clic.

### Page Défis
Un espace dédié aux joueurs en quête de challenge! Vous y trouverez divers défis à accomplir, chacun offrant des récompenses uniques qui boostent votre progression.

### Page Classement
Suivez votre performance et mesurez-vous aux autres joueurs dans cette section. Le classement affiche les meilleurs joueurs, triés par niveau, et constitue une excellente source de motivation pour grimper les échelons.