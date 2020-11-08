import VueDraggableResizable from './components/vue3-draggable-resizable'
import { App, Plugin } from 'vue'

VueDraggableResizable.install = (app: App) => {
  app.component(VueDraggableResizable.name, VueDraggableResizable)
  return app
}

export default VueDraggableResizable as typeof VueDraggableResizable & Plugin
