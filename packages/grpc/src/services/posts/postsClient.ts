import { client } from '../..'
import { Posts, PostsId, PostsList } from './types'

// Promisify all methods grpc client for server http

export async function getAllPostsClient (request: {}): Promise<PostsList | null | undefined> {
  return await new Promise((resolve, reject) => {
    client.getAllPosts(
      request,
      (err, res) => err === null ? resolve(res) : reject(err)
    )
  })
}

export async function getPostsClient (request: PostsId): Promise<Posts | null | undefined> {
  return await new Promise((resolve, reject) => {
    client.getPosts(
      request,
      (err, res) => err === null ? resolve(res) : reject(err)
    )
  })
}

export async function deletePostsClient (request: PostsId): Promise<{} | null | undefined> {
  return await new Promise((resolve, reject) => {
    client.deletePosts(
      request,
      (err, res) => err === null ? resolve(res) : reject(err)
    )
  })
}

export async function editPostsClient (request: Posts): Promise<Posts | null | undefined> {
  return await new Promise((resolve, reject) => {
    client.editPosts(
      request,
      (err, res) => err === null ? resolve(res) : reject(err)
    )
  })
}

export async function addPostsClient (request: Posts): Promise<Posts | null | undefined> {
  return await new Promise((resolve, reject) => {
    client.addPosts(
      request,
      (err, res) => err === null ? resolve(res) : reject(err)
    )
  })
}
