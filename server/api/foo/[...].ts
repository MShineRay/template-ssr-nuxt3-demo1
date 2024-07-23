export default defineEventHandler((event: object) => {
  // event.context.path 获取路由路径：'/api/foo/bar/baz'
  // event.context.params._ 获取路由段：'bar/baz'
  return `Default foo handler`
})
