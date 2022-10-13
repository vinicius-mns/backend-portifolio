import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  password: z.string(),
  linkedin: z.string(),
  adm: z.optional(z.string().or(z.boolean())) ,
})

export type User = {
  name: string,
  password: string,
  linkedin: string
  hash: string,
}

export type Hash = {
  name: string,
  adm: boolean,
}

export default UserSchema
