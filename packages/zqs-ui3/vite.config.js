import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // 确保资源路径正确
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/components/index.js', // 组件库入口文件
      name: 'ZqsUI3', // 全局变量名称
      fileName: (format) => `zqs-ui3.${format}.js`, // 打包后的文件名
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
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})