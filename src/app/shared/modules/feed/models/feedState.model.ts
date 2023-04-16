import { z } from 'zod';

import { feedResponseModelSchema } from './feedHttp.model';

export const feedStateModelSchema = z.object({
  isLoading: z.boolean(),
  error: z.string().nullable(),
  data: feedResponseModelSchema.nullable(),
});
export type FeedStateModel = z.infer<typeof feedStateModelSchema>;
