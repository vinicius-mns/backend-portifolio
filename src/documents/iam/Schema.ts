import { z } from 'zod'

const img_alt = z.object({
  src: z.string(),
  alt: z.string()
})

const IamSchema = z.object({
  image: img_alt,
  myName: z.string(),
  content: z.string(),
})

export default IamSchema
