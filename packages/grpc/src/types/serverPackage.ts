import { ChannelCredentials, ChannelOptions, GrpcObject } from '@grpc/grpc-js'
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client'

interface ServerDefinition extends GrpcObject {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient
  service: any
}
export interface ServerPackage extends GrpcObject {
  [name: string]: ServerDefinition
}
