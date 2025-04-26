<script>
  export default {
    name: "zqs-menu",
  }
</script>

<script setup>
import { ref, provide, reactive, onMounted } from "vue"

const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
  align: {
    type: String,
    default: "left",
    validator: (v) => ["left", "right"].includes(v),
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "70px",
  },
  activeBackgroundColor: {
    type: String,
    default: "#007bff",
  },
  activeTextColor: {
    type: String,
    default: "#fff",
  },
  menuBackgroundColor: {
    type: String,
    default: "#f8f9fa",
  },
})

// 使用 reactive 来确保菜单状态是响应式的
const menuState = reactive({
  items: props.menuList.map(item => ({
    ...item,
    showSubMenu: false
  }))
})

// 从localStorage读取之前选中的菜单项
const currentMenuValue = ref("")
const emit = defineEmits(['route-change'])

// 初始化时加载保存的选中项
onMounted(() => {
  const savedMenuItem = localStorage.getItem("selectedMenu") || props.menuList[0].text
  if (savedMenuItem) {
    currentMenuValue.value = savedMenuItem
  }
})

const changeMenuValue = (value, parentText = null, route = null) => {
  currentMenuValue.value = value
  
  if (parentText) {
    localStorage.setItem("parentMenuText", parentText)
  } else {
    localStorage.removeItem("parentMenuText")
  }
  
  localStorage.setItem("selectedMenu", value)
  
  // 如果提供了路由路径，则发出路由变更事件
  if (route) {
    emit('route-change', route)
  }
}

// 父菜单文本
const parentMenuText = ref("")

// 初始化时加载父菜单项
onMounted(() => {
  const savedParentMenu = localStorage.getItem("parentMenuText")
  if (savedParentMenu) {
    parentMenuText.value = savedParentMenu
  }
})

// 控制下拉菜单的显示和隐藏
const toggleSubMenu = (index, show) => {
  menuState.items[index].showSubMenu = show
}

// 处理点击事件
const handleItemClick = (item, index) => {
  changeMenuValue(item.text, null, item.link)
  if (item.subMenu) {
    menuState.items[index].showSubMenu = !menuState.items[index].showSubMenu
  }
}
// 判断菜单项是否应该高亮
const isMenuHighlighted = (item) => {
  return currentMenuValue.value === item.text || parentMenuText.value === item.text
}

provide("currentMenuValue", currentMenuValue)
provide("changeMenuValue", changeMenuValue)
</script>

<template>
  <div class="zqs-menu" :class="`align-${props.align}`" :style="{
    backgroundColor: props.menuBackgroundColor,
    width: props.width,
    height: props.height
  }">
    <ul class="menu-list">
      <li v-for="(item, index) in menuState.items" :key="index" class="menu-item">
        <template v-if="item.subMenu">
          <div class="menu-item-wrapper" @mouseenter="toggleSubMenu(index, true)"
            @mouseleave="toggleSubMenu(index, false)">
            <div class="menu-item-content" @click="handleItemClick(item, index)"
              :class="{ 'is-selected': isMenuHighlighted(item) }" :style="isMenuHighlighted(item) ? {
                color: props.activeTextColor,
                backgroundColor: props.activeBackgroundColor
              } : {}">
              <span>{{ item.text }}</span>
              <span class="arrow-down">▼</span>
            </div>
            <ul v-show="item.showSubMenu" class="sub-menu">
              <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" class="sub-menu-item">
                <a :href="subItem.link" @click="changeMenuValue(subItem.text, item.text)"
                  :class="{ 'is-selected-sub': currentMenuValue === subItem.text }">
                  {{ subItem.text }}
                </a>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <a :href="item.link" @click="changeMenuValue(item.text)"
            :class="{ 'is-selected': currentMenuValue === item.text }" :style="currentMenuValue === item.text ? {
              color: props.activeTextColor,
              backgroundColor: props.activeBackgroundColor
            } : {}">
            {{ item.text }}
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 主菜单样式 */
* {
  margin: 0;
  padding: 0;
}

.zqs-menu {
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ddd;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.9);
}

.zqs-menu.align-right {
  justify-content: flex-end;
}

.menu-list {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  text-align: center;
}

/* 菜单项容器样式 */
.menu-item-wrapper {
  position: relative;
}

/* 菜单项内容样式 */
.menu-item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 12px;
  transition: background 0.3s, color 0.3s;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color, #333);
}

.menu-item-content:hover {
  background-color: #f5f5f5;
}

.menu-item-content.is-selected {
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 下箭头样式 */
.arrow-down {
  font-size: 10px;
  margin-left: 5px;
  transition: transform 0.3s;
}

.menu-item-content:hover .arrow-down {
  transform: rotate(180deg);
}

/* 链接样式 */
a {
  text-decoration: none;
  color: var(--text-color, #333);
  padding: 8px 12px;
  border-radius: 12px;
  transition: background 0.3s, color 0.3s;
  font-size: 16px;
  font-weight: 500;
  display: block;
}

a:hover {
  background-color: #f5f5f5;
}

a.is-selected {
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 子菜单选中项样式*/
a.is-selected-sub {
  font-weight: 700;
}

/* 子菜单样式 */
.sub-menu {
  position: absolute;
  top: 100%;
  min-width: 120px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  z-index: 1001;
  padding: 8px 0;
  animation: slideDown 0.2s ease-out;
  list-style-type: none;
}

.sub-menu-item {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sub-menu-item::before {
  display: none;
}

.sub-menu-item a {
  display: block;
  padding: 8px 16px;
  text-align: center;
}

.sub-menu-item:hover {
  background-color: #f5f5f5;
}

/* 动画效果 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式支持 */
@media (max-width: 768px) {
  .menu-list {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>