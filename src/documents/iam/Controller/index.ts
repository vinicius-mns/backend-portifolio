import BaseController from "../../../classes/BaseController";
import iamService from '../Service'

class Controller extends BaseController {
  constructor(service = iamService) {
    super(service)
  }
}

export default new Controller