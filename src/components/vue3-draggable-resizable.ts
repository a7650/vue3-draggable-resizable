import { defineComponent, onMounted, ref, toRef, toRefs } from 'vue'
import {
  useDraggableContainer,
  useState,
  watchProps,
  initState,
  initParent,
  initLimitSizeAndMethods,
  initResizeHandle
} from './hooks'
import './index.css'
import { getElSize, filterHandles } from './utils'
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
export const ALL_HANDLES: ResizingHandle[] = [
  'tl',
  'tm',
  'tr',
  'ml',
  'mr',
  'bl',
  'bm',
  'br'
]

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
    default: ALL_HANDLES,
    validator: (handles: ResizingHandle[]) => {
      return filterHandles(handles).length === handles.length
    }
  },
  classNameDraggable: {
    type: String,
    default: 'draggable'
  },
  classNameResizable: {
    type: String,
    default: 'resizable'
  },
  classNameDragging: {
    type: String,
    default: 'dragging'
  },
  classNameResizing: {
    type: String,
    default: 'resizing'
  },
  classNameActive: {
    type: String,
    default: 'active'
  },
  classNameHandle: {
    type: String,
    default: 'handle'
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
    const containerProps = initState(props, emit)
    const containerRef = ref<HTMLElement>()
    const {
      top,
      left,
      setEnable,
      setDragging,
      setResizing,
      setResizingHandle
    } = containerProps
    const parentSize = initParent(containerRef)
    const limitProps = initLimitSizeAndMethods(
      props,
      parentSize,
      containerProps
    )
    watchProps(props, limitProps)
    const { setLeft, setTop } = limitProps
    useDraggableContainer({
      containerRef,
      autoUpdate: false,
      enable: toRef(props, 'draggable'),
      x: left,
      y: top,
      dragStart({ x, y }) {
        emit('drag-start', { x: setLeft(x), y: setTop(y) })
        setEnable(true)
        setDragging(true)
      },
      dragging({ x, y }) {
        emit('dragging', { x: setLeft(x), y: setTop(y) })
      },
      dragEnd({ x, y }) {
        emit('drag-end', { x: setLeft(x), y: setTop(y) })
        setDragging(false)
      },
      unselect() {
        setEnable(false)
        setDragging(false)
        setResizing(false)
        setResizingHandle('')
      }
    })
    const resizeHandle = initResizeHandle(containerProps, limitProps, emit)
    return {
      containerRef,
      ...containerProps,
      ...parentSize,
      ...limitProps,
      ...resizeHandle
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
        [this.classNameActive]: this.enable,
        [this.classNameDragging]: this.dragging,
        [this.classNameResizing]: this.resizing,
        [this.classNameDraggable]: this.draggable,
        [this.classNameResizable]: this.resizable
      }
    },
    handlesFiltered(): ResizingHandle[] {
      return filterHandles(this.handles as ResizingHandle[])
    }
  },
  mounted() {
    if (!this.containerRef) return
    this.containerRef.ondragstart = () => false
    const { width, height } = getElSize(this.containerRef)
    this.setWidth(this.initW === null ? this.w || width : this.initW)
    this.setHeight(this.initH === null ? this.h || height : this.initH)
  },
  render() {
    return h(
      'div',
      {
        ref: 'containerRef',
        class: ['vdr-container', this.klass],
        style: this.style
      },
      [
        this.$slots.default!(),
        ...this.handlesFiltered.map((item) =>
          h('div', {
            class: [
              'vdr-handle',
              'vdr-handle-' + item,
              this.classNameHandle,
              `${this.classNameHandle}-${item}`
            ],
            style: { display: this.enable ? 'block' : 'none' },
            onMousedown: (e: MouseEvent) =>
              this.resizeHandleDown(e, <ResizingHandle>item)
          })
        )
      ]
    )
  }
})

export default VueDraggableResizable
