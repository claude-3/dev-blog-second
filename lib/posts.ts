import { getClient } from './funcContentful'

export const getAllPostsData = async () => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
  })
  return res.items
}

export const getNewPostsData = async () => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
    limit: 6,
  })
  return res.items
}

export const getCategoryPostsData = async (cateSlug: string) => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': cateSlug,
    limit: 6,
  })
  return res.items
}
