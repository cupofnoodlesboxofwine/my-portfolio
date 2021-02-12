const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'a6uw0czk',
  dataset: 'production'
})

export default client
