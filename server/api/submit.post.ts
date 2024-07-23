export default defineEventHandler(async (event: object) => {
  const body = await readBody(event)
  return { body }
})
