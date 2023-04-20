import { z } from 'zod';

import { articleFormModelSchema } from 'src/app/shared/models/posts/feed.model';

export const articleUserFormModelSchema = articleFormModelSchema.extend({
  tagList: z.string(),
});
export type ArticleUserFormModel = z.infer<typeof articleUserFormModelSchema>;
