# vue-outside-events

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Vue 3.x directive to react on events outside of an element without stopping the event's propagation.

Works well for handling clicks outside of menus and popups. Can handle any DOM event or CustomEvent. Also able to capture jQuery events.

## Install
```bash
yarn add vue-outside-events
```

```bash
npm install --save vue-outside-events
```

## Use

### Modular
```ts
import vOutsideEvents from 'vue-outside-events'

const app = createApp({
...
})

app.use(vOutsideEvents)
```

```html
<script>
  export default {
    methods: {
      onClickOutside (e, el) {
        console.log('onClickOutside');
        console.log('click heard outside element:', el);
        console.log('element clicked:', e.target);
        console.log('event:', e);
      },
      onMouseOutside (e, el) {
        console.log('onMouseOutside');
        console.log('mouse moved outside element:', el);
        console.log('element mouse moved over:', e.target);
        console.log('event:', e);
      },
      onFoo (e, el, extras) {
        console.log('onFoo');
        console.log('fooEvent happened outside element:', el);
        console.log('element that triggered foo:', e.target);
        console.log('event:', e);
        console.log('extras:', extras);
        console.log('bar:', extras.bar);
      }
    }
  };
</script>

<template>
  <div v-click-outside="onClickOutside"></div>
  <div v-mousemove-outside="onMouseOutside"></div>
  <div v-event-outside="{ name: 'fooEvent', handler: onFoo, bar: 'baz' }"></div>
</template>
```

### Scripts
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js" type="text/javascript"></script>
<script src="js/v-outside-events.min.js" type="text/javascript"></script>

<div id="app">
  <div v-click-outside="onClickOutside"></div>
  <div v-mousemove-outside="onMouseOutside"></div>
  <div v-event-outside="{ name: 'fooEvent', handler: onFoo, bar: 'baz' }"></div>
</div>

<script>
  import { defineComponent } from 'vue'
  defineComponent({
    methods: {
      onClickOutside (e, el) {
        console.log('onClickOutside');
        console.log('click heard outside element:', el);
        console.log('element clicked:', e.target);
        console.log('event:', e);
      },
      onMouseOutside (e, el) {
        console.log('onMouseOutside');
        console.log('mouse moved outside element:', el);
        console.log('element mouse moved over:', e.target);
        console.log('event:', e);
      },
      onFoo (e, el, extras) {
        console.log('onFoo');
        console.log('fooEvent happened outside element:', el);
        console.log('element that triggered foo:', e.target);
        console.log('event:', e);
        console.log('extras:', extras);
        console.log('bar:', extras.bar);
      }
    }
  });
</script>
```

## Events
| Event              | Event Name  | Directive            | Binding                                        |
| ------------------ | ----------- | -------------------- | ---------------------------------------------- |
| Click              | click       | v-click-outside      | ="handlerName"                                 |
| Double-Click       | dblclick    | v-dblclick-outside   | ="handlerName"                                 |
| Focus              | focusin     | v-focus-outside      | ="handlerName"                                 |
| Blur               | focusout    | v-blur-outside       | ="handlerName"                                 |
| Mouse Over / Enter | mouseover   | v-mouseover-outside  | ="handlerName"                                 |
| Mouse Move         | mousemove   | v-mousemove-outside  | ="handlerName"                                 |
| Mouse Up           | mouseup     | v-mouseup-outside    | ="handlerName"                                 |
| Mouse Down         | mousedown   | v-mousedown-outside  | ="handlerName"                                 |
| Mouse Out          | mouseout    | v-mouseout-outside   | ="handlerName"                                 |
| Key Down           | keydown     | v-keydown-outside    | ="handlerName"                                 |
| Key Up             | keyup       | v-keyup-outside      | ="handlerName"                                 |
| Key Press          | keypress    | v-keypress-outside   | ="handlerName"                                 |
| Change             | change      | v-change-outside     | ="handlerName"                                 |
| Select             | select      | v-select-outside     | ="handlerName"                                 |
| Submit             | submit      | v-submit-outside     | ="handlerName"                                 |
| Custom             | "eventName" | v-event-outside      | ="{ name: 'eventName', handler: handlerName }" |

## Extras
Add additional key/value pairs to the custom event to pass data to the event handler.

```html
<div v-event-outside="{ name: 'fooEvent', handler: onFoo, bar: 'baz' }"></div>
```

```js
onFoo (e, el, extras) {
  console.log('onFoo');
  console.log('fooEvent happened outside element:', el);
  console.log('element that triggered foo:', e.target);
  console.log('event:', e);
  console.log('extras:', extras);
  console.log('bar:', extras.bar);
}
```

## License
[MIT License](https://github.com/lapras-inc/vue-outside-events/blob/master/LICENSE)

## Style
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
