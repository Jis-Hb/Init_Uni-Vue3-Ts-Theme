<script setup lang="ts">
import { onLaunch, onShow, onHide, onThemeChange } from '@dcloudio/uni-app'
import useTheme from '@/Pinia/modules/Theme'
const Theme = useTheme()

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onThemeChange(() => {
  uni.onThemeChange(function (res) {
    Theme.theme = res.theme
  })
})

onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
/* #ifdef APP-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */

/* #ifndef APP-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */
</style>
