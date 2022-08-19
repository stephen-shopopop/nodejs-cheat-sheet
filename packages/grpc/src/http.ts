import { fastify, FastifyReply, FastifyRequest, ServerErrorResponse, status } from './deps'
import { getAllPostsClient, getPostsClient } from './services/posts/postsClient'
import { PostsId } from './services/posts/types'

const serverRest = fastify()

/** WIP */
const STATUS_HTTP: Readonly<Record<number, number>> = {
  [status.OK]: 200,
  [status.NOT_FOUND]: 404
  // ...
}

serverRest.get('/posts', async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const posts = await getAllPostsClient({})
    return posts?.posts
  } catch (error: unknown) {
    const err = error as ServerErrorResponse

    await reply
      .code(STATUS_HTTP[err.code ?? status.INTERNAL])
      .send({ message: err.details })
  }
})

serverRest.get<{
  Params: PostsId
}>('/posts/:id', async (request, reply: FastifyReply) => {
  try {
    const { id } = request.params

    return await getPostsClient({ id })
  } catch (error: unknown) {
    const err = error as ServerErrorResponse

    await reply
      .code(STATUS_HTTP[err.code ?? status.INTERNAL])
      .send({ message: err.details })
  }
})

export default serverRest
