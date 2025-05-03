import { App } from 'vue'
import ZqsInput from './input.vue'

ZqsInput.install = (app: App): void => {
    app.component(ZqsInput.name || 'zqs-input', ZqsInput)
}

export default ZqsInput