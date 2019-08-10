# Vue resource (http)

## Install
### `npm i vue-resource  --save`

```js
// main.js
import Vue          from 'vue';
import VueResource  from 'vue-resource';

Vue.use(VueResource)
...
```

## Examples

```js
 // {GET} /someUrl
  this.$http.get('/someUrl').then(response => {
      console.log(response)
  }, response => {
    // error callback
  });
  // OR
   this.$http.get('/someUrl')
    .then(response => {
      console.log(response)
     })
    .catch((res) => console.log(res));
    
 // {POST}   
  this.$http.post('/someUrl', someData)
    .then(response => {
      console.log(response)
     })
    .catch((res) => console.log(res));
```