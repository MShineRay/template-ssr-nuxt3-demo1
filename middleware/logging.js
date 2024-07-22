/**
 * 命名路由中间件，放置在 middleware/ 目录下，并在页面上使用时通过异步导入自动加载。
 */
console.log('logging.js')
export default defineNuxtRouteMiddleware((to, from) => {
  to.query.reqTime = Date.now()
  to.meta.fromUrl = from.fullPath
})
