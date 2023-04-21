import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

export const editArticleStateModelSchema = z.object({
  isLoading: z.boolean(),
  article: feedModelSchema.nullable(),
  isSubmitting: z.boolean(),
  validationErrors: backendErrorsModelSchema.nullable(),
});
export type EditArticleStateModel = z.infer<typeof editArticleStateModelSchema>;
