import { FastifyReply, FastifyRequest, ServerErrorResponse, status } from './deps'
import { Status, STATUS_HTTP } from './http_status'

/** HandleError */
export async function handleError (_request: FastifyRequest, reply: FastifyReply, error: Error): Promise<void> {
  const err = error as ServerErrorResponse

  if (err.code !== undefined) {
    await reply
      .code(STATUS_HTTP[err.code ?? status.INTERNAL])
      .send()
  }
}

/** HandleSend */
export async function handleSend (request: FastifyRequest, reply: any): Promise<void> {
  if (request.method === 'POST' && reply.statusCode === 200) {
    // Don't use await
    reply.code(Status.Created)
  }
}
