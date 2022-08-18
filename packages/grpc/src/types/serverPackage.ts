import { ChannelCredentials, ChannelOptions, Client, GrpcObject } from '../deps'

export interface ServiceClient extends Client {
  [methodName: string]: Function
}

interface ServerDefinition extends GrpcObject {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient
  service: any
}

export interface ServerPackage extends GrpcObject {
  [name: string]: ServerDefinition
}
