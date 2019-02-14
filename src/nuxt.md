# [Nuxt](https://ru.nuxtjs.org/guide/)

### Intro
Помогает сделать пререндер шаблонов(`nuxt generate`) или серверный рендеринг(`nuxt start`). Также ускоряет разработку Vue-приложений и улучшает SEO-оптимизацию, так как для каждой страницы можно настроть head сразу в компоненте.

Nuxt сам просматиривает структуру проекта и делает уже Vue-приложение на основе вместимого. Так допустим папка **pages** содержить в себе Vue-страницы. ([Структура папок в Nuxtjs](https://ru.nuxtjs.org/guide/directory-structure))

### Quick start
```sh
npm init -y
npm i nuxt -S
mkdir pages
```
<br>

Добавляем скрипты для работы с nuxt
```json
"scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "gen": "nuxt generate"
  },
```
<br>

Создаем файл `index.vue` в **pages**
```html
<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
export default {
  data () {
    return { 
      name: 'World'
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
```
<br>

```sh
npm run dev
```
