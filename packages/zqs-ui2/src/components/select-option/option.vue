<script>
export default {
  name: "zqs-option",
  props: {
    label: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    customKey: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ["selectValue", "changeSelectValue"],
  computed: {
    isSelected() {
      return this.selectValue() === this.value;
    }
  },
  mounted() {
    if (this.value === this.selectValue) {
      this.changeSelectValue(this.value, this.label);
    }
  },
  methods: {
    changeOptionValue() {
      this.changeSelectValue(this.value, this.label);
    },
  },
};
</script>

<template>
  <div
    :key="customKey"
    @click="changeOptionValue"
    :class="{ 'is-selected': isSelected }"
  >
    {{ label || value || "" }}
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  padding-left: 20px;
  cursor: pointer;
  font-size: 15px;
}
div.is-selected {
  color: #275ecc;
  font-weight: bold;
  background-color: rgb(240, 240, 240);
}

div:hover {
  box-sizing: border-box;
  background-color: rgb(240, 240, 240);
}
</style>