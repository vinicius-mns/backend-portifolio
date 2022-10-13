import BaseMiddle from '../../../classes/BaseMiddle'
import UserSchema, { User, } from '../Schema'
import Service from '../Service'
import z from 'zod'
import { NextFunction, Request, Response } from 'express'

class Middle extends BaseMiddle {
  service: typeof Service

  constructor(schema = UserSchema, service = Service) {
    super(schema)
    this.service = service
  }

  unicName = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as User
      const user = await this.service.findUser(name)
      if (user) {
        return res.status(406).json({message: 'user already exist'})
      }
      next()
    } catch (e) { return res.status(500).json(e) }
  }

  notSpaces = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as User

      if( name.includes(' ') ) {
        return res.status(406).json({message: 'Spaces are not allowed'})
      }

      next()
    } catch (e) { return res.status(500).json(e) }
  }

  isAdm = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { adm } = req.body as z.infer<typeof UserSchema>
      console.log('adm im middle', adm)

      adm === `${process.env.ADMPASS}` ?
        req.body.admPass = true :
        req.body.admPass = false

      next()
    } catch (e) { return res.status(500).json(e) }
  }
}

export default new Middle()