import { z } from 'zod';

import { feedModelSchema } from './feed.model';

export const feedResponseModelSchema = z.object({
  articles: z.array(feedModelSchema),
  articlesCount: z.number(),
});
export type FeedResponseModel = z.infer<typeof feedResponseModelSchema>;
