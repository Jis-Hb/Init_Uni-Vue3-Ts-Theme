import Http from '@/Server/index'

export const AppUpgrade = (data: any) => {
  return Http.send({
    url: 'users/login',
    method: 'post',
    data,
  })
}
