import { FastifyReply, FastifyRequest, ServerErrorResponse, status } from '../../deps'
import { STATUS_HTTP } from '../../http_status'
import { addPostsClient, deletePostsClient, editPostsClient, getAllPostsClient, getPostsClient } from './postsClient'
import { Posts, PostsId } from './types'

/** HandleError */
export async function handleError (_request: FastifyRequest, reply: FastifyReply, error: Error): Promise<void> {
  const err = error as ServerErrorResponse

  if (err.code !== undefined) {
    await reply
      .code(STATUS_HTTP[err.code ?? status.INTERNAL])
      .send()
  }
}

/** Get all posts */
export async function handleAllPosts (_request: FastifyRequest, _reply: FastifyReply): Promise<Posts[] | undefined> {
  const posts = await getAllPostsClient({})

  return posts?.posts
}

/** Get post by id */
export async function handleGetPosts (request: FastifyRequest, _reply: FastifyReply): Promise<Posts | undefined | null> {
  const { id } = request.params as PostsId

  return await getPostsClient({ id })
}

/** Delete post */
export async function handleDeletePosts (request: FastifyRequest, _reply: FastifyReply): Promise<{} | undefined | null> {
  const { id } = request.params as PostsId

  return await deletePostsClient({ id })
}

/** Edit post */
export async function handleEditPosts (request: FastifyRequest, _reply: FastifyReply): Promise<{} | undefined | null> {
  const { id } = request.params as PostsId

  return await editPostsClient({ ...request.body as Posts, id })
}

/** Create post */
export async function handleAddPosts (request: FastifyRequest, _reply: FastifyReply): Promise<{} | undefined | null> {
  return await addPostsClient(request.body as Posts)
}
