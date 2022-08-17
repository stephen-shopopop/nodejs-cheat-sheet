import { UntypedServiceImplementation } from '@grpc/grpc-js'
import { Posts } from './posts'

/** Handle */
export interface Handle<T> {
  error: (Error | null)
  response?: T
}

/** Callback */
export type CallBack<T> = (error: (Error|null), response?: T) => void

export interface PostsList {
  /** Posts list */
  posts: Posts[]
}

export interface PostsService extends UntypedServiceImplementation {
  /** Implementation  getAllPosts */
  getAllPosts: (call: any, callback: CallBack<PostsList>) => void

  /** Implementation  getPosts */
  getPosts: (call: any, callback: CallBack<Posts>) => void

  /** Implementation  deletePosts */
  deletePosts: (call: any, callback: CallBack<{}>) => void

  /** Implementation  editPosts */
  editPosts: (call: any, callback: CallBack<Posts>) => void

  /** Implementation  addPosts */
  addPosts: (call: any, callback: CallBack<Posts>) => void
}
