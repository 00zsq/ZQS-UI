<!-- input.vue -->
<script>
export default {
  name: "zqs-input"
}
</script>
<script setup>
const props = defineProps({
    type:{
        type:String,
    },
    placeholder:{
        type:String,
    },
    disabled:{
        type:Boolean,
        default:false,
    },
    name:{
        type:String,
        default:'',
    },
    modelValue:{
        type:String,
        default:'',
    }
})
// console.log(props.modelValue)
// 双向绑定数据逻辑:注意使用 modelValue 和 update:modelValue
const emit = defineEmits(['update:modelValue'])
const handleInput = (e) => {  
    emit('update:modelValue', e.target.value)
}  
</script>
<template>
    <div class="zqs-input">
        <input class="zqs-input-inner" 
        :type="props.type" :placeholder="props.placeholder" :disabled="props.disabled" :name="name"
        :class="[{'is-disabled':props.disabled}]"
        :value="props.modelValue"
        @input='handleInput'
        >
    </div>
</template>

<style lang="scss" scoped>
  .zqs-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .zqs-input-inner{
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
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
 
      &:focus{
        outline: none;
        border-color: #0856ec;
      }
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
</style>