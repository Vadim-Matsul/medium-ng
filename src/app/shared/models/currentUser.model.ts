import { z } from 'zod';

import { RegExpKeys, RegExpMap } from '../common/regExp';

export const currentUserModelSchema = z.object({
  token: z.string(),
  username: z.string().min(5, 'Min username length 5 characters'),
  bio: z.string().nullable(),
  email: z.string().email('Invalid email'),
  image: z
    .string()
    .nullable()
    .refine(
      (value) => {
        if (!value) return true;
        return RegExpMap[RegExpKeys.isImageUrl](value);
      },
      {
        message: 'Invalid image URL',
      }
    ),
});

export type CurrentUserModel = z.infer<typeof currentUserModelSchema>;
