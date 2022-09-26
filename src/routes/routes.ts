import { Router } from "express";
import Controller from "../classes/Controller";

class MyRouter {
  router: Router
  controller: Controller
  path: string

  constructor(controller: Controller) {
    this.router = Router()
    this.controller = controller
    this.path = controller.path
  }

  public addRoute() {
    this.router.get(`/${this.path}`, this.controller.readAll)
    this.router.post(`/${this.path}`, this.controller.create)
    this.router.put(`/${this.path}/:id`, this.controller.update)
    this.router.delete(`/${this.path}/:id`, this.controller.delete)
  }
}

export default MyRouter