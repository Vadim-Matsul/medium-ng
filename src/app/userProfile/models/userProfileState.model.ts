import { z } from 'zod';

import { authorModelSchema } from 'src/app/shared/models/author.model';
import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';

export const userProfileStateModelSchema = z.object({
  isLoading: z.boolean(),
  profile: authorModelSchema.nullable(),
  validationErrors: backendErrorsModelSchema.nullable(),
});
export type UserProfileStateModel = z.infer<typeof userProfileStateModelSchema>;
