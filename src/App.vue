<template>
  <div id="app">
    <div>
      x:{{ x }} <button @click="x += 10">+</button
      ><button @click="x -= 10">-</button>
    </div>
    <div>
      y:{{ y }}<button @click="y += 10">+</button
      ><button @click="y -= 10">-</button>
    </div>
    <div>
      w:{{ w }}<button @click="w += 10">+</button
      ><button @click="w -= 10">-</button>
    </div>
    <div>
      h: {{ h }}<button @click="h += 10">+</button
      ><button @click="h -= 10">-</button>
    </div>
    <div>active:{{ active }}<br /></div>
    <div class="parent">
      <Vue3DraggableResizable
        :initW="110"
        :initH="120"
        v-model:x="x"
        v-model:y="y"
        v-model:w="w"
        v-model:h="h"
        v-model:active="active"
        :draggable="draggable"
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
import Vue3DraggableResizable from './components/vue3-draggable-resizable'

export default defineComponent({
  components: { Vue3DraggableResizable },
  data() {
    return {
      x: 100,
      y: 100,
      h: 100,
      w: 100,
      active: false,
      draggable: true
    }
  },
  mounted() {},
  methods: {
    print(val) {
      console.log(val)
    }
  }
})
</script>
<style lang="less" scoped>
.parent {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 100px;
  left: 200px;
  border: 1px solid #000;
  user-select: none;
}
</style>
