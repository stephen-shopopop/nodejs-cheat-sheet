import { status, z } from '../../deps'
import { Status, STATUS_TEXT } from '../../http_status'
import { Handle, Posts, PostsId, PostsList } from './types'

let posts: Posts[] = [
  { id: 1, title: 'My first post', body: 'lorem ipsum', category: 'tag' },
  { id: 2, title: 'My second post', body: 'lorem ipsum', category: 'car' }
]

export function handleAllPosts (): Handle<PostsList> {
  return {
    error: null,
    response: { posts }
  }
}

export function handlePosts (postsId: PostsId['id']): Handle<Posts> {
  /** Validate id */
  if (postsId <= 0) {
    return {
      error: { name: 'postsError', message: 'id must be greater than 0', code: status.INVALID_ARGUMENT }
    }
  }

  const [postsItem] = posts.filter(({ id }) => id === postsId)

  return {
    error: postsItem !== undefined ? null : { name: 'postsError', message: STATUS_TEXT[Status.NotFound], code: status.NOT_FOUND },
    response: postsItem
  }
}

export function handleDeletePosts (postsId: PostsId['id']): Handle<{}> {
  /** Validate id */
  if (postsId <= 0) {
    return {
      error: { name: 'postsError', message: 'id must be greater than 0', code: status.INVALID_ARGUMENT }
    }
  }

  posts = posts.filter(({ id }) => id !== postsId)

  return {
    error: null,
    response: {}
  }
}

export function handleEditPosts (postsEdit: Posts): Handle<Posts | {}> {
  const schema = z
    .object({
      id: z.number().positive(),
      title: z.string().min(5, { message: 'title must be 5 or more characters long' }),
      body: z.string().min(1, { message: 'body must be 1 or more characters long' }),
      category: z.string().min(3, { message: 'category must be 3 or more characters long' })
    })
    .safeParse(postsEdit)

  if (!schema.success) {
    return {
      error: { name: 'postsError', message: schema.error.issues[0].message, code: status.INVALID_ARGUMENT }
    }
  }

  const postsItem = posts.find(({ id }) => id === postsEdit.id)

  if (postsItem !== undefined) {
    postsItem.body = postsEdit.body
    postsItem.category = postsEdit.category
    postsItem.title = postsEdit.title
  }

  return {
    error: postsItem !== undefined ? null : { name: 'postsError', message: STATUS_TEXT[Status.NotFound], code: status.NOT_FOUND },
    response: postsItem ?? {}
  }
}

export function handleAddPosts (postsNew: Posts): Handle<Posts> {
  const schema = z
    .object({
      title: z.string().min(5, { message: 'title must be 5 or more characters long' }),
      body: z.string().min(1, { message: 'body must be 1 or more characters long' }),
      category: z.string().min(3, { message: 'category must be 3 or more characters long' })
    })
    .safeParse(postsNew)

  if (!schema.success) {
    return {
      error: { name: 'postsError', message: schema.error.issues[0].message, code: status.INVALID_ARGUMENT }
    }
  }

  const postsItem = { ...postsNew, id: (Date.now() / 1000) }
  posts.push(postsItem)

  return {
    error: null,
    response: postsItem
  }
}
