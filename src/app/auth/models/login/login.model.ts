import { z } from 'zod';

import { formPasswordModelSchema } from '../auth.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const loginFormModelSchema = currentUserModelSchema
  .pick({
    email: true,
  })
  .merge(formPasswordModelSchema);
export type LoginFormModel = z.infer<typeof loginFormModelSchema>;
