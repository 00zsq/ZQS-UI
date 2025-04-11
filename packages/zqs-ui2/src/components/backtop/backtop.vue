<script>
export default {
  name: "zqs-backTop",
  props: {
    target: {
      type: String,
      default: "",
    },
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    right: {
      type: String,
      default: "40px",
    },
    bottom: {
      type: String,
      default: "40px",
    },
  },
  data() {
    return {
      visible: false,
      container: null,
      scrollEvent: null,
    };
  },
  mounted() {
    this.initContainer();
    this.bindScroll();
  },
  beforeDestroy() {
    this.unbindScroll();
  },
  methods: {
    initContainer() {
      this.container = this.target
        ? document.querySelector(this.target)
        : window;
      if (!this.container) {
        throw new Error(`Target element ${this.target} not found.`);
      }
    },
    bindScroll() {
      if (!this.container) return;
      this.scrollEvent = this.throttle(this.handleScroll, 100);
      this.container.addEventListener("scroll", this.scrollEvent);
      this.handleScroll(); // 初始检查
    },
    unbindScroll() {
      if (this.container && this.scrollEvent) {
        this.container.removeEventListener("scroll", this.scrollEvent);
      }
    },
    getScrollTop() {
      if (this.container === window) {
        return Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
      }
      return this.container.scrollTop;
    },
    setScrollTop(value) {
      if (this.container === window) {
        window.scrollTo(0, value);
      } else {
        this.container.scrollTop = value;
      }
    },
    handleScroll() {
      const scrollTop = this.getScrollTop();
      this.visible = scrollTop >= this.visibilityHeight;
    },
    handleClick() {
      this.scrollToTop();
      this.$emit("click");
    },
    scrollToTop() {
      const start = this.getScrollTop();
      const startTime = Date.now();
      const duration = 500;

      const animate = () => {
        const now = Date.now();
        const time = Math.min(now - startTime, duration);
        const progress = time / duration;

        const easing =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        this.setScrollTop(start - start * easing);

        if (time < duration) {
          requestAnimationFrame(animate);
        } else {
          this.setScrollTop(0);
        }
      };

      requestAnimationFrame(animate);
    },
    throttle(fn, delay) {
      let lastTime = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastTime >= delay) {
          fn.apply(this, args);
          lastTime = now;
        }
      };
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="zqs-backtop"
      @click="handleClick"
      :style="{ right, bottom }"
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