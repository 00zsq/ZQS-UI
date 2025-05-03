import { App } from 'vue'
import ZqsSelect from './select.vue'

ZqsSelect.install = (app: App): void => {
    app.component(ZqsSelect.name || 'zqs-select', ZqsSelect)
}

export default ZqsSelect