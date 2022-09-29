import { z } from 'zod'

const img_alt = z.object({
  image: z.string(),
  description: z.string()
})

const ProjectSchema = z.object({
  tamb: img_alt,
  title: z.string(),
  description: z.string(),
  repository: z.string(),
  site: z.string(),
  // stacks: img_alt.array()
})

export default ProjectSchema