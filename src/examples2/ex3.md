# Ex3: Lifecycle Hooks, Slots, Dyn. comps

#### Содержание
* [Lifecycle hook](#lifecycle-hook)
* [Slots](#slots)
* [Dynamic components](#dynamic-components)

---

## Lifecycle hook <a id="lifecycle-hook"></a>

```js
   // lifecycle hooks
    beforeCreate(){
        alert('beforeCreate');
    },
    created(){
        alert('created');
    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){
        alert('updated');
    }
```

## Slots <a id="slots"></a>
###### App.vue
```html
  <template>

      <home>
            <p slot="slot1">Hello it is slot 1</p>
            <div slot="slot2">
              it is slot 2
            </div>
     </home>

 </template>
```

###### Home.vue
```html
  <template>

      <div>
           <h3>It is home component</h3>

          <slot name="slot1"></slot>
          <slot name="slot1"></slot>
     </div>

 </template>
```



## Dynamic components <a id="dynamic-components"></a>
###### App.vue
```html
  <template>

    <component is="home"></component>                      <!-- тоже самое что и <home></home> -->

    <component v-bind:is="curr_component"></component>     <!-- но тереь можно подставить переменную которая будет динамически менять наш компонент -->

    <keep-alive>                                        <!-- при смене форм или компонентов данные в форме пропадают при переходе, для этого ставим <keep-alive></keep-alive> -->
      <component v-bind:is="curr_component"></component>    
    </keep-alive>

 </template>

<script type="text/javascript">

import Home from './home.vue';

 export default {
      components:{
        'home': Home
      },  
       data(){
          return{
             curr_component: 'home'
          }
       }
 }
</script>


```


