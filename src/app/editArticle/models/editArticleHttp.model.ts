import { z } from 'zod';

import { articleFormModelSchema } from 'src/app/shared/models/posts/feed.model';

export const editArticleRequestModelSchema = z.object({
  article: articleFormModelSchema,
});
export type EditArticleRequestModel = z.infer<typeof editArticleRequestModelSchema>;
