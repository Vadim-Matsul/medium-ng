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

export const currentUserWithPasswordModelSchema = currentUserModelSchema.extend({
  password: z
    .string()
    .min(8, 'Min password length 8 characters')
    .refine(
      (value) => {
        if (!value) return false;
        return RegExpMap[RegExpKeys.isCorrectPassword](value);
      },
      {
        message: 'password must contain letters and numbers',
      }
    ),
});
export type CurrentUserWithPasswordModel = z.infer<typeof currentUserWithPasswordModelSchema>;
