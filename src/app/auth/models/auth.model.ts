import { z } from 'zod';

import { RegExpKeys, RegExpMap } from 'src/app/shared/common/regExp';

export const formPasswordModelSchema = z.object({
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
