import { z } from 'zod';

import { registerFormModelSchema } from './register.model';

export const registerRequestModelSchema = z.object({
  user: registerFormModelSchema,
});
export type RegisterRequestModel = z.infer<typeof registerRequestModelSchema>;
