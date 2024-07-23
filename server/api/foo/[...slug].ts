export default defineEventHandler((event: object) => {
  // event.context.params.slug 获取路由段：'bar/baz'
  return `Default foo handler`
})
