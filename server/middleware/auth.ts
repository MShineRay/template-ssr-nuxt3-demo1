// @ts-ignore
export default defineEventHandler((event) => {
  console.log('[auth]')
  event.context.auth = { user: 123 }
})
