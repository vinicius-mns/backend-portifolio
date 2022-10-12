import BaseMiddle from '../../../classes/BaseMiddle'
import Schema from '../Schema'
import Service from '../Service'
import { NextFunction, Request, Response } from 'express'

class Middle extends BaseMiddle {
  service: typeof Service

  constructor(schema = Schema, service = Service) {
    super(schema)
    this.service = service
  }

  unicName = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as { name: string }
      const user = await this.service.findUser(name)
      if (user) {
        return res.status(406).json({message: 'user already exist'})
      }
      next()
    } catch (e) { return res.status(500).json(e) }
  }

  notSpaces = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as { name: string }

      if( name.includes(' ') ) {
        return res.status(406).json({message: 'Spaces are not allowed'})
      }

      next()
    } catch (e) { return res.status(500).json(e) }
  }
}

export default new Middle()