import { status } from '@grpc/grpc-js'
import { Handle, Posts, PostsList } from './types'

let posts: Posts[] = [
  { id: 1, title: 'My first post', body: 'lorem ipsum', category: 'tag' },
  { id: 2, title: 'My second post', body: 'lorem ipsum', category: 'car' }
]

export function handleAllPosts (): Handle<PostsList> {
  return {
    error: null,
    response: { posts }
  }
}

export function handlePosts (postsId: number): Handle<Posts> {
  const [postsItem] = posts.filter(({ id }) => id === postsId)

  return {
    error: postsItem !== undefined ? null : { name: 'postsError', message: 'posts id not found', code: status.NOT_FOUND },
    response: postsItem
  }
}

export function handleDeletePosts (postsId: number): Handle<{}> {
  posts = posts.filter(({ id }) => id !== postsId)

  return {
    error: null,
    response: {}
  }
}

export function handleEditPosts (postsEdit: Posts): Handle<Posts | {}> {
  const postsItem = posts.find(({ id }) => id === postsEdit.id)

  if (postsItem !== undefined) {
    postsItem.body = postsEdit.body
    postsItem.category = postsEdit.category
    postsItem.title = postsEdit.title
  }

  return {
    error: postsItem !== undefined ? null : { name: 'postsError', message: 'posts id not found', code: status.NOT_FOUND },
    response: postsItem ?? {}
  }
}

export function handleAddPosts (postsNew: Posts): Handle<Posts> {
  const postsItem = { ...postsNew, id: Date.now() }
  posts.push(postsItem)

  return {
    error: null,
    response: postsItem
  }
}
