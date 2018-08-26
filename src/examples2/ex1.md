# Ex1: Nested comps, Scoped styles, Props 

#### Содержание
* [Вложенные компоненты](#nested-components)
* [Styles Scoped](#scoped-styles)
* [Props](#props)


---


## Вложенные компоненты <a id="nested-components"></a>
1) Создаем компонент

```html
<!--
  ./ src / Home.vue
 -->

<!-- HTML template-name -->
<template>
  <div>
      <h3>{{ msg }}</h3>
      <button @click="ChangeMsg()" type="button" name="button">Change</button>

  </div>
</template>

<!-- JS -->
<script>
    export default {

      // данные
      data () {
        return {
          msg: 'Hello its Home',
        }
      },

      // ф-ции
      methods:{
          ChangeMsg() {
             console.log('here');
             this.msg = 'GGGG';
           }
      }
    }

</script>

<!-- CSS (SASS) -->
<style lang="scss">  /* empty */  </style>

```

2) Регистрируем его в точке входа (Видимость компонента - **Глобальная**)

```js
//  ./ src / main.js

import Vue from 'vue';
import App from './App.vue';   // компонент в котором можно будет юзать наш компонент

// импорт нашего компонента
import Home from './Home.vue'   

// регистрация нашего комопнента, теперь можно юзать так - <home></home>
Vue.component('home', Home);        

// Рендер нашего приложения начинаеться с компонента App, которое вставиться в <div id="root"></div>
new Vue({
  el: '#root',
  render: h => h(App)
})

```

3) Используем наш компонент

```html
<!--
./ src / App.vue
-->

<template>
   <div>                     <!-- надо содержимое оборачивать в 1 тег какое-то, иначе ошибка -->
     <h3>{{ msg }}</h3>
     <home></home>          <!-- out: Hello its Home -->
  </div>
</template>

<!-- JS -->
<script>
 export default {
    data () {
      return { msg: 'Hello its App' };
    }
  }
</script>

<!-- CSS (SASS) -->
<style lang="scss">  /* empty */  </style>

```

4) Используем наш компонент  (Видимость компонента - **Локальная**) `(Шаг 2,3 пропустить)`

```html
<!--
./ src / App.vue
-->

<template>
   <div>                     <!-- надо содержимое оборачивать в 1 тег какое-то, иначе ошибка -->
     <h3>{{ msg }}</h3>
     <home></home>          <!-- out: Hello its Home -->
  </div>
</template>

<!-- JS -->
<script>

import Home from './Home.vue';

 export default {
    components:{
      'home': Home
    },

    data () {
      return { msg: 'Hello its App' };
    }
  }
</script>

<!-- CSS (SASS) -->
<style lang="scss">  /* empty */  </style>

```

## Scoped styles <a id="scoped-styles"></a>
Например есть **App.vue** и **Home.vue**. И допустим **home** подключен в **app** как компонент. В **app** к тегу `<h2>` применяеться -красный цвет, а в компоненте - зеленый. Какой будет результат ? Оба тега будут зелеными. Что бы такого не было надо на стили вешать `scoped` - `<style lang="scss" scoped>...</style>`, тогда стили будут применяться только там где были объявлены.

```html
<!-- App.vue -->
<template>

       <div class="container">
          <h2>Its App</h2>
          <home></home>
       </div>

</template>

<!-- CSS (SASS) -->
<style lang="scss">  h2{ color:red; }  </style>
```

```html
<!-- Home.vue -->
<template>

       <div class="container">
          <h2>Its Home</h2>
       </div>

</template>

<!-- CSS (SASS) -->
<style lang="scss">  h2{ color:green; }  </style>
```


## Props <a id="props"></a>
Передача в комопоненты свойства

```html
<!-- App.vue -->
<template>
       <div class="container">
          <h2>Its App</h2>
          <home iamstring="Hi there" v-bind:name="name"></home> <!-- передача свойств -->
       </div>
</template>


<script>
  export default {
    components: {/* here included <home> */},

    data(){
       return { name: 'Gregor' }
    }
 }
</script>

```

```html
<!-- Home.vue -->
<template>
       <div class="container">
          <h2>Its Home: {{iamstring}} {{name}}</h2>
       </div>
</template>

<script>
  export default {
    props: [ 'iamstring', 'name' ];     // получаем свойства

    // с валидацией получаемых данных
    props: {
        name: {
          type:     String, // Array, и т.д. - проверяем тип данных свойства, если будет не такой тип то - ошибка
          required: true    // если не будут передавать это свойство - тоже ошибка
        }
    }
 }
</script>
```


