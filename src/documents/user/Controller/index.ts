import BaseController from "../../../classes/BaseController"
import Service from '../Service'
import { Request, Response } from "express"
import { UserType } from "../Schema"
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Controller extends BaseController {
  constructor(service = Service) {
    super(service)
  }

  create = async (req: Request, res: Response) => {
    try {
      const { name, password, linkedin } = req.body as UserType

      const newUser = await this.service.create({
        name,
        linkedin,
        token: jwt.sign({
            adm: false,
            password: await bcrypt.hash(password, 10),
          },
          `${process.env.PASS}`
        ),
      })

      return res.status(201).json(newUser)
    } catch (error) { return res.status(500).json(error) }
  }

}

export default new Controller