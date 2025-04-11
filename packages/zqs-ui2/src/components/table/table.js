import ZqsTable from "./table.vue";

ZqsTable.install = function (Vue) {
  Vue.component(ZqsTable.name, ZqsTable);
};

export default ZqsTable;