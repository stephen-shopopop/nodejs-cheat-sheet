import { sqlite, Tables } from '../../dal/sqlite'
import { Posts } from './types'

export async function getAllPosts (): Promise<Posts[]> {
  return await sqlite<Posts>(Tables.posts)
    .select()
}

export async function getPosts (id: Posts['id']): Promise<Posts> {
  const [post] = await sqlite<Posts>(Tables.posts)
    .select()
    .where('id', id)

  return post
}

export async function deletePosts (id: Posts['id']): Promise<void> {
  await sqlite(Tables.posts)
    .where('id', id)
    .del()
}

export async function updatePosts (post: Posts): Promise<boolean> {
  return Boolean(
    await sqlite<Posts>(Tables.posts)
      .where('id', post.id)
      .update({
        title: post.title,
        body: post.body,
        category: post.category
      })
  )
}

export async function createPost (post: Posts): Promise<Posts> {
  const [id] = await sqlite(Tables.posts)
    .insert(post)
    .onConflict()
    .ignore()

  return { ...post, id }
}
