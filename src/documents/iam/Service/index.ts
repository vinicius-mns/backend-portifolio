import BaseService from '../../../classes/BaseService'
import { iamCollection } from '../../../connection/collections'

class Service extends BaseService {
  constructor(collection = iamCollection) {
    super(collection)
  }
}

export default new Service()