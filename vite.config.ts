import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) =>   {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      css: true,
    },
    base: '/utils',
    plugins: [react()],
  }
})
