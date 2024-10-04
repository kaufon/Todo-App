import { Response } from "express"

export interface IHttp{
  send(responsibleData:unknown,statusCode:number):Response<any,Record<string,any>>
  getBody<Body>():Body
  getRouteParams<RouteParams>():RouteParams
}
