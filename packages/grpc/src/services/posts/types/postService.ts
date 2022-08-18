import { sendUnaryData, ServerErrorResponse, ServerUnaryCall, UntypedServiceImplementation } from '@grpc/grpc-js'
import { Posts, PostsId } from './posts'

/** Handle */
export interface Handle<T> {
  error: ServerErrorResponse | null
  response: T
}

/** Callback */
export type CallBack<T> = sendUnaryData<T> // (error: (ServerErrorResponse | null), response?: T) => void

export interface PostsList {
  /** Posts list */
  posts: Posts[]
}

export interface PostsService extends UntypedServiceImplementation {
  /** Implementation  getAllPosts */
  getAllPosts: (call: ServerUnaryCall<{}, PostsList>, callback: CallBack<PostsList>) => void

  /** Implementation  getPosts */
  getPosts: (call: ServerUnaryCall<PostsId, Posts>, callback: CallBack<Posts>) => void

  /** Implementation  deletePosts */
  deletePosts: (call: ServerUnaryCall<PostsId, {}>, callback: CallBack<{}>) => void

  /** Implementation  editPosts */
  editPosts: (call: ServerUnaryCall<Posts, Posts>, callback: CallBack<Posts>) => void

  /** Implementation  addPosts */
  addPosts: (call: ServerUnaryCall<Posts, Posts>, callback: CallBack<Posts>) => void
}
