import { createContext } from 'react'

type ContentfulPostType = {
  metadata: {
    tags: Array<string>
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    revision: number
    contentType: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    locale: string
  }
  fields: {
    title: string
    slug: string
    eyecatch: {
      metadata: {
        tags: Array<string>
      }
      sys: {
        space: {
          sys: {
            type: string
            linkType: string
            id: string
          }
        }
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: {
          sys: {
            id: string
            type: string
            linkType: string
          }
        }
        revision: number
        locale: string
      }
      fields: {
        title: string
        description: string
        file: {
          url: string
          details: {
            size: number
            image: {
              width: number
              height: number
            }
          }
          fileName: string
          contentType: string
        }
      }
    }
    publishDate: string
    content: string
    category: [
      {
        metadata: {
          tags: Array<string>
        }
        sys: {
          space: {
            sys: {
              type: string
              linkType: string
              id: string
            }
          }
          id: string
          type: string
          createdAt: string
          updatedAt: string
          environment: {
            sys: {
              id: string
              type: string
              linkType: string
            }
          }
          revision: number
          contentType: {
            sys: {
              type: string
              linkType: string
              id: string
            }
          }
          locale: string
        }
        fields: {
          category: string
          categorySlug: string
        }
      }
    ]
  }
}

type ContentfulType = {
  contentful: ContentfulPostType[]
}

export const ContentfulContext = createContext<any>({
  contentful: [],
})
