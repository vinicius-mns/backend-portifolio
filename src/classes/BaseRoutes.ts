import { Router } from "express";
import BaseController from "./BaseController";
import BaseMiddle from "./BaseMiddle";

class BaseRoutes {
  router: Router
  controller: BaseController
  path: string
  middle: BaseMiddle

  constructor(controller: BaseController, middle: BaseMiddle ,path: string) {
    this.router = Router()
    this.controller = controller
    this.path = path
    this.middle = middle
  }

  public addRoute() {
    this.router.get(`/${this.path}`, this.controller.readAll)
    this.router.get(`/${this.path}/:id`, this.middle.validId, this.controller.readOne)
    this.router.post(`/${this.path}`, this.middle.validSchema, this.controller.create)
    this.router.put(`/${this.path}/:id`, this.middle.validId, this.middle.validSchema, this.controller.updateById)
    this.router.delete(`/${this.path}/:id`, this.middle.validId, this.controller.delete)
  }
}

export default BaseRoutes