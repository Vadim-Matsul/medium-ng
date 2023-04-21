import { z } from 'zod';

import { currentUserWithPasswordModelSchema } from 'src/app/shared/models/currentUser.model';

export const loginFormModelSchema = currentUserWithPasswordModelSchema.pick({
  email: true,
  password: true,
});
export type LoginFormModel = z.infer<typeof loginFormModelSchema>;
