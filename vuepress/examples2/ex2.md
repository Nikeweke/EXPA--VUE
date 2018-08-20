# Ex2: PrimVsRef, Events, Event Bus

#### Содержание
* [Primitives vs Reference types](#pr-vs-ref)
* [Events](#events)
* [Event Bus](#event-bus)

---


## Primitives vs Reference types <a id="pr-vs-ref"></a>
Если надо поменять что-то из дочернего компонента в родительском , то нужно знать :

```html
<script>
  // данные
  data () {
    return {
       title: 'Welcome to Home',            // int, string, float - это Primitives типы данных
       title1: { name: 'sssss' },          // object, array - это Reference типы данных
    }
  }
</script>

<!--
 Если передаешь Примитивный тип как свойство в дочерний компонент, то в этом компоненте изменяя это свойство оно не измениться в родительском, оно как бы создает просто локальную переменную в дочернем компоненте
 А Если Рефернс тип , то будет меняться и в родительском классе, и в дочеренем.
-->

<home  v-bind:title="title" v-bind:titlee="title1"></home>
```


## Events <a id="events"></a>
```js
// home.js

...
// ф-ции
methods:{
    ChangeMsg() {
       // запуск события
       this.$emit('titleChanged', 'IT has changed'); // запуск события
       this.msg = 'IT has changed';
     }
}
```

```html
<!-- App.vue -->

     <home v-on:titleChanged="getEm($event)"></home> <!-- ловим событие от комопнента -->

...

<script>
...
// ф-ции
methods:{
    getEm: function(title){
      alert('Title in home was changed to ==' + title);
    }
}
</script>

```

## Event Bus <a id="event-bus"></a>
Это прием, который позволяет не вешать на компонент `v-on:someEvent($event)`.

###### main.js
```js
import Vue from 'vue'
import App from './App.vue';

export const bus = new Vue();       // Our Event Busik

new Vue({
  el: '#root',
  render: h => h(App)
})

```
###### first.vue
```js
import { bus } from './main.js';

// ф-ции
methods:{
    ...
    EmitBus() {  bus.$emit('Boom', 'Boom from first.vue')  }
}
```

###### second.vue
```js
import { bus } from './main.js';

// lifecycle-hook
created(){
  bus.$on('Boom', data => {
     alert(data);
  })
}
```



