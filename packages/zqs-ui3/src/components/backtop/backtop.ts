import { App } from 'vue'
import ZqsBackTop from './backtop.vue'

ZqsBackTop.install = (app: App): void => {
  app.component(ZqsBackTop.name || 'zqs-backTop', ZqsBackTop)
}

export default ZqsBackTop