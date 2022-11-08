const TokenKey = 'Uni-App-Token'

export function setToken(token: string) {
  return uni.setStorageSync(TokenKey, token)
}

export function getToken() {
  return uni.getStorageSync(TokenKey)
}
export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}
