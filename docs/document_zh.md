<h1 align="center">Vue3DraggableResizable</h1>
<div align="center">

[![npm version](https://badge.fury.io/js/vue3-draggable-resizable.svg)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue3-draggable-resizable.svg?style=flat-square)](https://www.npmjs.com/package/vue3-draggable-resizable)
[![vue version](https://img.shields.io/badge/vue_version->=3-brightgreen.svg?style=flat-square)](https://github.com/a7650/vue3-draggable-resizable)

</div>

> [ Vue3 Component ] Vue3的拖拽缩放容器

### 特性

- 支持拖拽和缩放，可分别定义开启或关闭
- 自定义缩放句柄（缩放时共有八个方位可操作，可分别定义开启或关闭）
- 限制组件的拖动和缩放在其父节点内
- 自定义组件内各种类名
- 缩放句柄的类名也可自定义

### 使用

```bash
$ npm install vue3-draggable-resizable
```

使用use方法注册组件

```js
// >main.js
import { createApp } from 'vue'
import App from './App.vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//需引入默认样式
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

// 你将会获得一个名为Vue3DraggableResizable的全局组件
createApp(App)
  .use(Vue3DraggableResizable)
  .mount('#app')
```

也可以单独在你的组件内部使用

```js
// >component.js
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//需引入默认样式
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

export default defineComponent({
  components: { Vue3DraggableResizable }
  // ...other
})
```

下面是一个使用vue-template语法写的例子

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

设置初始宽度（px）

```html
<Vue3DraggableResizable :initW="100" />
```

#### initH

type: `Number`<br>
default: `null`<br>

设置初始高度（px）

```html
<Vue3DraggableResizable :initH="100" />
```

#### w

type: `Number`<br>
default: `0`<br>

组件的当前宽度（px）<br>
你可以使用“v-model:w”语法使它和父组件保持一致

```html
<Vue3DraggableResizable v-model:w="100" />
```

#### h

type: `Number`<br>
default: `0`<br>

组件的当前高度（px）<br>
你可以使用“v-model:h”语法使它和父组件保持一致

```html
<Vue3DraggableResizable v-model:h="100" />
```

#### x

type: `Number`<br>
default: `0`<br>

组件距离父容器的左侧的距离（px）<br>
你可以使用“v-model:x”语法使它和父组件保持一致

```html
<Vue3DraggableResizable v-model:x="100" />
```

#### y

type: `Number`<br>
default: `0`<br>

组件距离父容器顶部的距离（px）<br>
你可以使用“v-model:y”语法使它和父组件保持一致

```html
<Vue3DraggableResizable v-model:y="100" />
```

#### minW

type: `Number`<br>
default: `20`<br>

组件的最小宽度（px）

```html
<Vue3DraggableResizable :minW="100" />
```

#### minH

type: `Number`<br>
default: `20`<br>

组件的最小高度（px）

```html
<Vue3DraggableResizable :minH="100" />
```

#### active

type: `Boolean`<br>
default: `false`<br>

组件当前是否处于活跃状态<br>
你可以使用“v-model:active”语法使它和父组件保持一致

```html
<Vue3DraggableResizable v-model:active="100" />
```

#### draggable

type: `Boolean`<br>
default: `true`<br>

组件是否可拖动

```html
<Vue3DraggableResizable :draggable="true" />
```

#### resizable

type: `Boolean`<br>
default: `true`<br>

组件是否可调整大小

```html
<Vue3DraggableResizable :draggable="true" />
```

#### parent

type: `Boolean`<br>
default: `false`<br>

是否将组件的拖动和缩放限制在其父节点内，即组件不会超出父节点，默认关闭

```html
<Vue3DraggableResizable :parent="true" />
```

#### handles

type: `Array`<br>
default: `['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']`

定义缩放的句柄（共八个方向）

- `tl` : 上左
- `tm` : 上中
- `tr` : 上右
- `mr` : 中左
- `ml` : 中右
- `bl` : 下左
- `bm` : 下中
- `br` : 下右

```html
<Vue3DraggableResizable :handles="['tl','tr','bl','br']" />
```

#### classNameDraggable

type: `String`<br>
default: `draggable`

自定义组件的类名，该类名在组件是“可拖动”时显示

```html
<Vue3DraggableResizable classNameDraggable="draggable" />
```

#### classNameResizable

type: `String`<br>
default: `resizable`

自定义组件类名，该类名在组件是“可缩放”时显示

```html
<Vue3DraggableResizable classNameResizable="resizable" />
```

#### classNameDragging

type: `String`<br>
default: `dragging`

定义组件在拖动时显示的类名

```html
<Vue3DraggableResizable classNameDragging="dragging" />
```

#### classNameResizing

type: `String`<br>
default: `resizing`

定义组件在缩放时显示的类名

```html
<Vue3DraggableResizable classNameResizing="resizing" />
```

#### classNameActive

type: `String`<br>
default: `active`

定义组件在活跃状态下的类名

```html
<Vue3DraggableResizable classNameActive="active"></Vue3DraggableResizable>
```

#### classNameHandle

type: `String`<br>
default: `handle`

定义缩放句柄的类名

```html
<Vue3DraggableResizable classNameHandle="my-handle" />
```
以上设置将会渲染出下面的缩放句柄节点（my-handle-*）
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

组件从非活跃状态到活跃状态时触发

```html
<Vue3DraggableResizable @activated="activatedHandle" />
```

#### deactivated

payload: `-`

组件从活跃状态到非活跃状态时触发

```html
<Vue3DraggableResizable @deactivated="deactivatedHandle" />
```

#### drag-start

payload: `{ x: number, y: number }`

组件开始拖动时触发

```html
<Vue3DraggableResizable @drag-start="dragStartHandle" />
```

#### dragging

payload: `{ x: number, y: number }v`

组件在拖动过程中持续触发

```html
<Vue3DraggableResizable @dragging="dragStartHandle" />
```

#### drag-end

payload: `{ x: number, y: number }`

组件拖动结束时触发

```html
<Vue3DraggableResizable @drag-end="dragEndHandle" />
```

#### resize-start

payload: `{ x: number, y: number, w: number, h: number }`

组件开始缩放时触发

```html
<Vue3DraggableResizable @resize-start="resizeStartHandle" />
```

#### resizing

payload: `{ x: number, y: number, w: number, h: number }`

组件在缩放过程中持续触发

```html
<Vue3DraggableResizable @resizing="resizingHandle" />
```

#### resize-end

payload: `{ x: number, y: number, w: number, h: number }`

组件缩放结束时触发

```html
<Vue3DraggableResizable @resize-end="resizeEndHandle" />
```
