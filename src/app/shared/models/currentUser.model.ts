import { z } from 'zod';

export const currentUserModelSchema = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  bio: z.string().nullable(),
  image: z.string().nullable(),
  token: z.string(),
});
export type CurrentUserModel = z.infer<typeof currentUserModelSchema>;
