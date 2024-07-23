export default defineEventHandler((event: object) => {
  const cookies = parseCookies(event)

  return { cookies }
})
