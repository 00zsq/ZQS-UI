<script>
export default {
  name: "zqs-header",
  props: {
    logo: {
      type: String,
      required: true, // 左侧 Logo 图片路径
    },
    systemName: {
      type: String,
      required: true, // 系统名称
    },
    avatar: {
      type: String,
      required: true, // 右侧头像图片路径
    },
    username: {
      type: String,
      required: true, // 用户名
    },
  },
  methods: {
    handleLogout() {
      this.$emit("logout"); // 触发父组件的登出事件
    },
  },
};
</script>

<template>
  <header class="zqs-header">
    <!-- 左侧 Logo 和系统名称 -->
    <div class="left">
      <img :src="logo" alt="Logo" class="logo" />
      <span class="system-name">{{ systemName }}</span>
    </div>

    <!-- 右侧头像和用户名 -->
    <div class="right">
      <img :src="avatar" alt="Avatar" class="avatar" />
      <span class="username">{{ username }}</span>
      <button class="logout-button" @click="handleLogout">退出登录</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
/* 顶部导航栏样式 */
.zqs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #409eff;
  color: white;
  padding: 0 20px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* 左侧 Logo 和系统名称 */
  .left {
    display: flex;
    align-items: center;

    .logo {
      height: 40px;
      width: 40px;
      margin-right: 10px;
      border-radius: 50%;
      object-fit: cover;
    }

    .system-name {
      font-size: 20px;
      font-weight: bold;
    }
  }

  /* 右侧头像和用户名 */
  .right {
    display: flex;
    align-items: center;

    .avatar {
      height: 40px;
      width: 40px;
      margin-right: 8px;
      border-radius: 50%;
      object-fit: cover;
    }

    .username {
      margin-right: 10px;
      font-size: 18px;
    }

    /* 退出登录按钮 */
    .logout-button {
      background-color: #409eff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #2b7dcf;
      }
    }
  }
}
</style>