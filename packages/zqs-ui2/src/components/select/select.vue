<script>
export default {
  name: "zqs-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      positionShow: false,
      selectLabel: "Select",
      isEmpty: true,
      isBorder: false,
    };
  },
  provide() {
    return {
      // 响应式
      selectValue: () => this.value, 
      changeSelectValue: this.changeSelectValue,
    };
  },
  watch: {
    value(newValue) {
      this.selectLabel = newValue || "Select";
      this.isEmpty = !newValue;
    },
  },
  methods: {
    changeSelectValue(value, label) {
      if (this.disabled) return;
      this.$emit("input", value);
      this.selectLabel = label || value || "";
      this.isEmpty = false;
    },
    handleClickOutside(event) {
      if (this.$el.contains(event.target)) {
        this.positionShow = true;
        this.isBorder = true;
      } else {
        this.positionShow = false;
        this.isBorder = false;
        this.isEmpty = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<template>
  <div class="zqs-select">
    <input
      type="text"
      :disabled="disabled"
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