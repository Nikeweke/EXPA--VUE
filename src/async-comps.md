# Async components
#### [Vue async comps guide](https://ru.vuejs.org/v2/guide/components-dynamic-async.html#%D0%90%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)
Иногда бывает удобно разделить крупное приложение на части и подгружать компоненты с сервера только тогда, когда в них возникнет потребность. То есть загружаеться не сразу все приложение целиком, а только тот кусок, который показался, когда мы переходим к асинхронному компоненту, то он просто подгружаеться. Это можно наблюдать в бразуере в дебагере на вкладки "Сеть", если это Firefox.     


### Несколько подходов использования
```js
// src / routes / index.js
import Vue from 'vue'

import Home from '@/components/Home.vue'
import Article from '@/components/Article.vue'

// ===================> Global register async component
Vue.component('async-example', () => import('../components/AsyncComp.vue'))



// ===================> Global register async component with Delay
Vue.component('async-example', (resolve, reject) => {
  setTimeout(() => {
    // import returns promise
    import('../components/AsyncComp.vue').then(data => resolve(data))
  }, 2000);
})



// ===================> Local register component
const AsyncComponent = () => import('../components/AsyncComp.vue')



/* ===================> Группировка компонентов в отдельный кусок (chunk)
*  Если один компонент из указанного куска затронут,
*  то подгрузяться все компоненты из этого куска. 
*  Также когда выполняться "npm run build", 
*  можно заметить компоненты с этим именем - [Chunk name]
*/
const AsyncComponent = () => import(/* webpackChunkName: "async" */ '../components/AsyncComp.vue')
const AsyncComponent2 = () => import(/* webpackChunkName: "async" */ '../components/AsyncComp2.vue')

export default {
  routes: [
    { path: '/',         name: 'Home',             component: Home },
    { path: '/article',  name: 'Article',          component: Article },
    { path: '/async',    name: 'Async component',  component: AsyncComponent },
    { path: '/async2',   name: 'Async component2',  component: AsyncComponent2 },
  ]
}
```

```html
<!-- src / App.vue -->
<template>
  <div>

    <!-- Выводим все роуты и делаем линки к ним -->
    <ul>
      <li v-for="(route, i) of routes.routes" :key="i">
        <router-link :to="{name: route.name}">{{ route.name }}</router-link> 
      </li>
    </ul>

    <!-- контент компонентов --> 
    <router-view/>

    <!-- глобальный асинхронный компонент - выводиться через определнное время -->
    <async-example /> 

  </div>
</template>

<script>
import routes from '@/routes/'
export default {
  data: () => ({
    routes
  })  
}
</script>
```

```js
// src / main.js
import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import routes from './routes/'

Vue.use(Router)

const router = new Router(routes)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```




