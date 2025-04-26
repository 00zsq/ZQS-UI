<script>
export default {
  name: "zqs-card",
}
</script>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "信息卡片", // 卡片标题
  },
  info: {
    type: Array,
    default: () => [
      { label: "姓名", value: "竹秋拾" },
      { label: "身份证号", value: "512131452013141314" },
      { label: "年龄", value: "20" },
      { label: "性别", value: "男" },
    ], // 信息列表
  },
})
</script>

<template>
  <div class="zqs-card">
    <div class="zqs-card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="zqs-card-body">
      <p v-for="(item, index) in info" :key="index">
        <strong>{{ item.label }}：</strong>{{ item.value }}
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.zqs-card {
  display: inline-block;
  width: 40%;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 10px;
}

.zqs-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.zqs-card-header {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.zqs-card-body p {
  margin: 8px 0;
  font-size: 1rem;
  color: #555;
}
</style>