import BaseController from "../../../classes/BaseController";
import Service from '../Service'

class Controller extends BaseController {
  constructor(service = Service) {
    super(service)
  }
}

export default new Controller