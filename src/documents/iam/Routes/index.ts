import BaseRoutes from '../../../classes/BaseRoutes'
import Middle from "../Middle"
import Controller from "../Controller"

class Routes extends BaseRoutes {
  constructor(path: string,controller = Controller,middle = Middle){
    super(controller, middle, path)
  }
}

export default new Routes('iam')
