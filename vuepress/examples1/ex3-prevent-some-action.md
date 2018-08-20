# Ex3: Prevent some action

https://vuejs.org/v2/guide/events.html#exact-Modifier

```html
<!-- Prevent go to address -->
 <a @click.prevent href="https://example.com"> Example </a>
 
 <form @submit.prevent="someHandler" >... </form>
``` 