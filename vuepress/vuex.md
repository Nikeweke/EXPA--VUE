# Vuex 
(хранилище состояний) https://vuex.vuejs.org/ru/getting-started.html

#### Содержание
* [Установка](#install)
* [Основы](#basics)
* [Пример](#example)
* [Namespaces](#namespaces) 
* [mapStates, mapActions, mapMutations and mapGetters](#maps)

--- 

## Установка <a id="install"></a>
### `npm i vuex --save`

## Основы <a id="basics"></a>
* **State** - это состояния которые держат какую то информацию
* **Mutations** - это методы изменяющие состояния синхронно
* **Actions** - это асинхронные методы которые могут вызывать внутри мутации и содержать другую логику
* **getters** - это свойства похожие на `computed` в компоненте


## Пример <a id="example"></a>
```js
// main.js
import Vue       from 'vue';
import Vuex      from 'vuex'            // <!-- here include
import App       from './App/App.vue';

Vue.use(Vuex) // <!-- here include

// Init store
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      this.state.count++
    }
  },
  actions: {
    doSomething () {
      // ...
    }
  },
  getters: {
   // use like: this.$store.getters.someComputedVar
   someComputedVar (state) { return state.count + 20 }
  }  
})

new Vue({
  el: '#app',
  render: h => h(App),
  store // вот так подключаеться в приложение - юзать : this.$store.
})
```

```js
// use in components
 console.log( this.$store.state.count )   //-- out: 0
 this.$store.commit('increment')    // вызов мутации
 this.$store.dispatch('actionName') // вызов экшена
 this.$store.getters.someVar // вызов вычисляемого свойства хранилища
 console.log( this.$store.state.count )   //-- out: 1
```

## Namespaces <a id="namespaces "></a>
Простраства разделяют хранилища на модули. Если `namespaced = false` или вообще нет, то группируются только состояния, но если `namespaced = true`, то группируються и состояния и остальные вещи (mutations, actions, getters).  

```js
// store / ui.js
export default {
  namespaced: true,

   state: {
    name: 'alex'
  },

  mutations: {
      getName () {
          console.log('Alex')
      }
  },

  actions : {
      //.....
  },

  getters: {
    // ...  
  }
}

```

```js
// store / user.js
export default {
  namespaced: true,

   state: {
    name: 'Brandon'
  },

  mutations: {
      getName () {
          console.log('Krake')
      }
  },

  actions : {
      //.....
  },

  getters: {
    // ...  
  }
}



```

```js
// store.js
import userModule from './store/user'
import uiModule from './store/user'

const store = new Vuex.Store({
  modules: {
    user: userModule,
    ui: uiModule
  }
})

```

```js
// in components

// states
this.$store.state.user.name // 'Brandon'
this.$store.state.ui.name   // 'Alex'

// actions & mutations
this.$store.commit('ui/getName') 
this.$store.commit('user/getName') 
this.$store.dispatch('ui/getName') 
this.$store.dispatch('ui/getName') 

// getters
this.$store.getters['ui/someGetter']
this.$store.getters['user/someGetter']

```

## mapStates, mapMutations, mapActions and mapGetters <a id="maps"></a>
`Map` что-то проксирует свойство из хранилища сразу в компонент

```js
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {

computed: {
  ...mapState({
    userName: state => state.user.name, // from user module
    uiName: state => state.ui.name,  // from ui module
    baseName: state => state.name  // from base store
  }),
  
  ...mapGetters({
    surnameUser: 'user/getSurname',
    surnameBase: 'getSurname'
  })
},

methods: {
  ...mapMutations([
    'user/changeName',  // method from module
    'changeName'        // method from base
  ]),
  
  ...mapActions([
    // same as mutations
  ])
},

created () {
  this['user/getName']() // using method from module
  this.getName() // using from base store
}
```

Так же можно сразу указывать путь к модулям

```js
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module');

export default {
  computed: {
    // будет указывать на `some/nested/module`
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // будет указывать на `some/nested/module`
    ...mapActions(['foo', 'bar'])
  }
};

```






