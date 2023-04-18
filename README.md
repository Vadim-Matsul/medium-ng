# Installing Dependencies

- To install dependencies in the project, the `Yarn` package manager is used. [More](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- recommended `yarn@1.22.19`

```
  <-- inside angular.json -->
  "cli": {
    "packageManager": "yarn"
  }

  <-- install Dependencies -->
  yarn install |  yarn
```

# StyleGuide

- Classes are always last
- Listener initialization and data binding in `private methods`
- Mandatory separation of `ngrx` / `effects` / `data rendering` logic
- Covering all entities with `zod models` and `its interfaces`
- Avoid subscriptions when possible using a pipe
- Modules that can be reused - put in a `share` folder
- Adding new libraries to automatically sort imports `for prettier`
- Observe the naming of `services, components, modules, effects, models` and their postfixes

# Styles

- `Bootstrap:` Uses bootstrap styles, supplemented by the `demo.productionready.io` project
- `Fonts:` Google fonts Titillium collection
