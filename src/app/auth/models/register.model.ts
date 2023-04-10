import { z } from 'zod';

import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const registerFormModelSchema = currentUserModelSchema
  .pick({
    email: true,
    username: true,
  })
  .merge(
    z.object({
      password: z.string(),
    })
  );

export type RegisterFormModel = z.infer<typeof registerFormModelSchema>;
