import { loadPackageDefinition, Server } from '@grpc/grpc-js'
import protoLoader, { loadSync } from '@grpc/proto-loader'
import { postsService } from './services/posts'
import { ServerPackage } from './types'

const PROTO_PATH = './proto/posts.proto'

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const packageDefinition = loadSync(PROTO_PATH, options)
const postsProto = loadPackageDefinition(packageDefinition) as ServerPackage

const server: Server = new Server()
server.addService(postsProto.PostsService.service, postsService)

export default server
