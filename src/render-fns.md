# Render функции

Подход похож на React JSX
```html
<!-- index.vue -->
<template>
  <div>

    <RenderTest>
      <SecondTest />
    </RenderTest>

  </div>
</template>

<script>
import RenderTest from './render-test.js'
import SecondTest from './second-test.vue'
export default {
  components: {
    RenderTest,
    SecondTest
  }
  
}
</script>
```

```js
// render-test.js
export default {
  name: 'renderer',

  data: () => ({
    msg: 'Hello there',
  }),

  // в эту функции передаеться параметр
  // для создания новых DOM элементов, параметр "h" или еще называют "createElement"
  render (h) {

    // эта функция принимает:
    // 1) тег
    // 2) {Object}
    // 3, 2) содержимое тега
    return h(
      'div',

      {
        'class': 'my-class',
        on: {
          click(e){
            alert('Hello there, i was clicked')
          }
        }
      }, 

      // если передавать в "render-test" что то, то можно словить именно так.
      // тут же мы передаем на отображение то что было передано в слот этого компонента
      this.$slots.default  
      // OR
      // 'Hello there'
      // this.msg
    ) 
  },
}
```

```html
<!-- second-test.vue -->
<template>
  <h2>{{ gretting }}</h2>
</template>

<script>
export default {
  name: 'somecomponent',

  data: () => ({
    gretting: 'Hi there mutants'
  }),
}
</script>
```