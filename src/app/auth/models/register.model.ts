import { z } from 'zod';

import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';
import { RegExpKeys, RegExpMap } from 'src/app/shared/common/regExp';

export const registerFormModelSchema = currentUserModelSchema
  .pick({
    email: true,
    username: true,
  })
  .merge(
    z.object({
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
    })
  );

export type RegisterFormModel = z.infer<typeof registerFormModelSchema>;
