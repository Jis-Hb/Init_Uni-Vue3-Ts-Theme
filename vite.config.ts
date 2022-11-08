import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import path = require('path')

export default defineConfig(({ command, mode }) => {
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd())

  return {
    plugins: [uni()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'src/pages'),
      },
    },
    define: {
      'process.env': env,
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      // 请求代理
      proxy: {
        '/dev': {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          // 路径重写，去掉/dev
          rewrite: (path) => path.replace(/^\/dev/, ''),
        },
      },
    },
    build: {
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      // minify默认esbuild，esbuild模式下terserOptions将失效
      // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
          drop_debugger: true, // 去除 debugger
        },
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
  }
})
