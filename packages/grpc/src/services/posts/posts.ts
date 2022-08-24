import { status, z } from '../../deps'
import { GrpcError } from '../../grpcError'
import { Status, STATUS_TEXT } from '../../http_status'
import { createPost, deletePosts, getAllPosts, getPosts, updatePosts } from './postsDAL'
import { Posts, PostsId, PostsList } from './types'

export async function handleAllPosts (): Promise<PostsList> {
  return { posts: await getAllPosts() }
}

export async function handlePosts (postsId: PostsId['id']): Promise<Posts> {
  /** Validate id */
  if (postsId <= 0) {
    throw new GrpcError('id must be greater than 0', status.INVALID_ARGUMENT)
  }

  const postsItem = await getPosts(postsId)
  if (postsItem === undefined) {
    throw new GrpcError(STATUS_TEXT[Status.NotFound], status.NOT_FOUND)
  }

  return postsItem
}

export async function handleDeletePosts (postsId: PostsId['id']): Promise<{}> {
  /** Validate id */
  if (postsId <= 0) {
    throw new GrpcError('id must be > 0', status.INVALID_ARGUMENT)
  }

  await deletePosts(postsId)

  return {}
}

export async function handleEditPosts (postsEdit: Posts): Promise<Posts> {
  const schema = z
    .object({
      id: z.number().positive(),
      title: z.string().min(5, { message: 'title must be 5 or more characters long' }),
      body: z.string().min(1, { message: 'body must be 1 or more characters long' }),
      category: z.string().min(3, { message: 'category must be 3 or more characters long' })
    })
    .safeParse(postsEdit)

  if (!schema.success) {
    throw new GrpcError(schema.error.issues[0].message, status.INVALID_ARGUMENT)
  }

  const updated = await updatePosts(schema.data)
  if (!updated) {
    throw new GrpcError(STATUS_TEXT[Status.NotFound], status.NOT_FOUND)
  }

  return schema.data
}

export async function handleAddPosts (postsNew: Posts): Promise<Posts> {
  const schema = z
    .object({
      title: z.string().min(5, { message: 'title must be 5 or more characters long' }),
      body: z.string().min(1, { message: 'body must be 1 or more characters long' }),
      category: z.string().min(3, { message: 'category must be 3 or more characters long' })
    })
    .safeParse(postsNew)

  if (!schema.success) {
    throw new GrpcError(schema.error.issues[0].message, status.INVALID_ARGUMENT)
  }

  return await createPost(schema.data)
}
