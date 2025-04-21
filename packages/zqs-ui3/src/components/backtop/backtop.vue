<script>
export default {
  name: 'zqs-backTop'
}
</script>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue'

// 定义组件的 props
const props = defineProps({
  target: {
    type: String,
    default: '',
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  right: {
    type: String,
    default: '40px',
  },
  bottom: {
    type: String,
    default: '40px',
  },
})

// 定义组件的事件
const emit = defineEmits(['click'])

// 控制显示状态
const visible = ref(false)
let container = null
let scrollEvent = null

// 初始化容器
const initContainer = () => {
  container = props.target ? document.querySelector(props.target) : window
  if (!container) {
    throw new Error(`Target element ${props.target} not found.`)
  }
}

// 获取滚动位置
const getScrollTop = () => {
  if (container === window) {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
  }
  return container.scrollTop
}

// 设置滚动位置
const setScrollTop = (value) => {
  if (container === window) {
    window.scrollTo(0, value)
  } else {
    container.scrollTop = value
  }
}

// 处理滚动事件
const handleScroll = () => {
  const scrollTop = getScrollTop()
  visible.value = scrollTop >= props.visibilityHeight
}

// 绑定滚动事件
const bindScroll = () => {
  if (!container) return
  scrollEvent = throttle(handleScroll, 100)
  container.addEventListener('scroll', scrollEvent)
  handleScroll() // 初始检查
}

// 解绑滚动事件
const unbindScroll = () => {
  if (container && scrollEvent) {
    container.removeEventListener('scroll', scrollEvent)
  }
}

// 滚动到顶部
const scrollToTop = () => {
  const start = getScrollTop()
  const startTime = Date.now()
  const duration = 500

  const animate = () => {
    const now = Date.now()
    const time = Math.min(now - startTime, duration)
    const progress = time / duration

    const easing =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2

    setScrollTop(start - start * easing)

    if (time < duration) {
      requestAnimationFrame(animate)
    } else {
      setScrollTop(0)
    }
  }

  requestAnimationFrame(animate)
}

// 点击事件
const handleClick = () => {
  scrollToTop()
  emit('click')
}

// 节流函数
const throttle = (fn, delay) => {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}

// 生命周期
onMounted(() => {
  initContainer()
  bindScroll()
})

onBeforeUnmount(() => {
  unbindScroll()
})
</script>

<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="zqs-backtop"
      @click="handleClick"
      :style="{ right: props.right, bottom: props.bottom }"
    >
      <slot>
        <div class="zqs-backtop__content">
          <i class="zqs-icon-caret-top">Top</i>
        </div>
      </slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.zqs-backtop {
  position: fixed;
  background-color: var(--el-bg-color-overlay, #a8cef8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--el-color-primary, #1b81e7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--el-box-shadow-lighter, 0 2px 12px rgba(0, 0, 0, 0.1));
  cursor: pointer;
  z-index: 100;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--el-bg-color, #62a5db);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>