import { createVNode, render, VNode } from 'vue'
import AlertComponent from './alert.vue'

// 定义 Alert 的选项类型
interface AlertOptions {
  type?: 'success' | 'warning' | 'info' | 'error'
  size?: 'small' | 'medium' | 'large'
  message: string
  duration?: number
  [key: string]: any 
}

// 定义 Alert 实例类型
interface AlertInstance {
  close: () => void
}

const ZqsAlertConstructor = (options: AlertOptions): AlertInstance => {
  const container = document.createElement('div')
  const vm: VNode = createVNode(AlertComponent, options)
  render(vm, container)
  document.body.appendChild(container.firstElementChild!)

  return {
    close: () => {
      render(null, container)
      if (container.firstElementChild) {
        document.body.removeChild(container.firstElementChild)
      }
    }
  }
}

export default ZqsAlertConstructor