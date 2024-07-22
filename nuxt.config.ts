import headConfig from './assets/data/head.js'
const baseURL = '/'
// @ts-ignore
export default defineNuxtConfig({
  // routeRules: {},
  css: [
    '~/assets/css/app.scss',
    // 'bootstrap/dist/css/bootstrap.min.css',
    // 'bootstrap-icons/font/bootstrap-icons.scss',
    'ant-design-vue/dist/antd.css',
  ],
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
  app: {
    baseURL,

    pageTransition: { name: 'page', mode: 'out-in' },

    layoutTransition: { name: 'rotate', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: headConfig.data.title,
      htmlAttrs: {
        lang: 'zh',
      },
      meta: [
        { name: 'content-type', content: 'text/html;charset=utf-8' },
        { name: 'keywords', content: headConfig.data.keywords },
        { name: 'description', content: headConfig.data.description },
        { ['http-equiv']: 'x-ua-compatible', content: 'ie=edge,chrome=1' },
        { name: 'baidu-site-verification', content: '' },
        { property: 'og:title', content: headConfig.data.title },
        { property: 'og:keywords', content: headConfig.data.keywords },
        { property: 'og:description', content: headConfig.data.description },
      ],
      link: [
        { rel: 'shortcut icon', href: baseURL + 'favicon.ico', type: 'image/x-icon' },
        { rel: 'stylesheet', href: '/resource/css/resource.css' },
        /* 客户端引用bootstrap方式，不推荐
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css', integrity: 'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css', integrity: '', crossorigin: 'anonymous' },
        */
      ],
      script: [
        /* 客户端引用bootstrap方式，不推荐；在script和link中，使用body: true配置将其添加到body里最后元素
        { body: true, src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity: 'sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin: 'anonymous' },
        { body: true, src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js', integrity: 'sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk', crossorigin: 'anonymous' },
        */
      ],
    },
  },
  // 如果您希望仅根据组件名称而不是路径自动导入组件，则需要使用扩展形式的配置对象将 pathPrefix 选项设置为false
  // 这将使用与 Nuxt 2 中使用的相同策略注册组件。
  // 例如，~/components/Some/MyComponent.vue 将可用作 <MyComponent> 而不是 <SomeMyComponent>。
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],

  // 虽然不推荐，但您可以全局注册所有组件，这将为所有组件创建异步块，并使它们在整个应用程序中可用。
  // 您还可以通过将它们放置在 ~/components/global 目录中来有选择地全局注册一些组件。
  // global 选项也可以针对每个组件目录进行设置。
  // components: [
  //   {
  //     global: true,
  //     dirs: ['~/components/global'],
  //   },
  // ],
  imports: {
    // dirs: ['composables/**'],
    dirs: [
      // 扫描顶级模块
      // 'composables',
      // ... 或扫描带有特定名称和文件扩展名的一级嵌套模块
      // 'composables/*/index.{ts,js,mjs,mts}',
      // ... 或扫描给定目录中的所有模块
      'composables/**',
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/css/variable.scss";',
        },
      },
    },
  },
})
