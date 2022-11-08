import Vue from 'vue'

import { getToken } from '@/utils/auth'

export const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

const request = (options: any) => {
  console.log('dwadawd', import.meta.env.VITE_APP_API_BASE_URL)

  let { url, data, method } = options
  return new Promise((reslove, reject) => {
    uni.request({
      url: BASE_URL + url,
      data,
      method,
      header: {
        'content-type': 'application/json',
        Authorization: 'bearer ' + getToken(),
      },
      success: (res) => {
        reslove(res.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export default {
  send: request,
}
