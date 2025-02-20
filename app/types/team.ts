import { z } from "zod"

export const TeamMemberSchema = z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    image: z.string(),
  })
  
  export type TeamMember = z.infer<typeof TeamMemberSchema>