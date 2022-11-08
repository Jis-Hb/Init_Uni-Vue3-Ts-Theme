//定义关于counter的store
import { defineStore } from 'pinia'

//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
const useUser = defineStore({
  id: 'UserStore',
  state: () => ({
    token: '123',
  }),
  getters: {},
  actions: {
    Login(User: any, Config: any) {
      return new Promise((resolve, reject) => {})
    },
  },
  persist: {
    enabled: true,
    detached: true,
  },
})

export default useUser
