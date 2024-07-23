export default defineEventHandler((event: object) => {
  const query = getQuery(event)

  return { a: query.foo, b: query.baz }
})
