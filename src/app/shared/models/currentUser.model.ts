import { z } from 'zod';

export const currentUserModelSchema = z.object({
  token: z.string(),
  username: z.string(),
  bio: z.string().nullable(),
  email: z.string().email(),
  image: z
    .string()
    .nullable()
    .refine(
      (value) => {
        if (!value) return true;
        return /^https(.*)\.(jpg|jpeg|png)$/i.test(value);
      },
      {
        message: 'Invalid image URL',
      }
    ),
});

export type CurrentUserModel = z.infer<typeof currentUserModelSchema>;
