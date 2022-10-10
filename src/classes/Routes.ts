import { Router } from "express";
import Controller from "./Controller";
import Middle from "./Middle";

class Routes {
  router: Router
  controller: Controller
  path: string
  middle: Middle

  constructor(controller: Controller, middle: Middle ,path: string) {
    this.router = Router()
    this.controller = controller
    this.path = path
    this.middle = middle
  }

  public addRoute() {
    this.router.get(`/${this.path}`, this.controller.readAll)
    this.router.post(`/${this.path}`, this.middle.validSchema, this.controller.create)
    this.router.put(`/${this.path}/:id`, this.middle.validSchema, this.controller.update)
    this.router.delete(`/${this.path}/:id`, this.controller.delete)
  }
}

export default Routes