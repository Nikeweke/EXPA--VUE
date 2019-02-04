# SPA
* [Start](#start)
* [Создание проекта](#create-project)
* [Первый запуск](#first-launch)
* [Делим на 3 части](#divide-on-3)
* [Поток данных](#data-flow)
* [Композиция компонентов](#composition)

---

## Start 
#### `npm i vue-cli -g`

## Создание проекта <a id="create-project"></a>
#### `vue init <template-name> <project-name> `

`<template-name>`:

* webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
* webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
* browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
* browserify-simple - A simple Browserify + vueify setup for quick prototyping.
* pwa - PWA template for vue-cli based on the webpack template
* simple - The simplest possible Vue setup in a single HTML file

## Первый запуск <a id="first-launch"></a>
``` bash
# install dependencies and dev-dependencies
npm install
npm install --dev

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Делим на 3 части <a id="divide-on-3"></a>
###### App.vue
```html
<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>


<script src="./fns.js"></script>                         // вот так выносим JS
<style src="./styles.scss" lang="scss"></style>          // вот так выносим CSS(SASS)

```



## Однонаправленный поток данных <a id="data-flow"></a>

Входные параметры обеспечивают однонаправленный поток данных от родительского компонента к потомкам. Если свойство компонента-родителя изменилось, это изменение передаётся потомку, но не наоборот. Если бы потомки могли произвольно изменять состояние родителя, понять структуру потоков данных внутри приложения было бы намного труднее. Благодаря однонаправленным потокам такая ситуация исключается.

Кроме того, при любом обновлении родительского компонента каждый входной параметр потомка обновляется до актуального значения. Поэтому не следует изменять значения входных параметров внутри компонента и расчитывать на их сохранность. При попытке изменить входной параметр Vue выведет предупреждение в консоли.

Новички обычно пытаются изменить значение входного параметра в двух случаях:
**1)** Если параметр нужен лишь для передачи потомку начального значения, после чего планируется использовать эту переменную как локальную.
**2)** Если значению, которое передаётся как параметр, требуется дальнейшая обработка.

Правильное решение этих задач следующее:

```js
// 1)   Объявить локальную переменную, которая принимает значение входного параметра при инициализации:
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}

// 2) Определить вычисляемое свойство, основанное на значении входного параметра:
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

**Обратите внимание,** что **объекты и массивы** в JavaScript передаются по ссылке, так что если входным параметром является объект или массив, его изменение внутри потомка повлияет на состояние родительского компонента.

## Композиция компонентов <a id="composition"></a>

Компоненты обычно используются совместно, в основном в рамках иерархических отношений, когда компонент-родитель A ссылается на компонент-потомок B в своём собственном шаблоне. Для этого нужно обеспечить коммуникацию компонентов друг с другом. Например, родитель может передавать данные потомку, а потомок, в свою очередь, может уведомлять родителя о произошедших событиях. С помощью чётко заданного интерфейса взаимодействие между компонентами сводится к необходимому минимуму. Благодаря такому подходу можно писать и анализировать код каждого компонента в условиях относительной изоляции. Это упрощает поддержку и потенциально облегчает повторное использование компонентов.

Во Vue иерархические отношения подчиняются следующему принципу: “входные параметры — вниз, события — вверх” (“props down, events up”). Родитель передаёт данные потомку через входные параметры (props), а потомок посылает сообщения родителю посредством событий (events). Давайте посмотрим как это работает.

![](./assets/props-events.png)

### Пример "props down, events up"
```html
<!-- App.vue -->
<template>
  <div>
    <h2>Hello there</h2>
    <Home :records="records" @onHomeEvent="homeEventHandler"/>
  </div>
</template>

<script>
import Home from './home.vue'
export default {
  components: {
    Home
  },
  
  data: () => ({
    records: ['1', '4', '5', '2'] 
  }),

  methods: {
    homeEventHandler (params) {
      console.log('Home component emit some event!')
      console.log(params)
    }
  }
}
</script>
```

```html
<!-- Home.vue -->
<template>
  <div>
    <h2>Its home vue</h2>
    <button @click="$emit('boom-boom', 'i am parametr')">Explode me</button>
  </div>
</template>
```


