import { Request, Response } from "express";
import { Collection, ObjectId } from "mongodb";
import { z } from "zod";

class BaseController {
  public path: string
  private controller: Collection
  private schema: z.ZodTypeAny

  constructor(controller: Collection, path: string, schema: z.ZodTypeAny ) {
    this.controller = controller
    this.path = path
    this.schema = schema
  }

  readAll = async (_req: Request, res: Response) => {
    const all = await this.controller.find().toArray()
    return res.status(200).json(all)
  }

  create = (req: Request, res: Response) => {
    try {
      const body = req.body
      const parsed = this.schema.safeParse(body)

      if (!parsed.success){
        return res.status(400).json(parsed.error)
      }

      this.controller.insertOne(body)

      return res.status(201).json(body)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }

  update = async (req: Request, res: Response) => {
    const { id } = req.params
    const body = req.body

    const parsed = this.schema.safeParse(body)

    if (!parsed.success){
      return res.status(400).json(parsed.error)
    }
    
    const novo = await this.controller.updateOne({_id: new ObjectId(id)}, {$set: body})

    return res.status(200).json(novo)
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
  
      this.controller.deleteOne({_id: new ObjectId(id)})
  
      return res.status(202).json({message: 'Deleted'})
    } catch (err) {
      return res.status(404).json({message: 'Not found'})
    }
  }
}

export default BaseController
