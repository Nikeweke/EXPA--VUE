# Ex1: Slots, props, global components
В этом примере показана работа с компонентами, слотами(**slots**), и передачей параметров из одного в другой посредством **prop**

###### index.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome to Vue</title>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
  <script src="https://unpkg.com/vue"></script>

  <style>
   body{
    font-family: 'Open Sans', sans-serif;
   }
   .container{
     padding-left: 20%;
     padding-right: 20%;
     padding-top: 5%;
   }
  </style>
  
</head>
<body>
  <div class="container" id="app">
      <todo-item/>
  </div>

    <script src="base.js"></script>
</body>
</html>

```

###### base.js
```js
// ==========================================================> customDivComponent
// Обычный div в котором используються подстановка стилей,
// передача параметра "name" в сам компонент
const customDivComponent = {
    data: () => ({
      linkStyles: {
        color: 'green',
        fontSize: '14px'
      }
    }),

    props: ['descr'],

    // Параметры с валидацией
    // props: {
    //    link: {type:Number, required:true}  
    // },

    template: `<div :style="linkStyles">
                  {{ descr }} <br />
                </div>`
}

// ==========================================================> customDivSlotsComponent
// компонент с слотами
const customDivSlotsComponent = {
    template: `<div>
                   Its default slot place: <b> <slot></slot> </b> <br />
               
                   Its named slot place: <b> <slot name="namedSlot"></slot> </b>
               </div>`
}


// ==========================================================> todoItemComponent
// Компонент который вмещает в себя компонент "customDivComponent"
const todoItemComponent = {
    data: () => ({
       name: 'John Bah'
    }),

    template: `<div>
                  Name from todoComponent: <b>{{ name }}</b> <br />
                  
                  <h4>customDiv</h4>
                  <custom-div descr="some description" />

                  <h4>customDivSlots</h4>
                  <custom-div-slots>
                      Go to default slot

                      <template slot="namedSlot">Go to named slot</template>
                  </custom-div-slots>
    

               </div>`
}

// Регистируем компоненты глобально
Vue.component('custom-div-slots', customDivSlotsComponent)
Vue.component('custom-div', customDivComponent)
Vue.component('todo-item', todoItemComponent)

var app = new Vue({
  el: '#app',
})

```