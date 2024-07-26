export default defineEventHandler((event: any) => {
  console.log('[log]New request: ' + getRequestURL(event))
})
