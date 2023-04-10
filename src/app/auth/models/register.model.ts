import { z } from 'zod';

export const registerFormModelSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});
export type RegisterFormModel = z.infer<typeof registerFormModelSchema>;
