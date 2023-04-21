import { z } from 'zod';

import { articleFormModelSchema } from 'src/app/shared/models/posts/feed.model';

export const createArticleRequestModelSchema = z.object({
  article: articleFormModelSchema,
});
export type CreateArticleRequestModelSchema = z.infer<typeof createArticleRequestModelSchema>;
