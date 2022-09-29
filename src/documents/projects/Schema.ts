import { z } from 'zod'

const img_alt = z.object({
  img: z.string(),
  alt: z.string()
})

const ProjectSchema = z.object({
  // image: img_alt,
  title: z.string(),
  // description: z.string(),
  // github: z.string(),
  // site: z.string(),
  // stacks: img_alt.array()
})

export default ProjectSchema