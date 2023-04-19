import { z } from 'zod';

import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

export const articleResponseModelSchema = z.object({
  article: feedModelSchema,
});
export type ArticleResponseModel = z.infer<typeof articleResponseModelSchema>;
