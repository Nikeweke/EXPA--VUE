# Component extend

Можно сделать один компонент, а потом расширять его другим функционалом, дочерних компонентов. Если в компоненте отцовском будут такие же методы, поля и т.д., то они перезапишуться дочернем методом. 

```html
<!-- App.vue -->
<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Child msg="Welcome to Your Vue.js App" msg2="There" />
  </div>
</template>

<script>
  import Child from './components/Child.js'

  export default {
    name: 'app',

    components: {
      Child
    }
  }
</script>
```

```html
<!-- Parent -->
<template>
  <div>
    <h2>Hello {{ getName() }}</h2>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Parent',

  props: {
    msg: String
  },

  methods: {
    getName(){
      return 'Alex'
    }
  }
}
</script>
```

```js
// Child.js
import Base from './Base'

export default {
  name: 'Child',

  extends: Base,  // унаследование компонента
 
  props: {
    msg2: String
  },

  methods: {
    getName(){
      return 'Franki ' + this.msg2 + this.msg
    }
  }
}
```

:::tip Child как Vue-file
Если определить `Child.js` как `Child.vue`, и добавить туда секцию `<template>...</template>`, то этот темплейт перекроет отцовский контент. И это касается всего, что одинаково в обоих компонентах. **Дочерний будет затирать отцовский**.
:::