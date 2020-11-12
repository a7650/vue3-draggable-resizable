import { onMounted, onUnmounted, ref, watch, Ref, computed } from 'vue'
import { getElSize, filterHandles } from './utils'
import { ResizingHandle } from './vue3-draggable-resizable'

export function useState<T>(initialState: T): [Ref<T>, (value: T) => T] {
  const state = ref(initialState) as Ref<T>
  const setState = (value: T): T => {
    state.value = value
    return value
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
  const [resizingMaxWidth, setResizingMaxWidth] = useState<number>(Infinity)
  const [resizingMaxHeight, setResizingMaxHeight] = useState<number>(Infinity)
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
    resizingMaxHeight,
    resizingMaxWidth,
    setEnable,
    setDragging,
    setResizing,
    setResizingHandle,
    setResizingMaxHeight,
    setResizingMaxWidth,
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
  containerProps: ReturnType<typeof initState>
) {
  const {
    width,
    height,
    left,
    top,
    resizingMaxWidth,
    resizingMaxHeight
  } = containerProps
  const { $setWidth, $setHeight, $setTop, $setLeft } = containerProps
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
        max = Math.min(parentWidth.value, resizingMaxWidth.value)
      }
      return max
    }),
    maxHeight: computed(() => {
      let max = Infinity
      if (props.parent) {
        max = Math.min(parentHeight.value, resizingMaxHeight.value)
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
      if (props.disabledW) {
        return width.value
      }
      return $setWidth(
        Math.min(
          limitProps.maxWidth.value,
          Math.max(limitProps.minWidth.value, val)
        )
      )
    },
    setHeight(val: number) {
      if (props.disabledH) {
        return height.value
      }
      return $setHeight(
        Math.min(
          limitProps.maxHeight.value,
          Math.max(limitProps.minHeight.value, val)
        )
      )
    },
    setTop(val: number) {
      if (props.disabledY) {
        return top.value
      }
      return $setTop(
        Math.min(
          limitProps.maxTop.value,
          Math.max(limitProps.minTop.value, val)
        )
      )
    },
    setLeft(val: number) {
      if (props.disabledX) {
        return left.value
      }
      return $setLeft(
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

export function initDraggableContainer(
  containerRef: Ref<HTMLElement | undefined>,
  containerProps: ReturnType<typeof initState>,
  limitProps: ReturnType<typeof initLimitSizeAndMethods>,
  draggable: Ref<boolean>,
  emit: any
) {
  const { left: x, top: y, dragging } = containerProps
  const {
    setDragging,
    setEnable,
    setResizing,
    setResizingHandle
  } = containerProps
  const { setTop, setLeft } = limitProps
  let lstX = 0
  let lstY = 0
  let lstPageX = 0
  let lstPageY = 0
  const _unselect = (e: MouseEvent) => {
    const target = e.target
    if (!containerRef.value?.contains(<Node>target)) {
      setEnable(false)
      setDragging(false)
      setResizing(false)
      setResizingHandle('')
    }
  }
  const handleUp = (e: MouseEvent) => {
    setDragging(false)
    document.documentElement.removeEventListener('mouseup', handleUp)
    document.documentElement.removeEventListener('mousemove', handleDrag)
  }
  const handleDrag = (e: MouseEvent) => {
    if (!(dragging.value && containerRef.value)) return
    const { pageX, pageY } = e
    const deltaX = pageX - lstPageX
    const deltaY = pageY - lstPageY
    emit('dragging', { x: setLeft(lstX + deltaX), y: setTop(lstY + deltaY) })
  }
  const handleDown = (e: MouseEvent) => {
    if (!draggable.value) return
    setDragging(true)
    lstX = x.value
    lstY = y.value
    lstPageX = e.pageX
    lstPageY = e.pageY
    document.documentElement.addEventListener('mousemove', handleDrag)
    document.documentElement.addEventListener('mouseup', handleUp)
  }
  watch(dragging, (cur, pre) => {
    if (!pre && cur) {
      emit('drag-start', { x: x.value, y: y.value })
      setEnable(true)
      setDragging(true)
    } else {
      emit('drag-end', { x: x.value, y: y.value })
      setDragging(false)
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

export function initResizeHandle(
  containerProps: ReturnType<typeof initState>,
  limitProps: ReturnType<typeof initLimitSizeAndMethods>,
  handles: Ref<ResizingHandle[]>,
  resizable: Ref<boolean>,
  parentSize: ReturnType<typeof initParent>,
  emit: any
) {
  const { setWidth, setHeight, setLeft, setTop } = limitProps
  const { width, height, left, top, resizingHandle } = containerProps
  const {
    setResizing,
    setResizingHandle,
    setResizingMaxWidth,
    setResizingMaxHeight
  } = containerProps
  const { parentWidth, parentHeight } = parentSize
  let lstW = 0
  let lstH = 0
  let lstX = 0
  let lstY = 0
  let lstPageX = 0
  let lstPageY = 0
  const resizeHandleDrag = (e: MouseEvent) => {
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
    emit('resizing', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    })
  }
  const resizeHandleUp = (e: MouseEvent) => {
    emit('resize-end', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    })
    setResizingHandle('')
    setResizing(false)
    setResizingMaxWidth(Infinity)
    setResizingMaxHeight(Infinity)
    document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
    document.documentElement.removeEventListener('mouseup', resizeHandleUp)
  }
  const resizeHandleDown = (e: MouseEvent, handleType: ResizingHandle) => {
    if (!resizable.value) return
    e.stopPropagation()
    setResizingHandle(handleType)
    setResizing(true)
    setResizingMaxWidth(
      handleType[1] === 'l'
        ? left.value + width.value
        : parentWidth.value - left.value
    )
    setResizingMaxHeight(
      handleType[0] === 't'
        ? top.value + height.value
        : parentHeight.value - top.value
    )
    lstW = width.value
    lstH = height.value
    lstX = left.value
    lstY = top.value
    lstPageX = e.pageX
    lstPageY = e.pageY
    emit('resize-start', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    })
    document.documentElement.addEventListener('mousemove', resizeHandleDrag)
    document.documentElement.addEventListener('mouseup', resizeHandleUp)
  }
  onUnmounted(() => {
    document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
    document.documentElement.removeEventListener('mousemove', resizeHandleUp)
  })
  const handlesFiltered = computed(() =>
    resizable.value ? filterHandles(handles.value) : []
  )
  return {
    handlesFiltered,
    resizeHandleDown
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
