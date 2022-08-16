import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

interface Posts {
  id: string
  title: string
  body: string
  category: string
}

const PROTO_PATH = './proto/posts.proto'

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

let posts: Posts[] = [
  { id: '1', title: 'My first post', body: 'lorem ipsum', category: 'tag' },
  { id: '2', title: 'My second post', body: 'lorem ipsum', category: 'car' }
]

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
const postsProto = grpc.loadPackageDefinition(packageDefinition)
const server = new grpc.Server()

server.addService(postsProto.PostsService.service, {
  getAllPosts: (_: any, cb: Function) => cb(null, posts),
  getPosts: (_: any, cb: Function) => {
    posts = posts.filter(({ id }) => id !== '1')
    cb(null, {})
  },
  addPosts: (call: any, cb: Function): void => {
    const _posts = { id: Date.now(), ...call.request }
    posts.push(_posts)
    cb(null, _posts)
  }
})

server.bindAsync(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
    if (error !== null) {
      console.error(`Server error: ${error.message}`)
    } else {
      console.log(`Server running at http://127.0.0.1:${port}`)
      server.start()
    }
  }
)
