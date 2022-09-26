import { Request, Response } from "express";
import { Collection, ObjectId } from "mongodb";
import { z } from "zod";

class Controller {
  private collection: Collection
  private schema: z.ZodTypeAny

  constructor(collection: Collection, schema: z.ZodTypeAny) {
    this.collection = collection
    this.schema = schema
  }

  create = (req: Request, res: Response) => {
    try {
      const body = req.body
      const parsed = this.schema.safeParse(body)

      if (!parsed.success){
        return res.status(400).json(parsed.error)
      }

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
    const { id } = req.params
    const body = req.body

    const parsed = this.schema.safeParse(body)

    if (!parsed.success){
      return res.status(400).json(parsed.error)
    }

    const novo = await this.collection.updateOne({_id: new ObjectId(id)}, {$set: body})

    return res.status(200).json(novo)
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      this.collection.deleteOne({_id: new ObjectId(id)})
  
      return res.status(202).json({message: 'Deleted'})
    } catch (err) {
      return res.status(404).json({message: 'Not found'})
    }
  }
}

export default Controller
