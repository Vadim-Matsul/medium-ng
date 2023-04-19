import { z } from 'zod';

import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

export const articleStateModelSchema = z.object({
  isLoading: z.boolean(),
  error: z.string().nullable(),
  data: feedModelSchema.nullable(),
});
export type ArticleStateModel = z.infer<typeof articleStateModelSchema>;
