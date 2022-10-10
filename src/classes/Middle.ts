import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class Middle {
  protected schema: z.ZodTypeAny

  constructor(schema: z.ZodTypeAny) {
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
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
}

export default Middle
