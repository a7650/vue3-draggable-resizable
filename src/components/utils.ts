import { ResizingHandle, ALL_HANDLES } from './vue3-draggable-resizable'

export function getElSize(el: Element) {
  const style = window.getComputedStyle(el)
  return {
    width: parseFloat(style.getPropertyValue('width')),
    height: parseFloat(style.getPropertyValue('height'))
  }
}

export function filterHandles(handles: ResizingHandle[]) {
  return [...new Set([...handles].filter((i) => ALL_HANDLES.includes(i)))]
}
