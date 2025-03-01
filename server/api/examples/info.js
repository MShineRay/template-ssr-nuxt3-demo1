import examples from '~/assets/data/examples.js'
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await examples.info(query.id, query.timeout)
})
