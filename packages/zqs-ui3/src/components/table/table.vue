<script lang="ts">
export default {
  name: "zqs-table",
}
</script>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

// 定义列的类型
interface Column {
  label: string
  value: string
}

// 定义组件的 props 类型
interface TableProps {
  data: Record<string, any>[]
  columns: Column[]
  width: string
  stript: boolean
}

// 定义组件的 props
const props = defineProps<TableProps>()

// 处理列的值
const columnsValues = ref<string[]>([])
columnsValues.value = props.columns.map(column => column.value)

// 监听 columns 的变化
watch(
  () => props.columns,
  () => {
    columnsValues.value = props.columns.map(column => column.value)
  }
)

// 表格引用
const tableRef = ref<HTMLTableElement | null>(null)

// 设置表格宽度
onMounted(() => {
  if (tableRef.value) {
    tableRef.value.style.width = props.width
  }
})
</script>

<template>
  <table class="zqs-table" ref="tableRef">
    <thead>
      <tr>
        <th v-for="(column, index) in props.columns" :key="index">
          <span>{{ column.label || column.value }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="tr"
        v-for="(item, index) in props.data"
        :key="index"
        :style="(index % 2 !== 0 && props.stript) ? { 'background-color': '#f5f7fa' } : { 'background-color': '#fff' }"
      >
        <td v-for="(value, valueIndex) in columnsValues" :key="valueIndex">
          {{ item[value] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table.zqs-table {
  margin: 0;
  border: none;
  display: table;
  padding: 20px 20px;
  border-spacing: 0;
  border-radius: 10px;

  thead {
    tr {
      border: none;
      background-color: #f6fafc;

      th {
        border: none;
        padding-top: 10px;
        box-sizing: border-box;
        padding-bottom: 10px;
        color: rgb(160, 158, 158);
        text-align: left;
        font-size: 17px;
        padding-left: 10px;
        width: 1px;
      }
    }
  }

  tbody {
    tr.tr {
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #f5f7fa !important;
      }

      td {
        border: none;
        box-sizing: border-box;
        padding: 10px 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        text-align: left;
        color: rgb(160, 158, 158);
        font-size: 15px;
        padding-left: 10px;
      }
    }
  }
}
</style>