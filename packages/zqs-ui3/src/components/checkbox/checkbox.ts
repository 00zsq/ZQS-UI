import { App } from 'vue'
import ZqsCheckbox from './checkbox.vue'

ZqsCheckbox.install = (app: App): void => {
    app.component(ZqsCheckbox.name || 'zqs-checkbox', ZqsCheckbox)
}

export default ZqsCheckbox
