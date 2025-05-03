<script lang="ts">
export default {
  name: 'zqs-alert'
}
</script>
<script lang="ts" setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'

// 定义组件的 props 类型
interface AlertProps {
  type?: 'success' | 'warning' | 'info' | 'error'
  size?: 'small' | 'medium' | 'large'
  message: string
  duration?: number
}

// 定义组件的 props
const props = withDefaults(defineProps<AlertProps>(), {
  type: 'success',
  size: 'medium',
  duration: 3000 
})

// 定义组件的事件
const emit = defineEmits<{
  (event: 'close'): void
}>()

// 控制弹框的显示状态
const visible = ref(true)

// 自动关闭逻辑
onMounted(() => {
  if (props.duration && props.duration > 0) {
    setTimeout(() => {
      close()
    }, props.duration)
  }
})

// 关闭弹框的方法
const close = () => {
  visible.value = false
  emit('close') // 触发关闭事件
}
</script>

<template>
  <transition name="el-fade-in-linear">
    <div
      v-if="visible"
      class="zqs-alert"
      :class="[`zqs-alert--${props.type}`, `zqs-alert-${props.size}`]"
    >
      <div class="zqs-alert__content">{{ props.message }}</div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
/* 基本样式 */
.zqs-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: inline-block;
  text-align: center;
  z-index: 1000;
  padding: 15px 25px;
  font-size: 16px;
}

/* 类型样式 */
.zqs-alert--success {
  background-color: #f0f9eb;
  color: #67c23a;
}

.zqs-alert--warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}

.zqs-alert--info {
  background-color: #f4f4f5;
  color: #909399;
}

.zqs-alert--error {
  background-color: #fef0f0;
  color: #f56c6c;
}

/* 大小样式 */
.zqs-alert-small {
  padding: 10px 20px;
  font-size: 14px;
}

.zqs-alert-medium {
  padding: 15px 25px;
  font-size: 16px;
}

.zqs-alert-large {
  padding: 20px 30px;
  font-size: 18px;
}
</style>