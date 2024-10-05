import { IHttp } from "@core/interfaces";
import { Request, Response } from "express";
export class ExpressHttp implements IHttp{
  constructor(
    private readonly request: Request,
    private readonly response: Response
  ){}
  send(responseData:any,statusCode = 200){
    return this.response.status(statusCode).json(responseData)
  }
  getBody<Body>():Body{
    return this.request.body as Body
  }
  getRouteParams<RouteParams>():RouteParams{
    return this.request.params as RouteParams
  }
  getQueryParams<QueryParams>(): QueryParams {
      return this.request.query as QueryParams
  }
}
