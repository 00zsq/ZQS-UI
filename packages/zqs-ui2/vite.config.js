import { defineConfig } from 'vite';
import  { createVuePlugin } from 'vite-plugin-vue2'; // 解决了问题

export default defineConfig({
  base: './',
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: './src/components/index.js', // 组件库入口文件
      name: 'ZqsUI2',
      fileName: (format) => `zqs-ui2.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 排除 Vue，避免重复打包
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js', // 使用完整版 Vue 2
      '@': '/src', // 简化路径
    },
  },
});