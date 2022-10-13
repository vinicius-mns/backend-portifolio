import BaseRoutes from '../../../classes/BaseRoutes'
import Middle from "../Middle"
import Controller from "../Controller"

class Routes extends BaseRoutes {
  m: typeof Middle
  controller: typeof Controller

  constructor(path: string, controller = Controller, middle = Middle){
    super(controller, middle, path)
    this.m = middle
    this.controller = controller
  }

  public addRoute(): void {
    this.router.get(
      `/${this.path}`,
      this.controller.readAll
    )
    this.router.post(
      `/${this.path}/create`,
      this.m.validSchema,
      this.m.unicName,
      this.m.notSpaces,
      this.m.isAdm,
      this.controller.create
    )
  }
}

export default new Routes('user')
