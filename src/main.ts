import { createSSRApp } from 'vue'
import Pinia from '@/Pinia'
import tmui from './tmui'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia)
  app.use(tmui)
  return {
    app,
  }
}
