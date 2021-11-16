import { createClient } from 'contentful'

export const getClient: any = async () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || '',
  })
}
