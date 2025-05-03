import { App } from 'vue'
import ZqsMenu from './menu.vue'

ZqsMenu.install = (app: App): void => {
  app.component(ZqsMenu.name || 'zqs-menu', ZqsMenu)
}

export default ZqsMenu