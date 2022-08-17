import { Posts, PostsService } from './types'

/**
 * Data
 */
let posts: Posts[] = [
  { id: '1', title: 'My first post', body: 'lorem ipsum', category: 'tag' },
  { id: '2', title: 'My second post', body: 'lorem ipsum', category: 'car' }
]

export const postsService: PostsService = {
  getAllPosts: (_call, callback): void => {
    callback(null, { posts: posts })
  },
  getPosts: (_call, callback) => {
    // console.log(_)
    const [postsItem] = posts.filter(({ id }) => id === '1')
    callback(null, postsItem)
  },
  deletePosts: (call, callback): void => {
    const postsId = call.request.id
    posts = posts.filter(({ id }) => id !== postsId)
    callback(null, {})
  },
  editPosts: (call, callback) => {
    const postsId = call.request.id
    const postsItem = posts.find(({ id }) => postsId === id)
    if (postsItem !== undefined) {
      postsItem.body = call.request.body
      postsItem.category = call.request.postImage
      postsItem.title = call.request.title
    }

    callback(null, postsItem ?? {})
  },
  addPosts: (call, callback): void => {
    const _posts = { id: Date.now(), ...call.request }
    posts.push(_posts)
    callback(null, _posts)
  }
}
