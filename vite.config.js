// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://fandom-k-api.vercel.app/12-3',  // 실제 API 서버의 주소
        changeOrigin: true,  // 요청의 origin을 API 서버에 맞게 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // /api 경로를 제거하고 요청을 보냄
      },
    },
  },
  plugins: [react()],
});

