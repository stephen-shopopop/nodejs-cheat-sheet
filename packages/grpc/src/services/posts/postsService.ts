import { handleGrpcError } from '../../grpcError'
import { handleAddPosts, handleAllPosts, handleDeletePosts, handleEditPosts, handlePosts } from './posts'
import { PostsService } from './types'

export const postsService: PostsService = {
  getAllPosts: async (_call, callback) => {
    try {
      const response = await handleAllPosts()

      callback(null, response)
    } catch (error: unknown) {
      callback(handleGrpcError(error))
    }
  },
  getPosts: async (call, callback) => {
    try {
      const response = await handlePosts(call.request.id)

      callback(null, response)
    } catch (error: unknown) {
      callback(handleGrpcError(error))
    }
  },
  deletePosts: async (call, callback) => {
    try {
      const response = await handleDeletePosts(call.request.id)

      callback(null, response)
    } catch (error: unknown) {
      callback(handleGrpcError(error))
    }
  },
  editPosts: async (call, callback) => {
    try {
      const response = await handleEditPosts(call.request)

      callback(null, response)
    } catch (error: unknown) {
      callback(handleGrpcError(error))
    }
  },
  addPosts: async (call, callback) => {
    try {
      const response = await handleAddPosts(call.request)

      callback(null, response)
    } catch (error: unknown) {
      callback(handleGrpcError(error))
    }
  }
}
