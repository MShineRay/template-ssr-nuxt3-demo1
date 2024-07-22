// @ts-ignore
export default defineEventHandler((event) => {
  console.log('[log]New request: ' + getRequestURL(event))
})
