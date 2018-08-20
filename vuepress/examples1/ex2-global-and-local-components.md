# Ex2: Global & local components

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
// ==========================================> nestedComponent
const nestedComponent = {
    data: () => ({}),
    template: `<div>I am nesting in main component</div>`
}


// ==========================================> mainComponent
const mainComponent = {
    // Регистируем компоненты - Локально
    components: {
        'nested-div': nestedComponent
    },
    data: () => ({}),
    template: `<div>
                  <h3>I am Main here!</h3>

                  <nested-div />
                  
                </div>`
}


// Регистируем компоненты - Глобально
Vue.component('main-div', mainComponent)

var app = new Vue({
  el: '#app',
})

```