import { createVNode, render } from 'vue'
import AlertComponent from './alert.vue'

const ZqsAlertConstructor = (options) => {
  const container = document.createElement('div')
  const vm = createVNode(AlertComponent, options)
  render(vm, container)
  document.body.appendChild(container.firstElementChild)

  return {
    close: () => {
      render(null, container)
      document.body.removeChild(container.firstElementChild)
    }
  }
}

export default ZqsAlertConstructor