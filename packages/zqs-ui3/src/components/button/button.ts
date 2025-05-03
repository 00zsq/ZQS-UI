import { App } from 'vue'
import ZqsButton from './button.vue'

ZqsButton.install = (app: App): void => {
    app.component(ZqsButton.name || 'zqs-button', ZqsButton)
}
export default ZqsButton