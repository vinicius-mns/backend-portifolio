import BaseRoutes from '../../../classes/BaseRoutes'
import Middle from "../Middle"
import Controller from "../Controller"

class Routes extends BaseRoutes {
  middle: typeof Middle

  constructor(path: string, controller = Controller, middle = Middle){
    super(controller, middle, path)
    this.middle = middle
  }

  public addRoute(): void {
    this.router.get(`/${this.path}`, this.controller.readAll)
    this.router.post(
      `/${this.path}`,
      this.middle.validSchema,
      this.middle.unicName,
      this.middle.notSpaces,
      this.controller.create
    )
  }
}

export default new Routes('user')
