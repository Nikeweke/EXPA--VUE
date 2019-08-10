# Render функции

#### Содержание

[[toc]]

--- 

### Intro
**Render** функция делает разметку вместо секции `<template></template>`.

### Так выглядит render-function component
```js
export default {
  render(h) {
    return h('h2', 'I am h2 tag')
  }
}
```
<br>


### Пример render функций и результаты

```js
// результат: <h1>hello</h1> 
return h('h1', 'hello')
```

```js
// результат: <div>hello</div> с стилями и кликом
return h(
  // tag element
  'div',

  // element property
  {
    style: 'color: red; cursor: pointer',
    on: {
      click(e) {
        alert('Was clicked')
      }
    }
  },

  // childs
  'hello'
)
```


```js
/* результат: 
  <div>
    <h2>I am child h2</h2>
    <h4>I am child h4</h4>
  </div>
*/

return h(
  // tag element
  'div',

  // element property
  {},

  // childs
  [h('h2', 'I am child h2'), h('h4', 'I am child h4'),]
)
```


### Параметры render функции
```js
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
  ) 
},
}
```

