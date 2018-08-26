# Ex6: Dynamic Form Builder

###### index.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome to Vue</title>
  <script src="https://unpkg.com/vue"></script>
</head>
<body>

  <div id="app">
     <form @submit.prevent>
       <input type="text" v-model="form.name">

        <span v-for="(item, i) of builder">
          <input v-bind:type="item.type" v-model="form[item.model]"> <br /> <!-- создаем динамически ключи в ключе "form: {name, email, phone}" -->
        </span>
 
        <button @click="getData">Submit</button>
    </form>
   </div>

    <script src="base.js"></script>
</body>
</html>

```

###### base.js
```js
new Vue({
  el: '#app',

  data: () => ({
    form: {},

    builder: [
      {type: 'text', val: 'Alex', model: 'name'},
      {type: 'text', val: 'example@com', model: 'email'},
      {type: 'text', val: '3806782123', model: 'phone'},
    ] 
  }),

  methods: {
     // gathering data from form
      getData () {
        console.log( this.form )
      }
  }
})
```