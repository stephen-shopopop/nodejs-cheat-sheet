import { handleAddPosts, handleAllPosts, handleDeletePosts, handleEditPosts, handlePosts } from './posts'
import { PostsService } from './types'

export const postsService: PostsService = {
  getAllPosts: (_call, callback) => {
    const { error, response } = handleAllPosts()

    callback(error, response)
  },
  getPosts: (call, callback) => {
    const { error, response } = handlePosts(call.request.id)

    callback(error, response)
  },
  deletePosts: (call, callback) => {
    const { error, response } = handleDeletePosts(call.request.id)

    callback(error, response)
  },
  editPosts: (call, callback) => {
    const { error, response } = handleEditPosts(call.request)

    callback(error, response)
  },
  addPosts: (call, callback) => {
    const { error, response } = handleAddPosts(call.request)

    callback(error, response)
  }
}
