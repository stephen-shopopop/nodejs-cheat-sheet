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

export function handlePosts (call: any): Handle<Posts> {
  const [postsItem] = posts.filter(({ id }) => id === call.request.id)

  return {
    error: null,
    response: postsItem
  }
}

export function handleDeletePosts (call: any): Handle<{}> {
  const postsId = call.request.id
  posts = posts.filter(({ id }) => id !== postsId)

  return {
    error: null,
    response: {}
  }
}

export function handleEditPosts (call: any): Handle<Posts | {}> {
  const postsId = call.request.id
  const postsItem = posts.find(({ id }) => postsId === id)

  if (postsItem !== undefined) {
    postsItem.body = call.request.body
    postsItem.category = call.request.postImage
    postsItem.title = call.request.title
  }

  return {
    error: null,
    response: postsItem ?? {}
  }
}

export function handleAddPosts (call: any): Handle<Posts> {
  const postsItem = { id: Date.now(), ...call.request }
  posts.push(postsItem)

  return {
    error: null,
    response: postsItem
  }
}
