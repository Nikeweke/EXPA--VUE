# Tag binding

* [Start](#start)
* [Change Var](#change_var)
* [V-model](#v-model)
* [V-bind, v-html](#v-bind)
* [V-on - Events Modifiers](#v-on-1)
* [V-on - Keyboard Events](#v-on-2)
* [V-for](#v-for)
* [Computed propertires](#computed)
* [Dynamic CSS](#dynamic-css)
* [Conditionals](#conditionals)
* [Components](#components)
* [Refs](#refs)
* [Multiple Instances](#Multiple)


---

### Start 

Подключить в `<head>` Vue.js и свой `app.js`

```html

<head>

  <!-- VUE.js lib -->
  <script src="https://unpkg.com/vue" charset="utf-8"></script> <!-- must be in head -->

</head>

<body>  
  
  <div id="app">{{ name }}</div>

  <!-- js-script smust be before close body tag -->
  <script src="app.js" charset="utf-8">
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    new Vue({
      // область где Vue будет работать, в этом случае в div с ID=app
      el: '#app',

      // переменные
      data: {
        name: 'rat',
      },

      // функции
      methods: {
      },
    })

  </script> 

</body>
```
<br>

### Change Var <a id="change_var"></a>

```html
<div id="app">
    <p>{{ number }}</p>
    <button @click="addNumber()">Add </button>
    <button @click="rmNumber()">Add </button>
    <!-- or -->
    <button @click="number++">Add </button>
    <button @click="number--">Add </button>
</div>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      number: 0
    },

    // функции
    methods: {
      // ADD some Number
      addNumber: function(){
        this.penguins++
      },
  
      // Remove some Number
      rmNumber: function(){
        this.penguins--
      },
   },
})

```

### V-model <a id="v-model"></a>



```html
<div class="content">
  <p>
    <strong class="title is-4">Penguin Name is - {{ pengui_name }}</strong>
  </p>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="V-model" v-model="pengui_name">
   </div>
</div>
```

### V-bind, v-html

```html
<!-- <a href="{{ website }}">Anchor - not workable anchor</a> <br /> -->
<a v-bind:href="website">Anchor - v-bind:href</a> <br />
<span v-html="anchor"></span><br /><br />

<div class="field">
  <div class="control">
   <input class="input" type="text" placeholder="Here using v-bind:value" v-bind:value="name">
  </div>
</div>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      name: 'gregor',
      website: 'http://foodcontrol.club/',
      anchor: ' <a href="http://foodcontrol.club/">Anchor - created with v-html</a>',
    },
})
```

### V-on - Events Modifiers <a id="v-on-1"></a>


```html
<div class="content">
  <p>
    <strong class="title is-4">Penguins fishes - {{ fishes }} </strong>
  </p>
</div>

   <!-- v-on:click -->
   <button class="button" v-on:click="fishes++">
      <span class="icon">
        <i class="fa fa-plus"></i>
      </span>
      <span>1</span>
   </button>

   <!-- @click ==  v-on:click -->
   <button class="button" @click="fishes--">
      <span class="icon">
        <i class="fa fa-minus"></i>
      </span>
      <span>1</span>
   </button>

  <!-- v-on:dblclick -->
   <button class="button" v-on:dblclick="fishes += 5">
      <span class="icon">
        <i class="fa fa-plus"></i>
      </span>
      <span class="icon">
        <i class="fa fa-plus"></i>
      </span>
      <span>double click (5)</span>
   </button>

   <!-- v-on:click.once -->
   <button class="button" v-on:click.once="fishes += 35">
       <span class="icon">
          <i class="fa fa-plus"></i>
        </span>
        <span>Only once (35)</span>
   </button> <br /><br />

   <!-- v-on:click.prevent -->
   <a v-on:click.prevent="showAlert()" href="http://v6.player.abacast.net/854">Jazz24 - Prevented to go anchor</a>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      fishes: 0
    },
})
```

### V-on - Keyboard Events <a id="v-on-2"></a>



```html
<!-- v-on:keyup -->
<div class="field">
  <div class="control">
      <label class="label">Keyup events - {{ keyup_events }}</label>
      <input v-on:keyup="keyup_events++"  class="input" type="text"  >
   </div>
</div>

<!-- v-on:keyup.enter -->
<div class="field">
  <div class="control">
    <label class="label">Keyup Enter - {{ keyup_enter }}</label>
    <input v-on:keyup.enter="keyup_enter++"  class="input" type="text"  >
  </div>
</div>

<!-- v-on:keyup.alt.enter -->
<div class="field">
  <div class="control">
      <label class="label">Keyup Alt+Enter - {{ keyup_alt_enter }}</label>
      <input v-on:keyup.alt.enter="keyup_alt_enter++"  class="input" type="text"  >
    </div>
</div>
```

### V-for <a id="v-for"></a>



```html
<!-- V-for array -->
Pinguins: <span v-for="(pinguin, i) in pinguins" class="tag is-light"  style="margin-right:5px;">{{ i }}) {{ pinguin }}</span>

<br /><br />

<!-- V-for array of objects -->
Bears: <span v-for="bear in bears" class="tag is-light"  style="margin-right:5px;">{{ bear.name }} - {{ bear.age }}</span>

<br /><br />

<!-- V-for array of objects with take their keys -->
<!-- <template> - тег убираеться после компиляции, нужен чисто для компоновки -->
  <label>Sharks:</label>
  <template v-for="shark in sharks">
      <span v-for="(val, key) in shark" class="tag is-light"  style="margin-right:5px;">{{ key }} -- {{ val }},</span>
  </template>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      pinguins: ['Johny', 'Albert', 'Grigo', 'Slavo'],
      bears:    [ { name:'Brave',  age:30 },   { name:'Greyer', age:42 } ],
      sharks:   [ {name: 'Kilo', kills: 21},  {name: 'Grublek', kills: 21} ],
    },
})
```

### Computed propertires <a id="computed"></a>



функции которые обновляют только состояние переменных, которых кaсаються, в отличии от "methods" они обновляют все состояния\(data\)

```html
<div class="content">
  <p>
    <strong class="title is-4">Walruses is about - {{ Walruses }} </strong><br />

  </p>
</div>

   <button class="button" @click="walruses++">
      <span>Add walrus</span>
   </button>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
    walruses: 0,
    },

    // функции которые обновляют только состояние которых кaсаються, в отличии от "methods" они обновляют все состояния(data)
    computed: {

         Walruses: function() {
           return this.walruses
         }

    }

})
```

### Dynamic CSS <a id="dynamic-css"></a>



```html
<a v-on:click="btn_success = !btn_success" v-bind:class="{'is-success': btn_success}" class="button">
  Button {{btn_success}}
</a>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      btn_success: false,
    },
})
```

### Conditionals <a id="conditionals"></a>
 

```html
<!-- V-if -->
<p class="" v-if="success == 1">(V-if) I am here, coz success == true</p>
<p class="" v-else-if="success == 2">(V-else-if) I am here, coz success == false</p>
<p class="" v-else>(V-else)I am here, coz success == 0</p>

<!-- V-show -->
<p class="" v-show="success">(V-show) I am here, coz Succes == true</p>

 <a v-on:click="success = 1" class="button">
     Change Succes to 1
  </a>
  <a v-on:click="success = 2" class="button">
      Change Succes to 2
   </a>
   <a v-on:click="success = 0" class="button">
       Change Succes to 3
    </a>
```

```js
new Vue({
    // тот элемент в котором можно юзать переменные, ф-ции и т.д.
    el: '#app',

    // переменные
    data: {
      success: true,
    },
})
```

### Components <a id="components "></a>


```html
<div id="app" class="media-content">

  <comp1></comp1>

</div>
```

```js
// Component
Vue.component('comp1', {
 template: '<p>Hi, it is comp1</p>',
//  data: {},             // component has data
//  methods: {}           // component has methods
})

new Vue({
  el: '#app',
})
```

### Refs <a id="refs"></a>
```html
<div class="field">
  <div class="control">
    <input class="input" type="text" ref="myinput">
    <button @click="setRefs()" type="button" class="button">Go</button><br /><br />

    <p>Get by ref: {{ food }}</p>
  </div>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
      food: ''
  },
  methods:{
    setRefs: function(){
       console.log(this.$refs)                // выведет все видимые refs
       this.food = this.$refs.myinput.value; // ставим значение взятое из поля
    }
  }
})
```

### Multiple Instances <a id="multiple"></a>


```html
<!-- First Vue Instance -->
<div id="app">
    <div class="card" id="few_instances">
      <header class="card-header">
        <p class="card-header-title">
           <span class="tag is-warning">Multiple Instances </span>
        </p>
      </header>
      <div class="card-content">
        <article class="media">
          <div class="media-content">

           <p class="title is-5">{{ title }}</p>

          </div>
        </article>
      </div>
    </div>
</div>

<!-- Second Vue Instance -->
<div id="app2" class="container">
 <div>
   <a v-on:click="changeTitleInFirstInstance()" class="button">
       I am btn from 2 instance, and i wanna Change title in first
    </a>
  <button type="button" class="button" onclick="changeTitle()">Change without Vue</button>
 </div>
</div>
```

```js
// VUE JS
var first = new Vue({            // FIRST instance
  el: '#app',
  data: { title:'' }
})


var second = new Vue({             // SECOND instance
  el: '#app2',
  methods:{
     changeTitleInFirstInstance(): function{
       first.title = 'Its change from 2 instance'
     }
  }  
})


// USUAL JS
 function changeTitle(){
     first.some_title = 'Changed from outside of VUE'
 }
```



