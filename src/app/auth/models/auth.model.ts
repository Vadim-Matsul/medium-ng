import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';
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

export const authResponseModelSchema = z.object({
  user: currentUserModelSchema,
});
export type AuthResponseModel = z.infer<typeof authResponseModelSchema>;

export const authBackendErrorsModelSchema = z.object({
  errors: backendErrorsModelSchema,
});
export type AuthBackendErrorsModel = z.infer<
  typeof authBackendErrorsModelSchema
>;
