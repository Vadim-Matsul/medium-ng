import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';
import { articleFormModelSchema } from 'src/app/shared/models/posts/feed.model';

export const createArticleRequestModelSchema = z.object({
  article: articleFormModelSchema,
});
export type CreateArticleRequestModelSchema = z.infer<typeof createArticleRequestModelSchema>;

export const createArticleErrorsModelSchema = z.object({
  errors: backendErrorsModelSchema,
});
export type CreateArticleErrorsModelSchema = z.infer<typeof createArticleErrorsModelSchema>;
