import ZqsTable from './table.vue'

ZqsTable.install = app => {
    app.component(ZqsTable.name, ZqsTable)
}

export default ZqsTable