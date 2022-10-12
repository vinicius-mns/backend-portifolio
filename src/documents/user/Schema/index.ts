import { z } from 'zod'

const userSchema = z.object({
  name: z.string(),
  password: z.string(),
  linkedin: z.string(),
})

export type UserType = z.infer<typeof userSchema>
export type UserTypeHash = { password: string, adm: boolean }

export default userSchema
