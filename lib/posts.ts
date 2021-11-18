import { getClient } from './funcContentful'

export const getAllPostsData = async () => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
  })
  return res.items
}

export const getNewPostsData = async (limit = 6, skip = 0) => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
    limit: limit,
    skip: skip,
  })
  return res.items
}

export const getCategoryPostsData = async (
  cateSlug: string,
  limit = 6,
  skip = 0
) => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': cateSlug,
    limit: limit,
    skip: skip,
  })
  return res.items
}
