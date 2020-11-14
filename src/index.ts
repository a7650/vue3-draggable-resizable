import VueDraggableResizable from './components/Vue3DraggableResizable'
import DraggableContainer from './components/DraggableContainer'
import { App, Plugin } from 'vue'

VueDraggableResizable.install = (app: App) => {
  app.component(VueDraggableResizable.name, VueDraggableResizable)
  app.component(DraggableContainer.name, DraggableContainer)
  return app
}

export { default as DraggableContainer } from './components/DraggableContainer'
export default VueDraggableResizable as typeof VueDraggableResizable & Plugin
