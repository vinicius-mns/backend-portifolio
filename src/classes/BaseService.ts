import { Collection, ObjectId } from "mongodb";

class BaseService {
  protected collection: Collection

  constructor(collection: Collection) {
    this.collection = collection
  }

  create = async (newValue: any) => {
    return await this.collection.insertOne(newValue)
  }

  readAll = async () => {
    return await this.collection.find().toArray()
  }

  readOne = async (id: string) => {
    return await this.collection.findOne({_id: new ObjectId(id)})
  }

  updateById = async (id: string, newValue: any) => {
    return await this.collection.updateOne({_id: new ObjectId(id)}, {$set: newValue})
  }

  updateByKey = async (key: string, valueKey: any, newValue: any) => {
    return await this.collection
      .updateOne({[key]: valueKey}, {$set: newValue})
  }

  deleteById = async (id: string) => {
    return await this.collection.deleteOne({_id: new ObjectId(id)})
  }

  deleteByKey = async (key: any, valueKey: any) => {
    return await this.collection.deleteOne({[key]: valueKey})
  }
}

export default BaseService
