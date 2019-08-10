# Зачем нужен JSX?

Содержание
[[toc]]

--- 

### Можно писать элементы в переменную
```jsx
const btn = <button on-click={this.sayHi}>Hello</button>
```
<br>

### Можно набивать массив элементами
```jsx
let labels = []
for (let i=0; i < 10; i++) {
  labels.push(
    <span>
      <label>I am label {i}</label><br />
    </span>
  )
}
```
<br>


### Иногда удобнее использовать для создание компонентов
[Пример как сделать табы](https://github.com/egoist/vue-slim-tabs/blob/master/src/index.js)

### Пример
```jsx
<template>
  <div id="app">
    <TestJsx />
  </div>
</template>

<script>
import TestJsx from './test-jsx.jsx' 
export default {
  components: {
    TestJsx,
  },
}
</script>
```

```jsx
// test-jsx.jsx
export default {
  data() {
    return {
      msg: 'asdasd'
    }
  },

  methods: {
    sayHi() {
      return <button on-click={() => { alert('Hello') }}>Hello</button>
    }
  },

  render(h) {
    const btn = <button on-click={() => { alert('Hello') }}>Hello</button>
    // OR
    // const btn = this.sayHi()

    let labels = []
    for (let i=0; i < 10; i++) {
      labels.push(
        <span>
          <label>I am label {i}</label><br />
        </span>
      )
    }

    return (
      <div>
        {btn}
        {labels}
      </div>
    )
  }
}
```
