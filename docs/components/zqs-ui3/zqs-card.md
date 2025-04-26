---  
outline: deep  
---  

# zqs-card  

## 基础用法  
使用 `cardtitle` 和 `info` 属性来定义卡片的标题和信息内容。  

<zqs-card cardtitle="用户信息" :info="[{ label: '姓名', value: '竹秋拾' }, { label: '身份证号', value: '512131452013141314' }, { label: '年龄', value: '20' }, { label: '性别', value: '男' }]"></zqs-card>  

## 示例代码  

以下是一个使用 `zqs-card` 组件的示例代码：  

```vue  
<script setup>  
const cardInfo = [  
  { label: "姓名", value: "竹秋拾" },  
  { label: "身份证号", value: "512131452013141314" },  
  { label: "年龄", value: "20" },  
  { label: "性别", value: "男" },  
];  
</script>  

<template>  
  <zqs-card cardtitle="用户信息" :info="cardInfo" />  
</template>  

<style scoped></style>  
```  

## 属性说明  

| 属性名      | 类型    | 默认值      | 描述                     |  
| ----------- | ------- | ----------- | ------------------------ |  
| `cardtitle` | String  | `"信息卡片"`| 卡片的标题               |  
| `info`      | Array   | `[]`        | 信息列表，包含 `label` 和 `value` 键值对 |  

## 使用方法  

1. 在组件中引入 `zqs-card`。  
2. 配置所需的属性，例如 `cardtitle` 和 `info`。  
3. 渲染卡片内容即可展示信息列表。  

<GiscusComment />  