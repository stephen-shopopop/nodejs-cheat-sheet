const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = './proto/blog.proto'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)

const PostsService = grpc.loadPackageDefinition(packageDefinition).PostsService

const client = new PostsService(
  'localhost:50051',
  grpc.credentials.createInsecure()
)

module.exports = client
