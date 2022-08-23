import { ServerErrorResponse, status } from '../../deps'
import { handleAddPosts, handleAllPosts, handleDeletePosts, handleEditPosts, handlePosts } from './posts'
import { PostsService } from './types'

function handleError (error: unknown): ServerErrorResponse {
  return {
    name: 'postError',
    message: error instanceof Error ? error.message : 'internal error',
    code: status.INTERNAL
  }
}

export const postsService: PostsService = {
  getAllPosts: async (_call, callback) => {
    try {
      const { error, response } = await handleAllPosts()

      callback(error, response)
    } catch (error: unknown) {
      callback(handleError(error))
    }
  },
  getPosts: async (call, callback) => {
    try {
      const { error, response } = await handlePosts(call.request.id)

      callback(error, response)
    } catch (error: unknown) {
      callback(handleError(error))
    }
  },
  deletePosts: async (call, callback) => {
    try {
      const { error, response } = await handleDeletePosts(call.request.id)

      callback(error, response)
    } catch (error: unknown) {
      callback(handleError(error))
    }
  },
  editPosts: async (call, callback) => {
    try {
      const { error, response } = await handleEditPosts(call.request)

      callback(error, response)
    } catch (error: unknown) {
      callback(handleError(error))
    }
  },
  addPosts: async (call, callback) => {
    try {
      const { error, response } = await handleAddPosts(call.request)

      callback(error, response)
    } catch (error: unknown) {
      callback(handleError(error))
    }
  }
}
