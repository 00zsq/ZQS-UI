<script>
export default {
  data() {
    return {
      tableHeader: [
        {
          value: 'id',
          label: 'ID',
        },
        {
          value: 'name',
          label: '姓名',
        },
        {
          value: 'age',
          label: '年龄',
        },
        {
          value: 'gender',
          label: '性别',
        },
        {
          value: 'address',
          label: '住址',
        },
      ],
      tableData: [
        {
          id: 1,
          name: '张三',
          age: 18,
          gender: '男',
          address: '北京市朝阳区',
        }
      ], // 假设你会动态填充数据
    };
  },
};
</script>

<template>
  <zqs-table :data="tableData" :columns="tableHeader" width="800px"></zqs-table>
</template>

<style scoped>
</style>