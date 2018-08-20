# Ex4: V-model modifiers

#### .lazy
```html
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" >
```

#### .trim
```html
<!-- trim data -->
<input v-model.trim="msg">
```

#### .number
```html
<!-- cast data to number -->
<input v-model.number="age" type="number">
```