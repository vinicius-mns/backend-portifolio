// import { z } from "zod"
// import { Request, Response, NextFunction } from "express"
// import Middle from "../../../classes/Middle"
// import { UserType } from "../Schema"

// class UserMiddle extends Middle {
//   constructor (schema: z.ZodTypeAny) {
//     super(schema)
//   }

//   uniqueUser = async (req: Request, res: Response, next: NextFunction) => {
//       try {
//         const { name } = req.body as UserType
        
//         const findUser = await 
        


//         next()
//       } catch (error) { return res.status(500).json(error) }
//     }
//   }
// }