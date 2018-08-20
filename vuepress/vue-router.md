# Vue-router
https://router.vuejs.org/guide/

#### Содержание
* [Установка](#install)
* [Подключение](#connect)
* [Hash vs History](#hash-vs-history)
* Change component programatically


---

## Установка <a id="install"></a>
```bash
npm i vue-router --save
```

## Подключение <a id="connect"></a>
###### main.js
```js
import Vue       from 'vue';
import VueRouter from 'vue-router';            // <!-- here include
import App       from './App/App.vue';

import Routes from './routes';                 // <!-- import our routes
Vue.use(VueRouter);                             // <!-- here include

const router = new VueRouter({                   // <!-- here include
   routes: Routes
});


new Vue({
  el: '#app',
  render: h => h(App)
})
```

###### routes.js
```js
import Home   from './pages/home/home.vue';
import Create from './pages/create/create.vue';

export default [
  { path: '/',        component:  Home           },
  { path: '/create',  component:  Create         },
]

```

## Hash vs History <a id="hash-vs-history"></a>
```js
const router = new VueRouter({
      routes: Routes,
      // мод "hash"(по-ум.) - не обращаеться к серверу, то есть после перезагрузки страницы все отобразиться норм и не надо определять роути на бекенде
      mode: 'history'      
});
```

## Change component programatically
https://router.vuejs.org/guide/essentials/navigation.html