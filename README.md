# panoramax-website
The Panoramax website was created to present and make available the tools related to the geocommun.
Take a look on [Panoramax](https://panoramax.fr/)

# Contribution
Do not hesitate if you want to contribute to the project.
To do that you can :
1 - Create PR (pull requests) here on Github
2 - Create Issues here on Github too
3 - Go to the [Panoramax Forum](https://forum.geocommuns.fr/c/panoramax/6) and create a post

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
