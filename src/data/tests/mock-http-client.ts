import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpReponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpReponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostParams): Promise<HttpReponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
};
