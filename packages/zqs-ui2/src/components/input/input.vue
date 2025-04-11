<script>
export default {
  name: "zqs-input",
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value); // 更新父组件的值
    },
  },
};
</script>

<template>
  <div class="zqs-input">
    <input
      class="zqs-input-inner"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :class="[{ 'is-disabled': disabled }]"
      :value="value"
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