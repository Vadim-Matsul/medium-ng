import { z } from 'zod';

import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const authResponseModelSchema = z.object({
  user: currentUserModelSchema,
});
export type AuthResponseModel = z.infer<typeof authResponseModelSchema>;
