import { z } from 'zod';

import { currentUserWithPasswordModelSchema } from 'src/app/shared/models/currentUser.model';

export const registerFormModelSchema = currentUserWithPasswordModelSchema.pick({
  email: true,
  username: true,
  password: true,
});

export type RegisterFormModel = z.infer<typeof registerFormModelSchema>;
