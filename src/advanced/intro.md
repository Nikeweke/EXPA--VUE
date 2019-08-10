# Intro
#### Содержание
[[toc]]

--- 

## Использование имен для регистрации комопнентов (PascalCase, kebab-case)
```
Vue.component('MyComponentName', { /* ... */ })
```

При определении компонента с помощью **PascalCase** вы можете использовать любой случай, ссылаясь на свой пользовательский элемент. Это означает, что оба `<my-component-name>` и `<MyComponentName>` являются приемлемыми. Обратите внимание, однако, что только имена **kebab-case** действительны непосредственно в DOM (то есть нестрочные шаблоны).

## Как убрать eslint если он мешает собраться проекту
###### package.json
`ENABLE_ESLINT=false` not TRUE
```
 "scripts": {
    "dev": "node build/dev-server.js",
    "start": "cross-env ENABLE_ESLINT=true node build/dev-server.js",
    "build": "cross-env ENABLE_ESLINT=false node build/build.js",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit/specs"
  },

```