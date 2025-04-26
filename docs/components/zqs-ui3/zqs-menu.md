# zqs-menu

## 基础用法
- 使用 `zqs-menu` 组件可以轻松创建导航菜单，支持多级菜单、样式自定义以及事件绑定。
- 由于固定到页面头部所以暂时无法演示。

## 示例代码

以下是一个使用 `zqs-menu` 组件的示例代码：

```vue
<script setup>
import { ref } from "vue";

const menuData = [
  { text: "首页", link: "/" },
  { text: "关于我", link: "/about" },
  {
    text: "博客",
    subMenu: [
      { text: "技术分享", link: "/tech" },
      { text: "生活随笔", link: "/life" },
    ],
  },
  { text: "项目", link: "/projects" },
];

const currentPath = ref(window.location.pathname || "/");

const handleRouteChange = (path) => {
  currentPath.value = path;
  history.pushState(null, "", path);
};
</script>

<template>
  <zqs-menu 
    :menuList="menuData" 
    align="left" 
    width="100%" 
    height="60px" 
    activeBackgroundColor="#007bff" 
    activeTextColor="#fff" 
    menuBackgroundColor="#f8f9fa"
    @route-change="handleRouteChange"
  />
</template>

<style scoped>
/* 自定义样式 */
</style>
```

## 属性说明

| 属性名                | 类型    | 默认值       | 描述                                                                 |
| --------------------- | ------- | ------------ | -------------------------------------------------------------------- |
| `menuList`            | Array   | `[]`         | 菜单数据，支持多级菜单结构                                           |
| `align`               | String  | `"left"`     | 菜单对齐方式，可选值：`"left"` 或 `"right"`                          |
| `width`               | String  | `"100%"`     | 菜单宽度                                                             |
| `height`              | String  | `"70px"`     | 菜单高度                                                             |
| `activeBackgroundColor` | String | `"#007bff"`  | 激活菜单项的背景颜色                                                 |
| `activeTextColor`     | String  | `"#fff"`     | 激活菜单项的文字颜色                                                 |
| `menuBackgroundColor` | String  | `"#f8f9fa"`  | 菜单背景颜色                                                         |

## 使用方法

1. 在组件中引入 `zqs-menu`。
2. 配置 `menuList` 数据，支持多级菜单。
3. 绑定 `@route-change` 事件以监听菜单点击。

<GiscusComment />