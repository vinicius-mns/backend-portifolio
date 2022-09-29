import { Router } from "express";
import Controller from "./Controller";

const option = {
  origin: '*'
}

class Routes {
  router: Router
  controller: Controller
  path: string
  cors: any

  constructor(controller: Controller, path: string, cors: any) {
    this.router = Router()
    this.controller = controller
    this.path = path
    this.cors = cors
  }

  public addRoute() {
    this.router.get(`/${this.path}`, this.cors(), this.controller.readAll)
    this.router.post(`/${this.path}`, this.cors(origin), this.controller.create)
    this.router.put(`/${this.path}/:id`, this.controller.update)
    this.router.delete(`/${this.path}/:id`, this.controller.delete)
  }
}

export default Routes