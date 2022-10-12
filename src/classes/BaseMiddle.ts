import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class BaseMiddle {
  protected schema: z.ZodTypeAny
  protected req: Request

  constructor( schema: z.ZodTypeAny ) {
    this.schema = schema
  }

  validSchema = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body
      const parsed = this.schema.safeParse(body)

      if (!parsed.success){
        return res.status(400).json(parsed.error)
      }

      next()
    } catch (error) { return res.status(500).json(error) }
  }

  validId = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      if (id.length < 12) {
        console.log(id.length)
        return res.status(400).json({
          message: "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer"
        })
      }
      next()
    } catch (e) { return res.status(500).json(e) }
  }
}

export default BaseMiddle
