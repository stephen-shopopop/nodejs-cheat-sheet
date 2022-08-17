import { GrpcObject } from '@grpc/grpc-js'

interface ServerDefinition extends GrpcObject {
  service: any
}
export interface ServerPackage extends GrpcObject {
  [name: string]: ServerDefinition
}
