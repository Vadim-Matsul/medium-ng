import { z } from 'zod';

import { authorModelSchema } from 'src/app/shared/models/author.model';

export const userProfileResponseModelSchema = z.object({
  profile: authorModelSchema,
});
export type UserProfileResponseModel = z.infer<typeof userProfileResponseModelSchema>;
