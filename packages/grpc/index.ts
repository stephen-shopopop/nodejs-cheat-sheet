import { GrpcObject, loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
import protoLoader, { loadSync } from '@grpc/proto-loader'
import { IPosts } from './proto/posts'

interface ServerDefinition extends GrpcObject {
  service: any
}
interface ServerPackage extends GrpcObject {
  [name: string]: ServerDefinition
}

const PROTO_PATH = './proto/posts.proto'

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

let posts: IPosts[] = [
  { id: '1', title: 'My first post', body: 'lorem ipsum', category: 'tag' },
  { id: '2', title: 'My second post', body: 'lorem ipsum', category: 'car' }
]

const packageDefinition = loadSync(PROTO_PATH, options)

const postsProto = loadPackageDefinition(packageDefinition) as ServerPackage
const server = new Server()

server.addService(postsProto.PostsService.service, {
  getAllPosts: (_: any, cb: Function): void => {
    cb(null, { posts: posts })
  },
  getPosts: (_: any, cb: Function) => {
    // console.log(_)
    const [postsItem] = posts.filter(({ id }) => id === '1')
    cb(null, postsItem)
  },
  deletePosts: (_: any, cb: Function): void => {
    const postsId = _.request.id
    posts = posts.filter(({ id }) => id !== postsId)
    cb(null, {})
  },
  editPosts: (_: any, cb: Function) => {
    const postsId = _.request.id
    const postsItem = posts.find(({ id }) => postsId === id)
    if (postsItem !== undefined) {
      postsItem.body = _.request.body
      postsItem.category = _.request.postImage
      postsItem.title = _.request.title
      cb(null, postsItem ?? {})
    }

    cb(null, postsItem ?? {})
  },
  addPosts: (call: any, cb: Function): void => {
    const _posts = { id: Date.now(), ...call.request }
    posts.push(_posts)
    cb(null, _posts)
  }
})

server.bindAsync(
  '127.0.0.1:50051',
  ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
    if (error !== null) {
      console.error(`Server error: ${error.message}`)
    } else {
      console.log(`Server running at http://127.0.0.1:${port}`)
      server.start()
    }
  }
)
