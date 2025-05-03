<script lang="ts">
export default {
  name: "zqs-select",
}
</script>

<script lang="ts" setup>
import { ref, provide, watch, defineProps, defineEmits } from 'vue'

// 定义组件的 props 类型
interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  options: SelectOption[]
  modelValue: string
  disabled: boolean
}

// 定义组件的 props
const props = defineProps<SelectProps>()

// 定义组件的事件
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

// 控制下拉框显示状态
const positionShow = ref(false)

// 输入框的显示文本
const selectLabel = ref('Select')

// 是否为空状态
const isEmpty = ref(true)

// 是否显示边框高亮
const isBorder = ref(false)

// 自定义指令：点击外部关闭下拉框
const vClickOutside = {
  beforeMount(el: HTMLElement) {
    document.addEventListener('click', (e) => {
      if (el.contains(e.target as Node)) {
        positionShow.value = true
        isBorder.value = true
      } else {
        positionShow.value = false
        isBorder.value = false
        isEmpty.value = false
      }
    })
  },
}

// 更改选中值的方法
const changeSelectValue = (value: string, label?: string) => {
  if (props.disabled) return
  emit('update:modelValue', value)
  selectLabel.value = label || value || ''
  isEmpty.value = false
}

// 传递响应式数据
const modelValue2 = ref(props.modelValue)
watch(() => props.modelValue, () => {
  modelValue2.value = props.modelValue
})
provide('selectValue', modelValue2)
provide('changeSelectValue', changeSelectValue)
</script>

<template>
  <div class="zqs-select" v-clickOutside>
    <input
      type="text"
      :disabled="props.disabled"
      :value="selectLabel"
      readonly
      :style="{ color: isEmpty ? 'silver' : 'black' }"
      :class="{ border: isBorder }"
    />

    <transition name="slide-fade">
      <div class="zqs-position-box" v-show="positionShow">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.zqs-select {
  min-width: 200px;
  box-sizing: border-box;
  display: inline-block;
  height: 40px;
  position: relative;

  input {
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid silver;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    font-size: 16px;
  }

  input.border {
    border: 1px solid #0856ec;
  }

  .zqs-position-box {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    overflow: hidden;
    z-index: 9999;
    position: absolute;
    top: 48px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  }
}

.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>