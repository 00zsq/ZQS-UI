<script>
export default {
  name: "zqs-alert",
  props: {
    type: {
      type: String,
      default: "info", // 类型：success, warning, info, error
    },
    size: {
      type: String,
      default: "medium", // 弹框大小：small, medium, large
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    message: {
      type: String,
      required: true, // 提示内容
    },
    duration: {
      type: Number,
      default: 3000, // 自动关闭时间，单位毫秒
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    // 自动关闭
    setTimeout(() => {
      this.close();
    }, this.duration);
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="el-fade-in-linear">
    <div
      v-if="visible"
      class="zqs-alert"
      :class="[`zqs-alert--${type}`, `zqs-alert-${size}`]"
    >
      <div class="zqs-alert__content">{{ message }}</div>
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