import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-yd",
    project: "javascript-react",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: {
      name: "storeapp@1.0.0", // Replace with the method you chose
    },
  })],

  build: {
    sourcemap: true
  }
})