import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  root: './src/pages/',
  publicDir: '../../public',
  base: './',
  plugins: [vue(), vueJSX(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/pages/about/index.html',
        about: './src/pages/about/index.html',
        contact: './src/pages/contact/index.html',
        group: './src/pages/group/index.html',
        news: './src/pages/news/index.html',
        company : './src/pages/company/index.html',
        newsDetail : './src/pages/newsDetail/index.html',
      }
    },
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist/'),
  }
})
