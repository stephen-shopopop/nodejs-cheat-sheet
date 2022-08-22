import { migrate, sqlite } from './dal/sqlite'
import { credentials, ServerCredentials } from './deps'
import server, { blogProto } from './grpc'
import serverRest from './http'
import { PostsServiceClient } from './services/posts/types'

/** sqlite migration */
migrate(sqlite).catch(() => process.exit(1))

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
      console.error(`Server grpc error: ${error.message}`)
      process.exit(1)
    } else {
      console.log(`Server grpc running at http://127.0.0.1:${port}`)

      server.start()
    }
  }
)

/**
 * server http
 */
serverRest.listen({ port: 8080 },
  (error: (Error | null), address: string) => {
    if (error !== null) {
      console.error(`Server http error: ${error.message}`)
      process.exit(1)
    }
    console.log(`Server http listening at ${address}`)
  }
)
