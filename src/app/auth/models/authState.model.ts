import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const authStateModelSchema = z.object({
  isSubmitting: z.boolean(),
  isLoading: z.boolean(),
  isLoggedIn: z.boolean().nullable(),
  currentUser: currentUserModelSchema.nullable(),
  validationErrors: backendErrorsModelSchema.nullable(),
});
export type AuthStateModel = z.infer<typeof authStateModelSchema>;
