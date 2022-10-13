import BaseController from "../../../classes/BaseController"
import Service from '../Service'
import { Request, Response } from 'express'
import UserSchema, { User, Hash } from "../Schema"
import { z } from "zod"
var jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Controller extends BaseController{
  service: typeof Service

  constructor(service = Service) {
    super(service)
    this.service = service
  }

  create = async (req: Request, res: Response) => {
    try {
      const { name, linkedin, password, adm } = req.body as z.infer<typeof UserSchema>

      console.log('adm in controller', adm)

      const user: User = {
        name,
        linkedin,
        token: jwt.sign({
            adm: false,
        password: await bcrypt.hash(password, 10),
        linkedin,
        hash: jwt.sign({name, adm}, `${process.env.PASS}`)
      }

      const created = await this.service.create(user)
      return res.status(201).json(created)

    } catch (e) {
      return res.status(500).json(e)
    }
  }

}

export default new Controller