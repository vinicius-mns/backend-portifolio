import BaseService from '../../../classes/BaseService'
import { projectsCollection } from '../../../connection/collections'

class Service extends BaseService {
  constructor(collection = projectsCollection) {
    super(collection)
  }
}

export default new Service()