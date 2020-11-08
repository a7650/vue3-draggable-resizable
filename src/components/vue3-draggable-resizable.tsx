import { defineComponent, onMounted, ref } from 'vue'
import { useDraggableContainer, useState, watchProperties } from './hooks'
import './index.css'
import { getElSize } from './utils'

const VdrProps = {
  initW: {
    type: Number,
    default: null
  },
  initH: {
    type: Number,
    default: null
  },
  w: {
    type: Number,
    default: 0
  },
  h: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  draggable: {
    type: Boolean,
    default: true
  },
  resizable: {
    type: Boolean,
    default: true
  },
  minW: {
    type: Number,
    default: 20
  },
  minH: {
    type: Number,
    default: 20
  },
  active: {
    type: Boolean,
    default: false
  }
}

const emits = [
  'activated',
  'deactivated',
  'drag-start',
  'resize-start',
  'dragging',
  'resizing',
  'drag-end',
  'resize-end',
  'update:w',
  'update:h',
  'update:x',
  'update:y',
  'update:active'
]

const VueDraggableResizable = defineComponent({
  name:'VueDraggableResizable',
  props: VdrProps,
  emits: emits,
  setup(props, { emit }) {
    const containerProp = watchProperties(props, emit)
    const { top, left, setTop, setLeft, setEnable, setDragging } = containerProp
    const { containerRef } = useDraggableContainer({
      autoUpdate: false,
      x: left,
      y: top,
      dragStart({ x, y }) {
        setLeft(x)
        setTop(y)
        emit('drag-start', { x, y })
        setEnable(true)
        setDragging(true)
      },
      dragging({ x, y }) {
        setLeft(x)
        setTop(y)
        emit('dragging', { x, y })
      },
      dragEnd({ x, y }) {
        emit('drag-end', { x, y })
        setDragging(false)
      },
      unselect() {
        setEnable(false)
      }
    })
    return { ...containerProp, containerRef }
  },
  data() {
    return {}
  },
  computed: {
    style(): { [propName: string]: string } {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.top + 'px',
        left: this.left + 'px'
      }
    },
    class(): { [propName: string]: string | boolean } {
      return {
        active: this.enable,
        dragging: this.dragging,
        resizing: this.resizing,
        draggable: this.draggable,
        resizable: this.resizable
      }
    }
  },
  mounted() {
    if (!this.containerRef) return
    this.containerRef.ondragstart = () => false
    const { width, height } = getElSize(this.containerRef)
    this.setWidth(this.initW === null ? this.w || width : this.initW)
    this.setHeight(this.initH === null ? this.h || height : this.initH)
  },
  methods: {
    unselect(e: Event) {
      const target = e.target
      //   if(this.$el)
    }
  },
  render() {
    return (
      <div
        ref="containerRef"
        class={['vdr-container', this.class]}
        style={this.style}
      >
        {this.$slots.default!()}
      </div>
    )
  }
})

export default VueDraggableResizable
