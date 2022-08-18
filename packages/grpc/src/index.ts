import { credentials, ServerCredentials } from './deps'
import server, { blogProto } from './grpc'
import { PostsServiceClient } from './services/posts/types'

/**
 * GRPC - Client
 */
export const client = new blogProto.PostsService('localhost:50051', credentials.createInsecure()) as PostsServiceClient

/**
 * GRPC - server
 */
server.bindAsync(
  '127.0.0.1:50051',
  ServerCredentials.createInsecure(),
  (error: (Error | null), port: number) => {
    if (error !== null) {
      console.error(`Server error: ${error.message}`)
    } else {
      console.log(`Server running at http://127.0.0.1:${port}`)
      server.start()

      // Client test
      client.getAllPosts({}, console.log)
      client.deletePosts({ id: 1 }, console.log)
      client.getPosts({ id: 2 }, console.log)
      client.editPosts({ id: 2, body: 'hello' }, console.log)
      client.addPosts({ body: 'oups' }, (_error, value) => {
        console.log(value?.id)
      })
    }
  }
)
