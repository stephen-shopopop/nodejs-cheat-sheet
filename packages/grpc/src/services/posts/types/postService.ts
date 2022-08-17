import { UntypedServiceImplementation } from '@grpc/grpc-js'
import { IPosts } from 'packages/grpc/src/models/posts'

export type CallBack<T> = (error: (Error|null), response?: T) => void

export interface Posts {
  posts: IPosts[]
}

export interface PostsService extends UntypedServiceImplementation {
  getAllPosts: (call: any, callback: CallBack<Posts>) => void
  getPosts: (call: any, callback: CallBack<IPosts>) => void
  deletePosts: (call: any, callback: CallBack<{}>) => void
  editPosts: (call: any, callback: CallBack<IPosts>) => void
  addPosts: (call: any, callback: CallBack<IPosts>) => void
}
