/**
 * 全局路由中间件，放置在 middleware/ 目录下，并以 .global 后缀结尾，在每次路由更改时运行。
 */
console.log('layout.global.js')
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath.indexOf('/component/dynamic') === 0) {
    setPageLayout('custom-first')
  }
})
