import { z } from 'zod';

import { authorModelSchema } from 'src/app/shared/models/author.model';

export const followButtonResponseModelSchema = z.object({
  profile: authorModelSchema,
});

export type FollowButtonResponseModel = z.infer<typeof followButtonResponseModelSchema>;
