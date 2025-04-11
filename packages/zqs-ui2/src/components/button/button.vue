<script>
export default {
  name: "zqs-button",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button
    @click="handleClick"
    class="zqs-button"
    :class="[
      `zqs-button-${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
      `zqs-button-${size}`
    ]"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
/* 样式保持不变 */
.zqs-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 10px;

  &:hover,
  &:hover {
    color: #0856ec;
    border-color: #0856ec;
  }
}

.zqs-button-small {
    padding: 10px 15px;
    font-size: 12px;
}

.zqs-button-medium {
    padding: 12px 20px;
    font-size: 14px;
}

.zqs-button-large {
    padding: 16px 24px;
    font-size: 16px;
}

.zqs-button.is-circle.zqs-button-small {
    border-radius: 50%;
    padding: 12px;
}

.zqs-button.is-circle.zqs-button-medium {
    border-radius: 50%;
    padding: 16px;
    padding: 16px;
}

.zqs-button.is-circle.zqs-button-large {
    border-radius: 50%;
    padding: 20px;
    font-size: 18px;
}

/* round样式 */
.zqs-button.is-round {
    border-radius: 30px;
}
 
/* disable */
.zqs-button.is-disabled {
    cursor: no-drop;
    background: #f5f5f5;
    border-color: #f5f5f5;
    color: #c0c4cc;

}

.zqs-button-success.is-disabled {
    cursor: no-drop;
    background-color: #72c8b5;
    border-color: #72c8b5;
    color: #fff;
}

.zqs-button-info.is-disabled {
    cursor: no-drop;
    border-color: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;

}

.zqs-button-warning.is-disabled {
    cursor: no-drop;
    background-color: #ebb563;
    border-color: #ebb563;
    color: #fff;

}

.zqs-button-danger.is-disabled {
    cursor: no-drop;
    border-color: #f78989;
    background-color: #f78989;
    color: #fff;

}

.zqs-button-primary.is-disabled {
    cursor: no-drop;
    background-color: #4e84e9;
    border-color: #4e84e9;
    color: #fff;
}

/* type样式 */
.zqs-button-primary {
    color: #fff;
    background-color: #0856ec;
    border-color: #0856ec;

    &:hover,
    &:focus {
        background-color: #4e84e9;
        border-color: #4e84e9;
        color: #fff;
    }
}


.zqs-button-success {
    color: #fff;
    background-color: #27bb9a;
    border-color: #27bb9a;

    &:hover,
    &:focus {
        background-color: #72c8b5;
        border-color: #72c8b5;
        color: #fff;
    }
}


.zqs-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        border-color: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}


.zqs-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background-color: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}


.zqs-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        border-color: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}


/* plain样式 */
.zqs-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #489eff;
        color: #0856ec;
    }
}

.zqs-button-primary.is-plain {
    color: #2e80cb;
    background: #d4e4fe;
    border-color: #d4e4fe;

    &:hover,
    &:focus {
        background: #0856ec;
        color: #fff;
    }
}

.zqs-button-success.is-plain {
    color: #0f877b;
    background-color: #a1dbce;
    border-color: #c2e7b0;

    &:hover,
    &:focus {
        color: #fff;
        background-color: #27bb9a;
        border-color: #27bb9a;
    }
}

.zqs-button-info.is-plain {
    color: #4f5155;
    background: #d3d4d6;
    border-color: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.zqs-button-warning.is-plain {
    color: #b17c2d;
    background: #f5dab1;
    border-color: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.zqs-button-danger.is-plain {
    color: #dd3434;
    background: #fbc4c4;
    border-color: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}
</style>