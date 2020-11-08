export function getElSize(el: Element) {
  const style = window.getComputedStyle(el)
  return {
    width: parseFloat(style.getPropertyValue('width')),
    height: parseFloat(style.getPropertyValue('height'))
  }
}
