export default defineEventHandler((event: any) => {
  console.log('[auth]')
  event.context.auth = { user: 123 }
})
