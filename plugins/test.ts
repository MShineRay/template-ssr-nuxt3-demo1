/**
 * 应用程序钩子（运行时）
 * 应用程序钩子主要由Nuxt插件用于挂接渲染生命周期，但也可在Vue组合式中使用。
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    /* 在这里写入你的代码 */
    console.log('hook page:start')
  })
})
