const fs = require('fs')
const contentful = require('contentful')
require('dotenv').config()

const getContentfuldata = async () => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || '',
  })
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  })

  return res.items
}

const createJSONdata = async () => {
  const contents = await getContentfuldata()
  const JSONdata = JSON.stringify(contents, null, 2)
  fs.writeFileSync('data/contentful.json', JSONdata)
}

createJSONdata()
