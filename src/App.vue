<template>
  <div id="app">
    <div>
      x:{{ x }} <button @click="x += 10">+</button><button @click="x -= 10">-</button>
    </div>
    <div>
      y:{{ y }}<button @click="y += 10">+</button><button @click="y -= 10">-</button>
    </div>
    <div>
      w:{{ w }}<button @click="w += 10">+</button><button @click="w -= 10">-</button>
    </div>
    <div>
      h: {{ h }}<button @click="h += 10">+</button><button @click="h -= 10">-</button>
    </div>
     <div>
      scale:{{scale}} 滚动鼠标滚轮缩放画布
     </div>

    <div>active:{{ active }}<br /></div>
    <div class="parent" :style="{transform:'scale('+scale+')'}">
      <Vue3DraggableResizable
        :initW="40"
        :initH="80"
        v-model:x="x"
        v-model:y="y"
        v-model:w="w"
        v-model:h="h"
        v-model:active="active"
        :draggable="draggable"
        :resizable="resizable"
        :parent="true"
        :disabledX="false"
        :disabledW="false"
        :disabledH="false"
        :disabledY="false"
        :lockAspectRatio="false"
        :parent-scale-x="scale"
        :parent-scale-y="scale"

        classNameHandle="my-handle"
        @activated="print('activated')"
        @deactivated="print('deactivated')"
        @drag-start="print('drag-start', $event)"
        @resize-start="print('resize-start', $event)"
        @dragging="print('dragging', $event)"
        @resizing="print('resizing', $event)"
        @drag-end="print('drag-end', $event)"
        @resize-end="print('resize-end', $event)"
      >
        This is a test example
      </Vue3DraggableResizable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Vue3DraggableResizable from "./components/Vue3DraggableResizable";
import DraggableContainer from "./components/DraggableContainer";

export default defineComponent({
  components: { DraggableContainer, Vue3DraggableResizable },
  data() {
    return {
      x: 100,
      y: 100,
      h: 100,
      w: 100,
      active: false,
      draggable: true,
      resizable: true,
      scale:1
    };
  },
  mounted() {
    //@ts-ignore
    window.addEventListener("mousewheel",this.mousewheel,false)
  },
  methods: {
    mousewheel(e:WheelEvent){
        if(e.deltaY<0){
          if(this.scale<1){
            this.scale = Math.fround((this.scale+0.1)*100)/100
          }
        }else{
           if(this.scale>0.1){
            this.scale = Math.fround((this.scale-0.1)*100)/100
          }
        }
    },
    print(val, e) {
      // console.log(val, e)
    },
  },
});
</script>
<style lang="less" scoped>
#app{
  padding: 50px;
}
.parent {
  width: 1000px;
  height: 500px;
  // position: absolute;
  // top: 100px;
  // left: 200px;
  position: relative;
  border: 1px solid #000;
  user-select: none;
  ::v-deep {
    .vdr-container {
      border-color: #999;
    }
  }
}
</style>
