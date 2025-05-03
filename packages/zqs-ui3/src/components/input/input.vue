<script lang="ts">
export default {
  name: "zqs-input",
}
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue'

// 定义组件的 props 类型
interface InputProps {
  type?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  modelValue?: string
}

// 定义组件的 props，并使用 withDefaults 设置默认值
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  name: '',
  modelValue: '',
})

// 定义组件的事件
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

// 处理输入事件
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="zqs-input">
    <input
      class="zqs-input-inner"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :name="props.name"
      :class="{ 'is-disabled': props.disabled }"
      :value="props.modelValue"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.zqs-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .zqs-input-inner {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #0856ec;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>