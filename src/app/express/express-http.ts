import { Request, Response } from "express";
import { IHttp } from "../../../core/interfaces";

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
}
