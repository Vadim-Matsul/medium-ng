import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';

export const createArticleStateModelSchema = z.object({
  isSubmitting: z.boolean(),
  validationErrors: backendErrorsModelSchema.nullable(),
});
export type CreateArticleStateModel = z.infer<typeof createArticleStateModelSchema>;
