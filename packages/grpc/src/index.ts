import { credentials, ServerCredentials } from '@grpc/grpc-js'
import server, { blogProto } from './grpc'

/**
 * GRPC - Client
 */
export const client = new blogProto.PostsService('localhost:50051', credentials.createInsecure())

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
    }
  }
)
