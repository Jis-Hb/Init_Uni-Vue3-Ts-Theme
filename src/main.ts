import { createSSRApp } from 'vue'
import Pinia from '@/Pinia'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia)
  return {
    app,
  }
}
