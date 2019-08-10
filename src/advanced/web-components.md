# Vue app as web-component

* [Vue app in angular 5](https://stackoverflow.com/questions/49724029/using-vue-components-in-angular-5)
* [Vue and angular example](https://github.com/Nikeweke/EXPA--VUE/blob/master/src/assets/Integration-vue-angular.rar)

Можно сделать из приложения Vue - [web-component](https://developer.mozilla.org/en/docs/Web/Web_Components) (а конкретно `custom element`), это новый стандарт который помогает сделать собственные теги как обычный `div`, плюс функционал. 

:::tip Самое важное!
Можно интегрировать Vue приложение в Angular или React используя web-components. Также можно в Vue прокинуть `prop` или прослушивать событие из него.
:::


### Пример
После билда, нужно подключить билды в страницы и использовать тег в любом месте.


###### src / main.js
```js
import Vue from 'vue'
// you may need install this package
import vueCustomElement from 'vue-custom-element'; 
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(vueCustomElement);
 // это тот тег который будет доступен после билда
Vue.customElement('my-app', App);

// new Vue({
//   router,
//   render: h => h(App)
// })
// .$mount('#app')
```

###### src / App.vue
```vue
<template>
  <div id="app">
    <div style="border: 3px dashed green; padding: 5px">
      I am my-vue-web-comp.<br>
      <h3>Value of "auth" prop: {{ auth }}</h3><br>
      <input v-model="text"><button @click="addText">Click me</button>
    </div>

    {{texts}}

    <router-view></router-view>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'en'}">en</router-link> |
      <router-link :to="{name: 'live'}">live</router-link> |
      <router-link :to="{name: 'prematch'}">prematch</router-link>
    </div>
  </div>
</template>

<script>
import router from './router'

export default {
  router, 

  props: ['auth'],

  data() {
    return {
      text: '',
      texts: []
    };
  },

  methods: {
    addText() {
      console.log('Vue: emitted "hello" event')
      this.$emit('hello', 'u catch event')
      this.texts.push(this.text);
      this.text = '';
    }
  }
}
</script>
```

###### public / index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>sb-app</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but sb-app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <!-- <div id="app"></div> -->
    <my-app></my-app>

    <!-- built files will be auto injected -->
  </body>
</html>

```