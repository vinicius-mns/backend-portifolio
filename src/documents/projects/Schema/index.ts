import { z } from 'zod'

const img_alt = z.object({
  src: z.string(),
  alt: z.string()
})

const ProjectSchema = z.object({
  image: img_alt,
  description: z.string(),
  repository: z.string(),
  site: z.string(),
  stacks: img_alt.array()
})

export default ProjectSchema