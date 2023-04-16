import { z } from 'zod';

import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const authorModelSchema = currentUserModelSchema
  .pick({
    username: true,
    bio: true,
    image: true,
  })
  .merge(
    z.object({
      following: z.boolean(),
    })
  );

export type authorModel = z.infer<typeof authorModelSchema>;
