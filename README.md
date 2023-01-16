# panoramax-website - EN Version
The Panoramax website was created to present and make available the tools related to the geocommun.
Take a look on [Panoramax](https://panoramax.fr/)

# Contribution
Do not hesitate if you want to contribute to the project.
To do that you can :

- Create PR (pull requests) here on Github

- Create Issues here on Github too

- Go to the [Panoramax Forum](https://forum.geocommuns.fr/c/panoramax/6) and create a post

# Tech template
This template should help get you started developing and deploy with Vue 3 in Vite.
If at some point you're lost, need help or if you have any question about the project,
you can contact us through issues or by [email](panoramax@panoramax.fr).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run workflows:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deploy with Github Pages

The deploy is on the `gh-pages` branch.
1 - You must build a static project :

```sh
vite deploy
```

2 - Add and Commit :

```sh
ga .
gc -m 'my commit'
```

3 - Push the dist folder on the specific branch

```sh
git subtree push --prefix dist origin gh-pages
```


# panoramax-website - Version FR
Le site Panoramax est là pour présenter et mettre à disposition les outils du géocommun.
Pour y accéder [c'est par ici](https://panoramax.fr/)

# Contribution
Si vous souhaitez contribuer au projet vous pouvez :

- Créer une PR (pull requests) ici sur Github

- Créer des Issues également sur Github

- Vous rendre sur le [Forum Panoramax](https://forum.geocommuns.fr/c/panoramax/6) et y créer un post

# Template technique
Ce Template est là pour vous aider à vous lancer dans le développement et le déploiement avec Vue 3 et Vite.
Si vous avez besoin d'aide ou une question relative au projet, n'hésitez pas à poster des issues sur Github
ou nous contacter [par email] (panoramax@panoramax.fr).

## Initialisation du projet

```sh
npm install
```

### Compiler et Chargement automatique pour le développement

```sh
npm run dev
```

### Type-Check, Compilation et Minification pour la production

```sh
npm run build
```

### Lancer Les tests unitaires avec [Vitest](https://vitest.dev/)

```sh
npm run workflows:unit
```

### Lint avec [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Déployer avec Github Pages

Le déploiement se fait sur la branche `gh-pages`.
1 - Vous devez builder un projet statique :

```sh
vite deploy
```

2 - Git Add et Git Commit :

```sh
ga .
gc -m 'my commit'
```

3 - Envoyer le dossier dist sur la branche

```sh
git subtree push --prefix dist origin gh-pages
```
