import { getClient } from './funcContentful'

export const getAllPostsData = async () => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: 'fields.publishDate',
  })
  return res.items
}

export const getPostDataBySlug = async (params: any) => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  })
  // res.items : 配列に1つだけオブジェクトが入った状態（なので res.items[0] が該当のオブジェクトになる）
  return res.items[0]
}

export const getPostDataById = async (id: any) => {
  const client = await getClient()
  const res = await client.getEntries({
    content_type: 'blogPost',
    'sys.id': id,
  })
  // res.items : 配列に1つだけオブジェクトが入った状態（なので res.items[0] が該当のオブジェクトになる）
  return res.items[0]
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
