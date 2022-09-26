import { Router } from "express";
import Controller from "./Controller";

class Routes {
  router: Router
  controller: Controller
  path: string

  constructor(controller: Controller, path: string) {
    this.router = Router()
    this.controller = controller
    this.path = path
  }

  public addRoute() {
    this.router.get(`/${this.path}`, this.controller.readAll)
    this.router.post(`/${this.path}`, this.controller.create)
    this.router.put(`/${this.path}/:id`, this.controller.update)
    this.router.delete(`/${this.path}/:id`, this.controller.delete)
  }
}

export default Routes