function formatTransformVal(tl:string, tt:string) {
  let left = Number(tl.replace('px', ''))
  let top = Number(tt.replace('px', ''))
  return [left, top]
}
export function conflict(top:number, left:number, width:number, height:number, nodes:any, oneself:any) {
  for (const item of nodes) {
    //去除无用text元素及自身dom元素进行对比
    if (item.className !== undefined && !item.className.includes(oneself.className)) {
      const tw = item.offsetWidth
      const th = item.offsetHeight
      // 获取left与right
      const [tl, tt] = formatTransformVal(item.style.left, item.style.top)
      // 左上角与右下角重叠
      const tfAndBr =
        (top >= tt && left >= tl && tt + th > top && tl + tw > left) ||
        (top <= tt && left < tl && top + height > tt && left + width > tl)
      // 右上角与左下角重叠
      const brAndTf =
        (left <= tl && top >= tt && left + width > tl && top < tt + th) ||
        (top < tt && left > tl && top + height > tt && left < tl + tw)
      // 下边与上边重叠
      const bAndT =
        (top <= tt && left >= tl && top + height > tt && left < tl + tw) ||
        (top >= tt && left <= tl && top < tt + th && left > tl + tw)
      // 上边与下边重叠（宽度不一样）
      const tAndB =
        (top <= tt && left >= tl && top + height > tt && left < tl + tw) ||
        (top >= tt && left <= tl && top < tt + th && left > tl + tw)
      // 左边与右边重叠
      const lAndR =
        (left >= tl && top >= tt && left < tl + tw && top < tt + th) ||
        (top > tt && left <= tl && left + width > tl && top < tt + th)
      // 左边与右边重叠（高度不一样）
      const rAndL =
        (top <= tt && left >= tl && top + height > tt && left < tl + tw) ||
        (top >= tt && left <= tl && top < tt + th && left + width > tl)

      // // 如果冲突，就返回状态
      if (tfAndBr || brAndTf || bAndT || tAndB || lAndR || rAndL) {
        return true
      } else {
        return false
      }
    }
  }
}
