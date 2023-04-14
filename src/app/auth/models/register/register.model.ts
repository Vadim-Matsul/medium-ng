import { z } from 'zod';

import { formPasswordModelSchema } from '../auth.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const registerFormModelSchema = currentUserModelSchema
  .pick({
    email: true,
    username: true,
  })
  .merge(formPasswordModelSchema);

export type RegisterFormModel = z.infer<typeof registerFormModelSchema>;
