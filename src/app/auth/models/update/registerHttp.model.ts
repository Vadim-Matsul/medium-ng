import { z } from 'zod';

import { currentUserWithPasswordModelSchema } from 'src/app/shared/models/currentUser.model';

export const updateUserRequestModelSchema = z.object({
  user: currentUserWithPasswordModelSchema,
});
export type UpdateUserRequestModel = z.infer<typeof updateUserRequestModelSchema>;
