# Ex5: Making tabs with `<component>`

`<component is="name-component">` - с помощью изменения аттрибута **is** можно отображать любой компонент по зарегистрированому имени

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
      <main-div />
  </div>

  <script src="base.js"></script>

</body>
</html>
```

###### base.js
```js
// ==========================================> nested Components
const nestedComponent1 = {
    template: `<div style="background: green;">I am 1 component </div>`
}
const nestedComponent2 = {
    template: `<div style="background: red;">I am 2 component </div>`
}

// ==========================================> mainComponent
const mainComponent = {
    components: {
      'nested-1': nestedComponent1,
      'nested-2': nestedComponent2  
    },
    data: () => ({
        currentTab: '1'
    }),
    computed: {
      getCurrentTab: function () {
        return 'nested-' + this.currentTab
      }
    },
    template: `<div>
                  <button @click="currentTab=1">1 tab(component)</button>  
                  <button @click="currentTab=2">2 tab(component)</button>
                  <div style="border:1px solid black">
                    <component :is="getCurrentTab"></component>
                  </div>
                </div>`
}


// Регистируем компоненты - Глобально
Vue.component('main-div', mainComponent)

var app = new Vue({
  el: '#app',
})
```