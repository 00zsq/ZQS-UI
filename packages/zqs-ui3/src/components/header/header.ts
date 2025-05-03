import { App } from "vue"
import ZqsHeader from "./header.vue"

ZqsHeader.install = (app: App): void => {
  app.component(ZqsHeader.name || 'zqs-header', ZqsHeader)
}

export default ZqsHeader