import { App } from 'vue'
import ZqsSelectOption from './option.vue'

ZqsSelectOption.install = (app: App): void => {
    app.component(ZqsSelectOption.name || "zqs-option", ZqsSelectOption)
}

export default ZqsSelectOption