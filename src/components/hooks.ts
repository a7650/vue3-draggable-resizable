import {
  onMounted,
  onUnmounted,
  ref,
  watch,
  Ref,
  computed,
  reactive
} from 'vue'
import { getElSize } from './utils'
import { ResizingHandle } from './vue3-draggable-resizable'

type DragHandleFn = ({ x, y }: { x: number; y: number }) => void

interface Params {
  containerRef: Ref<HTMLElement | undefined>
  dragStart?: DragHandleFn
  dragEnd?: DragHandleFn
  dragging?: DragHandleFn
  x?: Ref<number>
  y?: Ref<number>
  autoUpdate?: boolean
  unselect?: () => void
  enable?: Ref<boolean>
}

export function useDraggableContainer(options: Params) {
  const {
    dragStart,
    dragEnd,
    dragging,
    autoUpdate = true,
    unselect,
    enable,
    containerRef
  } = options
  let { x = ref(0), y = ref(0) } = options
  let lstX = 0
  let lstY = 0
  let lstPageX = 0
  let lstPageY = 0
  const isDragging = ref(false)
  const _unselect = (e: MouseEvent) => {
    const target = e.target
    if (!containerRef.value?.contains(<Node>target) && unselect) {
      unselect()
    }
  }
  const handleUp = (e: MouseEvent) => {
    isDragging.value = false
    document.documentElement.removeEventListener('mouseup', handleUp)
    document.documentElement.removeEventListener('mousemove', handleDrag)
  }
  const handleDrag = (e: MouseEvent) => {
    if (!(isDragging.value && containerRef.value)) return
    const { pageX, pageY } = e
    const deltaX = pageX - lstPageX
    const deltaY = pageY - lstPageY
    // x.value = x.value + deltaX
    // y.value = y.value + deltaY
    // lstX = pageX
    // lstY = pageY
    dragging && dragging({ x: lstX + deltaX, y: lstY + deltaY })
    if (autoUpdate) {
      containerRef.value.style.left = x + 'px'
      containerRef.value.style.top = y + 'px'
    }
  }
  const handleDown = (e: MouseEvent) => {
    if (!enable || enable.value) {
      isDragging.value = true
      lstX = x.value
      lstY = y.value
      lstPageX = e.pageX
      lstPageY = e.pageY
      document.documentElement.addEventListener('mousemove', handleDrag)
      document.documentElement.addEventListener('mouseup', handleUp)
    }
  }
  watch(isDragging, (cur, pre) => {
    if (!pre && cur) {
      dragStart && dragStart({ x: x.value, y: y.value })
    } else {
      dragEnd && dragEnd({ x: x.value, y: y.value })
    }
  })
  onMounted(() => {
    const el = containerRef.value
    if (!el) return
    el.style.left = x + 'px'
    el.style.top = y + 'px'
    document.documentElement.addEventListener('mousedown', _unselect)
    el.addEventListener('mousedown', handleDown)
  })
  onUnmounted(() => {
    if (!containerRef.value) return
    document.documentElement.removeEventListener('mousedown', _unselect)
    document.documentElement.removeEventListener('mouseup', handleUp)
    document.documentElement.removeEventListener('mousemove', handleDrag)
  })
  return { containerRef }
}

export function useState<T>(initialState: T): [Ref<T>, (value: T) => void] {
  const state = ref(initialState) as Ref<T>
  const setState = (value: T) => {
    state.value = value
  }
  return [state, setState]
}

export function initState(props: any, emit: any) {
  const [width, setWidth] = useState<number>(props.initW)
  const [height, setHeight] = useState<number>(props.initH)
  const [left, setLeft] = useState<number>(props.x)
  const [top, setTop] = useState<number>(props.y)
  const [enable, setEnable] = useState<boolean>(props.active)
  const [dragging, setDragging] = useState<boolean>(false)
  const [resizing, setResizing] = useState<boolean>(false)
  const [resizingHandle, setResizingHandle] = useState<ResizingHandle>('')
  // const mouseClickSnapshot = reactive({
  //   x: 0,
  //   y: 0,
  //   w: 0,
  //   h: 0,
  //   pageX: 0,
  //   pageY: 0
  // })
  watch(
    width,
    (newVal) => {
      emit('update:w', newVal)
    },
    { immediate: true }
  )
  watch(
    height,
    (newVal) => {
      emit('update:h', newVal)
    },
    { immediate: true }
  )
  watch(top, (newVal) => {
    emit('update:y', newVal)
  })
  watch(left, (newVal) => {
    emit('update:x', newVal)
  })
  watch(enable, (newVal, oldVal) => {
    emit('update:active', newVal)
    if (!oldVal && newVal) {
      emit('activated')
    } else if (oldVal && !newVal) {
      emit('deactivated')
    }
  })
  watch(
    () => props.active,
    (newVal: boolean) => {
      setEnable(newVal)
    }
  )
  return {
    width,
    height,
    top,
    left,
    enable,
    dragging,
    resizing,
    resizingHandle,
    setEnable,
    setDragging,
    setResizing,
    setResizingHandle,
    $setWidth: setWidth,
    $setHeight: setHeight,
    $setTop: setTop,
    $setLeft: setLeft
  }
}

export function initParent(containerRef: Ref<HTMLElement | undefined>) {
  const parentWidth = ref<number>(0)
  const parentHeight = ref<number>(0)
  onMounted(() => {
    if (containerRef.value && containerRef.value.parentElement) {
      const { width, height } = getElSize(containerRef.value.parentElement)
      parentWidth.value = width
      parentHeight.value = height
    }
  })
  return {
    parentWidth,
    parentHeight
  }
}

export function initLimitSizeAndMethods(
  props: any,
  parentSize: ReturnType<typeof initParent>,
  methods: ReturnType<typeof initState>
) {
  const { width, height, top, left, resizingHandle } = methods
  const { $setWidth, $setHeight, $setTop, $setLeft } = methods
  const { parentWidth, parentHeight } = parentSize
  const limitProps = {
    minWidth: computed(() => {
      return props.minW as number
    }),
    minHeight: computed(() => {
      return props.minH as number
    }),
    maxWidth: computed(() => {
      let max = Infinity
      if (props.parent) {
        max = Math.min(
          parentWidth.value,
          resizingHandle.value[1] === 'l'
            ? left.value + width.value
            : parentWidth.value - left.value
        )
      }
      return max
    }),
    maxHeight: computed(() => {
      let max = Infinity
      if (props.parent) {
        max = Math.min(
          parentHeight.value,
          resizingHandle.value[0] === 't'
            ? top.value + height.value
            : parentHeight.value - top.value
        )
      }
      return max
    }),
    minLeft: computed(() => {
      return props.parent ? 0 : -Infinity
    }),
    minTop: computed(() => {
      return props.parent ? 0 : -Infinity
    }),
    maxLeft: computed(() => {
      return props.parent ? parentWidth.value - width.value : Infinity
    }),
    maxTop: computed(() => {
      return props.parent ? parentHeight.value - height.value : Infinity
    })
  }
  const limitMethods = {
    setWidth(val: number) {
      $setWidth(
        Math.min(
          limitProps.maxWidth.value,
          Math.max(limitProps.minWidth.value, val)
        )
      )
    },
    setHeight(val: number) {
      $setHeight(
        Math.min(
          limitProps.maxHeight.value,
          Math.max(limitProps.minHeight.value, val)
        )
      )
    },
    setTop(val: number) {
      $setTop(
        Math.min(
          limitProps.maxTop.value,
          Math.max(limitProps.minTop.value, val)
        )
      )
    },
    setLeft(val: number) {
      $setLeft(
        Math.min(
          limitProps.maxLeft.value,
          Math.max(limitProps.minLeft.value, val)
        )
      )
    }
  }
  return {
    ...limitProps,
    ...limitMethods
  }
}

export function watchProps(
  props: any,
  limits: ReturnType<typeof initLimitSizeAndMethods>
) {
  const { setWidth, setHeight, setLeft, setTop } = limits
  watch(
    () => props.w,
    (newVal: number) => {
      setWidth(newVal)
    }
  )
  watch(
    () => props.h,
    (newVal: number) => {
      setHeight(newVal)
    }
  )
  watch(
    () => props.x,
    (newVal: number) => {
      setLeft(newVal)
    }
  )
  watch(
    () => props.y,
    (newVal: number) => {
      setTop(newVal)
    }
  )
}

export function initResizeHandle(
  containerProps: ReturnType<typeof initState>,
  limitProps: ReturnType<typeof initLimitSizeAndMethods>,
  emit: any
) {
  const { setWidth, setHeight, setLeft, setTop } = limitProps
  const {
    width,
    height,
    left,
    top,
    resizingHandle,
    setResizing,
    setResizingHandle
  } = containerProps
  let lstW = 0
  let lstH = 0
  let lstX = 0
  let lstY = 0
  let lstPageX = 0
  let lstPageY = 0
  const resizeHandleDrag = (e: MouseEvent) => {
    emit('resizing')
    const deltaX = e.pageX - lstPageX
    const deltaY = e.pageY - lstPageY
    const idx0 = resizingHandle.value[0]
    const idx1 = resizingHandle.value[1]
    if (idx1 === 'l') {
      setWidth(lstW - deltaX)
      setLeft(lstX - (width.value - lstW))
    } else if (idx1 === 'r') {
      setWidth(lstW + deltaX)
    }
    if (idx0 === 't') {
      setHeight(lstH - deltaY)
      setTop(lstY - (height.value - lstH))
    } else if (idx0 === 'b') {
      setHeight(lstH + deltaY)
    }
  }
  const resizeHandleUp = (e: MouseEvent) => {
    emit('resize-end')
    setResizingHandle('')
    setResizing(false)
    document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
    document.documentElement.removeEventListener('mouseup', resizeHandleUp)
  }
  const resizeHandleDown = (e: MouseEvent, handleType: ResizingHandle) => {
    setResizingHandle(handleType)
    setResizing(true)
    e.stopPropagation()
    emit('resize-start')
    lstW = width.value
    lstH = height.value
    lstX = left.value
    lstY = top.value
    lstPageX = e.pageX
    lstPageY = e.pageY
    document.documentElement.addEventListener('mousemove', resizeHandleDrag)
    document.documentElement.addEventListener('mouseup', resizeHandleUp)
  }
  onUnmounted(() => {
    document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
    document.documentElement.removeEventListener('mousemove', resizeHandleUp)
  })
  return {
    resizeHandleDrag,
    resizeHandleUp,
    resizeHandleDown
  }
}
