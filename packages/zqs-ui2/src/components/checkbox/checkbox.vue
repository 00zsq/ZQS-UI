<script>
export default {
  name: "zqs-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return; // 禁用时不执行任何操作
      }
      this.$emit("input", !this.value); // 更新父组件的值
    },
  },
};
</script>

<template>
  <label
    class="zqs-checkbox"
    :class="[
      { 'is-checked': value },
      { 'is-disabled': disabled },
    ]"
  >
    <span class="zqs-checkbox-input">
      <span class="zqs-checkbox-inner"></span>
      <input
        type="checkbox"
        class="zqs-checkbox-original"
        :checked="value"
        @click="handleClick"
      />
    </span>
    <span class="zqs-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<style lang="scss" scoped>
/* 样式保持不变 */
.zqs-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .zqs-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .zqs-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);

      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .zqs-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }

  .zqs-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.zqs-checkbox.is-checked {
  .zqs-checkbox-input {
    .zqs-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
    }

    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .zqs-checkbox-label {
    color: #409eff;
  }
}

/* 禁用的样式 */
.zqs-checkbox.is-disabled {
  .zqs-checkbox-input {
    .zqs-checkbox-inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .zqs-checkbox-label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>