export enum HttpStatusCode {
  noContent= 204,
  unauthorized = 401
}

export type HttpReponse = {
  statusCode: number
  body?: any
}
