import BaseService from '../../../classes/BaseService'
import { usersCollection } from '../../../connection/collections'

class Service extends BaseService {
  constructor(collection = usersCollection) {
    super(collection)
  }

  findUser = async (name: string) => {
    return await this.collection.findOne({name: name})
  }
}

export default new Service()