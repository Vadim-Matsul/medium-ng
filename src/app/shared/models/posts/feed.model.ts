import { z } from 'zod';

import { authorModelSchema } from 'src/app/shared/models/author.model';

export const feedModelSchema = z.object({
  author: authorModelSchema,
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  description: z.string(),
  tagList: z.array(z.string()),
  favorited: z.boolean(),
  favoritesCount: z.number(),
});
export type FeedModel = z.infer<typeof feedModelSchema>;

export const articleFormModelSchema = feedModelSchema.pick({
  title: true,
  description: true,
  body: true,
  tagList: true,
});

export type ArticleFormModel = z.infer<typeof articleFormModelSchema>;
