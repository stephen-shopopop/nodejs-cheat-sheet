import { sendUnaryData, ServerErrorResponse, ServerUnaryCall, UntypedServiceImplementation } from '../../../deps'
import { ServiceClient } from '../../../types'

export interface Posts {
  /** Posts id */
  id?: (number|null)

  /** Posts title */
  title?: (string|null)

  /** Posts body */
  body?: (string|null)

  /** Posts category */
  category?: (string|null)
}

export interface PostsId {
  id: number
}

export interface PostsList {
  /** Posts list */
  posts: Posts[]
}

/** Handle */
export interface Handle<T> {
  error: ServerErrorResponse | null
  response?: T
}

export interface PostsService extends UntypedServiceImplementation {
  /** Implementation  getAllPosts */
  getAllPosts: (call: ServerUnaryCall<{}, PostsList>, callback: sendUnaryData<PostsList>) => void

  /** Implementation  getPosts */
  getPosts: (call: ServerUnaryCall<PostsId, Posts>, callback: sendUnaryData<Posts>) => void

  /** Implementation  deletePosts */
  deletePosts: (call: ServerUnaryCall<PostsId, {}>, callback: sendUnaryData<{}>) => void

  /** Implementation  editPosts */
  editPosts: (call: ServerUnaryCall<Posts, Posts>, callback: sendUnaryData<Posts>) => void

  /** Implementation  addPosts */
  addPosts: (call: ServerUnaryCall<Posts, Posts>, callback: sendUnaryData<Posts>) => void
}

export interface PostsServiceClient extends ServiceClient {
  /** Method  getAllPosts */
  getAllPosts: (request: {}, callback: sendUnaryData<PostsList>) => void

  /** Method  getPosts */
  getPosts: (request: PostsId, callback: sendUnaryData<Posts>) => void

  /** Method  deletePosts */
  deletePosts: (request: PostsId, callback: sendUnaryData<{}>) => void

  /** Method  editPosts */
  editPosts: (request: Posts, callback: sendUnaryData<Posts>) => void

  /** Method  addPosts */
  addPosts: (request: Posts, callback: sendUnaryData<Posts>) => void

}
