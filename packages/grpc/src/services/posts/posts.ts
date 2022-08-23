import { sqlite } from '../../dal/sqlite'
import { status, z } from '../../deps'
import { Status, STATUS_TEXT } from '../../http_status'
import { Handle, Posts, PostsId, PostsList } from './types'

export async function handleAllPosts (): Promise<Handle<PostsList>> {
  const posts = await sqlite<Posts>('Posts')
    .select()

  return {
    error: null,
    response: { posts }
  }
}

export async function handlePosts (postsId: PostsId['id']): Promise<Handle<Posts>> {
  /** Validate id */
  if (postsId <= 0) {
    return {
      error: { name: 'postsError', message: 'id must be greater than 0', code: status.INVALID_ARGUMENT }
    }
  }

  /** sqlite get post by id */
  const [postsItem] = await sqlite<Posts>('Posts')
    .select()
    .where('id', postsId)

  return {
    error: postsItem !== undefined
      ? null
      : { name: 'postsError', message: STATUS_TEXT[Status.NotFound], code: status.NOT_FOUND },
    response: postsItem
  }
}

export async function handleDeletePosts (postsId: PostsId['id']): Promise<Handle<{}>> {
  /** Validate id */
  if (postsId <= 0) {
    return {
      error: { name: 'postsError', message: 'id must be greater than 0', code: status.INVALID_ARGUMENT }
    }
  }

  /** sqlite delete post */
  await sqlite('Posts')
    .where('id', postsId)
    .del()

  return {
    error: null,
    response: {}
  }
}

export async function handleEditPosts (postsEdit: Posts): Promise<Handle<Posts | {}>> {
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

  /** sqlite update */
  const updated: boolean = Boolean(
    await sqlite<Posts>('Posts')
      .where('id', schema.data.id)
      .update({
        title: schema.data.title,
        body: schema.data.body,
        category: schema.data.category
      })
  )

  return {
    error: updated
      ? null
      : { name: 'postsError', message: STATUS_TEXT[Status.NotFound], code: status.NOT_FOUND },
    response: updated ? schema.data : {}
  }
}

export async function handleAddPosts (postsNew: Posts): Promise<Handle<Posts>> {
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

  /** sqlite insert */
  const [id] = await sqlite('Posts')
    .insert(schema.data)
    .onConflict()
    .ignore()

  const postsItem = { ...schema.data, id }

  return {
    error: null,
    response: postsItem
  }
}
