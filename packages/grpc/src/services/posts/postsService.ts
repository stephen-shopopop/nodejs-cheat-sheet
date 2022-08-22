import { handleAddPosts, handleAllPosts, handleDeletePosts, handleEditPosts, handlePosts } from './posts'
import { PostsService } from './types'

export const postsService: PostsService = {
  getAllPosts: async (_call, callback) => {
    const { error, response } = await handleAllPosts()

    callback(error, response)
  },
  getPosts: async (call, callback) => {
    const { error, response } = await handlePosts(call.request.id)

    callback(error, response)
  },
  deletePosts: async (call, callback) => {
    const { error, response } = await handleDeletePosts(call.request.id)

    callback(error, response)
  },
  editPosts: async (call, callback) => {
    const { error, response } = await handleEditPosts(call.request)

    callback(error, response)
  },
  addPosts: async (call, callback) => {
    const { error, response } = await handleAddPosts(call.request)

    callback(error, response)
  }
}
