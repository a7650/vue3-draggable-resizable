<h1 align="center">Vue3DraggableResizable</h1>
<div align="center">

[![npm version](https://badge.fury.io/js/vue3-draggable-resizable.svg)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue3-draggable-resizable.svg?style=flat-square)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![vue version](https://img.shields.io/badge/vue_version->=3-brightgreen.svg?style=flat-square)](https://github.com/a7650/vue3-draggable-resizable)

</div>


> [ Vue3 Component ] Draggable and resizable component for vue3

### Features

* At present, only "draggable" feature is supported, I will update the "resizable" feature as soon as possible.

### Usage

```bash
$ npm install vue3-draggable-resizable
```

Register the Vue3DraggableResizable

```js
// >main.js
import { createApp } from 'vue'
import App from './App.vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

// You will have a global component named "Vue3DraggableResizable"
createApp(App).use(Vue3DraggableResizable).mount('#app')
```

You can also use it separately within the component
```js
// >component.js
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

export default defineComponent({
    components:{ Vue3DraggableResizable },
    // ...other
})

```

Here is a complete example of using "vue-template"

```vue
<template>
  <div id="app">
    <div class="parent">
      <Vue3DraggableResizable
        :initW="110"
        :initH="120"
        v-model:x="x"
        v-model:y="y"
        v-model:w="w"
        v-model:h="h"
        v-model:active="active"
        :draggable="true"
        :resizable="true"
        @activated="print('activated')"
        @deactivated="print('deactivated')"
        @drag-start="print('drag-start')"
        @resize-start="print('resize-start')"
        @dragging="print('dragging')"
        @resizing="print('resizing')"
        @drag-end="print('drag-end')"
        @resize-end="print('resize-end')"
      >
        This is a test example
      </Vue3DraggableResizable>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable },
  data() {
    return {
      x: 100,
      y: 100,
      h: 100,
      w: 100,
      active: false
    }
  },
  methods: {
    print(val) {
      console.log(val)
    }
  }
})
</script>
<style>
.parent {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 100px;
  border: 1px solid #000;
  user-select: none;
}
</style>
```

### Props

#### initW
type: `Number`<br>
default: `null`<br>

Set initial width(px)
```html
<vue3DraggableResizable :initW="100"/>
```
#### initH
type: `Number`<br>
default: `null`<br>

Set initial height(px)
```html
<vue3DraggableResizable :initH="100"/>
```
#### w
type: `Number`<br>
default: `0`<br>

 Current width(px) of the container.<br>
 You can use "v-model:w" to keeps it up-to-date
```html
<vue3DraggableResizable v-model:w="100"/>
```
#### h
type: `Number`<br>
default: `0`<br>

Current height(px) of the container.<br>
 You can use "v-model:h" to keeps it up-to-date
```html
<vue3DraggableResizable v-model:h="100"/>
```
#### x
type: `Number`<br>
default: `0`<br>

 Current left(px) of the container.<br>
 You can use "v-model:x" to keeps it up-to-date
```html
<vue3DraggableResizable v-model:x="100"/>
```
#### y
type: `Number`<br>
default: `0`<br>

 The current top(px) of the container.<br>
 You can use "v-model:y" to keeps it up-to-date
```html
<vue3DraggableResizable v-model:y="100"/>
```
#### minW
type: `Number`<br>
default: `20`<br>

 Minimum width(px)
```html
<vue3DraggableResizable :minW="100"/>
```
#### minH
type: `Number`<br>
default: `20`<br>

 Minimum height(px)
```html
<vue3DraggableResizable :minH="100"/>
```
#### active
type: `Boolean`<br>
default: `false`<br>

 Indicates whether the component is selected.<br>
 You can use "v-model:active" to keeps it up-to-date
```html
<vue3DraggableResizable v-model:active="100"/>
```
#### draggable
type: `Boolean`<br>
default: `true`<br>

Defines the component can be draggable or not
```html
<vue3DraggableResizable :draggable="true"/>
```
#### resizable
type: `Boolean`<br>
default: `true`<br>

Defines the component can be resizable or not
```html
<vue3DraggableResizable :draggable="true"/>
```
#### parent
type: `Boolean`<br>
default: `false`<br>

Restrict movement and size within its parent node
```html
<vue3DraggableResizable :parent="true"/>
```

### Events
#### activated
payload: `-`
```html
<vue3DraggableResizable @activated="activatedHandle"/>
```
#### deactivated
payload: `-`
```html
<vue3DraggableResizable @deactivated="deactivatedHandle"/>
```
#### drag-start
payload: `{ x: number, y: number, w: number, h: number }`
```html
<vue3DraggableResizable @drag-start="dragStartHandle"/>
```
#### dragging
payload: `{ x: number, y: number, w: number, h: number }v`
```html
<vue3DraggableResizable @dragging="dragStartHandle"/>
```
#### drag-end
payload: `{ x: number, y: number, w: number, h: number }`
```html
<vue3DraggableResizable @drag-end="dragEndHandle"/>
```
#### resize-start
payload: `{ x: number, y: number, w: number, h: number }`
```html
<vue3DraggableResizable @resize-start="resizeStartHandle"/>
```
#### resizing
payload: `{ x: number, y: number, w: number, h: number }v`
```html
<vue3DraggableResizable @resizing="resizingHandle"/>
```
#### resize-end
payload: `{ x: number, y: number, w: number, h: number }`
```html
<vue3DraggableResizable @resize-end="resizeEndHandle"/>
```
