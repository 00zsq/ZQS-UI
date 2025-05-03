<script lang="ts">
export default {
  name: "zqs-card",
}
</script>

<script lang="ts" setup>
import { defineProps } from 'vue'

// 定义信息项的类型
interface InfoItem {
  label: string
  value: string
}

// 定义组件的 props 类型
interface CardProps {
  title?: string
  info?: InfoItem[]
}

// 定义组件的 props
const props = withDefaults(defineProps<CardProps>(), {
  title: "信息卡片",  
  info: () => [
    { label: "姓名", value: "竹秋拾" },
    { label: "身份证号", value: "512131452013141314" },
    { label: "年龄", value: "20" },
    { label: "性别", value: "男" },
  ],
})
</script>

<template>
  <div class="zqs-card">
    <div class="zqs-card-header">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="zqs-card-body">
      <p
        v-for="(item, index) in (props.info)"
        :key="index"
      >
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