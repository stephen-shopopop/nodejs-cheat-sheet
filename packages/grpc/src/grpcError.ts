import { ServerErrorResponse, status } from './deps'

export class GrpcError extends Error {
  public status: status
  constructor (message: string, status: status) {
    super(message)
    this.name = this.constructor.name
    this.status = status
  }
}

export function handleGrpcError (error: unknown): ServerErrorResponse {
  return {
    name: error instanceof Error ? error.name : 'Error',
    message: error instanceof Error ? error.message : 'internal error',
    code: error instanceof GrpcError ? error.status : status.INTERNAL
  }
}
