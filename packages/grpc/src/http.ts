import { fastify } from './deps'
import { handleAddPosts, handleAllPosts, handleDeletePosts, handleEditPosts, handleError, handleGetPosts } from './services/posts/postsController'
import { Posts, PostsId } from './services/posts/types'

const serverRest = fastify({
  logger: {
    level: process.env.NODE_ENV === 'production'
      ? 'fatal'
      : 'debug'
  }
})

/** Hook handleError */
serverRest.addHook('onError', handleError)

/**
 * Routes http
 */

/** Get All posts */
serverRest.get<{ Params: {} }>('/posts', handleAllPosts)

/** Get post by id */
serverRest.get<{ Params: PostsId }>('/posts/:id', handleGetPosts)

/** Delete post */
serverRest.delete<{ Params: PostsId }>('/posts/:id', handleDeletePosts)

/** Edit post */
serverRest.put<{ Params: PostsId, Body: Posts }>('/posts/:id', handleEditPosts)

/** Create Post */
serverRest.post<{ Body: Posts }>('/posts', handleAddPosts)

export default serverRest
