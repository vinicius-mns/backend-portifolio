import BaseService from '../../../classes/BaseService'
import { usersCollection } from '../../../connection/collections'

class Service extends BaseService {
  constructor(collection = usersCollection) {
    super(collection)
  }
}

export default new Service()