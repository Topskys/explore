/*
 * @Author: Topskys
 * @Date: 2022-12-01 17:18:13
 * @LastEditTime: 2022-12-01 22:19:28
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
