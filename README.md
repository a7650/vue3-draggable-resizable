<p align="center"><img src="https://github.com/a7650/vue3-draggable-resizable/blob/main/docs/logo.png" alt="logo"></p>

<h1 align="center">Vue3DraggableResizable</h1>
<div align="center">

[![npm version](https://badge.fury.io/js/vue3-draggable-resizable.svg)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue3-draggable-resizable.svg?style=flat-square)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![vue version](https://img.shields.io/badge/vue_version->=3-brightgreen.svg?style=flat-square)](https://github.com/a7650/vue3-draggable-resizable)

</div>

> [Vue3 组件] 用于拖拽调整位置和大小的的组件，同时支持冲突检测，元素吸附对齐，实时参考线。
> [ Vue3 Component ] Draggable and resizable component for vue3, and, support element adsorption alignment, real-time reference line, etc.

[点击查看中文文档](https://github.com/a7650/vue3-draggable-resizable/blob/main/docs/document_zh.md)

## Table of Contents

- [Features](#features)
- [Usage](#Usage)
  - [Props](#props)
  - [Events](#events)
  - [Use adsorption alignment](#Use-adsorption-alignment)

### Features

- Draggable and resizable
- Define handles for resizing
- Restrict movement and size in parent node
- Customize various class names
- Provide your own markup for handles
- Adsorption alignment
- Reference line

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
createApp(App)
  .use(Vue3DraggableResizable)
  .mount('#app')
```

You can also use it separately within the component

```js
// >component.js
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

export default defineComponent({
  components: { Vue3DraggableResizable }
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
<Vue3DraggableResizable :initW="100" />
```

#### initH

type: `Number`<br>
default: `null`<br>

Set initial height(px)

```html
<Vue3DraggableResizable :initH="100" />
```

#### w

type: `Number`<br>
default: `0`<br>

Current width(px) of the container.<br>
You can use "v-model:w" to keeps it up-to-date

```html
<Vue3DraggableResizable v-model:w="100" />
```

#### h

type: `Number`<br>
default: `0`<br>

Current height(px) of the container.<br>
You can use "v-model:h" to keeps it up-to-date

```html
<Vue3DraggableResizable v-model:h="100" />
```

#### x

type: `Number`<br>
default: `0`<br>

Current left(px) of the container.<br>
You can use "v-model:x" to keeps it up-to-date

```html
<Vue3DraggableResizable v-model:x="100" />
```

#### y

type: `Number`<br>
default: `0`<br>

The current top(px) of the container.<br>
You can use "v-model:y" to keeps it up-to-date

```html
<Vue3DraggableResizable v-model:y="100" />
```

#### minW

type: `Number`<br>
default: `20`<br>

Minimum width(px)

```html
<Vue3DraggableResizable :minW="100" />
```

#### minH

type: `Number`<br>
default: `20`<br>

Minimum height(px)

```html
<Vue3DraggableResizable :minH="100" />
```

#### active

type: `Boolean`<br>
default: `false`<br>

Indicates whether the component is selected.<br>
You can use "v-model:active" to keeps it up-to-date

```html
<Vue3DraggableResizable v-model:active="100" />
```

#### draggable

type: `Boolean`<br>
default: `true`<br>

Defines the component can be draggable or not

```html
<Vue3DraggableResizable :draggable="true" />
```

#### resizable

type: `Boolean`<br>
default: `true`<br>

Defines the component can be resizable or not

```html
<Vue3DraggableResizable :draggable="true" />
```

#### lockAspectRatio

type: `Boolean`<br>
default: `false`<br>

The `lockAspectRatio` property is used to lock aspect ratio.

```html
<Vue3DraggableResizable :lockAspectRatio="true" />
```

#### disabledX

type: `Boolean`<br>
default: `false`<br>

Defines the component can be moved on x-axis or not

```html
<Vue3DraggableResizable :disabledX="true" />
```

#### disabledY

type: `Boolean`<br>
default: `false`<br>

Defines the component can be moved on y-axis or not

```html
<Vue3DraggableResizable :disabledY="true" />
```

#### disabledW

type: `Boolean`<br>
default: `false`<br>

Defines the component`s width can be modify or not

```html
<Vue3DraggableResizable :disabledW="true" />
```

#### disabledH

type: `Boolean`<br>
default: `false`<br>

Defines the component`s height can be modify or not

```html
<Vue3DraggableResizable :disabledH="true" />
```

#### parent

type: `Boolean`<br>
default: `false`<br>

Restrict movement and size within its parent node

```html
<Vue3DraggableResizable :parent="true" />
```

#### handles

type: `Array`<br>
default: `['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']`

Define the array of handles to restrict the element resizing

- `tl` : Top left
- `tm` : Top middle
- `tr` : Top right
- `mr` : Middle right
- `ml` : Middle left
- `bl` : Bottom left
- `bm` : Bottom middle
- `br` : Bottom right

```html
<Vue3DraggableResizable :handles="['tl','tr','bl','br']" />
```

#### classNameDraggable

type: `String`<br>
default: `draggable`

Used to set the custom `class` of a draggable-resizable component when `draggable` is enable.

```html
<Vue3DraggableResizable classNameDraggable="draggable" />
```

#### classNameResizable

type: `String`<br>
default: `resizable`

Used to set the custom `class` of a draggable-resizable component when `resizable` is enable.

```html
<Vue3DraggableResizable classNameResizable="resizable" />
```

#### classNameDragging

type: `String`<br>
default: `dragging`

Used to set the custom `class` of a draggable-resizable component when is dragging.

```html
<Vue3DraggableResizable classNameDragging="dragging" />
```

#### classNameResizing

type: `String`<br>
default: `resizing`

Used to set the custom `class` of a draggable-resizable component when is resizing.

```html
<Vue3DraggableResizable classNameResizing="resizing" />
```

#### classNameActive

type: `String`<br>
default: `active`

Used to set the custom `class` of a draggable-resizable component when is active.

```html
<Vue3DraggableResizable classNameActive="active" />
```

#### classNameHandle

type: `String`<br>
default: `handle`

Used to set the custom common `class` of each handle element.

```html
<Vue3DraggableResizable classNameHandle="my-handle" />
```

following handle nodes will be rendered

```html
...
<div class="vdr-handle vdr-handle-tl my-handle my-handle-tl"></div>
<div class="vdr-handle vdr-handle-tm my-handle my-handle-tm"></div>
<div class="vdr-handle vdr-handle-tr my-handle my-handle-tr"></div>
<div class="vdr-handle vdr-handle-ml my-handle my-handle-mr"></div>
...
```

### Events

#### activated

payload: `-`

```html
<Vue3DraggableResizable @activated="activatedHandle" />
```

#### deactivated

payload: `-`

```html
<Vue3DraggableResizable @deactivated="deactivatedHandle" />
```

#### drag-start

payload: `{ x: number, y: number }`

```html
<Vue3DraggableResizable @drag-start="dragStartHandle" />
```

#### dragging

payload: `{ x: number, y: number }`

```html
<Vue3DraggableResizable @dragging="dragStartHandle" />
```

#### drag-end

payload: `{ x: number, y: number }`

```html
<Vue3DraggableResizable @drag-end="dragEndHandle" />
```

#### resize-start

payload: `{ x: number, y: number, w: number, h: number }`

```html
<Vue3DraggableResizable @resize-start="resizeStartHandle" />
```

#### resizing

payload: `{ x: number, y: number, w: number, h: number }v`

```html
<Vue3DraggableResizable @resizing="resizingHandle" />
```

#### resize-end

payload: `{ x: number, y: number, w: number, h: number }`

```html
<Vue3DraggableResizable @resize-end="resizeEndHandle" />
```

### Use-adsorption-alignment

You need to import another component to use the "adsorption alignment" feature.

This can be used as follows.

```vue
<template>
  <div id="app">
    <div class="parent">
      <DraggableContainer>
        <Vue3DraggableResizable>
          Test
        </Vue3DraggableResizable>
        <Vue3DraggableResizable>
          Another test
        </Vue3DraggableResizable>
      </DraggableContainer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
// This component is not exported by default
// If you used "app.use(Vue3DraggableResizable)"，then you don't need to import it, you can use it directly.
import { DraggableContainer } from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable, DraggableContainer }
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

### DraggableContainer Props

These props apply to DraggableContainer

#### disabled

type: `Boolean`<br>
default: `false`<br>

Disable this feature

```html
<DraggableContainer :disabled="true">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```

#### adsorbParent

type: `Boolean`<br>
default: `true`<br>

Adsorption near parent component

```html
<DraggableContainer :adsorbParent="false">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```

#### adsorbCols

type: `Array<Number>`<br>
default: `null`<br>

Custom guides(column)

```html
<DraggableContainer :adsorbCols="[10,20,30]">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```

#### adsorbRows

type: `Array<Number>`<br>
default: `null`<br>

Custom guides(row)

```html
<DraggableContainer :adsorbRows="[10,20,30]">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```

#### referenceLineVisible

type: `Boolean`<br>
default: `true`<br>

reference line visible

```html
<DraggableContainer :referenceLineVisible="false">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```

#### referenceLineColor

type: `String`<br>
default: `#f00`<br>

reference line color

```html
<DraggableContainer :referenceLineColor="#0f0">
  <Vue3DraggableResizable>
    Test
  </Vue3DraggableResizable>
  <Vue3DraggableResizable>
    Another test
  </Vue3DraggableResizable>
</DraggableContainer>
```
