import { z } from 'zod';

import { loginFormModelSchema } from './login.model';

export const loginRequestModelSchema = z.object({
  user: loginFormModelSchema,
});
export type LoginRequestModel = z.infer<typeof loginRequestModelSchema>;
