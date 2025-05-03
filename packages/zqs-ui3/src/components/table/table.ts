import { App } from 'vue'
import ZqsTable from './table.vue'

ZqsTable.install = (app: App): void => {
    app.component(ZqsTable.name || 'zqs-table', ZqsTable)
}

export default ZqsTable