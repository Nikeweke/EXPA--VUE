# Render функции

Подход похож на React JSX
```html
<!-- index.vue -->
<template>

    <RenderTest />

</template>

<script>
import RenderTest from './render-test.js'
export default {
  components: {
    RenderTest,
  }
}
</script>
```

```js
// render-test.js
// обычный компонент vue (single file component)
import VueCompTest from './vue-comp-test.vue' 

 // компонент без шаблона, но с render()
import SecondRenderTest from './second-render-test.js'

export default {
  data: () => ({
    msg: 'Hello there',
  }),

  // Эта функция и заменяет секцию <template></template> 
  // в эту функции передаеться функция 
  // для создания новых DOM элементов, параметр "h" или еще называют "createElement"
  render (h) {

    // эта функция принимает:
    return h(
      // 1)
      // {String | Object | Function}
      // Название тега HTML, опции компонента, или асинхронная функция,
      // возвращающая один из двух них. Обязательный параметр.
      // Также может быть компонент(ex. SomeComp, без ковычек)
      'div',

      // 2)
      // {Object}
      // Объект данных, содержащий атрибуты,
      // который вы бы указали в шаблоне. Опциональный параметр.
      // Подробнее: https://ru.vuejs.org/v2/guide/render-function.html#%D0%9F%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE%D0%B1-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85
      {
        'class': 'my-class',
        on: {
          click(e){
            alert('Hello there, i was clicked')
          }
        }
      }, 

      
      // {String | Array}
      // Дочерние VNode'ы, создаваемые с помощью `createElement()`
      // или просто строки для получения 'текстовых VNode'. Опциональный параметр.
      [
        h(VueCompTest),
        h(VueCompTest),
        h(SecondRenderTest)
      ]
      // OR
      // this.$slots.default  // взять то что было передано внутрь комопонента
      // OR
      // 'Hello there'      // обычная строка
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
  data: () => ({
    gretting: 'Hi there mutants'
  }),
}
</script>
```

```js
// second-render-test.js
export default {
  data: () => ({
    gretting: 'Hello from second render test'
  }),

  render (h) {
    return h(
      'h3', this.gretting
    )
  }
}
```