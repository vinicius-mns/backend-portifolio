// import BaseController from "../../../classes/BaseController";
// import { Collection } from "mongodb"
// import { Request, Response } from 'express'
// import { UserType, UserTypeHash } from "../Schema";
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

// class UserController extends Controller {
//   protected collection: Collection

//   constructor(collection: Collection){
//     super(collection)
//   }

//   create = async (req: Request, res: Response) => {
//     try {
//       const { name, password, linkedin } = req.body as UserType

//       const newUser = await this.collection.insertOne({
//         name,
//         linkedin,
//         token: jwt.sign({
//             adm: false,
//             password: await bcrypt.hash(password, 10),
//           },
//           `${process.env.PASS}`
//         ),
//       })

//       return res.status(201).json(newUser)
//     } catch (error) { return res.status(500).json(error) }
//   }

//   login = async (req: Request, res: Response) => {
//     try {
//       const { name } = req.params;
//       const { password } = req.body
//       const { token } = await this.collection.findOne({ name }) as unknown as { token: string }
//       const { password: cryptPass } = jwt.verify(token, `${process.env.PASS}`) as UserTypeHash

//       bcrypt.compare(password, cryptPass, (err: any, pass: any) => {
//         if (err) return res.status(400).json(err)
//         return res.status(200).json(pass)
//       })
//     } catch (error) { return res.status(500).json(error) }
//   }
// }

// export default UserController
