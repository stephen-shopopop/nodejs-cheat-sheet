import { ServerCredentials } from '@grpc/grpc-js'
import server from './grpc'

/**
 * Start grpc server
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
