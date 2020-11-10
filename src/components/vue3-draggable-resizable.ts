import { defineComponent, onMounted, ref, toRef, toRefs } from 'vue'
import {
  useDraggableContainer,
  useState,
  watchProps,
  initState,
  initParent,
  initLimitSizeAndMethods
} from './hooks'
import './index.css'
import { getElSize } from './utils'
import { h } from 'vue'

export type ResizingHandle =
  | 'tl'
  | 'tm'
  | 'tr'
  | 'ml'
  | 'mr'
  | 'bl'
  | 'bm'
  | 'br'
  | ''

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
  },
  parent: {
    type: Boolean,
    default: false
  },
  handles: {
    type: Array,
    default: ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br']
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
  name: 'Vue3DraggableResizable',
  props: VdrProps,
  emits: emits,
  setup(props, { emit }) {
    const containerProp = initState(props, emit)
    const containerRef = ref<HTMLElement>()
    const { top, left, setEnable, setDragging } = containerProp
    const parentSize = initParent(containerRef)
    const limitProp = initLimitSizeAndMethods(props, parentSize, containerProp)
    watchProps(props,limitProp)
    const { setLeft, setTop } = limitProp
    useDraggableContainer({
      containerRef,
      autoUpdate: false,
      enable: toRef(props, 'draggable'),
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
    return {
      containerRef,
      ...containerProp,
      ...parentSize,
      ...limitProp
    }
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
    klass(): { [propName: string]: string | boolean } {
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
  methods: {},
  render() {
    return h(
      'div',
      {
        ref: 'containerRef',
        class: ['vdr-container', this.klass],
        style: this.style
      },
      this.$slots.default!()
    )
  }
})

export default VueDraggableResizable
