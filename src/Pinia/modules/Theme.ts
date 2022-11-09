//定义关于counter的store
import { defineStore } from 'pinia'

//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
const useTheme = defineStore({
  id: 'ThemeStore',
  state: () => ({
    // 深色主题
    dark: {
      '--text-color': '#111111',
      '--text-color1': '#ffffff',
    },
    // 浅色系主题
    light: {
      '--text-color': '#ffffff',
      '--text-color1': '#000000',
    },
    // 主题方案
    scheme: ['dark', 'light'],
    // 当前主题
    theme: 'light',
  }),
  getters: {
    GetTheme(state: any) {
      return state[state.theme]
    },
  },
  actions: {
    updateTheme(theme: string, message = '主题切换完成') {
      if (this.scheme.includes(theme)) {
        this.theme = theme
        message &&
          uni.showToast({
            title: message,
            icon: 'none',
          })
      } else {
        console.warn(new Error('不存在的主题类型'))
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, //localStorage存储多个key
        paths: ['theme'],
        key: 'theme',
      },
    ],
  },
})

export default useTheme
