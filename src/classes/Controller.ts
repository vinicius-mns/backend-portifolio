import { Request, Response } from "express";
import { Collection, ObjectId } from "mongodb";

class Controller {
  protected collection: Collection

  constructor(collection: Collection) {
    this.collection = collection
  }

  create = async (req: Request, res: Response) => {
    try {
      const body = req.body
      this.collection.insertOne(body)
      return res.status(201).json(body)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }

  readAll = async (_req: Request, res: Response) => {
    const all = await this.collection.find().toArray()
    return res.status(200).json(all)
  }

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; const body = req.body
      const novo = await this.collection.updateOne({_id: new ObjectId(id)}, {$set: body})
      return res.status(200).json(novo)
    } catch (err) { return res.status(404).json({message: 'Not found'}) }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const deleted = await this.collection.deleteOne({_id: new ObjectId(id)})
      return res.status(202).json(deleted)
    } catch (err) { return res.status(404).json({message: 'Not found'}) }
  }
}

export default Controller
