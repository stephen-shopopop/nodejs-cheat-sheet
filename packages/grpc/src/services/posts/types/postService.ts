import { UntypedServiceImplementation } from '@grpc/grpc-js'
import { Posts } from './posts'

export type CallBack<T> = (error: (Error|null), response?: T) => void

export interface PostsList {
  posts: Posts[]
}

export interface PostsService extends UntypedServiceImplementation {
  getAllPosts: (call: any, callback: CallBack<PostsList>) => void
  getPosts: (call: any, callback: CallBack<Posts>) => void
  deletePosts: (call: any, callback: CallBack<{}>) => void
  editPosts: (call: any, callback: CallBack<Posts>) => void
  addPosts: (call: any, callback: CallBack<Posts>) => void
}
