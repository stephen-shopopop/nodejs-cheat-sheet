import { loadPackageDefinition, loadSync, protoLoader, Server } from './deps'
import { postsService } from './services/posts'
import { ServerPackage } from './types'

const PROTO_PATH = './proto/blog.proto'

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const packageDefinition = loadSync(PROTO_PATH, options)
export const blogProto = loadPackageDefinition(packageDefinition) as ServerPackage

const server: Server = new Server()
server.addService(blogProto.PostsService.service, postsService)

export default server
