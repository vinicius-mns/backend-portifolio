import BaseRoutes from '../../../classes/BaseRoutes'
import Middle from "../Middle"
import Controller from "../Controller"

class Routes extends BaseRoutes {
  constructor(path: string, controller = Controller, middle = Middle){
    super(controller, middle, path)
  }

  public addRoute(): void {
    this.router.get(`/${this.path}`, this.controller.readAll)
  }
}

export default new Routes('user')
