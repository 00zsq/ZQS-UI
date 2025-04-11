<script setup>
import { ref } from 'vue';

const selectedValue = ref("");
const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];
</script>

<template>
  <div>
    <zqs-select v-model="selectedValue">
      <zqs-option
        v-for="option in options"
        :label="option.label"
        :key="option.value"
        :value="option.value"
      />
    </zqs-select>
    <p>选中的值：{{ selectedValue }}</p>
  </div>
</template>

<style scoped>
</style>
